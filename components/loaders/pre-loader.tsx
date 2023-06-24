import React from 'react';
import loader from '@/assets/images/loader.gif';
import Image from 'next/image';

export default function PreLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="preloader">
        <div className="preloader-text">
          <span className="preloader-text-words">G</span>
          <span className="preloader-text-words">I</span>
          <span className="preloader-text-words">O</span>
          <span className="preloader-text-words">R</span>
          <span className="preloader-text-words">D</span>
          <span className="preloader-text-words">A</span>
          <span className="preloader-text-words">N</span>
          <span className="preloader-text-words">O</span>
        </div>
      </div> */}
      <Image src={loader} width={320} height={120} alt="logo" />
    </div>
  );
}
