import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderSkeleton() {
  return (
    <div className="text-center mb-12">
      <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
      <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
      <div className="relative max-w-2xl mx-auto mb-8">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>
    </div>
  );
}
