import React, { Fragment, ReactNode } from 'react';
import Head from 'next/head';

import { WrapperStyle } from './styles';

interface IProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<IProps> = ({ title, children }) => {
  return (
    <Fragment>
      <Head>
        <title>
          {(title && `React Template | ${title}`) || 'React Template'}
        </title>
        {/*<link rel="stylesheet" href="/static/reset.css" />*/}
      </Head>
      <WrapperStyle>{children}</WrapperStyle>
    </Fragment>
  );
};

export default Layout;
