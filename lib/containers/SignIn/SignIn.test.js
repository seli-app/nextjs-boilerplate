import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './SignIn';

const t = jest.fn(x => x);

describe('SignIn', () => {
  let component;

  beforeAll(() => {
    component = shallow(
      <SignIn t={t} />
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display a form', () => {
    expect(component.find('form')).toHaveLength(1);
  });

  it('should display two inputs for email & password', () => {
    expect(component.find('input')).toHaveLength(2);
  });

  it('should update state when email is changed', () => {
    const email = component.find('input[type="email"]');
    email.simulate('change', { target: { value: 'test@test.com' } });
    expect(component.state('email')).toEqual('test@test.com');
  });

  it('should update state when password is changed', () => {
    const password = component.find('input[type="password"]');
    password.simulate('change', { target: { value: 'password' } });
    expect(component.state('password')).toEqual('password');
  });
});
