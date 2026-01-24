import Layout from "@/components/Layout";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const mailtoLink = `mailto:pivotholdings29@gmail.com?subject=${encodeURIComponent(`【お問い合わせ】${formData.subject}（${formData.name}様）`)}&body=${encodeURIComponent(`
お名前: ${formData.name}
メールアドレス: ${formData.email}

お問い合わせ内容:
${formData.message}
    `)}`;

    // Open mail client
    window.location.href = mailtoLink;
    
    toast.success("メールソフトを起動しました。");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="bg-[#1A1A1A] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white">CONTACT</h1>
          <p className="text-gray-400 font-bold tracking-widest text-sm uppercase">お問い合わせ</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-16 rounded-sm border border-gray-100 shadow-xl">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="w-8 h-8 text-[#0066FF]" />
              </div>
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">お問い合わせフォーム</h2>
              <p className="text-gray-500 leading-loose">
                事業内容や商品に関するご質問、お仕事のご依頼など、<br />
                下記フォームよりお気軽にお問い合わせください。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-[#1A1A1A]">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-[#0066FF] h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[#1A1A1A]">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-[#0066FF] h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-[#1A1A1A]">
                  件名 <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="商品について / 取材依頼など"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-[#0066FF] h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[#1A1A1A]">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="お問い合わせ内容をご記入ください"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-[#0066FF] min-h-[200px] resize-y"
                />
              </div>

              <div className="pt-4 text-center">
                <Button 
                  type="submit" 
                  className="bg-[#1A1A1A] hover:bg-[#0066FF] text-white px-12 py-6 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 group text-lg font-bold w-full md:w-auto"
                >
                  メールソフトを起動して送信
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-gray-400 mt-4">
                  ※セキュリティのため、お使いのメールソフトが起動します。<br />
                  文字化け等で送信できない場合は、<a href="mailto:pivotholdings29@gmail.com" className="underline hover:text-[#0066FF]">pivotholdings29@gmail.com</a> まで直接ご連絡ください。
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
