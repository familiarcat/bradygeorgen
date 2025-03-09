"use client";
import React, { useEffect, useState } from 'react';
import type { default as LottieType } from 'react-lottie-player';
type LottiePlayer = typeof LottieType;
interface AnimationData { v: string; fr: number; ip: number; op: number; w: number; h: number; nm: string; ddd: number; assets: Array<Record<string, unknown>>; layers: Array<Record<string, unknown>>; }
const LottieComponent = () => {
  const [LottiePlayer, setLottiePlayer] = useState<LottiePlayer | null>(null);
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);
  useEffect(() => {
    Promise.all([ import('react-lottie-player'), import('./animations/check-success.json') ])
      .then(([lottieModule, animData]) => {
        setLottiePlayer(() => lottieModule.default);
        setAnimationData(animData.default);
      }).catch((error) => { console.error('Error loading Lottie animation:', error); });
  }, []);
  if (!LottiePlayer || !animationData) return null;
  return <LottiePlayer loop animationData={animationData} play speed={1} style={{ width: 150, height: 150 }} segments={[0,50]} rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }} />;
};
export default LottieComponent;
