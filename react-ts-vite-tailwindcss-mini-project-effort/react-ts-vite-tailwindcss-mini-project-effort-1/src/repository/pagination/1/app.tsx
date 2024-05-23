import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Pagination  currentPage={1} totalPages={10} onPageChange={(page) => console.log(page)}/>
    </>
  )
}

export default CustomApp

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }

  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    };
  
    const handlePageChange = (page: number) => {
      onPageChange(page);
    };
  
    return (
      <nav>
        <ul className="pagination">
          {getPageNumbers().map((page) => (
            <li key={page} className={currentPage === page ? 'active' : ''}>
              <button onClick={() => handlePageChange(page)}>{page}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };