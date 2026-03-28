import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function ProductsLoading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* 1. The Hero Header Skeleton */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-muted/30 px-6 py-16 text-center sm:py-24 border border-border/50">
        <Skeleton className="h-6 w-40 rounded-full mb-6" /> {/* Badge */}
        <Skeleton className="h-12 w-3/4 max-w-2xl sm:h-16 mb-4" /> {/* H1 */}
        <Skeleton className="h-6 w-5/6 max-w-xl" /> {/* Paragraph line 1 */}
        <Skeleton className="h-6 w-4/6 max-w-lg mt-2" />{' '}
        {/* Paragraph line 2 */}
      </div>

      {/* 2. Interactive Category Pills Skeleton */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-40" /> {/* "Our Products" Title */}
          <Skeleton className="h-4 w-24 hidden sm:block" />{' '}
          {/* "Showing X items" */}
        </div>

        <div className="flex items-center gap-2 overflow-hidden pb-2">
          {/* Generate 6 pill skeletons */}
          {[...Array(6)].map((_, i) => (
            <Skeleton
              key={i}
              className="h-9 w-24 rounded-full shrink-0"
              style={{ width: `${Math.floor(40 + 80)}px` }} // Randomize width slightly for realism
            />
          ))}
        </div>
      </div>

      {/* 3. The Main Product Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render 8 placeholder cards to fill out the screen nicely */}
        {[...Array(8)].map((_, i) => (
          <Card
            key={i}
            className="flex h-full flex-col overflow-hidden shadow-none border-muted/60"
          >
            {/* Image Skeleton matching the 4/3 ratio */}
            <CardContent className="relative aspect-4/3 p-0 overflow-hidden">
              <Skeleton className="h-full w-full rounded-none" />
            </CardContent>

            {/* Text & Button Skeletons */}
            <CardFooter className="flex flex-1 flex-col items-start gap-4 p-5">
              <div className="flex w-full items-start justify-between gap-4">
                <div className="flex flex-col gap-2 w-full">
                  <Skeleton className="h-3 w-16" /> {/* Category */}
                  <Skeleton className="h-5 w-full" /> {/* Title Line 1 */}
                  <Skeleton className="h-5 w-2/3" /> {/* Title Line 2 */}
                </div>
                <Skeleton className="h-5 w-12 shrink-0" /> {/* Price */}
              </div>
              <Skeleton className="mt-auto h-10 w-full rounded-md" />{' '}
              {/* Add to Cart Button */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
