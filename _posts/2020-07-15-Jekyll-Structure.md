---
layout: post
title:  "Jekyll: Structure Overview"
date:   2020-07-15 15:31:07 +0100
tags:
- jekyll
- github
- markdown
project-id: jekyll-build
project-order: 2
---
Most Jekyll sites have a similar structure. Here I explain the elements of a basic Jekyll site. This structure would allow you to create and customise the most common elements of a Jekyll site.

### config.yml
This is the most important file. It contains the information from which the site is built.

### index.html
This is the main homepage for the site.

### other standalone pages
These are similar to the the index.html and are set up for other elements, such as an about.html for an About us page, contact.html for a Contacts page and so on.

### Underscore folders
The underscore tells Jekyll to include these in its build. Folders which begin with an underscore can include:

\_posts
This folder will include a markdown file for each blog post.

\_layouts
This folder will contain different page layouts within your site. Each page layout is built in html and I suggest you start with a standard one - default.html

\_includes
It’s likely you will want to use the same elements across multiple page layouts. For example, although the structure of a blog post may differ from the homepage, you will probably want a consistent navigation bar on all pages. Includes allow you to write the html for an element in one place and then link to it in your page layouts.

If you want to make a change to the navigation bar, you would then only need to change the include file and not each individual layout file. This might not seem too much of a benefit to begin with when you have one or two page layouts but if you site grows it will save a lot of time. It also keeps all your html code in small sections, which as a newcomer to html makes it much less daunting!

Assets - CSS, JavaScript, Images
This is where the customisation happens. These files can be stored in the main folder, but often kept in an Assets folder. They will include:

•	style.css (CSS to add style)
•	app.js (JavaScript to add animations, etc)
•	img folder (images used in the site)


All other files are automatically created when the Jekyll site is built. They don’t need to be edited at all and can be ignored.
