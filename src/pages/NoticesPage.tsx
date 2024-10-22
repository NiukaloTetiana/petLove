import { useEffect } from "react";
import { Loader, NoticesFilters, NoticesList, Title } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  getNotices,
  selectIsLoadingNotices,
  selectNotices,
  selectPageNotices,
} from "../redux";

const NoticesPage = () => {
  const page = useAppSelector(selectPageNotices);
  const notices = useAppSelector(selectNotices);
  const isLoading = useAppSelector(selectIsLoadingNotices);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = { page, limit: 6 };

    dispatch(getNotices(params));
  }, [dispatch, page]);
  return (
    <>
      <div className="container pb-[80px] pt-[34px] md:pb-[80px] md:pt-[46px] lg:pt-[64px]">
        <Title title="Find your favorite pet" className="mb-10 lg:mb-10" />
        <NoticesFilters />
        {!notices.length ? (
          <div className="flex h-[calc(100vh-400px)] items-center justify-center">
            <h3 className="text-center text-[25px] font-semibold leading-[1] tracking-[-0.03em] text-[#f6b83d] md:text-[48px]">
              Nothing was found for your search. Please, try another one query.
            </h3>
          </div>
        ) : (
          <NoticesList />
        )}
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default NoticesPage;
