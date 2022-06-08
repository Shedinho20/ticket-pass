import React from 'react';
import { typeUsepagination } from '../../../common/interfaces/pagination';
import styles from './pagination.module.css';
import { DOTS, usePagination } from './usePagination';

interface paginationProps extends typeUsepagination {
  onPageChange: (pageNumber: number) => void;
}

export const Pagination = ({ onPageChange, totalPages, currentPage, pageSize }: paginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalPages,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className={styles.paginationContainer}>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li key={i} className="noBG">
              &#8230;
            </li>
          );
        }

        if (pageNumber === currentPage) {
          return (
            <li key={i} className={styles.active} onClick={() => onPageChange(pageNumber as number)}>
              {pageNumber}
            </li>
          );
        }

        return (
          <li onClick={() => onPageChange(pageNumber as number)} key={i}>
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
};
