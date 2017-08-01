#encoding = utf-8#
import sys
import os
import io

from jinja2 import Environment
from jinja2 import FileSystemLoader
from jinja2 import select_autoescape

templates_path = os.path.join(os.path.dirname(__file__), 'templates')
root_env = Environment(loader=FileSystemLoader(templates_path),
                       autoescape=select_autoescape(['html', 'xml'])
)
def render_blog_page(base, child):
    pass

def render_home_page(base, child):
    pass

def render_portfolio():
    template = root_env.get_template('portfolio.html')
    rendered = template.render()
    with io.open('portfolio.html', 'wt', encoding='utf-8') as html_f:
        html_f.write(rendered)



def render_store_page(base, child):
    pass

if __name__ == '__main__':
    render_portfolio()