---
layout: post
title: "Jekyll: Site Structure"
date: 2020-07-20 15:31:07 +0100
tags:
  - jekyll
  - git
  - bash
  - markdown
  - ruby
project-id: jekyll-build
project-order: 8
---

Pages - create files alongside index.html
Page elements - create files under \_includes
Page layouts - use liquid to add in the includes you want in each

They will be empty for now but if you get the structure right you can work on the content bit by bit.

For example, I started with four pages:
Homepage
About
Projects
Blog

The first three would be based on the default layout so I decided to focus on this first.

Each page would be divided into three sections initially, header - content - footer. The content would be different on each page but the header and footer the same. Therefore, the header and footer would be includes. I began by designing the header element. Although I coded this within the header include, it fed through to my homepage by:

Index.html - yaml- layout: default

Default.html - liquid

The homepage is based on the default layout
The default layout includes the header.

This seems complicated but it makes edits a lot simpler.

Want to add the footer to your about page? No need to copy all the header.html code. Simply set the layout yaml to default and the header will appear.

Want to make a change to your header? Simply make the change within your header include and it will automatically feed through to all pages that use it.

CSS, JavaScript and images
As you start designing your site, you will want to use css JavaScript and images in your site.

Set up an assets folder.
Refer to this in your config file
Include css ref in html header and js in body.
