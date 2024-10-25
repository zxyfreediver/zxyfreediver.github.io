'use client'

import Image from "next/image";
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import hobby1 from '@/public/images/hobby-code.jpeg';
import hobby2 from '@/public/images/hobby-dive.jpg';
import hobby3 from '@/public/images/hobby-cooking.jpeg';

const hobbies = [
  {
    name: "自由潜水",
    image: hobby2,
    description: [
      { text: 'AIDA 4 星自由潜水员，PADI 自由潜教练'},
      { text: '泳池：静态闭气 4 分 32 秒，动态双璞 PB 81 米'},
      { text: '开放水域：双璞下潜最大深度 32 米'},
      { text: '喜欢大海，喜欢自由潜，潜遍全世界的海'},
      { link: "https://www.instagram.com/zxyfreediver/", linkText: "查看我与海洋生物的合影"}
    ]
  },
  {
    name: "宠物",
    image: hobby2,
    description: [
      { text: "喜欢养宠物" },
      { text: "家里有 2 只狗" },
    ]
  },
  {
    name: "编程",
    image: hobby1,
    description: [
      { text: "擅长前端开发，喜欢研究新技术" },
      { text: "技术栈是 React, Vue, Node.js，Taro，Uni-App 等"},
      { text: '想成为一名全栈独立开发者，过数字游民的旅居生活'},
      { text: "查看我的项目", link: "https://github.com/zxyfreediver", linkText: "GitHub" }
    ]
  },
  {
    name: "美食",
    image: hobby3,
    description: [
      { text: "享受烹饪的乐趣，创造美味，与亲朋好友分享" },
      { text: "我的食谱博客", link: "https://your-cooking-blog.com", linkText: "访问博客" }
    ]
  },
];

export default function Home() {

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
            <div className="flex space-x-4 items-center">
              {/* <a href="/resume" className="text-gray-600 hover:text-gray-900 transition-colors">
                简历
              </a> */}
              <a href="mailto:18310343827@163.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://github.com/zxyfreediver" className="text-gray-600 hover:text-gray-900 transition-colors">
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
          className="flex flex-col md:flex-row items-center mb-6"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">我的个人空间</h2>
            <p className="text-xl text-gray-700 mb-4">软件工程师</p>
            <p className="text-lg text-gray-600">喜欢潜水，编程，美食，宠物</p>
          </div>
        </motion.div>

        <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">热爱生活，热爱工作</h3>
        <div ref={containerRef} className="space-y-24">
          {hobbies.map((hobby, index) => (
            <div key={index} className={`hobby-item opacity-0 transition-opacity duration-1000 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2">
                <Image
                  src={hobby.image}
                  alt={hobby.name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <motion.div 
                className="w-1/2 flex items-center p-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">{hobby.name}</h4>
                  {hobby.description.map((desc, idx) => (
                    <p key={idx} className="text-gray-600 mb-2">
                      {desc.text}
                      {desc.link && (
                        <>
                          {" "}
                          <a href={desc.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            {desc.linkText}
                          </a>
                        </>
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
