---
title: FitLah Telegram Bot
description: A Telegram bot that provides real-time public gym and pool capacity in Singapore, helping users plan their workouts efficiently.
tech:
  - Python
  - AWS
  - Supabase
tags:
  - Automation
  - Python
links:
  demo: https://t.me/fitlahsg_bot
status: completed
createdAt: 2025-02-11
image: "/projects/fitlah_bot_1.jpg"
---

## What it is

A Telegram bot that provides real-time gym and pool capacity updates across Singapore.

## Why I made it

I was tired of showing up to overcrowded gyms and wasting time.

## What it does

<video autoplay loop muted playsinline class="w-full h-auto text-white pointer-events-none cursor-none z-50" aria-label="Demo of FitLah bot saving user's favourites"> <source src="/projects/fitlah_bot_addfav.webm" type="video/webm"> Your browser does not support the video tag.

<figcaption>Lets users save their favorite gym and swimming locations</figcaption>
</video>

<video autoplay loop muted playsinline class="w-full h-auto text-white pointer-events-none cursor-none" aria-label="Demo of FitLah bot fetching current crowd levels"> <source src="/projects/fitlah_bot_showfav.webm" type="video/webm"> Your browser does not support the video tag.

<figcaption>Fetches and displays user's favourites' real-time facility crowd levels </figcaption>
</video>

## Notes

- Working with serverless tools like AWS Lambda introduced latency and made debugging slower than expected
- Integrating multiple APIs (facility data, Telegram, weather) required careful handling of failures and edge cases
- The project was eventually shut down due to low usage relative to maintenance costs
- If revisited, adding predictive analytics and smarter notifications would make it more useful
