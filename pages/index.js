import React from 'react';
import Head from '../lib/layouts/shared/Head/Head';
import BodyComponent from '../lib/layouts/application/Body/Body';
import Home from '../lib/containers/Home/Home';

const Index = () => (
  <div>
    <Head />
    <BodyComponent>
      <Home />
    </BodyComponent>
  </div>
);

export default Index;
