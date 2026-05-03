/**
 * LP整合性チェックスクリプト
 *
 * 目的：
 *   同一リポジトリ上でHPタスクとLPタスクが並行して動作する場合、
 *   HPタスクが hunter/index.html や hunter/style.css を古いバージョンで
 *   誤上書きすることがある。このスクリプトはビルド前にファイルの行数を
 *   検証し、短すぎる場合はビルドを中断してデプロイを防ぐ。
 *
 * 使用方法：
 *   package.json の "build" スクリプトから自動的に呼び出される。
 *   手動実行: node scripts/check-lp-integrity.js
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const CHECKS = [
  {
    file: 'lp/index.html',
    minLines: 400,
    description: 'HUNTER LP HTML',
  },
  {
    file: 'lp/style.css',
    minLines: 1000,
    description: 'HUNTER LP CSS',
  },
];

let hasError = false;

for (const { file, minLines, description } of CHECKS) {
  const filePath = resolve(ROOT, file);
  try {
    const content = readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').length;
    if (lines < minLines) {
      console.error(`\n❌ LP整合性チェック失敗: ${description}`);
      console.error(`   ファイル: ${file}`);
      console.error(`   行数: ${lines} 行（最低 ${minLines} 行必要）`);
      console.error(`   原因: 別タスクによる誤上書きの可能性があります。`);
      console.error(`   対処: 正しいバージョンのファイルを復元してから再ビルドしてください。`);
      hasError = true;
    } else {
      console.log(`✅ ${description}: ${lines} 行（OK）`);
    }
  } catch (err) {
    console.error(`❌ ファイルが見つかりません: ${file}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('\n🚫 ビルドを中断しました。LPファイルを確認してください。');
  process.exit(1);
}

console.log('\n✅ LP整合性チェック: すべてのファイルが正常です。ビルドを続行します。');
