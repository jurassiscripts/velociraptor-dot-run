import lume from "https://deno.land/x/lume@v0.16.3/mod.js";

const site = lume();

site.copy('static', '');

export default site;
