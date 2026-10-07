import { Platform } from 'react-native';

/**
 * API base URL for web and native.
 * - Web dev: proxied via Expo or use /api when served from Express
 * - Native dev: set EXPO_PUBLIC_API_URL to your machine IP (see README)
 */
function getApiBaseUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL.replace(/\/$/, '');
  }

  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    const port = window.location.port;
    const isExpoDev = ['8081', '19006', '19000'].includes(port);
    if (isExpoDev) {
      return 'http://localhost:3000/api';
    }
    return `${window.location.origin}/api`;
  }

  return 'http://localhost:3000/api';
}

export const API_BASE_URL = getApiBaseUrl();
