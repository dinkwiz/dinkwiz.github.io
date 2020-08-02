---
layout: post
title:  "index.html"
excerpt: ""
date:   2020-07-18 17:31:07 +0100
tags:
- jekyll
- html
- markdown
- liquid
category: Jekyll
---

Next up is the index.html file. This will be your site's homepage. We don't include much content in this actual file though. 

Jekyll is designed to minimise the amount of repetition across sites. It does this in two ways - using YAML and Liquid. We will explain these concepts in more detail later on but as a basic introduction:

- YAML lets Jekyll know what layout the page should use. Layout templates are saved in the _layouts folder which we will look at next. 

- Liquid lets Jekyll know what elements you want to be included on your page. Page elements are saved in the _includes folder which we will also look at later. 

<hr class="line">

#### YAML

Every page in the site should begin with some YAML information. Jekyll knows this is YAML because it starts and ends with three dashes. The index.html file should begin with:

        ---
        layout: default
        title: Home
        ---

This tells Jekyll that we want this page to use the default.html layout (we'll create this next) and the title of this page is "Home".

<hr class="line">

After the YAML, we can add the page content. All information below the YAML is referred to in Jekyll as {% raw %}{{ content }}{% endraw %}. 

If you simply want this to be text, it can be added here using markdown. However, usually pages will include html elements. What you include will depend on what you want your homepage to look like. Here we will keep it simple including a page title and then some text. 

<hr class="line">

#### Includes

For the page title, we will write an _include later so here we can just tell the page to use the include here:

        {% raw %} 
        {% include page.title.html %}
        {% endraw %} 

<hr class="line">

#### Main Page Content

For the main page content, we will add some text. This can be written directly in this file. We'll then add some style later on. Type whatever you like below the include statement. 

<hr class="line">

Your final index.html file should look like this:

        ---
        layout: default
        title: Home
        ---

        {% raw %} 
        {% include page.title.html %}
        {% endraw %}

        This is my homepage.

<hr class="line">

#### blog.html and about.html

Repeat the above process for the blog.html file and the about.html file. 

Add an additional line to the blog.html page:

                {% raw %}
                {% include post-list.html %}
                {% endraw %}

This adds an extra element to the page which links to the blog posts within your site. 