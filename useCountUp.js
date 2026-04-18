export function Skeleton({ className }) {
  return (
    <div className={`bg-slate-200 dark:bg-slate-700 animate-pulse rounded ${className}`} />
  );
}

export function TransactionSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border-b dark:border-slate-800">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-6 w-20" />
    </div>
  );
}
