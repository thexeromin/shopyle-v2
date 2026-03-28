'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Products Page Error Boundary Caught: ', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
      <div className="space-y-4 max-w-md w-full">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Oops! Failed to load products
        </h2>

        <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-md text-left">
          <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-1">
            Error Details:
          </p>
          <p className="text-sm text-red-600 dark:text-red-300 font-mono wrap-break-word">
            {error.message || 'An unexpected network error occurred.'}
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 dark:bg-gray-50 px-4 py-2 text-sm font-medium text-gray-50 dark:text-gray-900 transition-colors hover:bg-gray-900/90 dark:hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
