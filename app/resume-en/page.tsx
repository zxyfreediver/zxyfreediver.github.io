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
          <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            Download PDF
          </button>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <p className="text-lg"><strong>Xingyu Zhao</strong> | Male | 31</p>
              <p className="text-lg flex items-center gap-2">
                <FaMapMarkerAlt /> Beijing · 6 years experience
              </p>
            </div>
            <div className="flex gap-4 text-blue-600">
              <a href="tel:+8618310343827" className="flex items-center">
                <FaPhone className="mr-2" /> +86 183-1034-3827
              </a>
              <a href="mailto:18310343827@163.com" className="flex items-center">
                <FaEnvelope className="mr-2" /> 18310343827@163.com
              </a>
            </div>
          </div>
        </section>

        {/* 教育背景 Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between mb-2">
              <div>
                <p className="text-lg font-semibold">University of Sheffield</p>
                <p className="text-md">MSc Computer Science</p>
              </div>
              <p className="text-gray-500">Sep 2016 - Jul 2018</p>
            </div>
            <div className="border-t my-4"></div>
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">Beijing University of Posts and Telecommunications</p>
                <p className="text-md">The Internet of Things Engineering</p>
              </div>
              <p className="text-gray-500">Sep 2012 - Jun 2016</p>
            </div>
          </div>
        </section>

        {/* 工作经历 Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Work Experience</h2>
          {[
            {
              company: "China Telecom Satellite Company",
              position: "Software Engineer",
              period: "Oct 2023 - Present",
              responsibilities: [
                "Led digital platform project, developed satellite terminal positioning system (2M+ users) for government clients",
                "Built R&D efficiency management platform with workflow automation",
                "Tech Stack: SpringBoot+React full-stack, Grafana+Prometheus monitoring, PaaS migration"
              ]
            },
            {
              company: "Zhihu",
              position: "React Frontend Developer",
              period: "Mar 2021 - Oct 2023",
              responsibilities: [
                "Developed core features (search/content/live) with 10M+ daily PV",
                "Designed card factory system improving iteration efficiency by 60%",
                "Optimized customer service system loading frontend FCP from 2.8s to 1.2s"
              ]
            },
            {
              company: "Beijing Daoyuan Education Technology",
              position: "Frontend Developer",
              period: "Jul 2019 - Mar 2021",
              responsibilities: [
                "Developed online education platform daoyuanketang.com from 0 to 1, including course playback, payment system, and admin panel",
                "Tech Stack: Vue.js/Express/Element-UI/Uniapp",
                "Built question bank mini-program and H5 promotional pages"
              ]
            },
            {
              company: "Tongfang Computer Co., Ltd.",
              position: "Software Engineer",
              period: "May 2018 - Jul 2019",
              responsibilities: [
                "Maintained Math+ website with Vue and SpringBoot",
                "Implemented new features and performance optimizations"
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

        {/* 其他部分保持类似翻译结构... */}
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>Developed WeChat Mini Program &quot;Apnea Training&quot; using Taro + FastAPI + Supabase</li>
              <li>Built AI-powered apnea training app with React Native, published on <a href="https://play.google.com/store/apps/details?id=com.zln2.apneaplan" target="_blank" rel="noopener noreferrer">Google Play</a></li>
              <li>Personal portfolio built with Next.js + Vercel + Cursor</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Technical Skills</h2>
          <div className="bg-white shadow rounded-lg p-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Technical Stack</h3>
              <ul className="list-disc list-inside">
                <li>Frontend: React/Vue/Taro/Next.js</li>
                <li>Backend: SpringBoot/FastAPI/Node.js</li>
                <li>Database: MySQL/PostgreSQL/Redis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Additional Skills</h3>
              <ul className="list-disc list-inside">
                <li>DevOps (CI/CD/Docker/K8s)</li>
                <li>Cloud Native (AWS/Alibaba Cloud/Tencent Cloud)</li>
                <li>Fluent English (CET-6/IELTS 6.5)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="list-disc list-inside text-gray-700">
              <li>English proficiency: CET-6, IELTS 6.5 (Technical document reading)</li>
              <li>Passionate about exploring new technologies and open-source projects</li>
              <li>Proficient in using AI tools for programming assistance</li>
              <li>Portfolio: <a href="https://zxy.zln2.fun" target="_blank" rel="noopener noreferrer">zxy.zln2.fun</a></li>
              <li>GitHub: <a href="https://github.com/zxyfreediver" target="_blank" rel="noopener noreferrer">github.com/zxyfreediver</a></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
} 
