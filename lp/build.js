#!/usr/bin/env node
/**
 * lp/build.js
 *
 * lp/sections/ 以下のファイルを番号順に結合して lp/index.html を生成する。
 *
 * 使い方:
 *   node lp/build.js
 *
 * sections/ のファイルを編集した後、このスクリプトを実行して
 * lp/index.html を再生成してください。
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SECTIONS_DIR = join(__dirname, 'sections');
const OUTPUT_FILE = join(__dirname, 'index.html');

// sections/ のファイルを番号順に取得
const files = readdirSync(SECTIONS_DIR)
  .filter(f => f.endsWith('.html'))
  .sort(); // ファイル名が 01_ 02_ ... の連番なので sort() で順序が決まる

if (files.length === 0) {
  console.error('❌ sections/ に HTML ファイルが見つかりません');
  process.exit(1);
}

// 全セクションを結合
const html = files
  .map(f => {
    const content = readFileSync(join(SECTIONS_DIR, f), 'utf-8');
    return `<!-- [section: ${f}] -->\n${content}`;
  })
  .join('\n');

writeFileSync(OUTPUT_FILE, html, 'utf-8');

const lineCount = html.split('\n').length;
console.log(`✅ lp/index.html を生成しました（${lineCount} 行）`);
console.log(`   結合したセクション: ${files.join(', ')}`);
