import {build} from 'esbuild';
import {cp,mkdir} from 'node:fs/promises';
await mkdir('docs',{recursive:true});
await cp('public','docs',{recursive:true});
await build({entryPoints:['src/main.jsx'],bundle:true,outdir:'docs/app',minify:true,splitting:true,format:'esm',jsx:'automatic',target:['es2020'],loader:{'.woff2':'file'}});
