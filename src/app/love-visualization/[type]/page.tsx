import { loveTypes } from '@/utils/loveData';
import LoveTypeDetail from '@/components/love/LoveTypeDetail';
import { Metadata } from 'next';

type PageProps = {
  params: {
    type: string;
  };
};

export function generateStaticParams() {
  return loveTypes.map(love => ({ type: love.id.toLowerCase() }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const loveType = loveTypes.find(l => l.id.toLowerCase() === (params ? params.type : ""));
  const title = (loveType && loveType.label ? loveType.label : "Unknown") + " - Greek Love Type";
  const description = loveType && loveType.description ? loveType.description : "Learn about the types of Greek love";
  
  return { 
    title, 
    description 
  };
}

export default function Page({ params }: PageProps) {
  const typeId = params.type;
  return <LoveTypeDetail typeId={typeId} />;
}
