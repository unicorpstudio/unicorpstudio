import {readFile,mkdir,writeFile,copyFile,cp} from 'node:fs/promises';
import {header,hero,footer,dialog,brand,link} from '../src/components/ui.mjs';
import {agencySections,osSections} from '../src/components/sections.mjs';
const settings=JSON.parse(await readFile('src/content/settings.json','utf8'));
for(const os of [false,true]) {
 const dir=os?'dist/designeros':'dist';
 await mkdir(dir,{recursive:true});
 const title=os?'DesignerOS — Design it. Build it. Ship it. | Unicorp Studio':'Unicorp Studio — AI-Ready Brand Systems';
 const description=os?'A complete workflow for designers to build and ship real websites with AI.':'Strategy, identity, design and code brought together in one clear, scalable brand system.';
 await writeFile(`${dir}/index.html`,`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="dark light"><meta name="theme-color" content="#090909"><meta name="description" content="${description}"><title>${title}</title><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/styles.css"><script src="/app.js" defer></script></head><body class="${os?'designeros':'agency'}">${header(os)}<main id="main">${hero(os,settings)}${os?osSections(settings):agencySections(settings)}</main>${footer(os,settings)}${dialog()}</body></html>`);
}
await copyFile('src/styles/site.css','dist/styles.css');
await copyFile('src/scripts/site.js','dist/app.js');
await cp('public/assets','dist/assets',{recursive:true});
await writeFile('dist/favicon.svg','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="6" fill="#AEFF00"/><text x="9" y="46" fill="black" font-family="Arial" font-size="48">u.</text></svg>');
await writeFile('dist/404.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found | Unicorp Studio</title><link rel="stylesheet" href="/styles.css"></head><body><main class="not-found">${brand()}<h1>Nothing here.<br>Yet.</h1>${link('Back to the studio','/')}</main></body></html>`);
console.log('Built / and /designeros/ with shared design system and assets.');
