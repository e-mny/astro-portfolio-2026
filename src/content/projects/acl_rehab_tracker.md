---
title: Stride — ACL Rehab Tracker
description: A self-hosted rehabilitation journal for tracking knee measurements, daily symptoms and progress photos, with interactive charts and optional Telegram logging.
tech:
  - React
  - TypeScript
  - Python
  - FastAPI
  - SQLite
  - Docker
  - MediaPipe
tags:
  - Web Development
  - Python
  - Automation
links:
  github: https://github.com/e-mny/acl_rehab_tracker
status: completed
createdAt: 2026-11-07
updatedAt: 2026-11-10
image: "/projects/acl_rehab_tracker_overview.jpg"
---

## What it is

![Stride recovery dashboard showing sample circumference measurements, a progress chart and measurement guidance](/projects/acl_rehab_tracker_overview.jpg)

<figcaption>The recovery overview, shown with the app's built-in sample data.</figcaption>

A self-hosted journal for ACL, LCL and meniscus rehabilitation. It keeps measurements, daily notes and progress photos together, with a React frontend and a Python API backed by SQLite.

## Why I made it

I got injured at a Ultimate Frisbee competition. It was an fully torn ACL, LCL and slight damage to my meniscus.

I wanted one place to record the small details of knee recovery and see how they changed over time. To see my small wins and recovery progress.

## What it does

- Logs circumference at three measurement sites, with optional same-day comparisons against the other leg
- Records knee flexion, extension deficit, pain, stiffness, exercise, steps, sleep and daily notes
- Charts trends over 30 days, 90 days, a year or the full journal history
- Keeps a private photo journal with manual thigh-and-shin alignment and optional local MediaPipe analysis
- Accepts Telegram check-ins from an authorized sender, with confirmation before saving
- Provides password-protected access, API tokens, CSV exports and portable journal archives
- Runs locally with Docker, with separate optional services for Telegram and photo analysis

![Stride trends screen showing sample knee flexion and extension measurements over time](/projects/acl_rehab_tracker_trends.jpg)

<figcaption>Range-of-motion trends using sample data. Missing measurements stay as gaps.</figcaption>

![Stride daily entry form with example circumference and flexion measurements and a note](/projects/acl_rehab_tracker_entry.jpg)

<figcaption>A daily check-in with illustrative values. Every measurement field is optional.</figcaption>
