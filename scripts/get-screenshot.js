import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

console.log('PIXASHOT_API_URL:', process.env.PIXASHOT_API_URL);
console.log('PIXASHOT_API_TOKEN:', process.env.PIXASHOT_API_TOKEN);

const WEBSITES_JSON_PATH = path.join(__dirname, '../websites.json');
const PUBLIC_SCREENSHOTS_DIR = path.join(__dirname, '../public/screenshots');
const PIXASHOT_API_URL = process.env.PIXASHOT_API_URL;
const PIXASHOT_API_TOKEN = process.env.PIXASHOT_API_TOKEN;

// Validate required environment variables
if (!PIXASHOT_API_URL || !PIXASHOT_API_TOKEN) {
  console.error('Missing required environment variables, PIXSHOT_API_URL', PIXASHOT_API_URL, 'PIXASHOT_API_TOKEN', PIXASHOT_API_TOKEN); ;
  process.exit(1);
}

async function loadWebsites() {
  try {
    const data = await fs.readFile(WEBSITES_JSON_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading websites.json:', error);
    return [];
  }
}

async function saveWebsites(websites) {
  try {
    await fs.writeFile(WEBSITES_JSON_PATH, JSON.stringify(websites, null, 2));
    console.log('Updated websites.json');
  } catch (error) {
    console.error('Error saving websites.json:', error);
  }
}

// Generate filename from site name
function generateFilename(siteName, isDark = false) {
  const suffix = isDark ? '-dark' : '';
  return siteName.toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') + suffix + '.png';
}

// Get screenshot from Pixashot API
async function getScreenshot(url, darkMode = false) {
  try {
    const response = await fetch(PIXASHOT_API_URL, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${PIXASHOT_API_TOKEN}`
      },
      body: JSON.stringify({
      url: url,
      window_width: 1080,
      window_height: 688,
      full_page: false,
      format: 'jpeg',
      image_quality: 50,
      dark_mode: darkMode
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}, body: ${await response.text()}`);
    }

    return await response.arrayBuffer();
  } catch (error) {
    console.error(`Error getting screenshot for ${url}:`, error);
    return null;
  }
}

// Save screenshot to public folder
async function saveScreenshot(imageBuffer, filename) {
  try {
    const filepath = path.join(PUBLIC_SCREENSHOTS_DIR, filename);
    await fs.writeFile(filepath, Buffer.from(imageBuffer));
    console.log(`Saved screenshot: ${filename}`);
    return `/screenshots/${filename}`;
  } catch (error) {
    console.error(`Error saving screenshot ${filename}:`, error);
    return null;
  }
}

// Check if screenshot needs updating (older than 30 days or doesn't exist)
function needsScreenshotUpdate(website) {
  if (!website.screenshot || !website.screenshot_dark || !website.screenshot_date) {
    return true;
  }
  
  const lastUpdate = new Date(website.screenshot_date);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return true;
  return lastUpdate < thirtyDaysAgo;
}

// Process all websites
async function processWebsites() {
  console.log('Starting screenshot process...');
  
  const websites = await loadWebsites();
  
  if (websites.length === 0) {
    console.log('No websites found in websites.json');
    return;
  }

  for (let i = 0; i < websites.length; i++) {
    const website = websites[i];
    console.log(`Processing ${website.site_name} (${i + 1}/${websites.length})`);
    
    if (!needsScreenshotUpdate(website)) {
      console.log(`Skipping ${website.site_name} - screenshots are recent (updated: ${website.screenshot_date})`);
      continue;
    }
    
    // Get light mode screenshot
    console.log(`Getting light mode screenshot for ${website.site_name}`);
    const lightImageBuffer = await getScreenshot(website.url, false);
    
    if (lightImageBuffer) {
      const lightFilename = generateFilename(website.site_name, false);
      const lightScreenshotPath = await saveScreenshot(lightImageBuffer, lightFilename);
      
      if (lightScreenshotPath) {
        website.screenshot = lightScreenshotPath;
      }
    }
    
    // Small delay between light and dark screenshots
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get dark mode screenshot
    console.log(`Getting dark mode screenshot for ${website.site_name}`);
    const darkImageBuffer = await getScreenshot(website.url, true);
    
    if (darkImageBuffer) {
      const darkFilename = generateFilename(website.site_name, true);
      const darkScreenshotPath = await saveScreenshot(darkImageBuffer, darkFilename);
      
      if (darkScreenshotPath) {
        website.screenshot_dark = darkScreenshotPath;
      }
    }
    
    // Update timestamp if at least one screenshot was successful
    if (website.screenshot || website.screenshot_dark) {
      website.screenshot_date = new Date().toISOString();
      
      // Save progress after each website
      await saveWebsites(websites);
    }
    
    // Add delay between requests to be respectful to the API
    if (i < websites.length - 1) {
      console.log('Waiting 2 seconds before next request...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('Screenshot process completed!');
}

// Run the script
processWebsites().catch(console.error);
