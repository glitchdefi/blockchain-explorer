import React from "react";
import "twin.macro";
import { Skeleton } from "src/app/components/Skeleton";

export function SkeletonLoading() {
  return (
    <>
      {/* <Skeleton tw="flex-grow mt-3 w-2/4" /> */}
      {/* <Skeleton tw="flex-grow mt-2 w-1/4"/> */}
      {/* <Skeleton tw="flex-grow mt-3 h-12"/>
      <Skeleton tw="flex-grow mt-3 h-12"/> */}
      <Skeleton tw="flex-grow mt-3 h-12"/>
    </>
  );
}
