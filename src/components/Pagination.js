import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-1 mt-8">
      {/* 이전 페이지 버튼 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 text-sm font-medium rounded border border-border bg-background transition-colors
          ${currentPage === 1 ? 'text-subtle cursor-not-allowed' : 'text-subtle hover:border-primary-hover hover:text-primary'}`}
        aria-label="이전 페이지"
      >
        이전
      </button>

      {/* 페이지 번호들 */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-3 py-1.5 text-subtle">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={`px-3 py-1.5 text-sm font-medium rounded border border-border bg-background transition-colors
                ${currentPage === page
                  ? 'text-primary border-primary font-bold cursor-default'
                  : 'text-subtle hover:border-primary-hover hover:text-primary'}`}
              disabled={currentPage === page}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 text-sm font-medium rounded border border-border bg-background transition-colors
          ${currentPage === totalPages ? 'text-subtle cursor-not-allowed' : 'text-subtle hover:border-primary-hover hover:text-primary'}`}
        aria-label="다음 페이지"
      >
        다음
      </button>
    </div>
  );
};

export default Pagination; 