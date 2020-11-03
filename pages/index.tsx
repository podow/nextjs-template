import React from 'react';
import styled from 'styled-components';

import Layout from 'layout';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Home = () => (
  <Layout>
    <Main>
      <h1>
        Welcome to{' '}
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js!
        </a>
      </h1>
    </Main>
  </Layout>
);

export default Home;
