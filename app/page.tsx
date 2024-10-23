'use client'

import Image from "next/image";
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Home() {
  const hobbies = [
    { name: "摄影", image: "/hobby1.jpg" },
    { name: "旅行", image: "/hobby2.jpg" },
    { name: "阅读", image: "/hobby3.jpg" },
    { name: "烹饪", image: "/hobby4.jpg" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hobbyElements = containerRef.current?.querySelectorAll('.hobby-item');
    hobbyElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50">
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg"></div>
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">我的个人网站</h1>
            <div className="flex space-x-4">
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center mb-24"
        >
          <Image
            src="/profile.jpg"
            alt="个人照片"
            width={300}
            height={300}
            className="rounded-full mb-8 md:mb-0 md:mr-12"
            priority
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">你好,我是[您的名字]</h2>
            <p className="text-xl text-gray-700 mb-4">我是一名[您的职业],对[您的兴趣/专长]充满热情。</p>
            <p className="text-lg text-gray-600">这里可以添加更多关于您自己的介绍,比如您的背景、目标或者人生哲学等。</p>
          </div>
        </motion.div>

        <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">我的爱好</h3>
        <div ref={containerRef} className="space-y-24">
          {hobbies.map((hobby, index) => (
            <div key={index} className="hobby-item opacity-0 transition-opacity duration-1000">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.name}
                  width={1200}
                  height={800}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">{hobby.name}</h4>
                  <p className="text-gray-600">这里可以添加关于{hobby.name}的简短描述或者您为什么喜欢这个爱好。</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
