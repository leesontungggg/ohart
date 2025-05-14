import { Skeleton } from "@/components/ui/skeleton";

export default function ToolCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <Skeleton className="w-full h-48 rounded-lg mb-4" />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );
}
