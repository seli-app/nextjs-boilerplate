import React from 'react';
import Head from '../lib/layouts/shared/Head/Head';
import Body from '../lib/layouts/sessions/Body/Body';
import SignIn from '../lib/containers/SignIn/SignIn';

const Index = () => (
  <div>
    <Head />
    <Body>
      <SignIn />
    </Body>
  </div>
);

export default Index;
