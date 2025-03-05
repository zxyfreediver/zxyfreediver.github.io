'use client'

import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Resume() {

  const handleDownload = () => {
    window.print();
  };

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
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="text-lg"><strong>赵星雨</strong> | 男 | 31岁</p>
              <p className="text-lg flex items-center gap-2">
                <FaMapMarkerAlt /> 北京 · 6年工作经验
              </p>
            </div>
            <div className="flex gap-4 text-blue-600">
              <a href="tel:+8618310343827" className="flex items-center">
                <FaPhone className="mr-2" /> 18310343827
              </a>
              <a href="mailto:18310343827@163.com" className="flex items-center">
                <FaEnvelope className="mr-2" /> 18310343827@163.com
              </a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">教育背景</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between mb-2">
              <div>
                <p className="text-lg font-semibold">谢菲尔德大学</p>
                <p className="text-md">计算机科学与技术 · 硕士</p>
              </div>
              <p className="text-gray-500">2016.09 - 2018.07</p>
            </div>
            <div className="border-t my-4"></div>
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">北京邮电大学</p>
                <p className="text-md">物联网工程 · 学士</p>
              </div>
              <p className="text-gray-500">2012.09 - 2016.06</p>
            </div>
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
                "主导数字化平台项目，开发卫星终端定位调度系统（用户量200万+），服务国家应急厅/工信部等政府单位",
                "构建研发效能管理平台，通过流程自动化提升团队协作效率",
                "技术栈：SpringBoot+Reactjs全栈开发，使用Grafana+Prometheus实现系统监控，完成国产化PaaS组件迁移"
              ]
            },
            {
              company: "知乎",
              position: "react 前端开发工程师",
              period: "2021.3 - 2023.10",
              responsibilities: [
                "负责知乎核心业务模块（搜索/内容页/直播）前端开发，日均PV千万级",
                "设计卡片工厂系统，通过配置化开发使功能迭代效率提升60%",
                "主导客服系统前端项目重构，优化首屏加载速度至1.2s（原2.8s）"
              ]
            },
            {
              company: "北京道远教育科技有限公司",
              position: "前端开发工程师",
              period: "2019.7 - 2021.3",
              responsibilities: [
                "道远课堂官网 daoyuanketang.com 从 0 到 1 开发，包括课程播放，课后习题，课程购买支付，伴读，后台管理等系统，技术栈为 vue，express，nodejs，socket.io，element-ui 等",
                "刷题小程序以及日常宣传 h5 海报的开发，技术栈为 uniapp"
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
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">专业能力</h2>
          <div className="bg-white shadow rounded-lg p-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">技术栈</h3>
              <ul className="list-disc list-inside">
                <li>前端：React/Vue/Taro/Next.js</li>
                <li>后端：SpringBoot/FastAPI/Node.js</li>
                <li>数据库：MySQL/PostgreSQL/Redis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">其他能力</h3>
              <ul className="list-disc list-inside">
                <li>DevOps（CI/CD/Docker/K8s）</li>
                <li>英语流利（CET-6/雅思6.5）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">其他项目经验</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>使用 taro + python fastapi + supabse 开发微信小程序 &quot;闭气练习&quot; 供自由潜水员日常训练使用，可通过微信小程序搜索</li>
              <li>使用 react native 开发闭气练习 app 可通过 googleplay 或者 applestore 搜索 Apnea Plan 试用
              <li>使用 nextjs + vercel + cursor 部署自己的个人网站</li>
            </ul>
          </div>
        </section>
          
      </main>
    </div>
  );
}
