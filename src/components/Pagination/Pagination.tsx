import React, {FC} from 'react';
import './Pagination.css';

interface IProps {
  pages: number;
  active: number;
}
const Pagination: FC<IProps> = ({pages = 0, active}) => {
  const pageNumbers = Array(pages)
    .fill(null)
    .map((_, idx) => idx + 1);

  return (
    <nav aria-label="Page navigation" className="pagination-wrapper">
      <ul className="pagination d-flex justify-content-center gap-2">
        <li className={['page-item', 'rounded', active === 1 ? 'disabled' : ''].join(' ')}>
          <a className="page-link" href="#" tabIndex={active === 1 ? -1 : 0}>
            Попередня
          </a>
        </li>

        {pageNumbers.map(num => (
          <li className="page-item">
            <a className="page-link rounded-circle px-2 pages" href="#">
              {num}
            </a>
          </li>
        ))}

        <li className="page-item rounded-pill">
          <a className="page-link" href="#">
            Наступна
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
