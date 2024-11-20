'use client'

import { useState } from 'react';
import Image from 'next/image';
import nurseShark from '@/public/diving/animals/nurse-shark.jpg';
import whaleShark from '@/public/diving/animals/whale-shark.jpg';
import manta from '@/public/diving/animals/manta.jpg';
import Header from '@/app/components/Header';

// 更新潜水照片数组，包含动物名称和描述
const divingPhotos = [
  { src: nurseShark, alt: '护士鲨', name: '护士鲨', description: '温和的底栖鲨鱼，常见于珊瑚礁' },
  { src: whaleShark, alt: '鲸鲨', name: '鲸鲨', description: '世界上最大的鱼类，以浮游生物为食' },
  { src: manta, alt: '蝠鲼', name: '蝠鲼', description: '优雅的巨型魔鬼鱼，以滤食方式进食' },
];

const totalPhotos = 100; // 假设总共有100种海洋动物需要收集

export default function DivingGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof divingPhotos[0] | null>(null);

  return (
    <>  
      <Header />
      <div className="min-h-screen bg-gray-100">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">我的潜水生涯</h1>
        <section className="mb-8">
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">2024年4月:</span>
              <span>开始学习自由潜水</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">2024年6月:</span>
              <span>获得AIDA二星证书</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">2024年7月:</span>
              <span>获得AIDA三星证书</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">2024年8月:</span>
              <span>获得AIDA四星证书，成为PADI自由潜教练</span>
            </li>
          </ul>
        </section>
        <p className="text-xl text-gray-700 mb-6">收集 100 张海洋生物合影：已收集 {divingPhotos.length}/{totalPhotos} 张</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {divingPhotos.map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-48 h-48 overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedPhoto(photo)}
                />
              </div>
              <p className="mt-1 text-center text-sm font-medium text-gray-900">{photo.name}</p>
            </div>
          ))}
        </div>
      </main>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-3xl max-h-full bg-white p-6 rounded-lg">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={400}
              height={400}
              objectFit="contain"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold">{selectedPhoto.name}</h2>
              <p className="text-gray-600">{selectedPhoto.description}</p>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl"
              onClick={(e) => { e.stopPropagation(); setSelectedPhoto(null); }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
