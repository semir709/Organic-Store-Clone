import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RangePage = () => {
  const par = useParams();
  useEffect(() => {
    console.log(par);
  }, [par]);
  return <div>Range</div>;
};

export default RangePage;
