import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import useImageDownload from '@/components/resolution/read/hooks/useImageDownload';

const App = () => {
  const { ref: imageRef, onClick: onDownloadButtonClick } = useImageDownload('now-sopt');

  return (
    <div>
      <h1>Hello, World with React!</h1>
      <div ref={imageRef}>
        <button onClick={onDownloadButtonClick}>Download Image</button>
      </div>
    </div>
  );
};

// #root에 컴포넌트 렌더링
render(<App />, document.getElementById('root'));
