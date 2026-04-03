---
title: "Exporting NRC Data to Strava"
createdAt: 2026-03-26
updatedAt: 2026-04-02
category: "fitness"
tags: ["javascript", "python", "automation", "garmin", "strava", "nrc"]
summary: "Automated exporting of running data from NRC to Strava using scripts and bulk upload tools."
draft: false
---

This started out as something that sounded simple: move my running data from Nike Run Club (NRC) to Strava. It turned out to be way more tedious than expected.

First, I tried exporting data directly from NRC, but the data didn’t tally properly. Even if it did, Strava has a limit of 15 uploads per day, which meant I’d have to keep coming back over multiple days just to upload everything. Not ideal when you’ve got a decent backlog of runs.

Next attempt was routing everything through Garmin — import NRC data into Garmin, then export from Garmin to Strava. That didn’t work either. The exports didn’t include the actual activity data I needed, so that path was a dead end.

So I went the manual route for a bit: downloading `.gpx` files from Garmin and uploading them into Strava. It worked, but doing that hundreds of times wasn’t sustainable.

Eventually, I found a way to script the bulk download using JavaScript (credit to the original author linked below). That got me 257 `.gpx` files — each named with Garmin’s internal activity IDs, which weren’t very helpful.

To clean things up, I used `xmlstarlet` to rename the files into something more readable. That made the dataset a lot easier to manage.

For uploading, I used a tool from gotoes.org that lets you send `.gpx` files to Strava via email. Instead of manually sending hundreds of emails, I automated that part with a Python script. It basically attaches each file and sends it off, one by one.

In the end, the whole pipeline looked like this:

- Bulk download `.gpx` files from Garmin
- Rename them using `xmlstarlet`
- Send them via email using a script
- Let gotoes handle the upload to Strava

Not the most straightforward process, but it got the job done. It was a bit of trial and error, but also a good reminder that sometimes the quickest way isn’t always the most obvious one.

---

### Sources

- Bulk download from Garmin Connect: [Wandering Star Guide](https://wanderingstar.github.io/2018/01/21/13-08-bulk-download-garmin-connect-gpx.html)
- Strava email uploader: [GoToes Tools](https://gotoes.org/tools/strava-email-uploader)
