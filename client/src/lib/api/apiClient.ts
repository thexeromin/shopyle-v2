const BASE_URL = process.env.NEXT_PUBLIC_API

/**
 * A central wrapper for all client-side fetch requests
 * @param endpoint API route
 * @param options Standard fetch options
 */
export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!BASE_URL) {
    throw new Error("Environment variable 'API' is not defined!!!")
  }

  // Ensures we don't end up with double slashes (e.g., http://api.com//signup)
  const url = `${BASE_URL.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(
      data.error || data.message || 'An unexpected error occurred'
    )
  }

  return data as T
}
