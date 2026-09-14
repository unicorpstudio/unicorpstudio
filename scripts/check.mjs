import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve('dist');
for(const file of ['index.html','designeros/index.html']){
 const html=await readFile(`${root}/${file}`,'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,`${file}: duplicate IDs`);
 assert.equal([...html.matchAll(/<h1\b/g)].length,1,`${file}: exactly one H1`);
 for(const match of html.matchAll(/\bhref="#([^"]+)"/g))assert(ids.includes(match[1]),`${file}: broken anchor ${match[1]}`);
 for(const match of html.matchAll(/\b(?:src|href)="(\/(?!\/)[^"]*)"/g)){
  const path=match[1].split('#')[0];
  const local=resolve(root,'.'+path+(path.endsWith('/')?'index.html':''));
  assert(local.startsWith(root+'/'),`Invalid local path ${path}`);await stat(local);
 }
 for(const match of html.matchAll(/\baria-(?:controls|labelledby|describedby)="([^"]+)"/g))for(const id of match[1].split(' '))assert(ids.includes(id),`${file}: broken ARIA reference ${id}`);
 assert(!html.includes('href="#"'),`${file}: empty link`);
 assert(!/Placeholder testimonial|free-guide/.test(html),`${file}: unpublished content`);
 console.log(`PASS ${file}: routes, assets, anchors, IDs and ARIA relationships`);
}
