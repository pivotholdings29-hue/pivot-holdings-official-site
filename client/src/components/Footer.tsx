import { Link } from "wouter";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#221F1F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">pH</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>〒153-0061</p>
              <p>東京都目黒区中目黒1丁目1-72-504</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-500 font-english tracking-widest">LINKS</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/business">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    事業内容
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    商品紹介
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/choco-ai">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    ちょこAI。
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    ニュース
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    企業情報
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/purchase">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    購入方法
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-white transition-colors"></span>
                    お問い合わせ
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-gray-500 font-english tracking-widest">CONTACT</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.instagram.com/gibierland/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                  <Instagram size={18} />
                </div>
                <span className="text-sm">Instagram</span>
              </a>

              <a 
                href="https://line.me/R/ti/p/@278bzuez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#06C755] group-hover:bg-[#06C755] group-hover:text-white transition-all">
                  <MessageCircle size={18} />
                </div>
                <span className="text-sm">公式LINE</span>
              </a>
              
              <Link href="/contact">
                <a className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">お問い合わせフォーム</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} pH Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <a className="hover:text-gray-300 cursor-pointer">プライバシーポリシー</a>
            </Link>
            <Link href="/legal">
              <a className="hover:text-gray-300 cursor-pointer">特定商取引法に基づく表記</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
