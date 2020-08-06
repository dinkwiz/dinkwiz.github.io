---
layout: post
title: "The Default Layout"
excerpt: "Adding content to the default.html file."
date: 2020-07-18 20:31:07 +0100
tags:
  - jekyll
  - github
  - markdown
category: Jekyll
---

Most webpages have a very similar html structure sitting behind them. They start with a ***head*** section which provide meta information about the page. They then have a ***body*** which contains what you see on the page. The body can typically divided into a ***header***, such as a navigation bar, a ***main*** section with the main content of the page, and a ***footer***, typically with copyright info, privacy notices, etc. 

<hr class="line">

#### Layouts

The default.html is a layout and can be found in the _layout folder. You can have as many different layouts as you wish. They act as templates for your site pages.

There will be similar elements across all layouts. For example, often all pages within a site uses the same navigation bar.

As with the index.html page, we use _includes to reduce duplication. This also means that if we want to make a change to an element in the future, we won't have to go into each page and make the change. We can simply go to the _include and edit it here. Once edited, the change will be applied to each page where the include in present.

Therefore, as with the index.html page, the default.html page simply tells Jekyll where, and in which order, the _includes should be used. The only difference is that this page is written using html. If you remember the index.html page was written using YAML and markdown. 

<hr class="line">

#### html

Below is the content of the default.html file. Hopefully, it is fairly easy to read, even if you are unfamiliar with html.

    {% raw %}
      <!DOCTYPE html>
      <html lang="en">

      <head>

          {% include head.html %}

      </head>

      <body>

          <header>

                {% include header.html %}

          </header>

          <main>

                {{ content }}

          </main>

          <footer>

                {% include footer.html %}

          </footer>

      </body>

    </html>
    {% endraw %}

The html starts by saying the document is written in html and English. It then creates the sections. It has one line to open the section, a link to the _include element that should be used and then a line to close the section. 

The only section here that is different is main, which uses {% raw %}{{ content }} {% endraw %}rather than an include. Remember that default.html is a layout. It is not an actual page but a template for a page. Therefore it can be used as a template for multiple pages - and the content of these pages will differ, even if the layout is the same. 

{% raw %}{{ content }} {% endraw %} allows space for the content to be added. For example, with the homepage we created previously (index.html) we specified that we wanted the content to be a page title and then some text.
