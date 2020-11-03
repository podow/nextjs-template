import React from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';

import { createWrapper } from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from 'store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps }: AppProps = this.props;

    return (
      <>
        <Head>
          <link rel="icon" type="image/png" href="/public/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>My App</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

const wrapper = createWrapper(createStore);
export default wrapper.withRedux(withReduxSaga(MyApp));
