import React from "react";
import classes from "./Skeleton.module.css";

const SkeletonElement = (props) => {
  const skeletonClass = `${classes.skeleton} ${classes[props.type]}`;

  return <div className={skeletonClass}></div>;
};

export const SkeletonProfile = () => (
  <div className={classes.skeleton_wrapper}>
    <SkeletonElement type="title" />
    <SkeletonElement type="text" />
    <SkeletonElement type="text" />
  </div>
);
