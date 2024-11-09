// App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello from App.js!</h1>
      {/* 강아지 이미지 추가 */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Golden_Retriever_puppy.jpg" 
        alt="강아지 이미지" 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default App;
