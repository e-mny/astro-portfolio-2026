---
title: HDB Transport Infrastructure Review
description: A review of public transport infrastructure in HDB towns, assessing disparities and recommending improvements.
tech:
  - Python
  - Seaborn
  - Matplotlib
tags:
  - Data Science
  - Python
links:
  github: https://github.com/e-mny/HDB_Transport_Infrastructure_Review
status: completed
createdAt: 2024-07-15
image: "/projects/hdb_unsplash.jpg"
---

## What it is

A data analysis project examining public transport accessibility disparities across HDB towns in Singapore.

## Why I made it

I was curious whether some neighborhoods are underserved by public transport despite high population density.

## What it does

- Analyzes bus stop and MRT station density relative to population distribution
- Identifies towns with significant transport infrastructure gaps

<iframe src="/projects/hdb_transport_infrastructure_review/total_density_map.html" width="100%" height="500px"></iframe>

- Visualizes accessibility issues using interactive maps and density heatmaps

## Notes

- Combining multiple datasets (bus stops, MRT stations, population) required careful alignment and normalization
- Defining a meaningful “transport density discrepancy” metric was less straightforward than expected
- Some findings were intuitive (e.g., newer towns lagging in infrastructure), but still useful to quantify
- If extended, incorporating temporal data (peak vs off-peak) and first-mile/last-mile connectivity would improve the analysis
