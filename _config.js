import lume from "https://deno.land/x/lume@v0.16.3/mod.js";

const site = lume();

site.copy('static', '');

site.filter('groups', items => items.reduce((grouped, item) => {
    const {group} = item.data;
    (grouped[group] = grouped[group] || []).push(item);
    return grouped;
  }, {})
);

export default site;
