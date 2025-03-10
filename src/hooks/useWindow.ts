export const useWindow = () => {
  const isClient = typeof window !== 'undefined';
  return {
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
    isClient,
  };
};

// Add this line to maintain backwards compatibility
export default useWindow;
