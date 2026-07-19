---
tags:
  - writing
pb-type: musings
pb-publish: true
title: vibe coding is good now
description: In which I reluctantly take back all the things I've said about vibe coding.
heroImage:
pubDate: 19 Jul 26
colour: white
---

FUUUUUUCCCCKKKK.

I don't really write code anymore. 

That's an exaggeration.  

I never had a dishwasher until about 3 years ago. I'd never lived in a flat that came with one. Washing dishes by hand doesn't take that long, I thought. Filling and emptying the dishwasher is just as much effort, I thought. There's no point, I thought.

Ever since I moved into a flat that had a dishwasher, I've realised it is essential. If I ever live somewhere without one, I will buy one. Now it doesn't mean I don't wash dishes by hand. Sometimes its quicker for me to wash a few things up. Sometimes something is fragile, or important, and I don't trust the dishwasher. Sometimes the dishwasher can't handle it, and I need to do it myself.

Claude code is basically a dishwasher[^1].

I've wrote a lot about vibe coding, and the like. The [last thing](/notes/on-vibes-again) I wrote on it was pretty muddled. I had gone on a bit of a journey, having completely rejected all AI based coding, and as just starting to think about it again. I remember there was a time where GitHub Copilot was really good as an autocomplete, and could do simple things really well. Then the autocomplete got a lot worse -- it started trying to do full code blocks instead of just the current line, and it completely destroyed my productivity because it meant I was always context switching. I'd done my project where I completely vibe coded something, and had hated it. So I disabled all LLM-based tools, and went back to writing code by hand. 

I was running a hiring process earlier in the year, and had wanted to understand the state of LLM coding. I installed claude code, and was definitely in a phase of thinking it was actually useful, while also hating it. It had definitely gotten so much better than when I originally tried it, but I think I was struggling to give up control.

I think the thing that helped me contextualise things the most, was hearing Martin Fowler talking about vibe coding on a podcast. He put it in the context of the high-level languages like C, which when they replaced Assembly, completely changed software development. You were definitely giving up control over your code, but as a result you became so much more productive. Writing software became much easier, but in exchange, you were no longer a programmer, but you were a software engineer.

In the same way C provided an abstraction on top of programming, claude code provides an abstraction on top of software engineering. Having a deep understanding of assembly would make you better at C, and similarly, having software engineering skills will make you better at Claude Code. But it is fundamentally a different thing, and that's okay.

It makes sense to be resistant to the change, but the tools are so good. I recently saw one of the cleanest codebases I've ever seen. It followed so many best practises, (SOLID, clean code, DDD), so meticulously. It was completely vibe coded. Now, I'm not sure if the best practises from the 00's are the best practises for the vibe code era, but it definitely told me that the days of vibe code automatically being slop code is over. Although that is down to the user.

The one thing that frustrates me is there doesn't seem to be agreed upon best practises. Somebody needs to write Clean Vibe Code. Maybe I will do that. If you do that, I want credit. Anyway, here is how I'm currently containing claude, in an internet friendly list. I now feel like everything I've written so far is just the part of a recipe you skip over. I hope not. Thats fine though. The main reason I am writing is to be writing.

## claude is trapped in a box and can't escape
I still don't trust claude. I've been running a simple home server for a while (using a mini pc and proxmox), so I created a VM on that for claude. I wouldn't trust a stranger on my laptop, so I'm not going to trust claude on it. I run it in dangerously-skip-permissions, but that's because I have all the safeguards at the VM level. I'm probably going to change it to auto mode instead of skip permissions. 

I ssh into the box, and I've overwritten the `claude` command so it will only start inside tmux. It is so useful being able to enter and exit the tmux sessions, which makes it so claude can work while I'm in the pub. I rely on the claude cli, I know people who prefer the app, but I am very much a cli person -- I think it has a lot of advantages, particularly in combination with tmux. 

The one downside of sshing into a vm to use claude, is you can't paste screenshots. I think this is a solveable problem. My current workflow is detaching tmux, exiting the ssh session, running `wl-paste image/png image.png`,  then scp, ssh back in, then reattach to tmux. I don't love it, but its not annoyed me enough to try fixing it.

## claude can never commit
If you let claude commit, it pollutes your commits messages with some bullshit taking credit for the work. I hate that, especially when I've done most the work myself and just asked it to run linting then commit. 

But more substantially, running `git difftool` is a key form of defence against claude doing something wrong. If claude commits, you lose that ability, and only have the PR level to protect yourself. Take claudes ability to commit away in the settings. You do not want claude to be able to do that.

## pre-commit hooks are your friend
It doesn't matter how many times you tell Claude to run all the unit tests and linting before completing work, it will eventually forget. Pre-commit hooks solve this problem. Claude is really good at writing them for you.

## remote control is okay
The claude remote control stuff, where it can send messages to the claude app on your phone is kinda useful. The downside is, I find it really hard to work from the app. 

I solved this by setting up tailscale on my home server, and using termux, and terminal emulator for android. You can ssh in to your claude box (with help from tailscale), and attach to your tmux session. This allows you to look at the work in a more familiar environment. I find it so much easier than trying to use the claude app.

## multitasking is going to be your default
This is one of the hardest bits to get used to, and takes some mindset changes. Managing the multitasking is hard. The most important thing to remember, is not to do too much. The last thing you want is to have 100 outstanding pull requests. Never have more than 5 PRs needing review. Stop claude running and get things finished off first. Your a project manager now, and project management is about achieving more by doing less. If your not slowing down the rate of some work, you're not project managing.

## tiling window managers are surprisingly useful
If you have 15 claude code instances running at once, you need a way to manage them. For me, I found it trivially easy to just start every new task in a new terminal window, and then every terminal window is effectively the tracker for that piece of work. I know people who use macs have a habbit of having a million windows open, so this won't work if thats how you do it. 

I use gnome + pop shell. Gnome really strongly integrates around workspaces (virtual deskops on windows or spaces on mac), and with pop shell it mostly leaves me having one window per workspace, and ensures that I never have a window in the background. When I have a free minute, I can `ctrl + alt + right` across my workspaces, and see what other terminal windows are open. Then I can work on whatever task is in the window, and close the window when its done. There's something about this that really works for me, partially because I like a clean desktop.

## claude can tell you how to use claude
Ask claude questions about the best way to do things. Ask it about using multiple agents. Tell it to come up with plans. Tell it to design something to hand off tasks etc. Ask it about useful features.

And definitely, read the claude docs. Did you know it has a learning mode?

[^1]: I  am going to use Claude Code as a synecdoche for LLM-based coding assistants. I use Claude Code, because it seems to be the default choice, and Anthropic are significantly less evil than a lot of their competitors (although still quite evil).
	
