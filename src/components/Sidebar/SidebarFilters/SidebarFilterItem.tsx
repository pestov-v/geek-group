import React, {FC, useState} from 'react';
import './SidebarFilterItem.css';
import {IoIosArrowDown} from 'react-icons/io';

interface IProps {
  filterName: string;
  filterBody: JSX.Element;
}
const SidebarFilterItem: FC<IProps> = ({filterName, filterBody}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card filter-item mb-1">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn d-flex justify-content-between align-items-center gap-2 w-100"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            onClick={() => setShow(prev => !prev)}
          >
            {filterName}
            <IoIosArrowDown />
          </button>
        </h5>
      </div>

      <div
        id="collapseOne"
        className={['collapse', show ? 'show' : ''].join(' ')}
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">{filterBody}</div>
      </div>
    </div>
  );
};

export default SidebarFilterItem;
