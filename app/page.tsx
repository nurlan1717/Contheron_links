"use client";

import { motion } from "framer-motion";
import { Globe, Send, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Instagram = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Whatsapp = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.478-1.638-1.652-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
  </svg>
);

const links = [
  {
    title: "Vebsayt",
    description: "Əsas platformamızı ziyarət edin",
    icon: Globe,
    href: "https://contheron.com",
    color: "group-hover:text-blue-400",
    bgHov: "group-hover:bg-blue-400/10",
  },
  {
    title: "Instagram",
    description: "Yenilikləri izləyin və hekayəmizə qoşulun",
    icon: Instagram,
    href: "https://www.instagram.com/contheron_com", 
    color: "group-hover:text-pink-500",
    bgHov: "group-hover:bg-pink-500/10",
  },
  {
    title: "LinkedIn",
    description: "Professional şəbəkəmizə qoşulun",
    icon: Linkedin,
    href: "https://linkedin.com/company/contheron",
    color: "group-hover:text-blue-500",
    bgHov: "group-hover:bg-blue-500/10",
  },
  {
    title: "WhatsApp",
    description: "+994 51 359 69 67",
    icon: Whatsapp,
    href: "https://wa.me/994513596967",
    color: "group-hover:text-green-500",
    bgHov: "group-hover:bg-green-500/10",
  },
  {
    title: "E-poçt",
    description: "Bizə yazın",
    icon: Mail,
    href: "mailto:contheroncom@gmail.com",
    color: "group-hover:text-amber-500",
    bgHov: "group-hover:bg-amber-500/10",
  },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 overflow-hidden z-10 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Animated Elements - Construction Theme */}
      <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      {/* Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(245,158,11,0.15)_0%,rgba(24,24,27,1)_100%)] pointer-events-none" />

      <div className="w-full max-w-lg mx-auto flex flex-col items-center relative z-20">
        {/* Header / Logo section */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="flex flex-col items-center mb-10 text-center"
        >
          <div className="relative mb-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-zinc-900 border-2 border-zinc-800 shadow-[0_0_50px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20 backdrop-blur-xl overflow-hidden group">
             <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-amber-500/20 via-transparent to-orange-600/20" />
             <Image 
               src="/conlogo.jpg" 
               alt="Contheron Logo" 
               fill
               className="object-cover p-1 rounded-2xl transition-transform duration-500 group-hover:scale-105"
               priority
               sizes="(max-width: 112px) 100vw, 112px"
             />
             {/* Industrial Corner Accents */}
             <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-amber-500/50 z-10 pointer-events-none"></div>
             <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-amber-500/50 z-10 pointer-events-none"></div>
             <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-amber-500/50 z-10 pointer-events-none"></div>
             <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-amber-500/50 z-10 pointer-events-none"></div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 mb-3 drop-shadow-sm uppercase">
            Contheron
          </h1>
          <p className="text-sm sm:text-base font-medium text-amber-500/80 max-w-[320px] leading-relaxed">
            AI əsaslı təhlükəsizlik və monitorinq sistemləri
          </p>
        </motion.div>

        {/* Links section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col gap-4 mb-12"
        >
          {links.map((link, i) => (
            <motion.div key={i} variants={itemVariants} className="w-full">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative w-full flex items-center p-4 gap-5 bg-zinc-900/80 backdrop-blur-md overflow-hidden",
                  "border-l-4 border-l-amber-500/50 border-t border-r border-b border-zinc-800 hover:border-amber-500/80 transition-all duration-300 ease-out",
                  "hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.2)] hover:-translate-y-1 rounded-sm"
                )}
                aria-label={link.title}
              >
                {/* Construction Warning Tape Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-out pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f59e0b_10px,#f59e0b_20px)]" />

                <div
                  className={cn(
                    "flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-zinc-800/80 shadow-inner ring-1 ring-white/5 transition-all duration-300 text-zinc-300",
                    "group-hover:scale-110",
                    link.color
                  )}
                >
                  <link.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col z-10 relative">
                  <span className="text-lg font-bold text-zinc-200 group-hover:text-amber-500 transition-colors duration-300 uppercase tracking-wide">
                     {link.title}
                  </span>
                  <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 line-clamp-1">
                     {link.description}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional About/Contact */}
        <motion.div 
           variants={itemVariants}
           initial="hidden"
           animate="visible"
           className="w-full flex-col items-center justify-center gap-5 pt-8 mt-2 hidden sm:flex border-t-2 border-zinc-800 border-dashed relative"
        >
           <p className="text-center text-sm/relaxed text-zinc-400 max-w-sm">
             Ağıllı sensorlar və AI alqoritmləri ilə müəssisələrin təhlükəsizliyini təmin edirik.
           </p>
           <a 
             href="mailto:contheroncom@gmail.com"
             className="group flex items-center gap-2 px-6 py-2.5 rounded-sm bg-zinc-900 border-2 border-zinc-800 hover:border-amber-500 text-sm font-bold text-zinc-300 hover:text-amber-400 transition-all duration-300 shadow-lg"
           >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
              BİZİMLƏ ƏLAQƏ SAXLAYIN
           </a>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 text-center text-xs font-bold text-zinc-500 uppercase tracking-widest"
        >
          <p>© {new Date().getFullYear()} Contheron. AI Security Systems.</p>
        </motion.footer>
      </div>

    </main>
  );
}