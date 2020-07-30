---
layout: post
title:  "Python: Changing the Jupyter Root Folder Location"
date:   2020-08-02 00.00
tags:
- python
- pandas

categories: python
---

Python: Changing the Jupyter Notebook Root Folder Location

When opening Jupyter Notebook, the Home Page that opens in your browser will display a folder. By default, on Windows this will be the user folder on the C:\ drive.

To change this folder, you need to edit the jupyter_notebook_config file. This will be saved in a folder named .jupyter

To find it, you can open Anaconda Prompt and type the command:

jupyter notebook --generate-config

This will provide you with the location of the file. You can then close Anaconda Prompt. This was just used to find the file’s location.

Once located, open the file using a text editor (NotePad, Atom, etc).

You’ll need to find a line that says:

#c.NotebookApp.notebook_dir = ''

For me this line was around row 260.

    Remove the # at the start of this line.
    Add the path that you want jupyter notebooks to open in the quotation marks(”).
    Replace all slashes in your file path with double back slashes (\\). For example: 

1
	
c.NotebookApp.notebook_dir ='C:\\Users\\name\\Desktop\\foldername'

4. Save the file and close it.

Now when you open Jupyter Notebook it will open in this new location.