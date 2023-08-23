import React from "react";
import Skeleton from "react-loading-skeleton";

const StatsItems = ({ amount, start, end }) => {
  return (
    <>
      {!amount ? (
        <Skeleton className="py-2 px-[100px]" />
      ) : (
        <p className="sm:m-0 mb-[20px]">
          Showing {start + 1} - {end + 1} of {amount} results
        </p>
      )}
    </>
  );
};

export default StatsItems;
