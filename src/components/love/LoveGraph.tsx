'use client';
import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { loveTypes } from '@/utils/loveData';
import type { Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
const ReactFlow = dynamic(() => import('reactflow'), {
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
  ),
  ssr: false
});
export default function LoveGraph() {
  const router = useRouter();
  const onNodeClick = useCallback((_event: any, node: Node) => {
    router.push("/love-visualization/" + node.id.toLowerCase() + "/");
  }, [router]);
  const nodes: Node[] = loveTypes.map((love, i) => ({
    id: love.id,
    type: 'default',
    data: { label: (<div className="p-2"><div className="font-bold">{love.label}</div><div className="text-sm">{love.description}</div></div>) },
    position: { x: 250 * (i % 4), y: 200 * Math.floor(i / 4) },
    style: { background: love.color, color: '#fff', width: 220, borderRadius: '8px', border: 'none', cursor: 'pointer' },
  }));
  const edges: Edge[] = [
    { id: 'e1-2', source: 'Eros', target: 'Philia', animated: true },
    { id: 'e2-3', source: 'Philia', target: 'Ludus', animated: true },
    { id: 'e3-4', source: 'Ludus', target: 'Agape', animated: true },
    { id: 'e4-5', source: 'Agape', target: 'Pragma', animated: true },
    { id: 'e5-6', source: 'Pragma', target: 'Philautia', animated: true },
    { id: 'e6-7', source: 'Philautia', target: 'Storge', animated: true },
    { id: 'e7-8', source: 'Storge', target: 'Mania', animated: true },
    { id: 'e8-1', source: 'Mania', target: 'Eros', animated: true },
  ];
  return (
    <div className="h-[calc(100vh-120px)] border border-gray-700 rounded-lg overflow-hidden">
      <ReactFlow nodes={nodes} edges={edges} onNodeClick={onNodeClick} fitView attributionPosition="bottom-right" />
    </div>
  );
}
