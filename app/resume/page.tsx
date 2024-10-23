'use client'

import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50">
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg"></div>
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">我的个人网站</Link>
            <div className="flex space-x-4 items-center">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                首页
              </Link>
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">个人简历</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">个人信息</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-lg mb-2"><strong>姓名：</strong>[您的名字]</p>
            <p className="text-lg mb-2 flex items-center"><FaEnvelope className="mr-2" /> your.email@example.com</p>
            <p className="text-lg mb-2 flex items-center"><FaPhone className="mr-2" /> +86 123 4567 8900</p>
            <p className="text-lg mb-2 flex items-center"><FaMapMarkerAlt className="mr-2" /> [您的城市]，中国</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">教育背景</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-lg mb-2"><strong>[大学名称]</strong></p>
            <p className="text-md mb-1">[学位] - [专业]</p>
            <p className="text-md text-gray-600">毕业年份：[年份]</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">工作经验</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-6">
              <p className="text-lg mb-2"><strong>[公司名称]</strong> - [职位]</p>
              <p className="text-md mb-1">[起始年月] - [结束年月]</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>工作职责描述1</li>
                <li>工作职责描述2</li>
                <li>工作职责描述3</li>
              </ul>
            </div>
            {/* 可以添加更多工作经验 */}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">技能</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-600">
              <li>技能1</li>
              <li>技能2</li>
              <li>技能3</li>
              <li>技能4</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
