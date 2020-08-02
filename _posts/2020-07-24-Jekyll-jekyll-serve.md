---
layout: post
title: "jekyll serve"
excerpt: "Putting all the elements of your site together."
date: 2020-07-24 15:31:07 +0100
tags:
  - jekyll
  - git
  - bash
  - markdown
  - ruby
category: Jekyll
---

If you've followed the process up to now, you should have all the elements ready for a basic Jekyll site.

Here we use Git Bash to tell Jekyll to put our site together. 

1. Open Git Bash and navigate to your site folder. 

   > Git Bash will open in your root folder. To find out which folder this is type:

       pwd

   > To navigate into a new folder, use the cd command. For example, if you are in your user folder and your site is saved in your Documents, you would type:

       cd documents/username.github.io

   **where username is your GitHub username that you will haev used in your site folder name.*

2. Next, tell Jekyll to turn your folder into a Jekyll site. Type:

        jekyll serve
  
   > If this doesn't work, try the following: 

        bundle exec jekyll serve

If an error appears, this is likely to be either because:

- something went wrong when installing Ruby and Jekyll. Usually the error code will mention not being able to find a bundle or gem. Bundles and Gems are what Ruby and Jekyll are based on. 

- there is an error in your site folder. Maybe you typed something incorrectly or a file is missing. Usually the error code will explain what is missing or what jekyll does not understand. 

<hr class="line">

#### What success looks like

When the jekyll serve command has succeeded, Git Bash will provide you with a Server address in the last few lines of code it returns. For exmaple:

    Server address: http://127.0.0.1:4000/

Enter this address in your web browser and your site should appear. It will be very basic at this stage as there we haven't added any styles yet.

![basic html site](/assets/img/posts/basic-html-site.png#scale50"Basic html site")

When you have finished previewing your site, go back to Git Bash and press **ctrl+c**. This will end your local server connection.

<hr class="line">

Congratulations on creating your site! It may look very basic at this stage but the structure is now set up and the fun can start!

You also know how your Jekyll site is set up using pages, layouts and includes - so if you want to add new pages or elements you'll understand how to do this.

<hr class="line">

The next stage is to add content to your style.css file. Here we can add colour, fonts and arrange the elements on each page. 