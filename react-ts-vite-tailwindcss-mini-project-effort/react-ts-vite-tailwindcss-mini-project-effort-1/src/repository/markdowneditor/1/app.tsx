import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

const CustomApp = () => {
 
  return (
    <>
      <h1>Markdown Editor</h1>
      <MarkdownEditor />
    </>
  );
};

export default CustomApp;

// Custom hook for managing Markdown input
const useMarkdownInput = (initialValue: string) => {
    const [markdown, setMarkdown] = useState(initialValue);
  
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMarkdown(event.target.value);
    };
  
    return { markdown, handleChange };
  };
  
  const MarkdownEditor: React.FC = () => {
    // Initialize the Markdown content
    const initialMarkdown = `# Welcome to My Markdown Editor\n\nStart writing your markdown here...`;
  
    // Use the custom hook for managing Markdown input
    const { markdown, handleChange } = useMarkdownInput(initialMarkdown);
  
    return (
      <div className="flex">
        <div className="w-1/2">
          {/* Markdown input */}
          <textarea
            className="w-full h-full p-2"
            value={markdown}
            onChange={handleChange}
            placeholder="Write Markdown here..."
          />
        </div>
        <div className="w-1/2">
          {/* Rendered Markdown output */}
          <div className="markdown-preview p-2">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  };
  