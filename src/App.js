import React from 'react';
import './App.css';
import FileUploader from './File-uploader/File-uploader.js';

function App() {
  return (
      <div>
        <p className="title">React Drag and Drop Image Upload</p>
        <div className="content">
          <FileUploader/>
        </div>
      </div>
  );
}

export default App;
