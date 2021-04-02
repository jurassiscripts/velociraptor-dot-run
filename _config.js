import lume from 'https://deno.land/x/lume@v0.16.3/mod.js';
import markdownItAnchor from 'https://jspm.dev/markdown-it-anchor';
import cheerio from 'https://jspm.dev/cheerio';

const site = lume();

site.copy('static', '');

site.filter('groups', items => items.reduce((grouped, item) => {
    const {group} = item.data;
    (grouped[group] = grouped[group] || []).push(item);
    return grouped;
  }, {})
);

site.filter('toc', content => {
  const $ = cheerio.load(content);
  const toc = [];
  $('h1[id],h2[id],h3[id]').each((_, el) => {
    const $el = $(el);
    toc.push({
      level: Number(el.name.substring(1)),
      anchor: $el.attr('id'),
      text: $el.text().replace(/^#/, ''),
    });
  });
  return toc;
});

site.engines.get('.markdown')
  .engine
  .use(markdownItAnchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '#',
    permalinkSpace: false,
  });

export default site;
