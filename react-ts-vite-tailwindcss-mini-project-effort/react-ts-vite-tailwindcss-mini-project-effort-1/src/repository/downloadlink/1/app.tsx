import React from 'react'

const CustomApp = () => {
  return (
    <>
        <DownloadLink/>
    </>
  )
}

export default CustomApp

const DownloadLink: React.FC = () => {
    const handleDownload = () => {
      // Create a Blob object representing the data to be downloaded
      const data = 'This is some file content.';
      const blob = new Blob([data], { type: 'text/plain' });
  
      // Create a URL for the Blob object
      const url = window.URL.createObjectURL(blob);
  
      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'example.txt';
  
      // Append the link to the document body and trigger the download
      document.body.appendChild(link);
      link.click();
  
      // Clean up by revoking the URL
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    };
  
    return (
      <div>
        <h2>Download Example File</h2>
        <button onClick={handleDownload}>Download</button>
      </div>
    );
  };