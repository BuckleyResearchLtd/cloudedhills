---
pb-type: notes
pb-publish: true
title: On Vibes (again)
description: I can't stop thinking about AI
heroImage:
pubDate: 10 Feb 26
colour: white
---
I've been thinking about vibe coding again.

I did an [experiment](/essays/vibes) a few months back, where I tried to vibe code app using GitHub copilot. It was a terrible experience, but scarily impressive. 

I will write elsewhere about my thoughts on the economic, social and political implications of LLMs, but for the purpose of this I want to stay in a dream world where we get free or subsidised access to these surfaces because reasons. Where LLMs are just going to get better, there is no bubble (there is definitely a bubble), and everything is fine. 

## Auto-complete

So since I last wrote about AI, I've been using AI less in my workflow. I used to love copilots auto-complete, I thought it was magical. It would get the word, the line, the paragraph complete right the second I started typing it.

Around the same time, for complex reasons, I was using VS code to write in. Like writing words. I remember not realising that copilot auto-complete was on, and having a horrific experience where the sentence I was writing was auto-completed with bullshit, completely ruining my trail of thought. I promptly turned off auto-complete for text files.

I think, slowly, over time, I noticed a similar situation happening with code. The auto-complete was great when it worked, but there was two failure cases. The first was where it would get the complete wrong thing, I'd read the wrong suggestion, get distracted, and have my workflow broken. The second was when I'd blindly accept something that looked right, only to spend hours debugging later. 

Failure two was rare, maybe once a fortnight, but it caused so much damage when it happened. Failure one was more frequent, and probably the worst of the two.

The combination of the two led me to turn off auto-complete. Then realise I hated VS code and move to neovim instead. It's been a journey. 

## Search
I have been using perplexity as a search engine for a while now. Probably over a year. I made it my default search engine for my laptop last year. Don't do that. You don't need to burn that many fossil fuels when you mistype a web address.

I'm torn on LLM search. Search engines got bad. Marketing nerds ruined them. When I'm trying to buy a quiet kettle I don't need a review of the quietest kettles written by a sound proofing subscription service. So I told myself the only way to overcome the SEO polluted quagmire that is the modern internet was to use LLMs. I'm not convinced. 

Like perplexity is really good. Impressively good. But I've spent an hour trying to get perplexity to answer a question, then it's literally the first result when I google it. Apart from the fact I don't look at the first Google result anymore because I get distracted by their LLM answers. 

I recently worked on a project where I was going to implement redis streams. I think I would have blindly just asked an LLM what to do, and started implementing it if I were not losing my mind over LLMs. I instead sat down and read the docs for an hour before starting the project. The project went shockingly smoothly. Slow is fast. 

My new search engine is Qwant. Qwant is European based, because fuck America, and does not have any LLM features. I love it. I still use perplexity, but I need to make a conscious choice to do it. I'm currently looking at getting a new phone so Google search, and the relating LLM answers, aren't so embedded into my phone's UX.

Search is weird. Qwant is worse than Google for many things. I now have like 3 different bad search engines instead of 1. It's still better than the time I used bing. I'm genuinely considering setting Wikipedia as my default search engine. You should donate to Wikipedia.

## Agents? Agents? Agents.
I semantically satiated the word agents for myself while trying to come up with a sub header. Good job I'm not going to write the word agents a lot. 

So, in my previous piece on this topic, I agent-moded my  way through building a dashboard app, mostly using copilot. The experience was terrible, but it built something that did the trick, and looked okay. I was impressed, maybe overly so. [^1]

I found in the weeks following, I tried to use agent mode on various things at work, and was mostly frustrated with the results. Fundamentally, I used agent mode when I'm trying to be lazy, and writing out a good detailed prompt felt like more effort than doing the work myself. It has a real context switching vibe to it, and I found it could open the door to procrastination. 

