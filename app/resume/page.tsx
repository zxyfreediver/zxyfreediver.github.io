'use client'

import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    window.print();
  };

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
      setIsLoading(false);
    }

    return () => {
      if (header) {
        header.style.display = 'block';
      }
    };
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-700">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">个人简历</h1>
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            下载 PDF
          </button>
        </div>
        
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
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">工作经历</h2>
          {[
            {
              company: "中国电信卫星公司",
              position: "软件工程师",
              period: "2023.10 - 至今",
              responsibilities: [
                "负责数字化平台的开发管理工作，卫星终端定位调度平台的软件设计开发和维护，天通智能调度平台，https://www.ctsat.com:60902。",
                "内部系统全栈开发，管理卫星终端的合规性的管理平台提供市场部使用；为卫星研究院开发地球站北斗园区定位小程序以及辅助研究的小工具；设计并开发研发效能管理平台，简化内部审核流程以促进企业数字化转型。涉及的技术栈有 redis，mysql，java，vue，react，springboot 等。",
                "一些运维工作，服务器、网络打通、数据库的管理；使用电信研发云规范外包人员的 git 代码管理，配置项目的 CI/CD 使流程更加规范；使用中国电信自研的 ccse，telepg 等国产化 paas 组件替代 k8s，postgresql；使用 grafana，prometheus，skywalking 等工具搭建图表绘制和自动化监控报警系统。"
              ]
            },
            {
              company: "知乎",
              position: "react 前端开发工程师",
              period: "2021.3 - 2023.10",
              responsibilities: [
                "负责知乎社区功能的前端开发，主要负责知乎网站建设和 app 端的前端页面开发。包括，搜索页，回答页，文章页，首页，个人主页，直播功能等",
                "搜索模块的卡片展示，自研了卡片工厂系统，使得卡片可以灵活配置，极大地简化了开发流程，提高开发效率。",
                "负责知乎客服系统的优化，升级重构了客服系统的前端技术栈和 UI 设计，提高了开发效率，优化了用户体验。"
              ]
            },
            {
              company: "北京道远教育科技有限公司",
              position: "前端开发工程师",
              period: "2019.7 - 2021.3",
              responsibilities: [
                "从 0 到 1 开发了多个项目，包括官网、管理后台、小程序等，技术栈为 vue，uni-app"
              ]
            },
            {
              company: "同方计算机股份有限公司",
              position: "软件工程师",
              period: "2018.5 - 2019.7",
              responsibilities: [
                "维护 数学+ 网站项目，负责日常迭代开发，包括新功能开发、bug 修复、性能优化等，技术栈为 vue， java springboot"
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
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">其他项目经验</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>开发微信小程序 “闭气练习” 以供自由潜水员日常训练使用，可通过微信小程序搜索，目前用户量几百个，日活几十个</li>
              <li>使用 react native 并利用 ai 画图开发小游戏，并开源到 github 主页，可访问<a href="https://github.com/zxyfreediver/react-native-game" target="_blank" rel="noopener noreferrer"> 我的 github 主页 </a>查看，点击链接下载体验 <a href="https://expo.dev/accounts/zhaoxingyu93/projects/dragon-tiger-fight" target="_blank" rel="noopener noreferrer">https://expo.dev/accounts/zhaoxingyu93/projects/dragon-tiger-fight</a></li>
              <li>使用 nextjs + vercel + cursor 部署自己的个人网站</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">个人介绍</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>CET-6, 雅思 6.5, 可以熟练阅读英文文档。</li>
              <li>喜欢研究技术，喜欢研究新技术，喜欢研究开源项目。</li>
              <li>熟练使用 ai 工具辅助编程</li>
              <li>个人主页: <a href="https://zxy.zln2.fun" target="_blank" rel="noopener noreferrer">zxy.zln2.fun</a></li>
              <li>github 主页: <a href="https://github.com/zxyfreediver" target="_blank" rel="noopener noreferrer">https://github.com/zxyfreediver</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
