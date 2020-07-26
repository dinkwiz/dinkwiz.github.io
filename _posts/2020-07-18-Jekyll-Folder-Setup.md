---
layout: post
title:  "Jekyll: Initial Folder Set Up"
date:   2020-07-18 15:31:07 +0100
tags:
- jekyll
- git
- bash
- markdown
- ruby
project-id: jekyll-build
project-order: 5
---
Open Git Bash and navigate to the location that you want to store your site folders and files locally. 

Use pwd to see your start location. 
From here you can navigate around using the cd command. You many be happy to set up your Jekyll folder in the current location. When in your preferred location, type:

jekyll new username.github.io

Where username is your GitHub username. This will create a folder in this location with this name.

Go into this folder:

cd username.github.io

Again replace username with your GitHub username.

Tell Git to set up your Jekyll site:

bundle exec jekyll serve

This last command will provide you with a local server address. 

Go to this address in your internet browser to view the template site that has been set up. This uses a predetermined theme called minima.

To see the folder setup for this site, navigate to the folder you set up above. You can use Windows Explorer here if you are more familiar with this. You will see a folder structure similar to the one outlined here.....

### Break It

As we will build our own theme, we need to remove the minima one. 

Here I tend to start working within a text editor, such as Atom. You will need to do the following:

Delete the index.md. file
Delete the about.md file
Delete the contents of the _posts folder

Open config.yml and delete the line that refers to minima.

Open gemfile and remove the line that refers to minima.

Add a new folder called _layouts
Add a new folder called _includes
Create a file called default.html within _layouts
In the main folder, create a file called index.html

Return to Git Bash.
If the local server is still running, press Ctrl+c to end this.
Then type:
bundle

This rebuilds the site, removing minima and adding the files you created.

Once complete, you can run your site on the local server again to view it. 

jekyll serve

You will see that it has been destroyed. But don’t worry, we will rebuild it. 

—————-

You will become very familiar with the below sequence within Git Bash. When you have finished some edits to your site and want to view it in your browser, you should:

Navigate into the site folder within Git Bash (i.e. into username.github.io). Type:

jekyll serve

This will start the local server. Go to the local server address within an internet browser to view your site.

When finished, go back to Git Bash and Ctrl+c will end the session.

It can be useful to have the local server connection running alongside you text editor so saved changes are automatically applied to your site when you refresh the browser. You can then see if your edits have made the changes you expected and if not make corrections straight away.
