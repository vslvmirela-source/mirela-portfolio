# Mirela Vasileva — Portfolio starter (v1)

Minimal, responsive, static portfolio website for a costume designer and stylist. No installation, framework, build step or command line is required.

## Contents
- `index.html` — site structure
- `style.css` — design, grid, hover and mobile layouts
- `projects.js` — the ONLY file to edit for content
- `script.js` — functionality, filters and individual project pages

## IMPORTANT
Six projects are **examples only**. The abstract backgrounds are design placeholders; they do not represent real projects. Contact email is intentionally empty. Do not promote the website as a finished portfolio until you enter your real work, credits and contacts.

## Edit content from an iPad
In the GitHub repository, open `projects.js`, tap the pencil (Edit), change texts inside quotes, and Commit changes. Connected hosting will automatically update. Copy one project object and give it a unique `slug` to add more work. Supported categories: `commercials`, `films`, `music-videos`. Supported sizes: `large`, `medium`, `tall`, `wide`.

To add images: create a folder named `images` via GitHub upload, upload your optimized JPG/WebP files, then set `photo:"images/filename.jpg"`. Example image width 1600–2000px, compressed to roughly under 500KB when possible.

For a video: set `video:"https://player.vimeo.com/video/123456789"` or `video:"https://www.youtube-nocookie.com/embed/VIDEO_ID"`. Videos embed on the individual project page. Public video links may require embedding permission on Vimeo/YouTube.

Use a real email in `SITE.email` before public launch.

## Publish with GitHub + hosting
1. Create a GitHub account; create repository `mirela-portfolio`.
2. Unzip starter on iPad Files app. Upload the four site files (not the enclosing folder) to the GitHub repository.
3. Connect the repository to a static site host. Vercel import: Framework Preset `Other`, Root Directory `./`, no build command; click Deploy. **Important: Vercel Hobby is restricted to personal, non-commercial use. A professional portfolio likely needs Vercel Pro or a different host.**
4. Add custom domain only once the preview is working; preserve existing MX/TXT records for email.

No actual deployment or domain configuration is included in this ZIP.
