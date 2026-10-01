# BootKB — Static Website

## Overview
A static HTML/CSS/JS website for a software development bootcamp ("BootKB").
No backend, no database, no build step, no package manager.

## Structure
- `index.html` — main landing page (sections: welcome, about, projects, activities, program)
- `profile.html` — login/signup page with JS toggle between login and register forms
- `style.css` — styles for the main page
- `profile.css` — styles for the login/signup page
- `profile.js` — toggles between login and signup panels
- `images/` — all image assets

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
Served by nginx:alpine on port 3000. The repo root is bind-mounted read-only into
the nginx html directory, so file edits are immediately visible on browser refresh
(no rebuild needed). Use `reload_preview` after edits to force the preview to refresh.

## No external credentials required
This is a purely static site — no API keys, database passwords, or third-party
integrations are needed.
