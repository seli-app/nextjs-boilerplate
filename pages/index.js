import React from 'react';
import Head from '../lib/layouts/shared/Head/Head';
import Body from '../lib/layouts/application/Body/Body';
import Home from '../lib/containers/Home/Home';

const Index = () => (
  <div>
    <Head />
    <Body>
      <Home />
    </Body>
  </div>
);

export default Index;
