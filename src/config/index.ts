// Device detection
export const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);
export const isApple = typeof window !== 'undefined' && /iPhone|iPad|iPod|Mac/i.test(navigator.userAgent);