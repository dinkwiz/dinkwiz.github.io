---
layout: post
title:  "The Easy Way"
date:   2020-07-14 15:31:07 +0100
tags:
- jekyll
- github
- markdown
categories:
- jekyll
---
#### GitHub and GitHub Pages

GitHub Pages supports a number of Jekyll Themes and is the simplest and easiest way to get started with a Jekyll site. All you need is a free GitHub account. If you don't already have one, you can sign up for a GitHub account at [GitHub.com](http://github.com).

The first method below will create a very simple website with a single page. It's a useful way to experiment with GitHub Pages but unlikely to give you all the features you want. The second method uses a Jekyll Theme and builds a site with multiple pages, blog and navigation. There will be a lot going on in the back-end of your site which is not explained here. While you can add content, changes to the layout and design of your site will be limited.

If, like me, you want to customise your site, neither of these options will provide you with the functionality you'll need. However, if you are new to Jekyll, I suggest you start here. Both methods are quick to set up and will give you a feel for how Jekyll works before starting on your own project.

#### Method 1: Single Page Site through GitHub

1. **Create a GitHub Repository**
   Once you have a GitHub account, create a new repository. A repository is just GitHub's name for a folder. Name the repository using your GitHub Username in the following format:

> *username*.github.io

All the other settings can remain as the default. 

2. Once created, you will be redirected to your empty repository. 
3. Go to Settings and scroll down until you get to the GitHub Pages section.

4. Select a theme from the options available. Your site will now be available at [*username*.github.io].
Content for your site can be edited within the index.html file.

#### Method 2: Using a Jekyll Theme.

There are a number of free themes available for Jekyll. These have pre-set layouts and pages, such as About, Blog and Contact.

1. Go to a site such as [Jekyll Themes](https://jekyllthemes.io/free) and browse the themes to find one you like the look of.

2. Once you have chosen a theme, click the Get on GitHub button. This will redirect you to GitHub. There will be some useful information on this page about the theme which you might want to read through.

3. Fork the GitHub repository you are redirected to. Fork simply means it will create a copy of the repository in your GitHub account.

4. You will be redirected to a new repository under your GitHub account. Go to settings and rename the repository to:

> *username*.github.io

5. Your site will now be set up at [*username*.github.io]. You will just need to make a few changes within the config.yml file.

6. Click on this file and the pencil to edit. Personalise the different options, such as your site url, site title, etc. Once all changes have been made, commit (i.e. save) the changes at the bottom of the page.

7. Now all that is left is to edit the content. Your site may have pages such as about.md which you will need to customise. 


#### Markdown
You will need to know some basic markdown to edit these pages. Markdown really is a simple way of formatting text and nothing to be scared of!

[Find out about markdown here.](link)

#### YAML
Within Jekyll pages, there will be some content at the top of each page separated by three dashes. This is known as YAML. You must keep this content there as it tells the site how it should be built. For example, the layout section tells the site what the page should look like. 

#### Blog Posts
Mpst Jekyll themes will have a blog section. This is probably the part of the site that you will edit and add to on a regular basis. All Jekyll sites have a \_posts folder. Each file in here relates to a blog post.

Each post must be named in the correct format and have the same YAML information (at the top of the page), such as date, title, etc. Most themes include a template or example post to show you what content is needed.

To start a new blog post: I suggest you edit an existing post and copy the YAML information (including dashes at the start and end). you can then:

a. Add a new blank file.

b. Name the file in the Jekyll format:

> yyyy-mm-dd-title.md

c. Paste the YAML information from a previous post and edit date, title. etc.

d. Add your post content under the final YAML dashes using markdown to format it.

e. Commit the file and view it in your site's blog.
