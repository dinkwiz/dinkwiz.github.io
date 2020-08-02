---
layout: post
title: "_includes"
excerpt: ""
date: 2020-07-21 15:31:07 +0100
tags:
  - jekyll
  - git
  - bash
  - markdown
  - ruby
category: Jekyll
---

The _includes folder contains the different elements you want to use in your site. 

It is at this stage that we move away from the Jekyll structure and move into website design. _includes are written in html but can also refer to other elements, such as CSS and Javascript.

I encourage you to explore other websites, any websites - you are no longer restricted to Jekyll Themes. Write your own code if you can (or learn how to!).  Find elements that you like in other sites and adapt them for your own.

<hr class="line">

#### Liquid

The only difference to traditional web html is that Liquid is used to refer to other elements within your site. You have seen some of this already when referring to includes:

    {% raw %} {% include header.html %}
    {% endraw %}

You can learn more about Liquid in Jekyll here.

<hr class="line">

#### Starter _includes

I’ve created some 'starter' _includes  below. These will set up a basic content for you from which you can build.

#### head.html

This includes contains some basic metadata for each page. 

    {% raw %}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="index,follow" />
    <meta name="description" content="{% if page.description %}{{page.description}}{% else %}{{ site.description }}{% endif %}">

    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">


    <title>{% if page.title %}{{page.title}}{% else %}{{ site.title }}{% endif %}</title>

    <base href="{{ site.url }}">
    {% endraw %}

#### header.html


    {% raw %}
    <nav>
        <div id="logo">
          <a href="/index.html">{{ site.title }}</a>
        </div>
      
        <ul class="nav-links">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/blog.html">Blog</a></li>
      
        </ul>
    </nav>
    {% endraw %}

#### footer.html

    {% raw %}
    <p>&copy {{ site.title }} 2020</p>
    {% endraw %}

#### post-list.html

    {% raw %}
    <div class="post-list">
        {% assign sorted-posts = site.posts | sort: 'date' %}    
        {% for page in sorted-posts %}
              <div class="post-link">
                      <a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a>
                      
                      - {{ page.date | date: '%d %B, %Y' }}
                      
              </div>
            {% endfor %}
    </div>
    {% endraw %}