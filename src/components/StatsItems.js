import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const StatsItems = ({ amount, perPage, page }) => {
  const start = (page - 1) * perPage;
  const end = start + perPage - 1;
  return (
    <>
      {!amount ? (
        <Skeleton className="py-2 px-[100px]" />
      ) : (
        <div>
          {end + 1 > amount ? (
            <p className="sm:m-0 mb-[20px]">
              Showing {start + 1} - {amount} of {amount} results
            </p>
          ) : (
            <p className="sm:m-0 mb-[20px]">
              Showing {start + 1} - {end + 1} of {amount} results
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default StatsItems;
