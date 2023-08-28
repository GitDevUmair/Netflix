import React from "react";
import styles from "./loading.css";
const loading = () => {
  return (
    <>
      <div
        className={`${styles.ldsHourglass} inline-block relative w-20 h-20 after:block after:rounded-full after:w-0 after:h-0 after:m-2 after:box-border 
    after:border-4 after:border-white after:border-solid after:border-t-transparent after:border-r-white after:border-b-transparent after:border-l-transparent`}
      ></div>
    </>
  );
};

export default loading;
