#encoding = utf-8#
import sys
import os
import io
import json

from jinja2 import Environment
from jinja2 import FileSystemLoader
from jinja2 import select_autoescape
"""
Module Documentation
====================

This Script uses the Jinja template engine to build the individual site pages. it does not
generate html. It simply is an advanced string substitution engine. The purpose is to
use DRY principles (Don't Repeat Yourself). it uses a template syntax to tell python 
to plug html written in other files into the base template. I am using this to create a consistent
design across all pages of the site with out copy and pasting html.
The base.html file contains the <html> <head>  and navigation components to be 
propagated to all pages.
"""

templates_path = os.path.join(os.path.dirname(__file__), 'templates')
root_env = Environment(loader=FileSystemLoader(templates_path),
                       autoescape=select_autoescape(['html', 'xml']))

# open store items.js and treat as json
with io.open('static/store/store_items.js', 'rt', encoding='utf-8') as store_file:
    file_string = store_file.read()
    _, store_json_string = file_string.split('=', 2)
    store_db = json.loads(store_json_string)


def render_blog():
    template = root_env.get_template('blog_tmp.html')
    rendered = template.render()
    with io.open('blog.html', 'wt', encoding='utf-8') as html_f:
        html_f.write(rendered)

def render_home():
    template = root_env.get_template('home_tmp.html')
    rendered = template.render()
    with io.open('home.html', 'wt', encoding='utf-8') as html_f:
        html_f.write(rendered)

def render_portfolio():
    template = root_env.get_template('portfolio_tmp.html')
    rendered = template.render()
    with io.open('portfolio.html', 'wt', encoding='utf-8') as html_f:
        html_f.write(rendered)

def render_store():
    template = root_env.get_template('store_tmp.html')
    rendered = template.render()
    with io.open('store.html', 'wt', encoding='utf-8') as html_f:
        html_f.write(rendered)

if __name__ == '__main__':
    render_blog()
    render_home()
    render_store()
    render_portfolio()