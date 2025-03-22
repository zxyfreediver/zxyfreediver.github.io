'use client'

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaPrint } from 'react-icons/fa';
import Head from 'next/head';

export default function Resume() {
  const [markdown, setMarkdown] = useState('');
  
  useEffect(() => {
    // 加载 Markdown 文件
    fetch('/resume-en/resume.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <style type="text/css" media="print">
          {`
            @page {
              size: auto;
              margin: 0mm;
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .no-print {
                display: none;
              }
            }
          `}
        </style>
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-700 print:bg-white print:p-0">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:p-0 print:max-w-none">
          <div className="flex justify-between items-center mb-8 no-print">
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
            <button
              onClick={handlePrint}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <FaPrint className="mr-2" /> Print PDF
            </button>
          </div>
          
          <div className="bg-white shadow rounded-lg p-6 print:shadow-none print:p-0 print:rounded-none">
            <article className="prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            </article>
          </div>
        </main>
      </div>
    </>
  );
} 
