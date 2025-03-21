'use client'

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaPrint } from 'react-icons/fa';

export default function Resume() {
  const [markdown, setMarkdown] = useState('');
  
  useEffect(() => {
    // 加载 Markdown 文件
    fetch('/resume/resume.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-700">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">个人简历</h1>
          <button
            onClick={handlePrint}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaPrint className="mr-2" /> 打印 PDF
          </button>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </main>
    </div>
  );
}
