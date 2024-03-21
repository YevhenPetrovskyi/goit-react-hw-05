import ReactPaginate from 'react-paginate';
import css from './PaginationList.module.css';

const PaginationList = ({ onClick, pageCount, forcePage }) => {
  return (
    <div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        forcePage={forcePage - 1}
        breakLabel="..."
        previousLabel="&laquo;"
        nextLabel="&raquo;"
        containerClassName={css.pagination}
        activeClassName={css.active}
        pageClassName={css.pageItem}
        disabledClassName={css.pageItemDisabled}
        nextClassName={css.pageItem}
        previousClassName={css.pageItem}
      />
    </div>
  );
};

export default PaginationList;
