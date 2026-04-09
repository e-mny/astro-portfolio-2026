---
title: NTU Field Booker
description: An automated solution for booking sports fields using Python and Selenium, designed to save time and reduce frustration.
tech:
  - Python
  - Selenium
tags:
  - Automation
  - Python
links:
  github: https://github.com/e-mny/field_booker
status: archived
createdAt: 2023-01-13
image: "/projects/field_unsplash.jpg"
---

## What it is

An automation script that books sports facilities by simulating user actions on a website.

## Why I made it

Manual booking at midnight was tedious and unreliable, and I wanted to automate the process so I didn’t have to stay awake.

## What it does

- Automates login and navigation of the booking system
- Selects and confirms facility bookings at the exact release time
- Sends a confirmation email upon successful booking

## Notes

- Timing was more sensitive than expected; execution speed affected success rate
- The script occasionally failed due to site changes or competition from other bots
- The solution broke completely after the website was revamped
