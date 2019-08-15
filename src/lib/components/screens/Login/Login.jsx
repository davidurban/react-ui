import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../ui/Button';
import TextField from '../../ui/TextField';
import { withTranslationContext } from '../../../translation';
import styles from './Login.scss';

const Login = props => (
  <div className={styles.root}>
    {props.logoUrl && (
      <div className={styles.logoWrap}>
        <img
          src={props.logoUrl}
          className={styles.logo}
          alt={props.title || 'logo'}
        />
      </div>
    )}
    {props.title && (
      <div className={styles.title}>
        {props.title}
      </div>
    )}
    <div className={styles.box}>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (props.submitHandler) {
            props.submitHandler(e);
          }
        }}
      >
        {props.hasError && (
          <div className={styles.error}>
            {props.translations.invalidUsernameOrPassword}
          </div>
        )}
        <div className="mb-3">
          <TextField
            fieldId={props.usernameType === 'email' ? 'email' : props.usernameType}
            changeHandler={event => props.onChangeHandler('username', event.target.value)}
            label={props.usernameType === 'email' ? props.translations.email : props.usernameType}
            type={props.usernameType === 'email' ? 'email' : 'text'}
            fullWidth
            required
          />
          <TextField
            fieldId="password"
            changeHandler={event => props.onChangeHandler('password', event.target.value)}
            label={props.translations.password}
            type="password"
            fullWidth
            required
          />
        </div>
        <Button label={props.translations.signIn} block type="submit" />
      </form>
      {props.footer && (
        <div className={styles.footer}>
          {props.footer}
        </div>
      )}
    </div>
  </div>
);

Login.defaultProps = {
  footer: null,
  hasError: false,
  logoUrl: null,
  onChangeHandler: null,
  submitHandler: null,
  title: null,
  usernameType: 'email',
};

Login.propTypes = {
  footer: PropTypes.element,
  hasError: PropTypes.bool,
  logoUrl: PropTypes.string,
  onChangeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  title: PropTypes.string,
  translations: PropTypes.shape({
    email: PropTypes.string.isRequired,
    invalidUsernameOrPassword: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    signIn: PropTypes.string.isRequired,
  }).isRequired,
  usernameType: PropTypes.oneOf(['email', PropTypes.string]),
};

export default withTranslationContext(Login, 'Login');
