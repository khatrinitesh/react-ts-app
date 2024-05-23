import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
    const folderStructure: Folder[] = [
        {
          name: 'Dashboard',
          files: ['Accounts Module', 'Help Module']
        },
        {
          name: 'Transfers',
          folders: [
            {
              name: 'Quick',
              files: ['Disclosures', 'Modals']
            },
            {
              name: 'Classic',
              files: ['Classic File']
            },
            {
              name: 'Scheduled',
              folders: [
                {
                  name: 'Calendar',
                  files: ['Days', 'Months']
                },
                {
                  name: 'Modals',
                  files: ['Scheduled Modals']
                }
              ],
              files: ['History']
            }
          ]
        }
      ];
  return (
    <div>
         <FileBrowser folderStructure={folderStructure} />
    </div>
  )
}

export default CustomApp

interface FileBrowserProps {
    folderStructure: Folder[];
  }

  const FileBrowser: React.FC<FileBrowserProps> = ({ folderStructure }) => {
    const [openFolders, setOpenFolders] = useState<string[]>([]);
  
    const toggleFolder = (folderName: string) => {
      if (openFolders.includes(folderName)) {
        setOpenFolders(openFolders.filter((name) => name !== folderName));
      } else {
        setOpenFolders([...openFolders, folderName]);
      }
    };
  
    const renderFolder = (folder: Folder, depth: number = 0) => {
      const isOpen = openFolders.includes(folder.name);
  
      return (
        <li key={folder.name} className="folder">
          <div
            className="cursor-pointer"
            onClick={() => toggleFolder(folder.name)}
            style={{ paddingLeft: `${depth * 10}px` }}
          >
            {isOpen ? '-' : '+'}
            {folder.name}
          </div>
          {isOpen && (
            <ul>
              {folder.files?.map((file) => (
                <li key={file} className="file" style={{ paddingLeft: `${(depth + 1) * 10}px` }}>
                  {file}
                </li>
              ))}
              {folder.folders?.map((subfolder) => renderFolder(subfolder, depth + 1))}
            </ul>
          )}
        </li>
      );
    };
  
    return (
      <div className="wrapper">
        <h3 className="heading">File Browser</h3>
        <div className="file-browser">
          <ul>
            {folderStructure.map((folder) => renderFolder(folder))}
          </ul>
        </div>
      </div>
    );
  };

