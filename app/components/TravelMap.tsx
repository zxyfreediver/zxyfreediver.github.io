'use client'

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// 导入狗脚印 SVG
import dogPawIcon from '@/public/images/dog-paw.svg';

const visitedCountries = [
  { name: '四川', lat: 30.6522, lng: 104.0657 },
  { name: '重庆', lat: 29.5628, lng: 106.5525 },
  { name: '长沙', lat: 28.1941, lng: 112.9823 },
  { name: '南京', lat: 32.0617, lng: 118.7778 },
  { name: '天津', lat: 39.1256, lng: 117.2009 },
  { name: '秦皇岛', lat: 39.9312, lng: 119.5869 },
  { name: '葫芦岛', lat: 40.7569, lng: 120.8363 },
  { name: '上海', lat: 31.2304, lng: 121.4737 },
  { name: '韩国', lat: 35.9078, lng: 127.7669 },
  { name: '海南', lat: 19.1959, lng: 110.4969 },
  { name: '泰国', lat: 15.8700, lng: 100.9925 },
  { name: '云南', lat: 24.8799, lng: 102.8329 },
  { name: '南宁', lat: 22.8152, lng: 108.3200 },
  { name: '马尔代夫', lat: 3.2028, lng: 73.2207 },
  { name: '澳大利亚', lat: -25.2744, lng: 133.7751 },
  { name: '卡塔尔', lat: 25.3548, lng: 51.1839 },
  { name: '马来西亚', lat: 4.2105, lng: 101.9758 },
  { name: '菲律宾', lat: 13.7563, lng: 121.7740 },
  { name: '英国', lat: 51.5074, lng: -0.1278 },
  // 添加更多您访问过的国家
];

const TravelMap = () => {
  const mapRef = useRef<any>(null);

  const MapComponent = dynamic(
    () => import('./MapComponent'),
    { 
      loading: () => <p>地图加载中...</p>,
      ssr: false
    }
  );

  return (
    <>
      <MapComponent mapRef={mapRef} visitedCountries={visitedCountries} dogPawIcon={dogPawIcon} />
      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          box-shadow: 0 3px 14px rgba(0,0,0,0.4);
        }
        .custom-popup .leaflet-popup-content {
          margin: 10px;
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </>
  );
};

export default TravelMap;
