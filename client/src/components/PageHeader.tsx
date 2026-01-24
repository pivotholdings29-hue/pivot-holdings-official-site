import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
}

export default function PageHeader({ title, subtitle, imageSrc }: PageHeaderProps) {
  return (
    <div className="relative bg-[#1A1A1A] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image (Optional) */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 font-english tracking-wide text-white"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 font-bold tracking-widest text-sm uppercase"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
