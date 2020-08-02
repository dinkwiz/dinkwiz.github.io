---
layout: post
title:  "Setting up the folder structure"
excerpt: "Creating the folders and files needed for a Jekyll site."
date:   2020-07-17 15:31:07 +0100
tags:
- jekyll
- markdown
category: Jekyll
---
A Jekyll site has a specific folder structure and there are a few core elements that you must include. These tell Jekyll how to build your site. 

To begin, we will build the site locally (i.e. on your computer). Once it's built we can publish it to GitHub, or another host you chose. 

1. Create a folder in the location that you want to store you site locally. For example, in My Documents or on your Desktop. Name this folder based on your GitHub username. 

    > username.github.io

    Within this folder, we will set up the structure for your Jekyll site.

2. Create the following folders within your username.github.io folder:

    - _includes
    - _layouts
    - _posts

3. Create the following files within your username.github.io folder:

    - _config.yml
    - index.html
    - about.html
    - blog.html

4. Within the _layouts folder create a file called:

    - default.html

5. Within the _posts folder create a file called:

    - 2020-08-01-Example.md

6. Within the _includes folder create files called:

    - head.html
    - header.html
    - post-list.html
    - page-title.html
    - footer.html

You might find it easier to create the files using NotePad or your Text Editor. Remember to use the underscore ( _ ) where it is included in the names above.

<hr class="line">

And that's it. You folder should now look like this:

- _config.yml
- index.html
- about.html
- blog.html
- _includes
    - head.html
    - header.html
    - post-list.html
    - page-title.html
    - footer.html
- _layouts
    - default.html
- _posts
    - 2020-08-01-Example-Post.md

<hr class="line">

Next up we will look each of these items in turn, understanding what they do and adding content to them to create your site. 
