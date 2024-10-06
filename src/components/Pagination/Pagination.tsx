import { useEffect } from "react";
import ReactPaginate from "react-paginate";

import { Icon } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectPageNews, selectTotalPagesNews, setPageNews } from "../../redux";

export const Pagination: React.FC = () => {
  const page = useAppSelector(selectPageNews) - 1;
  const totalPages = useAppSelector(selectTotalPagesNews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handlePageClick = (event: { selected: number }) => {
    dispatch(setPageNews(event.selected + 1));
  };

  const handleFirstPage = () => {
    dispatch(setPageNews(1));
  };

  const handleLastPage = () => {
    dispatch(setPageNews(totalPages));
  };

  if (!totalPages) return;

  return (
    <div className="flex items-center justify-center gap-[17px]">
      <button
        className="page-link"
        onClick={handleFirstPage}
        disabled={page === 0}
      >
        <Icon
          id="double-chevron"
          size={26}
          className="rotate-180 fill-current stroke-none group-hover:fill-white group-focus-visible:fill-white sm-max:size-[22px] md:size-[28px]"
        />
      </button>

      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        onPageChange={handlePageClick}
        forcePage={page}
        containerClassName={"pagination flex gap-[4px]"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeLinkClassName={"active-pg"}
        previousLabel={
          <button className="page-link" disabled={page === 0}>
            <Icon
              id="chevron-left"
              size={20}
              className="rotate-180 stroke-none group-hover:fill-white group-focus-visible:fill-white sm-max:size-[18px] md:size-[24px]"
            />
          </button>
        }
        nextLabel={
          <button className="page-link" disabled={page === totalPages - 1}>
            <Icon
              id="chevron-left"
              size={20}
              className="fill-current stroke-none group-hover:fill-white group-focus-visible:fill-white sm-max:size-[18px] md:size-[24px]"
            />
          </button>
        }
        breakLabel={"..."}
      />

      <button
        className="page-link"
        onClick={handleLastPage}
        disabled={page === totalPages - 1}
      >
        <Icon
          id="double-chevron"
          size={26}
          className="fill-current stroke-none group-hover:fill-white group-focus-visible:fill-white sm-max:size-[22px] md:size-[28px]"
        />
      </button>
    </div>
  );
};
