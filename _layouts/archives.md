---
# Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
# Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
# Licensed under MIT

layout: default
# The Archives of posts.
---
{%- include multi_lng/get-pages-by-lng.liquid pages = site.posts -%}
{%- assign postsByYear = lng_pages | sort: 'date' | reverse | group_by_exp:"post", "post.date | date: site.data.lang[lng].date.year" -%}

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
</div>