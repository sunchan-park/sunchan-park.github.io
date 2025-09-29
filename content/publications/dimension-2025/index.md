---
cascade:
  _build:
    render: never
outputs:
  home: HTML
redirect: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10921647"

title: "Dimension-Specific Margins and Element-Wise Gradient Scaling for Enhanced Matryoshka Speaker Embedding"

authors:
- Sunchan Park
- Hyung Soon Kim

date: "2025-03-11T00:00:00Z"

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*IEEE Access*, vol. 13"
publication_short: ""

abstract: >-
  Speaker embeddings trained with Matryoshka Representation Learning (MRL) provide
  embeddings of various dimensions with minimal overhead, adapting to different
  computational and storage constraints. Compared to single-dimensional models,
  MRL-based models show improved speaker verification performance in lower dimensions,
  but there is some degradation in higher dimensions. Analyzing learned embeddings,
  we observe an imbalance in the element-wise magnitudes of speaker embeddings trained
  with MRL. Specifically, the higher-dimensional elements exhibit extremely small values,
  which could reduce their contribution to cosine similarity and degrade speaker
  verification performance. To address this imbalance and improve performance
  consistency across all dimensions, we propose two methods: dimension-specific margins
  and element-wise gradient scaling. Dimension-specific margins stabilize training by
  adjusting the margin for each dimension to mitigate instability caused by excessively
  high values for given dimensions. Element-wise gradient scaling mitigates imbalance
  by scaling gradients propagated to each element, considering differences in embedding
  dimensionality and the number of loss functions influencing each element. Evaluation
  on the VoxCeleb benchmark shows that the proposed methods, when applied to MRL,
  improve speaker verification performance in higher-dimensional embeddings while
  maintaining performance in lower-dimensional embeddings. Additionally, an analysis
  of the element-wise magnitudes of learned embeddings visually demonstrates that
  element-wise gradient scaling effectively mitigates the magnitude imbalance.


tags:
- Source Themes
featured: false

links: []
projects: []
slides: ""
---
