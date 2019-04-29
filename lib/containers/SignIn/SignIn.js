import React, { Component } from 'react';
import './SignIn.scss';
import { Trans, withTranslation } from 'react-i18next';
import Link from 'next/link';
import PropTypes from 'prop-types';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { t } = this.props;
    const { email, password } = this.state;

    return (
      <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-5 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4"><Trans>welcome back!</Trans></h1>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                      placeholder={t('enter email address')}
                      value={email}
                      onChange={this.handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <Link href="/">
                    <a href="/" className="btn btn-primary btn-user btn-block">
                      <Trans>sign in</Trans>
                    </a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(SignIn);
