# sunchan-park.github.io

Personal academic website of **Sunchan Park**, Postdoctoral Researcher at Pusan National University.

Live at **https://www.sunchan.me**.

Built with [al-folio](https://github.com/alshedivat/al-folio) (Jekyll) and deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/opt/imagemagick/bin:$PATH"
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

## Editing content

- **Bio / homepage** — `_pages/about.md`
- **Publications** — `_bibliography/papers.bib`
- **Publication thumbnails** — `assets/img/publication_preview/`
- **Social links** — `_data/socials.yml`
- **Site config** — `_config.yml`

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
