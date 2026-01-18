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
    { label: "商品紹介", path: "/products" },
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
            pivotHoldings
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#00FF00] relative py-2",
                  location === item.path
                    ? "text-[#221F1F] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00FF00]"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/purchase">
            <Button 
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold rounded-md px-6 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              購入
            </Button>
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
                    "text-lg font-bold p-4 rounded-xl transition-all flex items-center justify-between",
                    location === item.path
                      ? "bg-gray-50 text-[#221F1F] border-l-4 border-[#00FF00]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#221F1F]"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {location === item.path && <span className="w-2 h-2 rounded-full bg-[#00FF00]"></span>}
                </a>
              </Link>
            ))}
            <div className="pt-6 border-t border-gray-100 mt-2">
              <Link href="/purchase">
                <Button 
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-6 text-lg rounded-xl shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  購入ページへ
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
