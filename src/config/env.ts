// Environment configuration
export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
} as const;

// Type-safe environment variable access
export const getApiUrl = (): string => config.apiUrl;

// Extract port from API URL
export const getPort = (): number => {
  try {
    const url = new URL(config.apiUrl);
    return parseInt(url.port) || 3000;
  } catch {
    return 3000;
  }
}; 