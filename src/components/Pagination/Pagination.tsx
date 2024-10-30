import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";

import { Icon } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectPageNews,
  selectPageNotices,
  selectTotalPagesNews,
  selectTotalPagesNotices,
  setPageNews,
  setPageNotices,
} from "../../redux";
import { useLocation } from "react-router-dom";

export const Pagination: React.FC = () => {
  const location = useLocation();
  const isNewsPage = location.pathname === "/news";

  const page =
    useAppSelector(isNewsPage ? selectPageNews : selectPageNotices) - 1;
  const totalPages = useAppSelector(
    isNewsPage ? selectTotalPagesNews : selectTotalPagesNotices
  );
  const dispatch = useAppDispatch();
  const pageRangeDisplayed = useMediaQuery({ query: "(max-width:767.99px)" })
    ? 2
    : 3;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const setPage = (pageNumber: number) => {
    dispatch(isNewsPage ? setPageNews(pageNumber) : setPageNotices(pageNumber));
  };

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  if (!totalPages) return null;
  if (totalPages <= 1) return null;

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
        pageRangeDisplayed={pageRangeDisplayed}
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
