---
layout: post
title: "_config.yml"
excerpt: "What is the _config.yml file for and what should it contain"
date: 2020-07-18 16:31:07 +0100
tags:
  - jekyll
  - github
  - markdown
category: Jekyll
---

The _config.yml file is the core of a Jekyll site. It tells Jekyll how to build the site. 

Below is an example of content in a basic _config.yml file. This is the content used in the Jekyll-Dink Theme. If you are creating a Jekyll site from scratch, this is a good starter for the _config.yml content. 

<hr class="line">

In the first two lines, specify the title for your site and your email address:

    title: Jekyll-Dink
    email: your-email@email.com

Next, add a description for your site. This will appear when people search for it, e.g. through Google.

The ">-" allows you to write on multiple lines. 

    description: >-
      Add your site description here. 


If you want your site to be a section of another site, include the subpath here. E.g. /blog. If not, you can leave this blank.

    baseurl: ""


Next add the address for your site here within the quotes.

    url: "https://jekyll-dink.github.io"

Plug-ins add functionality to your site. I've started with just one here but you can add more to the list if needed as your site develops. We'll cover plugins later on.

    plugins:
    - jekyll-feed

Permalink determines how your pages will be referred to by your site. For example, do you want your blog-posts to include the date in their web-address? There are different options but here I've used none.

    permalink: none

<hr class="line">

So, in full your _config.yml file should contain the following:

    title: Jekyll-Dink
    email: your-email@email.com

    description: >-
      Add your site description here. 

    baseurl: ""
    url: "https://jekyll-dink.github.io"

    plugins:
    - jekyll-feed

    permalink: none

