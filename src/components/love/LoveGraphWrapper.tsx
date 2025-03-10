'use client';
import dynamic from 'next/dynamic';
const LoveGraph = dynamic(() => import('./LoveGraph').then(mod => mod.default), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[calc(100vh-120px)]">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  ),
});
export default function LoveGraphWrapper() {
  return <LoveGraph />;
}
