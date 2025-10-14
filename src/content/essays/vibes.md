---
title: "Vibes, or why I need a new career."
heroImage: "../../assets/vibes.webp"
description: "I tried AI tools. I then had an existential crisis."
pubDate: '29 Jun 2025'
colour: "white"
---

I’m generally of the opinion that in order to do a thing, I need two reasons. I built the bench I’m sat on because it saved money, and would fit the space perfectly. I went out on the bike because the it was sunny and it's good for my health. I watch the TV because it’s already on and I’m lazy.

For a while, I’ve wanted to build a dashboard to visualise some health stats I’ve been collecting. Things like how long I’ve slept, how well I slept, and how much exercise I did. I'll rant about fitness trackers at another point, but this is my cheap alternative. After looking around and realising there was no option that would be quick, easy and cheap, I gave up. I assumed I’d pick it up in the future, likely with learning Svelte and Go as my second reason for doing it.

---

I’ve long been an AI sceptic. I got github copilot very early on and was unimpressed, it felt like an upgraded version of autocomplete. It was great, but hardly revolutionary. I tried out cursor, I used perplexity as my search engine, I played with notebooklm. All of these tools were solid, but not lifechanging.

In recent weeks, I kept hearing more people I respected talking about vibe coding. Not just grifters and CEOs of AI companies, but people I who's opinion I trusted. I also noticed that the programming subreddits I frequented had gone from pragmatic skepticism to dogmatic rejection of the all things AI.

So I had my second reason to build my dashboard. I decided I was going to completely vibe code it from scratch.

## Experience

For background context, I’ve been a developer for seven years, and have been writing code for over a decade. I’ve been the head of development at a mid-sized insurance company in London, and I’m currently working as a principal engineer at a startup. I’ve coded in all sorts of languages, from Rust and C# to JS and Python. I’ve even worked in Fortran. It was hell.

So I booted up VS code and spent 30 minutes updating it because NixOS is the best but also the worst. Then opened up Copilot’s agent mode, and let her rip:

> Build me a dashboard to visualise health data. It’s all stored in google sheets, fed by a google form, here's the spreadsheet, and do it in Svelte.

And away it went. It walked me through the admin, built things, and I was ready to go.

Only it didn’t work. Now I’m sure I could figure out the problem but tonight Matthew, I'm going to be a vibe coder. So lets get prompting.

After an hour, I gave up. Deleted everything and decided to start again. I'd heard Vue works better for vibe coded projects, so lets try that:

> Build me a dashboard to visualise health data. It’s all stored in google sheets, fed by a google form, here's the spreadsheet, and do it in Vue. 

This time it built something that worked. It was a hello world page, but no worries. I continued to prompt. Soon it was pulling from API's and ChartJS was up and running. It was ugly though. Really ugly. But that makes sense, I’d kind of expect inconsistent CSS. No worries, Tailwind was built just for this. But first, let’s tidy up what we’ve got and commit.

> move connection strings and API keys to a dotenv file and use dotenv, now setup git, commit and push
...
> Wait, did you just fucking push all my API keys

After fixing that problem I got it to setup Tailwind and make things nice. This took 90 minutes. 90 fucking minutes. Turns out, it installed Tailwind V4 but followed the setup for V3. I didn’t realise it at first, because when I asked it to do something it would apply the tailwind class, and when that didn’t work it would “fix it” with inline styles. I was trying to get it to do some complex positioning, so it got away with it longer than you would expect.

At this point I decided the experiment had failed. I wasn’t going to have much luck with the prompts I was writing. I was going to use my knowledge and be specific. “set padding top to 10 rem” not “make the gap at the top bigger”. And I would proof read the code when I had problems.

This is where things got interesting. And scary. Everything started working. It’d taken me 4 hours to get to this point. By the 5th hour, the app was done. Roll-your-own auth, containerised with a db, backend and everything. It took some prompting to get it to do things the right way, but it got there. It looked as good as anything I’d be bothered to make. And it works well enough. The code is a mess, but that’s fine. I don’t need to touch it.

[Here’s the final app, I’d be relatively happy with it if I made this myself.](../../assets/vibes-screenshot.webp)

## Learnings

I can’t quite impress how bad the experience of vibe coding is. My previous worst coding experience was changing the ORM on a 10 year old monolith that had about 40% of the business logic coupled to the ORM. It took 3 months. This was worse and it only lasted 5 hours. The act of prompting, waiting, and reprompting is hellish. It takes all the joy and creativity out of development.

I think the worst part was it kept breaking things. It was so frustrating how it would do one thing, break another. Then in fixing the thing it had just broken, break something else.

But, now I have a bit of experience, it’s wild how quickly I can make it do things. I’m lucky that in my current job, I do very technical work. I’m not convinced it would be able to replace me. But I think back to some of my days in insurance. We could have done with 3 devs what we did with a team of 9.

So many bread and butter tasks like wiring up API calls, setting up DB connections and designing UI elements can all be done faster by AI. It still takes a firm hand, normally, to do error handling etc, but honestly I think that’s the way most efficient way to develop basic software features at the moment. Vibe code, review and refactor.

And AI is only going to get better.

Soon, these tools won’t be pushing API keys. They won’t be a security risk, and they won’t mix up versions. They will just work, they will be able to complete more complex tasks. It won’t be simple web development, but eventually complex business logic. So what does that mean for developers?

I keep going back and forth on this, but as a rule, its bad. If you’re a good experienced developer, you’ll probably be fine. If you can adapt, can learn new technologies, and have strength in your soft skills, there should always be work for you. Jobs might be harder to find, and there will be probably be downward pressure on your wages. No more 100K jobs at a steady 9-5, 3 years after graduation. 

In the 2010s, being a software developer was like a cheat code for life. Almost like an infinite money glitch, fuelled by cheap money, big tech’s drive to monopolise meant they’d happily hire developers just so their competitors couldn’t. This created a rising tide, and meant developer jobs were easy to find and paid really well, even outside of big tech. The end of cheap money, and the fact that big tech had their monopoly brought this to and end. Now I think AI will start to reverse it. Software development will go back to just being a normal job.

If I were a bad dev, I would be really worried. If you’re the sort of person who takes pride in the fact you’ve never used AI, and you’re too stubborn to change, things are going to be hard for you. This is your Blockbusters moment. Adapt or die.

So what about me? Why am I worried? Well I’m not that confident in my predictions. I think there’s a 20% chance AI replaces all devs apart from a few juniors on shit salaries. That’s likely enough I feel the need to take this seriously. That's why I decided to start writing, there's no way AI can replace writers right?

What I think is more likely is wages go down, and the day to day work becomes soul destroying. Supervising AI and debugging its problems is my personal of hell.

Maybe this won’t happen over the next few years, but it will over the next decade.

And that’s why I need a new career. 

If you’re a software developer, you have to take this seriously. 
---
## Addendum
Since first publication, I ended up taking the majority of the app down, and moving the dashboard over to obsidian, using the dataviewer plugin. I still use the API, but completely rewrote the front end. 