import React from 'react';
import SidebarFilterItem from './SidebarFilterItem';
import FilterPrice from './Filters/FilterPrice';

const filters = [
  {id: 1, name: 'Категорії', body: <></>},
  {id: 2, name: 'Ціна', body: <FilterPrice />},
  {id: 3, name: 'Продавець', body: <></>},
  {id: 4, name: 'Бренд', body: <></>},
  {id: 5, name: 'Розмір', body: <></>},
  {id: 6, name: 'Колір', body: <></>},
  {id: 7, name: 'Матеріал', body: <></>},
  {id: 8, name: 'Сезон', body: <></>},
  {id: 9, name: 'Стиль', body: <></>}
];

const SidebarFilters = () => {
  return (
    <>
      <h5 className="sidebar__filters-title mb-2">Фільтри</h5>

      <div id="accordion">
        {filters.map(({id, name, body}) => (
          <SidebarFilterItem key={id} filterName={name} filterBody={body} />
        ))}
      </div>
    </>
  );
};

export default SidebarFilters;
