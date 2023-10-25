---
layout: about
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_about

# image for page specific usage
img: ":about.jpg"
# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false
---

{%- comment -%} Please delete below and place your page content here {%- endcomment -%}

<!-- {%- include util/auto-content-generator.liquid -%} -->
<!-- {{ website_info_text_first }} -->

<!-- {{ website_info_text_second }} -->

<div class="self-intro-text markdown-style">
{% capture markdown_content %}

## About Me

I am very interested in programming since I was a junior high student, so I majored in computer science in these years. 
My interests include natural language processing and computer vision, as well as multi-objective optimization. I have dived into many of the AI related topics and published some papers to share my findings. 

My most popular work is PyABSA, a framework originally developed for sentiment analysis. Besides, I have released some interesting open-source works which can be found on my GitHub page and Huggingface page.

I am also enthusiastic about making toy demonstrations, which are also available in GitHub or Huggingface. If you are interested to cooperate with me, please feel free to contact me.

## Contact me

The fastest way to contact me is instant massagers, e.g., WeChat and What's APP. Please kindly let me know who you are while contacting me.

<div style="display: flex; justify-content: space-between;">
    <p> <img src="../assets/img/about/wechat.jpg" alt="wechat" style="width:40%;" /> </p>
    <p> <img src="../assets/img/about/whatsapp.png" alt="whatsapp" style="width:100%;" /> </p>
</div>
{% endcapture %}
{{ markdown_content | markdownify }}
</div>
