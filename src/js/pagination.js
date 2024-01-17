import Pagination from 'tui-pagination';
import fetchFilteredProducts from './filters';

const container = document.getElementById('pagination');
let visiblePages = 0;

const screenWidth = window.innerWidth;
if (screenWidth < 768) {
   // Мобільні пристрої
   visiblePages = 2;
} else {
   // Таблет
   visiblePages = 4;
}

export function addPagination(pages, limit, currentPage) {

   const options = {
      totalItems: pages.totalPages * limit,
      itemsPerPage: limit,
      visiblePages: visiblePages,
      page: currentPage,
      centerAlign: false,
      // firstItemClassName: 'tui-first-child',
      // lastItemClassName: 'tui-last-child',
      template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
         disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
         moreButton:
            '<a href="#" class="tui-page-btn tui-is-disabled tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>',
      },
   };
   const pagination = new Pagination(container, options);
   pagination.on('afterMove', event => {
      const currentPage = event.page;
      var filters = JSON.parse(localStorage.getItem('filters')) || {};
      filters.page = currentPage;
      localStorage.setItem('filters', JSON.stringify(filters));
      fetchFilteredProducts();
   });
}
export function deletePagination() {
   container.innerHTML = '';
}