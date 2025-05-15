"use client";

import { Skeleton } from "../ui/skeleton";

const FiveColumnSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
    </div>
  );
};

export default FiveColumnSkeleton;
