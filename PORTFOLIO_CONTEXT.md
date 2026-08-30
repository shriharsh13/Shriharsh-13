# Portfolio Context

## Project State
- This is a static portfolio site for Shriharsh Agrawal.
- Main public page: `index.html`.
- Primary styling: `assets/css/style.css`.
- Primary behavior: `assets/js/main.js`.
- Current approach intentionally avoids React/Next or a build system; the site should work as plain static HTML/CSS/JS.

## Recent Revamp
- Replaced the old BootstrapMade-style portfolio with a minimalist single-column resume-style page.
- Current sections are: Home, Experience, Projects, Skills, Certifications, Contact.
- Removed public birthday, age, and phone number from the page for privacy.
- Replaced the broken PHP contact form with direct static-friendly links: email, LinkedIn, GitHub, and resume.
- Updated the site again from the 2026 resume to position Shriharsh as a Software Engineer with practical AI experience.
- Updated the public content from the August 2026 resume to reflect Salesforce as the current role and Oracle Financial Services as previous experience.
- Removed visible photos, hero background imagery, fixed sidebar navigation, decorative cards, Twitter, and Instagram from the public UI.
- Removed the top section-navigation row to reduce intro clutter; the page now relies on normal scrolling plus professional action links.
- Converted old stock pages into redirect-style pages:
  - `inner-page.html` redirects to `index.html`.
  - `portfolio-details.html` redirects to `index.html#projects`.
- Deleted unused PHP form files:
  - `forms/contact.php`
  - `forms/Readme.txt`

## Content Assumptions
- Latest resume source: `/Users/shriharsh/Downloads/Shriharsh_Resume_Aug2026.pdf`.
- Site resume copy: `assets/docs/Shriharsh_Resume_Aug2026.pdf`.
- Previous resume copy remains in `assets/docs/Shriharsh_Agrawal_2026.pdf` but is no longer linked from the public page.
- Email currently shown: `shriharshagrawal@gmail.com`.
- Current headline positioning: Software Engineer.
- Current work emphasis: Salesforce Data Cloud, enterprise customer data workflows, data ingestion, identity resolution, calculated insights, segmentation, activation, and practical AI applications.
- Previous Oracle Financial Services experience is shown as June 2023 - July 2026 with Java/Spring Boot APIs, Oracle SQL performance, CI/CD, OBDX UI, and measurable reliability/productivity impact.
- Prismberry is no longer shown on the public page because it is not included in the August 2026 resume and the page is intentionally concise.
- Existing social links were retained:
  - GitHub: `https://github.com/shriharsh13`
  - LinkedIn: `https://www.linkedin.com/in/shriharsh-agrawal-22b5011aa`
  - LeetCode: `https://leetcode.com/u/63Vfn90HDB/`
- Twitter and Instagram were intentionally removed from the public UI to keep the page professional and minimal.
- Primary AI project: GenAI Support RAG Chatbot using Next.js, OpenAI API, Supabase pgvector, Cloudflare Workers, protected ingest APIs, rate limiting, streaming responses, and a TRACE dashboard.
- Secondary AI project: Stock Predictions Bot using OpenAI API, Cloudflare Workers, JavaScript, Polygon API, rate limiting, 30-minute caching, AI Gateway tracking, and token monitoring.
- Public GitHub repo exploration was attempted for `shriharsh13` but local GitHub/API access failed in this environment; do not invent repo details without verified links.
- Current certifications shown: Oracle Cloud Infrastructure AI Foundations Associate 2025, Salesforce Certified Data 360 Consultant, and Salesforce Administrator.

## Design Notes
- The current layout is a centered, single-column document with compact text sections and light dividers.
- Visual direction: minimalist software engineering resume with practical AI experience.
- Palette is intentionally restrained, with dark mode as the default and a small animated sun/moon toggle for light mode.
- Skill percentages and visual cards were replaced with concise text groups.

## Verification Completed
- `node --check assets/js/main.js`
- `git diff --check`
- Checked that local `href`, `src`, and `og:image` references resolve.
- Checked anchor links against section IDs; no missing anchors or duplicate IDs.
- Searched edited public files for leftover stock/template text and PHP form references.
- Searched public files for removed photo and casual social references.
- Searched public files for stale Oracle-current-role wording, old certification emphasis, and old resume links after the August 2026 update.

## Verification Limitation
- Browser visual verification for the August 2026 update was blocked by the in-app Browser URL policy for the local `file://` page.
- The site should still be openable directly from `index.html` because it is static.
- GitHub repository discovery was blocked by DNS/API access; retry from a normal browser or authenticated GitHub CLI when available.

## Useful Next Steps
- Do a manual visual pass in a browser on desktop and mobile widths.
- Add real GitHub/live links to project cards when public repo access is available.
- If the Stock Predictions Bot repo is public, link it directly from the project card.
- Consider adding a dedicated "AI Work" or "Case Studies" page if more AI projects are added.
- Image files are still present in the repo but are no longer referenced by the public page.
