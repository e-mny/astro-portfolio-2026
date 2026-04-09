---
title: Youth Service Telegram Bot
description: A Telegram bot designed to announce the weekly youth service roster and facilitate prayer requests for the church community.
tech:
  - Python
  - AWS
tags:
  - Automation
  - Python
status: archived
createdAt: 2024-03-19
image: "/projects/telegram_bot_unsplash.jpg"
---

## What it is

![Picture of the Telegram Bot](/projects/nlym_telebot_1.jpg)

<figcaption>Screenshot of the output</figcaption>

A Telegram bot that automates weekly roster announcements using data from Google Sheets.

## Why I made it

Manually checking the roster every week was repetitive and a waste of everyone’s time.

## What it does

- Fetches and parses roster data from Google Sheets
- Automatically sends weekly roster updates via Telegram
- Formats messages for readability and easy reference

## Notes

- Parsing and formatting semi-structured Google Sheets data was more complex than expected
- Learning the Telegram Bot API from scratch involved a steep initial learning curve
- Running the bot on a home server created unnecessary overhead and reliability concerns
- Usage was low, and in hindsight, deploying serverlessly or choosing a more widely used platform (e.g. WhatsApp) would have been more practical
