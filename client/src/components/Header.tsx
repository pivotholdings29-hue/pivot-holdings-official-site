import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "TOP", path: "/" },
    { label: "事業内容", path: "/business" },
    { label: "商品・サービス", path: "/products" },
    { label: "ニュース", path: "/news" },
    { label: "企業情報", path: "/company" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold tracking-tight text-[#221F1F] hover:opacity-80 transition-opacity">
            pH株式会社
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={cn(
                  "text-sm font-medium transition-all relative py-2 tracking-wide",
                  location === item.path
                    ? "text-[#1A1A1A] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1A1A1A]"
                    : "text-gray-500 hover:text-[#0066FF]"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/purchase">
            <a className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#0066FF] transition-colors duration-300 flex items-center gap-2">
              購入する
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-[#221F1F]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white z-40 overflow-y-auto animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "text-lg font-bold p-4 rounded-lg transition-all flex items-center justify-between",
                    location === item.path
                      ? "bg-gray-50 text-[#1A1A1A] border-l-4 border-[#1A1A1A]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#1A1A1A]"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {location === item.path && <span className="w-2 h-2 rounded-full bg-[#1A1A1A]"></span>}
                </a>
              </Link>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}
