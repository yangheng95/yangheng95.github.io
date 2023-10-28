---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# main page (index.html)
---
{%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}

{%- if page.img %}
  {%- if site.data.conf.others.home.header_img_with_img_tag == true -%}
    {%- capture home_img_tag -%} <img src="{{ page.img }}" /> {%- endcapture -%}
    {%- capture home_img_background_style -%} style="height: unset;" {%- endcapture -%}
  {% else %}
    {%- capture home_img_background_style -%} style="background-image:url('{{ page.img }}');" {%- endcapture -%}
  {%- endif -%}
{%- endif -%}

<div class="multipurpose-container home-heading-container">
  <div class="home-heading" {{ home_img_background_style }}>
    {{ home_img_tag }}
    <div class="home-heading-message">
      {{ site.data.owner[lng].home.top_header_line1 }}
      {%- if site.data.owner[lng].home.top_header_line2 %}
        <br>
        {{ site.data.owner[lng].home.top_header_line2 }}
      {% endif -%}
    </div>
  </div>
  <div class="home-intro-text markdown-style">
  {% capture markdown_content %}

# Hi there!

I am a PhD student at the University of Exeter. My research interests include natural language processing, computer vision, bioinformatics (RNA modeling), etc. Please find the details of my study in the following sections.
Find me on [GitHub](https://github.com/yangheng95) or [Google Scholar](https://scholar.google.com/citations?hl=en&user=NPq5a_0AAAAJ&view_op=list_works&sortby=pubdate).

## Research Topics

- **Textual Adversarial Attack/Defense**
- **Sentiment (Coherency) Analysis**
- **bio-RNA Sequence pretraining & modeling**
- **Code language modeling**
- **Diffusion models**

## First-author Publications

**[CCF A]** **_H Yang_**, K Li. [Boosting Text Augmentation via Hybrid Instance Filtering Framework](https://aclanthology.org/2023.findings-acl.105.pdf) (ACL 2023 **Findings**)

**[CCF B]** **_H Yang_**, K Li. [InstOptima: Evolutionary Multi-objective Instruction Optimization via Large Language Model-based Instruction Operators](https://openreview.net/forum?id=8oy8hUeem9) (EMNLP 2023 **Findings**)

**[CCF B]** **_H Yang_**, K Li. [PyABSA: A Modularized Framework for Reproducible Aspect-based Sentiment Analysis](https://dl.acm.org/doi/10.1145/3583780.3614752) (CIKM 2023)

**[CCF A]** K Li, **_H Yang_**, W Visser. [Evolutionary Multi-Task Injection Testing on Web Application Firewalls](https://arxiv.org/abs/2206.05743) (IEEE TSE 2023)

**[CCF C]** B Zeng, **_H Yang_**, S Liu, M Xu. [Learning for target-dependent sentiment based on local context-aware embedding](https://link.springer.com/article/10.1007/s11227-021-04047-1) (The Journal of Supercomputing 2022)

**[CCF C]** **_H Yang_**, B Zeng, JH Yang, Y Song, R Xu. [A multi-task learning model for Chinese-oriented aspect polarity classification and aspect term extraction](https://www.sciencedirect.com/science/article/abs/pii/S0925231220312534) (Neurocomputing 2021).

**_H Yang_**, K Li. [Reactive Perturbation Defocusing for Textual Adversarial Defense](https://openreview.net/forum?id=h2jvdYswot) (Preprint 2023)

**_H Yang_**, K Li. [Improving Implicit Sentiment Learning via Local Sentiment Aggregation](https://arxiv.org/abs/2110.08604) (Preprint 2021)

B Zeng, **_H Yang_**, R Xu, W Zhou, X Han. [LCF: A local context focus mechanism for aspect-based sentiment classification](https://www.semanticscholar.org/paper/LCF%3A-A-Local-Context-Focus-Mechanism-for-Sentiment-Zeng-Yang/67d5ab20d15518dc876b0732a768a88262635425) (Applied Sciences 2019).

**K Li is my PhD's supervisor. B Zeng was my master's supervisor.**

# Co-authored Publications

**[CCF C]** M Xu, B Zeng, **_H Yang_**, J Chi, J Chen, H Liu. [Combining dynamic local context focus and dependency cluster attention for aspect-level sentiment classification](https://www.sciencedirect.com/science/article/abs/pii/S0925231221019391) (Neurocomputing 2022)

## Toy Demos:
### [Aspect-based sentiment analysis (ABSA)](https://huggingface.co/spaces/yangheng/PyABSA)
### [Super-resolution anime diffusion](https://huggingface.co/spaces/yangheng/Super-Resolution-Anime-Diffusion)

## Open-source Repositories
- [![Downloads](https://pepy.tech/badge/pyabsa)](https://pepy.tech/project/pyabsa) [PyABSA](https://github.com/yangheng95/PyABSA): State-of-the-art models and simplified interface for ABSA  
- [![Downloads](https://pepy.tech/badge/findfile)](https://pepy.tech/project/findfile) [FindFile](https://github.com/yangheng95/findfile): A simple tool to help find your file wherever it locates 
- [![Downloads](https://pepy.tech/badge/metric-visualizer)](https://pepy.tech/project/metric-visualizer) [Metric-Visualizer](https://github.com/yangheng95/metric_visualizer): Help you to easily and quickly make academic plots, e.g., box and trajectory plots 
- [![Downloads](https://pepy.tech/badge/boostaug)](https://pepy.tech/project/boostaug) [BoostAug](https://github.com/yangheng95/BoostAug): it can achieve at most 5% absolute improvement based on full-scale datasets for most models.
- [InstOptima](https://github.com/yangheng95/InstOptima): [Evolutionary Multi-objective Instruction Optimization via Large Language Model-based Instruction Operators](https://arxiv.org/abs/2310.17630).
- [Adversarial defense](https://github.com/yangheng95/TAD): This work propose an effective adversarial defense method for textual adversarial defense.
- [ABSA DPT](https://github.com/yangheng95/ABSADatasets/tree/v1.2/DPT): This is a web-based ABSA dataset annotation tool that can help you easily make an ABSA dataset and train it using PyABSA.
- [More works are going to be published]

## Education

- **2021.9 - 2025.9** CS PhD student in AI/NLP, University of Exeter, UK
- **2018.9 - 2021.6** CS Master in AI/NLP, South China Normal University, China
- **2014.9 - 2018.6** CS Bachelor, Yangtze University, China

## Awards

- **2020.9** Chinese National Graduate Scholarship
- **2018.6** Outstanding Graduate of Yangtze University

## Community Contribution
<p align="left"><img src="https://github-readme-stats.vercel.app/api?username=yangheng95&show_icons=true" alt="yangheng95" />

<p align="left"> <img src="https://komarev.com/ghpvc/?username=yangheng95" alt="yangheng95" /> </p>

{% endcapture %}
{{ markdown_content | markdownify }}
  </div>
</div>



<!-- 
<div class="multipurpose-container">
  <h1>{{ site.data.lang[lng].archives.page_header }}</h1>
  <div class="archives">
    <div class="year">
      <h6>{{ 2023 }}</h6>
      <div class="month">
        <h6>January</h6>
        <ul>
          <li>
            <span>01</span>
            <a href="#">Sample Post 1</a>
          </li>
          <li>
            <span>05</span>
            <a href="#">Sample Post 2</a>
          </li>
        </ul>
      </div>
      <div class="month">
        <h6>February</h6>
        <ul>
          <li>
            <span>02</span>
            <a href="#">Sample Post 3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div> -->



<!-- {%- if lng_pages.size > 0 and site.data.conf.others.home.new_posts %}
<div class="multipurpose-container new-posts-container">
  <h1>{{ site.data.lang[lng].home.new_posts_title }}</h1>
  <ul class="new-posts">
  {%- for _post in lng_pages limit: site.data.conf.others.home.new_posts_count_limit -%}
    <li>
      {%- assign page_title = _post.title -%}
      {%- include util/auto-content-post-title-rename.liquid title = page_title -%}
      {%- include multi_lng/get-localized-long-date-format.liquid date = _post.date -%}
      <a href="{{ site.baseurl }}{{ _post.url }}">{{ page_title }}
        <span>{{ _post.date | date: out_date_format }}</span>
      </a>
    </li>
  {% endfor -%}
    <li>
      {%- include multi_lng/get-page-by-layout.liquid layout = 'archives' -%}
      <a href="{{ site.baseurl }}{{ layout_page_obj.url }}">{{ site.data.lang[lng].home.new_posts_show_more_button }}</a>
    </li>
  </ul>
</div>
{% endif -%} -->
