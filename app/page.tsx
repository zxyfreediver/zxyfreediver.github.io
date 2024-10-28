'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import hobbyCode from '@/public/images/hobby-code.jpeg';
import hobbyDive from '@/public/images/hobby-dive.jpg';
import hobbyCooking from '@/public/images/hobby-cooking.jpeg';
import hobbyPet from '@/public/images/hobby-pet.jpg';
import TravelMap from '@/app/components/TravelMap';

const hobbies = [
  {
    name: "自由潜水",
    image: hobbyDive,
    description: [
      { text: 'AIDA 4 星自由潜水员，PADI 自由潜教练'},
      { text: '静态闭气 4 分 32 秒，动态双璞泳池 81 米'},
      { text: '双璞下潜最大深度 32 米'},
      { text: '我与海洋生物的合影', link: "/diving", linkText: "点击查看"}
    ]
  },
  {
    name: "宠物",
    image: hobbyPet,
    description: [
      { text: "我非常喜欢宠物，家里有 2 只狗" },
      { text: "一只叫妮娜，是一只流浪的串串，从 2 岁开始收养" },
      { text: "一只叫二毛，是只金毛，从 3 个月开始收养" },
      { text: '我的宠物', link: "/pet", linkText: "点击查看"}
    ]
  },
  {
    name: "编程",
    image: hobbyCode,
    description: [
      { text: "擅长前端开发，喜欢研究新技术" },
      { text: "技术栈是 React, Vue, Node.js，Taro，Uni-App 等"},
      { text: "我的个人项目", link: "/projects", linkText: "点击查看"},
      { text: "我的 gitHub", link: "https://github.com/zxyfreediver", linkText: "点击查看"}
    ]
  },
  {
    name: "美食",
    image: hobbyCooking,
    description: [
      { text: "喜欢各种美食，不限国家，不限地域" },
      { text: "英国没有美食"},
      { text: '我的美食主页', link: "https://your-cooking-blog.com", linkText: "点击查看"}
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center mb-6"
        >
          <Image
            src={hobbyPet}
            alt="个人照片"
            width={300}
            height={300}
            className="rounded-full mb-8 md:mb-0 md:mr-12"
            priority
          />
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">我的个人空间</h2>
            <p className="text-xl text-gray-700 mb-4">软件工程师</p>
            <p className="text-lg text-gray-600">喜欢潜水，宠物，编程，美食</p>
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
        
        <div className="mt-24">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">我的足迹</h3>
          <TravelMap />
        </div>
      </main>
    </div>
  );
}
