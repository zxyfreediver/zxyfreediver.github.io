'use client'

import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700">
      <header className="sticky top-0 z-50">
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg"></div>
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">我的个人网站</Link>
            <div className="flex space-x-4 items-center">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
                首页
              </Link>
              <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a href="https://github.com/yourusername" className="text-gray-700 hover:text-gray-900 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">个人简历</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">个人信息</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-lg mb-2"><strong>姓名：</strong>赵星雨</p>
            <p className="text-lg mb-2 flex items-center"><FaEnvelope className="mr-2" /> 18310343827@163.com</p>
            <p className="text-lg mb-2 flex items-center"><FaPhone className="mr-2" /> +86 18310343827</p>
            <p className="text-lg mb-2 flex items-center"><FaMapMarkerAlt className="mr-2" /> 北京，中国</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">教育背景</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-lg mb-2"><strong>谢菲尔德大学</strong></p>
            <p className="text-md mb-1">硕士研究生 - 计算机科学与技术</p>
            <p className="text-md">年份：2016 - 2018</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 mt-4">
            <p className="text-lg mb-2"><strong>北京邮电大学</strong></p>
            <p className="text-md mb-1">本科 - 物联网工程</p>
            <p className="text-md">年份：2012 - 2016</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">工作经验</h2>
          {[
            {
              company: "中国电信卫星公司",
              position: "软件工程师",
              period: "2023.10 - 至今",
              responsibilities: [
                "负责卫星通信系统的软件开发和维护，天通智能调度平台，https://www.ctsat.com:60902",
                "内部系统开发，包括工单系统、网管系统等",
                "运维，包括服务器、网络、数据库等，使用中国电信自研的 ccse，telepg 等国产化 paas 组件替代 k8s，postgresql 等工具"
              ]
            },
            {
              company: "知乎",
              position: "react 前端开发工程师",
              period: "2021.3 - 2023.10",
              responsibilities: [
                "负责知乎社区功能的前端开发，主要负责搜索模块的卡片展示和日常迭代开发，自研了卡片工厂系统，使得卡片可以灵活配置，极大地简化了开发流程，提高开发效率",
                "负责知乎客服系统的优化，升级重构了客服系统的前端技术栈和UI设计，提高了开发效率，优化了用户体验。"
              ]
            },
            {
              company: "北京道远教育科技有限公司",
              position: "开发前端工程师",
              period: "2019.7 - 2021.3",
              responsibilities: [
                "使用 vue，uni-app 从 0 到 1 开发了多个项目，包括官网、管理后台、小程序等"
              ]
            },
            {
              company: "同方计算机股份有限公司",
              position: "软件工程师",
              period: "2018.5 - 2019.7",
              responsibilities: [
                "维护 数学+ 项目，使用 vue 开发，负责日常迭代开发，包括新功能开发、bug 修复、性能优化等"
              ]
            }
          ].map((job, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6 mb-4">
              <p className="text-lg mb-2"><strong>{job.company}</strong> - {job.position}</p>
              <p className="text-md mb-2">{job.period}</p>
              <ul className="list-disc list-inside">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">其他</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>CET-6, 雅思 6.5, 可以熟练阅读英文文档。</li>
              <li>喜欢研究技术，喜欢研究新技术，喜欢研究开源项目。</li>
              <li>潜水爱好者，padi 自由潜教练，ow 潜水员，aida 四星自由潜水员。</li>
              <li>个人主页: <a href="https://zxy.zln2.fun" target="_blank" rel="noopener noreferrer">zxy.zln2.fun</a></li>
              <li>github 主页: <a href="https://github.com/zxyfreediver" target="_blank" rel="noopener noreferrer">https://github.com/zxyfreediver</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