I found I used the edit mode a bit more, but found them both disappointing. The way it was managed in VS code was poor. The UI felt wrong, I kinda hated the additional sidebar, it reminded me of my old visual studio days. It was clunky to use, and it would always be on the wrong setting and do the wrong thing. If I had a job that I thought it would good for, it usually failed. Eventually, I forgot about it, and then I moved to nvim, and didn't setup and LLM tools.

## I hate you all
 Ralph Wigguming, agents.md files, Claude code. A lot changed since my last foray. I kept hearing developers I really respected mentioning they were vibe coding side projects. Related to this, I was hiring at work, and one of the questions I intended to ask was how candidates was how they used AI tools in their workflow.

I want to hire a developer that critically thinks about their tools, and I wasn't critically thinking about mine. So, it was time to give agents another try. I went with Claude code, mostly because it seemed to be the default choice. 

The fact I'm using nvim and tmux may make me a bit biased on this, but I loved that it's a CLI. It just felt so much easier to interact with than it had previously. 

I was building an [obsidian plugin](https://github.com/buckleyresearchltd/obsidiangithubpublisher) at the time, which would allow me to upload essays (like the one you're reading) directly to clouded hills from obsidian. By the time I started using Claude Code, I'd got my head around how obsidian plugins work, how I wanted mine to work, how the github APIs worked, and I'd got a prototype working.

But [reality has a surprising amount of detail](http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail), so there were a lot of annoying bits I needed to do. Sanitising links, uploading images, configuring settings. That felt like a great job for Claude Code, it was scope limited, I'd review all the changes, and I'd fix problems myself.

The problem is, Claude Code doesn't want you to do that. It's UI really wants you to give it full control. Every time it asks you if you want it to make an edit, your options are "Yes", "Yes, don't ask again ", or "No". If I was designing a dark pattern to trick people into giving me full access, this would be it.

You decide to use plan mode. It sounds like Claude Code will plan out how to do a task, and you'll have full control, but you don't. Plan mode gives Claude edit access without permission. 

Maggie Appleton touched on this idea in her essay about [Gas Town](https://maggieappleton.com/gastown). The code is removed from you. You interact with the agent, not the code.

Part of this problem is intrinsic to programming. You can't write a simple line to call the API, the API expects a weird data format, so you need to add some data manipulation, which then requires some conditional logic. Claude Code will do that, but maybe not in an elegant way, and you don't understand what it's doing or why. You could figure it out, but do you really care?

But the tools do not want you to code. Even in the IDEs, agent mode is separate to the code. You can't quickly edit it's suggestions before applying them. 

## Possibilities
Claude Code has convinced me that there is a place for agents in every coding workflow. Not necessarily all the time, but in lots of places.

I think we're going to see four types of codebases emerge: 
   1. Agent led codebases, for simple CRUD and the like. These will be mostly boilerplate, with little complex business logic, where you can get away with giving full control to the agent. Effectively write only code.
   2. Developer led codebases, where fine grained control and readability is key. This would be unique logic. The reason you need to write code.
   3. Hybrid codebases, with some modules being agent led, and others developer led.
   4. Vibe coded slop, where either things that should be in group two are handed over to agents, or where non-experts build barely functional apps they don't understand.

I think it's an interesting time. If you need a bare ones CRM with basic functionality, you can vibe code one in about an hour.  You shouldn't, you should self-host [twenty](https://github.com/twentyhq/twenty) instead, but maybe you need some niche customisation I don't understand. 

If you the sort of dev that builds bland react frontends to supabase backends, I'd start learning a lot about UI design or more complex development really quick. For the rest of us, I think it's important to be thoughtful in how we use these tools, even though that means fighting against their intrinsic design.

## A Better Design




[^1]: If your interested, I since killed the dashboard. I discovered I could use the obsidian dataviews plugin to recreate it in obsidian, which meant I could avoid things like Auth. Then the n8n integration I used to send myself WhatsApp messages to remember to fill in my journal broke, because WhatsApp is a fundamentally bad system, so I stopped filling in the journal.
