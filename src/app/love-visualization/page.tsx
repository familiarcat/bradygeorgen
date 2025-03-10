import type { Metadata } from 'next';
import LoveGraphWrapper from '@/components/love/LoveGraphWrapper';

export function generateMetadata(): Metadata {
  return {
    title: 'Love Visualization - Eight Types of Greek Love',
    description: 'Interactive visualization of the eight types of Greek love',
  };
}

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">The Eight Types of Greek Love</h1>
      <LoveGraphWrapper />
    </main>
  );
}



