import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
const { zip } = require('zip-a-folder');
const cheerio = require("cheerio");
const colors = require('colors');

const p = require('../package.json');

console.log('\n');
console.log('-----------------------'.yellow);
console.log('\n');

let src = `// [v${p.version}] ${new Date()} \n`;

let files = [
  'node_modules/littlejsengine/dist/littlejs.min.js',
  'dist/index.js'
];
files.forEach((file) => {
  src += fs.readFileSync(file, 'UTF8');
});
console.log(' - Merging JS files'.yellow);


const buffer = fs.readFileSync('index.html');
const $ = cheerio.loadBuffer(buffer);
$("script").remove();
$('body').append(`<script>${src}</script>`)

fs.writeFileSync('dist/index.html', $.html());
console.log(' - Generated HTML'.yellow);

async function zipIt(zipName) {
  await zip('dist', zipName);
}

fs.unlink('dist/index.js', () => {
  console.log(' - Removed dist/index.js'.yellow)
});

const zipName = p.name + '.zip';
zipIt(zipName)
.then(() => {
    fs.rename(zipName, `dist/${zipName}`, function (err) {
      if (err) throw err
      console.log(` - Created dist/${zipName}`.yellow)
      console.log('\n');
      console.log('Finished!'.green);
      console.log('\n');
    });
  })
