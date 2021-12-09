// Login form.
import React from 'react';
import { FormattedMessage } from 'react-intl';

import CheckBox from '../widgets/checkbox.jsx';
import VisiblePassword from '../widgets/visible-password.jsx';

import LocalStorageUtil from '../lib/local-storage.js';

export default class LoginView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: props.login,
      password: '',
      token: null,
      id_device: null,
      hostName: props.serverAddress,
      saveToken: props.persist
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleTokenChange = this.handleTokenChange.bind(this);
    this.handleIdDeviceChange = this.handleIdDeviceChange.bind(this);
    this.handleToggleSaveToken = this.handleToggleSaveToken.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginChange(e) {
    console.log('user on change: ', e.target.value)
    this.setState({login: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleTokenChange(e) {
    console.log('token on change: ', e.target.value)
    this.setState({token: e.target.value});
    localStorage.setItem("access_token", e.target.value);
  }

  handleIdDeviceChange(e) {
    console.log('id_device on change: ', e.target.value)
    this.setState({id_device: e.target.value});
    localStorage.setItem("id_device", e.target.value);
  }

  handleToggleSaveToken() {
    this.props.onPersistenceChange(!this.state.saveToken);
    this.setState({saveToken: !this.state.saveToken});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onLogin(this.state.login.trim(), this.state.password.trim(), this.state.token.trim(), this.state.id_device.trim());
  }

  render() {
    let submitClasses = 'primary';
    if (this.props.disabled) {
      submitClasses += ' disabled';
    }

    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <FormattedMessage id="login_prompt" defaultMessage="Login"
          description="Placeholer for username/login">
        {
          (login_prompt) => <input type="text" id="inputLogin"
            placeholder={login_prompt}
            autoComplete="username"
            autoCorrect="off"
            autoCapitalize="none"
            value={this.state.login}
            onChange={this.handleLoginChange}
            required autoFocus />
        }
        </FormattedMessage>
        <FormattedMessage id="password_prompt" defaultMessage="Password"
          description="Placeholder/prompt for entering password">
        {
          (password_prompt) => <VisiblePassword type="password" id="inputPassword"
            placeholder={password_prompt}
            autoComplete="current-password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required={true} />
        }
        </FormattedMessage>


        <FormattedMessage id="token_prompt" defaultMessage="Token"
          description="Placeholer for token">
        {
          (token_prompt) => <input type="text" id="inputToken"
            placeholder={token_prompt}
            autoComplete="token"
            autoCorrect="off"
            autoCapitalize="none"
            value={this.state.token}
            onChange={this.handleTokenChange}
            required autoFocus />
        }
        </FormattedMessage>
        <FormattedMessage id="id_device_prompt" defaultMessage="ID Device"
          description="Placeholer for id_device">
        {
          (id_device_prompt) => <input type="text" id="inputIdDevice"
            placeholder={id_device_prompt}
            autoComplete="id_device"
            autoCorrect="off"
            autoCapitalize="none"
            value={this.state.id_device}
            onChange={this.handleIdDeviceChange}
            required autoFocus />
        }
        </FormattedMessage>


        <div className="panel-form-row">
          <CheckBox id="save-token" name="save-token" checked={this.state.saveToken}
            onChange={this.handleToggleSaveToken} />
          <label htmlFor="save-token">&nbsp;
            <FormattedMessage id="stay_logged_in" defaultMessage="Stay logged in"
              description="Label for a checkbox" />
          </label>
          <a href="#reset">
            <FormattedMessage id="forgot_password_link" defaultMessage="Forgot password?"
              description="Link to Reset password form" />
          </a>
        </div>
        <div className="dialog-buttons">
          <button className={submitClasses} type="submit">
            <FormattedMessage id="button_sign_in" defaultMessage="Sign in"
              description="Button [Sign In]" />
          </button>
        </div>
      </form>
    );
  }
};
/* END Login */
