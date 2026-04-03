---
title: FitLah Bot
description: A Telegram bot that provides real-time public gym and pool capacity in Singapore, helping users plan their workouts efficiently.
tech:
  - Python
  - AWS
  - Supabase
status: completed
createdAt: 2025-02-11
image: "/assets/projects/fitlah_bot_1.jpg"
---

## Chapter 1: The Why?

Like many others, I found myself frustrated by the uncertainty of gym and pool availability. Showing up to an overcrowded gym meant either waiting or adjusting plans on the fly. This sparked the idea for **FitLah Bot** &ndash; a simple, automated way to check real-time capacity before heading out.

- **The Idea**: A Telegram bot that provides instant updates on gym and pool crowd levels across Singapore.
- **Why It Matters**: It saves users time and helps them plan their workouts efficiently.

---

## Chapter 2: The How?

Before building the bot, I had to understand how to access public facility data and ensure real-time updates. This involved exploring APIs, databases, and serverless architectures.

- **Learning the Basics**: I researched public APIs, AWS Lambda for automation, and Supabase for storing user preferences. I also had to learn how to use Telegram Bot's API.
- **Moment of Clarity**: When I successfully retrieved and displayed live capacity updates in a Telegram chat.

---

## Chapter 3: The What?

<video autoplay loop muted playsinline class="w-full h-auto text-white pointer-events-none cursor-none" aria-label="Demo of FitLah bot">
  <source src="/projects/fitlah_bot_start.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

Once the foundations were set, it was time to bring **FitLah Bot** to life.

- **Tech Stack Choices**:
  - **Python** for backend logic and API calls.
  - **AWS Lambda** for serverless execution.
  - **Supabase** for storing capacities, weather data, user preferences and feedback.
  - **Telegram API** for seamless chatbot interactions.
- **Milestones**:
  - Connecting the bot to real-time facility data.
  - Implementing the database to store and retrieve user favorites.

---

## Chapter 4: The Huh?

I still remembered having to read through all the log files AWS Lambda would show, but it always took a while for it to load the log files.

The periods of 30 seconds wait always made me anxious &ndash; will my fix finally work? Or back to the drawing board I go?

---

## Chapter 5: The Yay!

<video autoplay loop muted playsinline class="w-full h-auto text-white pointer-events-none cursor-none z-50" aria-label="Demo of FitLah bot adding user's favourites">
  <source src="/projects/fitlah_bot_addfav.webm" type="video/webm">
  <source src="/projects/fitlah_bot_addfav.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

After countless iterations and debugging sessions, things started falling into place.

- **The Victory Moment**: Successfully integrating user favorites, allowing people to check their preferred gym or pool with a single command.
- **Adjusting the Vision**: The project evolved from a simple bot to something that could potentially predict future crowdedness based on trends.

---

## Chapter 6: The Now!

<video autoplay loop muted playsinline class="w-full h-auto text-white pointer-events-none cursor-none" aria-label="Demo of FitLah bot showing user's favourites">
  <source src="/projects/fitlah_bot_showfav.webm" type="video/webm">
  <source src="/projects/fitlah_bot_showfav.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

At this stage, **FitLah Bot** became fully functional and ready for real-world use.

- **The Finished Product**: A Telegram bot that fetches real-time gym and pool crowd levels, saves user favorites, and provides weather updates for better planning.
- **The Reflection**: Building this bot deepened my knowledge of API integration and cloud computing.

---

## Chapter 7: The Future!

There's always room for improvement, and I make sure to consider everyone's feedback.

- **Future Plans**:
  - Implement predictive analytics to estimate crowdedness based on past data, time of day, and weather.
  - Improve notification systems, so users can get real-time alerts when their favorite facility is below a certain capacity.

---

## Appendix

Try out **FitLah Bot** on Telegram and get real-time updates on ActiveSG's gym and pool capacities!

Feedback is always appreciated via the `/feedback` command 😄

[Click here to start using FitLah Bot!](https://t.me/fitlahsg_bot)
