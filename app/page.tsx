"use client";

import React, { useState, useEffect } from 'react';

/**
 * นี่คือโค้ดเวอร์ชัน React สำหรับไฟล์ app/page.tsx
 * รวมโปรเจกต์: Clothes Website, Welfare System, Fitness System
 * แก้ไขปัญหา Error เรื่อง setState และ Hydration เรียบร้อยแล้ว
 */
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setMounted(true); 
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#f8fafc]"></div>;
  }

  return (
    <div className="min-h-screen transition-colors duration-300 antialiased bg-[#f8fafc] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc] font-sans">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />

      <main className="max-w-3xl mx-auto p-6 sm:p-12">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-32 h-32 rounded-xl overflow-hidden bg-white dark:bg-[#1e293b] shadow-sm flex items-center justify-center border border-gray-100 dark:border-slate-700">
              <img 
                src="https://i.ibb.co/rGdjS7QV/me.jpg" 
                alt="Siriwan Phoksanit" 
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=f0f9ff' }}
              />
            </div>
            <div className="flex flex-col gap-1 text-xl">
              <span>🚀</span><span>🌻</span><span>🍵</span><span>👩‍💻</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <a href="https://github.com/saisiriwan" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-gray-100 dark:bg-[#334155] hover:bg-gray-200 dark:hover:bg-[#475569] px-4 py-2 rounded-lg font-medium transition-colors border border-transparent dark:border-slate-700">
              <span className="flex items-center gap-2"><i className="fa-brands fa-github"></i> GitHub</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs text-gray-500"></i>
            </a>
            <a href="https://linkedin.com/in/siriwan-phoksanit-75489b336" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-gray-100 dark:bg-[#334155] hover:bg-gray-200 dark:hover:bg-[#475569] px-4 py-2 rounded-lg font-medium transition-colors border border-transparent dark:border-slate-700">
              <span className="flex items-center gap-2"><i className="fa-brands fa-linkedin text-blue-600"></i> LinkedIn</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs text-gray-500"></i>
            </a>
            <a href="https://my-portfolio-4223.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#1e3a8a] text-white hover:bg-blue-800 px-4 py-2 rounded-lg font-medium transition-colors">
              <span className="flex items-center gap-2"><i className="fa-regular fa-file-lines"></i> Full resume</span>
            </a>
            
            <div className="flex items-center justify-end gap-2 mt-1">
              <span className="text-sm font-medium"><i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i> Theme</span>
              <button onClick={toggleTheme} className={`w-11 h-6 rounded-full relative p-1 transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300 dark:bg-slate-600'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform transform duration-200 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}></div>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-none mb-2 text-[#0f172a] dark:text-white">Siriwan<br />Phoksanit</h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-[#f8fafc] mb-4 tracking-tight">Full stack developer</h2>
          <p className="text-lg text-gray-700 dark:text-[#94a3b8] leading-relaxed mb-6">
            Robust problem-solving skills, self-learning abilities, responsible, eager to learn new technologies.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="flex gap-2 text-xl mb-1">
                <i className="fa-brands fa-js text-yellow-500"></i>
                <i className="fa-brands fa-react text-blue-400"></i>
                <span className="text-teal-600"><i className="fa-brands fa-node"></i></span>
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">Mostly focused on Web Development (React, Node.js, HTML/CSS).</p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 text-xl mb-1">
                <i className="fa-brands fa-apple text-slate-800 dark:text-slate-200"></i>
                <i className="fa-brands fa-android text-green-600"></i>
                <i className="fa-brands fa-html5 text-orange-600"></i>
                <i className="fa-brands fa-css3-alt text-blue-600"></i>
              </div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">Also mobile application, Android HTML and CSS enthusiast.</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-8" />

        {/* Projects Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><i className="fa-solid fa-code text-blue-600"></i> Projects</h3>
          <div className="space-y-8">
            <div>
              <a href="https://github.com/saisiriwan/website-ecommerce.git" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 dark:text-[#60a5fa] hover:underline font-bold">
                <span className="mr-1">👕</span> Clothes Website
              </a>
              <p className="text-gray-700 dark:text-[#94a3b8] mt-1">E-commerce website selling clothes (JavaScript, Go, PostgreSQL).</p>
            </div>
            <div>
              <a href="https://github.com/saisiriwan/welfare-system.git" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 dark:text-[#60a5fa] hover:underline font-bold">
                <span className="mr-1">🏥</span> Web about welfare system
              </a>
              <p className="text-gray-700 dark:text-[#94a3b8] mt-1">Design website about welfare system using React, Golang, and PostgreSQL.</p>
            </div>
            <div>
              <a href="https://github.com/saisiriwan/Fitness-Project.git" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 dark:text-[#60a5fa] hover:underline font-bold">
                <span className="mr-1">🏋️‍♀️</span> Fitness Management System
              </a>
              <p className="text-gray-700 dark:text-[#94a3b8] mt-1">A web application for gym memberships and tracking progress.</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-8" />

        {/* Footer Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><i className="fa-solid fa-circle-info text-blue-600"></i> More about me</h3>
          <div className="flex flex-col gap-3">
            <a href="https://my-portfolio-4223.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#60a5fa] hover:underline flex items-center gap-3">
              <i className="fa-regular fa-file-lines w-5 text-gray-700 dark:text-gray-300"></i> Full resume
            </a>
            <a href="https://github.com/saisiriwan" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#60a5fa] hover:underline flex items-center gap-3">
              <i className="fa-brands fa-github w-5 text-gray-700 dark:text-gray-300"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/siriwan-phoksanit-75489b336" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#60a5fa] hover:underline flex items-center gap-3">
              <i className="fa-brands fa-linkedin w-5 text-blue-700"></i> LinkedIn
            </a>
              <a href="https://www.facebook.com/siriwan.phoksanit.7" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-[#60a5fa] hover:underline flex items-center gap-3">
              <i className="fa-brands fa-facebook w-5 text-blue-700"></i> Facebook
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}