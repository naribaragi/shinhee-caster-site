# SHINHEE Caster (Static Site)

Fast static website with RFQ quote cart (no payments), Netlify Forms, and a lightweight blog.

## Deploy (GitHub → Netlify)
1. Create a new GitHub repo and push this folder.
2. In Netlify → **Add new site** → **Import from Git** → connect repo.
3. Build command: _none_ ; Publish directory: `.`
4. Enable **Forms** and test `/quote.html` and `/contact.html` submissions.
5. Point your domain in Netlify **Domain settings**.

## Customize
- Colors/spacing in `assets/css/style.css` (CSS variables at the top).
- Replace images with your own under `assets/img` (update paths if needed).
- Edit product tiles in `index.html` (SKUs, names, descriptions).
- RFQ submission uses Netlify Forms. The cart items are serialized as JSON in a hidden field `items`.
- Blog posts are plain HTML files in `/blog/`.

## Google Analytics (optional)
Add your GA4 snippet if desired.

© 2025 SHINHEE Caster.
