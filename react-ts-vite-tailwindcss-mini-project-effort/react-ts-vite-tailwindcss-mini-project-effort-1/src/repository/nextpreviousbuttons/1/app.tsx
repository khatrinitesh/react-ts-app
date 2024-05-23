import React, { useState } from 'react';
import './style.css';

const CustmoApp = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages] = useState<number>(10); // Set the initial total number of pages


    const handleNext = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const handlePrevious = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };

  return (
    <>
       <Pagination
         onNext={handleNext}
         onPrevious={handlePrevious}
         hasNext={currentPage < totalPages} // Replace totalPages with your logic
         hasPrevious={currentPage > 1}
      />
    </>
  )
}

export default CustmoApp

interface PaginationProps {
    onNext: () => void;
    onPrevious: () => void;
    hasNext: boolean;
    hasPrevious: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
    onNext,
    onPrevious,
    hasNext,
    hasPrevious,
  }) => {
    return (
      <div>
        {hasPrevious && (
          <button onClick={onPrevious} disabled={!hasPrevious}>
            Previous
          </button>
        )}
        {hasNext && (
          <button onClick={onNext} disabled={!hasNext}>
            Next
          </button>
        )}
      </div>
    );
  };
