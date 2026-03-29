# Deploy Checklist for selfrules.org

This checklist covers the steps to deploy the site to Vercel and configure the custom domain. All steps require Mattia's Vercel account.

## Pre-deploy (DONE)

- [x] `npx next build` passes with exit code 0
- [x] All 21 routes generated correctly (static + SSG)
- [x] `vercel.json` configured with security headers and caching
- [x] `sitemap.xml` and `robots.txt` present in build output

## Step 1: Connect to Vercel

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Link this repo to a Vercel project
vercel link
```

## Step 2: Set Environment Variables (if needed)

```bash
# If Umami analytics is configured
vercel env add NEXT_PUBLIC_UMAMI_WEBSITE_ID
```

## Step 3: Preview Deploy

```bash
# Deploy a preview build
vercel

# Verify the preview URL:
# - All pages load correctly
# - i18n routing works (/ for EN, /it for IT)
# - No 500 errors
```

## Step 4: Production Deploy

```bash
# Deploy to production
vercel --prod

# Verify production URL returns HTTP 200 for:
# - / (homepage EN)
# - /it (homepage IT)
# - /about, /work, /lab, /approach, /notes
# - /it/about, /it/work, /it/lab, /it/approach, /it/notes
# - /notes/why-i-prototype-in-code
# - /it/notes/why-i-prototype-in-code
# - /sitemap.xml
# - /robots.txt
```

## Step 5: Configure Custom Domain

```bash
# Add custom domain
vercel domains add selfrules.org
```

Then configure DNS at the domain registrar:
- **Option A (Vercel DNS):** Update nameservers to Vercel's
- **Option B (External DNS):** Add A record pointing to `76.76.21.21`

NOTE: If selfrules.org is already connected to another Vercel project (old site), either:
- Remove domain from old project first, then add to new project
- Or update the existing project to point to the new repo

## Step 6: Configure www Redirect

```bash
# Add www subdomain (Vercel auto-configures redirect)
vercel domains add www.selfrules.org
```

Verify:
```bash
curl -I https://www.selfrules.org  # Should return 301 to https://selfrules.org
curl -I http://selfrules.org       # Should return 301 to https://selfrules.org
```

## Step 7: Post-deploy Smoke Test

Verify all pages return HTTP 200:
```bash
for page in "" "it" "about" "it/about" "work" "it/work" "lab" "it/lab" "approach" "it/approach" "notes" "it/notes" "notes/why-i-prototype-in-code" "it/notes/why-i-prototype-in-code"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://selfrules.org/$page")
  echo "$STATUS https://selfrules.org/$page"
done
```

Verify 404 pages:
```bash
curl -s -o /dev/null -w "%{http_code}" https://selfrules.org/nonexistent  # Should be 404
```

Verify SEO artifacts:
```bash
curl -s https://selfrules.org/sitemap.xml | head -5
curl -s https://selfrules.org/robots.txt
curl -s https://selfrules.org | grep 'hreflang'
curl -s https://selfrules.org | grep 'application/ld+json'
```
