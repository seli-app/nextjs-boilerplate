import React from 'react';
import Head from 'next/head';

const head = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/react-table@latest/react-table.css"
      />
    </Head>
  </div>
);

export default head;
