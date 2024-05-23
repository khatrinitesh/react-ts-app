import React from 'react'

const CustomApp = () => {
  return (
    <div>
        <DownloadButtons/>
    </div>
  )
}

export default CustomApp

const DownloadButtons: React.FC = () => {
    return (
      <div>
        <h2>Download Files</h2>
        <div>
          <a href="/path/to/file1.pdf" download>
            <button>Download PDF</button>
          </a>
          <a href="/path/to/file2.zip" download>
            <button>Download ZIP</button>
          </a>
          <a href="/path/to/file3.txt" download>
            <button>Download TXT</button>
          </a>
        </div>
      </div>
    );
  };