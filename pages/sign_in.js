import React from 'react';
import Head from '../lib/layouts/shared/Head/Head';
import Body from '../lib/layouts/sessions/Body/Body';
import SignInComponent from '../lib/containers/SignIn/SignIn';

const Index = () => (
  <div>
    <Head />
    <Body>
      <SignInComponent />
    </Body>
  </div>
);

export default Index;
