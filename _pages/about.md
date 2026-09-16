---
layout: about
permalink: /
subtitle: Postdoctoral Researcher | Pusan National University

profile:
  align: center
  image: prof_pic.jpg
  image_circular: false

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<style>
  /* Header: tighter spacing, order = name / email / title */
  .post-header { margin-bottom: 1rem; }
  .post-header .post-title { margin-bottom: 0.2rem; }
  .post-header .desc { margin: 0 0 0.12rem; }
  .header-links { margin: 0; font-size: 14.85px; }
  .header-links a { white-space: nowrap; }
  /* Accent color (navy) */
  :root { --global-theme-color: #3b5b8c !important; --global-hover-color: #3b5b8c !important; }
  /* Portrait photo floated left of the bio text */
  .bio-hero { max-width: none; margin: 0; text-align: left; }
  .bio-hero::after { content: ""; display: table; clear: both; }
  .bio-hero .hero-photo {
    float: left;
    width: 150px; height: 200px;      /* 3:4 portrait */
    object-fit: cover;
    border-radius: 6px;
    margin: 0.2rem 1.4rem 0.6rem 0;
  }
  .bio-social { text-align: left; margin: 0.3rem 0 2.4rem; }
  .bio-social .contact-icons { display: block; }
  .bio-social .contact-icons a { margin: 0 0.9rem 0 0; font-size: 1.7rem; }
  /* Align publication thumbnail + text with the hero photo + bio text */
  .publications .row { display: flex; flex-wrap: nowrap; align-items: flex-start; margin-left: 0; margin-right: 0; }
  .publications .row .abbr { flex: 0 0 150px; max-width: 150px; padding: 0; margin: 4px 1.4rem 0 0; }
  .publications .row .col-sm-9 { flex: 1 1 0%; min-width: 0; max-width: none; padding: 0; }
  .publications .preview { width: 150px; height: auto; }
  /* Consistent section-heading spacing: roomy above, tight below */
  .post article h2 { margin-top: 2.2rem !important; margin-bottom: 0.5rem !important; }
  /* Normalize the space feeding into each heading so all three look equal */
  .publications { margin-top: 0; margin-bottom: 0; }
  .publications ol.bibliography { margin-top: 0; margin-bottom: 0; }
  .publications ol.bibliography > li:first-child { margin-top: 0; }
  .post article h2 + ul { margin-top: 0; }
  /* Hide the venue badge above each publication thumbnail (keep the image) */
  .publications abbr.badge { display: none !important; }
  /* Highlight own name in bold (instead of the theme's underline) */
  .publications .author em { font-style: normal !important; text-decoration: none !important; border-bottom: none !important; font-weight: 700 !important; }
  /* Plain-text footer at the very bottom (no bar) */
  footer.fixed-bottom, footer.sticky-bottom { background: transparent !important; box-shadow: none !important; }
  footer .container { text-align: center; color: #999 !important; font-size: 0.8rem; padding: 1.4rem 0 1.2rem; }
  footer a { color: #888 !important; }
</style>

<div class="bio-hero" markdown="1">

<img class="hero-photo" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Sunchan Park">

I am a Postdoctoral Researcher in the Computer Vision & Signal Processing Lab ([CVSP](https://www.pnu-cvsp.com)) at [Pusan National University](https://www.pusan.ac.kr/eng), working with Prof. Kyeongbo Kong.<br>I have worked extensively on speech processing — including speech recognition, speaker recognition, and speech emotion recognition. Building on this foundation, I am expanding my research into **multimodal AI**, bridging audio, vision, and language, with a recent focus on **spatio-temporal audio-visual understanding**.

My research interests span **Multimodal AI**, **Audio-Visual Perception**, **Spatio-Temporal Reasoning**, and **Agentic Systems**.

</div>

## Publications {#publications}

<div class="publications">
{% bibliography --group_by none %}
</div>

## Under Review

<div class="publications">
{% bibliography --file under_review --group_by none %}
</div>

## Education

- **Ph.D. in Electronics Engineering**, Pusan National University · 2019–2025
- **M.S. in Electronics Engineering**, Pusan National University · 2016–2018
- **B.S. in Electronics Engineering**, Pusan National University · 2010–2016

## Experience

- **Postdoctoral Researcher**, Pusan National University · 2025–present
- **Research Associate**, LG Electronics · 2018–2019
