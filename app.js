import React, { useEffect, useRef } from 'react';
import { render } from 'react-dom';
import useImageDownload from '@/components/resolution/read/hooks/useImageDownload';

const App = () => {
  const { ref: imageRef, onClick: onDownloadButtonClick } = useImageDownload('now-sopt');

  // 이미지 URL을 imageRef에 추가하기 위해 useEffect 사용
  useEffect(() => {
    if (imageRef.current) {
      const img = document.createElement('img');
      img.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Golden_Retriever_medium-to-light-coat.jpg';
      img.alt = '강아지';
      img.style.width = '100%';
      img.style.height = 'auto';
      imageRef.current.appendChild(img);
    }
  }, [imageRef]);

  return (
    <div>
      <h1>Hello, World with React!</h1>
      <div ref={imageRef} style={{ width: '300px', height: '300px', border: '1px solid #ddd' }}>
        {/* 이미지가 useEffect로 삽입됩니다. */}
      </div>
      <button onClick={onDownloadButtonClick}>Download Image</button>
    </div>
  );
};

// #root에 컴포넌트 렌더링
render(<App />, document.getElementById('root'));
