---
title: Youth Service Telegram Bot
description:
  A Telegram bot designed to announce the weekly youth service roster and
  facilitate prayer requests for the church community.
tech:
  - Python
  - AWS
status: completed
createdAt: 2024-03-19
# image: ~/assets/heros/telegram_bot_unsplash.jpg
---

## Chapter 1: It's About Drive

This project began with a recurring issue within the church’s youth service team: the weekly task of checking the Google Sheets roster. Every week, the entire roster team had to visit the sheet, taking a few minutes of each person's time. Multiply that by the total number of team members, and you end up wasting quite a bit of time. I knew there had to be a better way.

- **The Idea**: A Telegram bot that would automatically announce the weekly roster and save everyone time.
- **Why It Matters**: This project wasn’t just about saving time &ndash; it was about bonding the youths by giving members an easy way to share prayer requests and keep up with their weekly duties.

---

## Chapter 2: It's About Power

I started with studying the Telegram API documentation and tutorials. ~~The integration of these resources helped me understand how to communicate with Telegram, fetch data, and automate messages.~~ I did not understand anything.

Using the bots was one thing, but developing it to my use case was a whole different story. It being my first Telegram bot, I didn't understand what was 'Inline Keyboard', and the many many options that Telegram provided.

After I roughly understood how to get the bot to send a message, I had to link it to Google Sheets to extract roster data. Yet another problem.

Thankfully, I could leverage my experience with Pandas and handle the dataframes easily.

---

## Chapter 3: We Stay Hungry, We Devour

_(As I am typing this at 5:58pm, my stomach is growling. Can't wait for dinner!)_

The ugliest part of coding this whole thing was probably the formatting of data.

Firstly, I had to implement certain algorithms to parse data and dates correctly. It is not as simple as:

```python
import datetime
```

The way the Google Sheets was structured was easy to read by humans, but not so much by programming. I had to roleplay as a Python 🐍 to get the desired output.

Secondly, I had to make sure the output was neat and formatted nicely, and not just a chunk of text. Doesn't help that you can't tag someone via the bot (I might be wrong about this, but at that point, I couldn't find this functionality).

---

## Chapter 4: Put In The Work & Hours

![Picture of NLYM Bot](../../assets/projects/nlym_telebot_1.jpg "Picture of NLYM Bot")

When my bot was finally working and was sending everything correctly, it was time to PANGGANG (Hokkien for 'ending work'). Except that it didn't go through any user testing.

As this was used among a small group of co-workers, it was rather hard to get objective feedback since they're probably being considerate to me and would only give nice feedback to not hurt my feelings (I appreciate it though).

---

## Chapter 5: And Take What's Ours

Currently the bot is running on my [home server](/projects/home_server), and I would have to keep it on all the time to make sure it is online. Thankfully, my parents have not asked me to pay for electricity bills...

Given how unused this bot is, I'm ready to scrap it and shut it down to save electricity costs. It was only recently that I found out about AWS Lambda, a serverless function that allows the calling of Telegram commands without paying (until AWS decides to profit from us ahhh).

I have plans to transfer this bot over to AWS Lambda to reduce that reliance on my home server being on 24/7. That said, I probably need to move this whole thing over to Whatsapp.

Anywho, given the low demand and usage of this bot, it's probably quite low in my priority list. I will probably redo it next time, when I run out of projects to do (totally not procrastinating this project).

---

## ... After Credits

I had a brief look over how to write a Whatsapp bot... and it basically required me to rewrite all my code because it uses a different interface altogether. I'm not even sure if they use the same language (the last I saw, they use JavaScript but 🤷‍♂️)

But I thought of building a Whatsapp bot for my church to use - kinda like a chatbot which answers people's general queries. Perhaps the youth service feature could be put together... Who knows...

In case you're wondering why the chapter names are so weird, it's a reference from The Rock's song 'Face Off'!
