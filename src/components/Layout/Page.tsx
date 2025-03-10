'use client';

import {NextPage} from 'next';
import Head from 'next/head';
import {ReactNode} from 'react';

export interface PageProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Page: NextPage<PageProps> = ({children, title, description}) => {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  );
};

export default Page;
