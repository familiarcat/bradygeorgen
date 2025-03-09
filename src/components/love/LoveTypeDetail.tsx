'use client';
import { loveTypes } from '@/utils/loveData';
import Link from 'next/link';
export default function LoveTypeDetail({ typeId }: { typeId: string }) {
  const loveType = loveTypes.find(l => l.id.toLowerCase() === typeId.toLowerCase());
  if (!loveType) {
    return (
      <div className="p-6">
        <Link href="/love-visualization/" className="text-blue-600 hover:underline">Back to overview</Link>
        <p className="mt-4">Love type not found.</p>
      </div>
    );
  }
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link href="/love-visualization/" className="text-blue-600 hover:underline block mb-4">Back to overview</Link>
      <div className="rounded-lg p-8 text-white mb-8 shadow-lg" style={{ backgroundColor: loveType.color }}>
        <h1 className="text-4xl font-bold mb-4">{loveType.label}</h1>
        <p className="text-xl mb-4">{loveType.description}</p>
      </div>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-200 leading-relaxed">{loveType.longDescription}</p>
        <div className="mt-8 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Related Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loveTypes.filter(l => l.id !== loveType.id).slice(0, 2).map(related => (
              <Link key={related.id} href={"/love-visualization/" + related.id.toLowerCase() + "/"} className="p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-lg text-white">{related.label}</h3>
                <p className="text-gray-300">{related.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
