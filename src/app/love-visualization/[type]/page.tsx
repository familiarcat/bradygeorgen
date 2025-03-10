import { loveTypes } from '@/utils/loveData';
import LoveTypeDetail from '@/components/love/LoveTypeDetail';
import { Metadata } from 'next';

export async function generateStaticParams() {
  // Now returns a Promise resolving to an array of parameter objects
  return loveTypes.map(love => ({ type: love.id.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: { type: string } }): Promise<Metadata> {
  // Find the love type based on the route parameter
  const loveType = loveTypes.find(l => l.id.toLowerCase() === params.type);
  const title = (loveType?.label || "Unknown") + " - Greek Love Type";
  const description = loveType?.description || "Learn about the types of Greek love";
  return { title, description };
}

export default function Page({ params }: { params: { type: string } }) {
  return <LoveTypeDetail typeId={params.type} />;
}
