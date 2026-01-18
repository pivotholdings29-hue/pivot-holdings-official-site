import { Link } from "wouter";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#221F1F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">pivotHoldings</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>〒153-0061</p>
              <p>東京都目黒区中目黒1丁目1-72-504</p>
              <p>法人番号：3011001174688</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#00FF00] font-english">LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/business">
                  <a className="hover:text-[#00FF00] transition-colors">事業内容</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="hover:text-[#00FF00] transition-colors">商品紹介</a>
                </Link>
              </li>
              <li>
                <Link href="/news">
                  <a className="hover:text-[#00FF00] transition-colors">ニュース</a>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <a className="hover:text-[#00FF00] transition-colors">企業情報</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-[#00FF00] transition-colors">お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#00FF00] font-english">CONTACT</h4>
            <div className="flex flex-col gap-4">
              <a 
                href="https://www.instagram.com/p/DTk72DXETGZ/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#E1306C] transition-colors">
                  <Instagram size={20} />
                </div>
                <span>Instagram</span>
              </a>
              
              <Link href="/contact">
                <a className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>お問い合わせフォーム</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} pivotHoldings Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300 cursor-pointer">プライバシーポリシー</span>
            <span className="hover:text-gray-300 cursor-pointer">特定商取引法に基づく表記</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
