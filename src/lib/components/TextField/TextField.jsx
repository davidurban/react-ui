import PropTypes from 'prop-types';
import React from 'react';
import styles from './TextField.scss';

const TextField = (props) => {
  let labelVisibilityClass = '';
  let rootFullWidthClass = '';
  let rootLayoutClass = '';
  let rootRequiredClass = '';
  let rootValidationStateClass = '';
  let rootVariantClass = '';

  if (!props.isLabelVisible) {
    labelVisibilityClass = styles.isLabelHidden;
  }

  if (props.fullWidth) {
    rootFullWidthClass = styles.isRootFullWidth;
  }

  if (props.layout === 'horizontal') {
    rootLayoutClass = styles.rootLayoutHorizontal;
  } else if (props.layout === 'vertical') {
    rootLayoutClass = styles.rootLayoutVertical;
  }

  if (props.required) {
    rootRequiredClass = styles.isRootRequired;
  }

  if (props.validationState === 'invalid') {
    rootValidationStateClass = styles.isRootStateInvalid;
  } else if (props.validationState === 'valid') {
    rootValidationStateClass = styles.isRootStateValid;
  } else if (props.validationState === 'warning') {
    rootValidationStateClass = styles.isRootStateWarning;
  }

  if (props.variant === 'filled') {
    rootVariantClass = styles.rootVariantFilled;
  } else if (props.variant === 'outline') {
    rootVariantClass = styles.rootVariantOutline;
  }

  return (
    <div
      className={(`
        ${styles.root}
        ${rootFullWidthClass}
        ${rootLayoutClass}
        ${rootRequiredClass}
        ${rootValidationStateClass}
        ${rootVariantClass}
      `).trim()}
    >
      <label className={styles.container} htmlFor={props.fieldId}>
        <div
          className={(`
            ${styles.label}
            ${labelVisibilityClass}
          `).trim()}
        >
          {props.label}
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            disabled={props.disabled}
            id={props.fieldId}
            onChange={props.changeHandler}
            placeholder={props.placeholder}
            required={props.required}
            size={props.size}
            type={props.type}
            value={props.value}
          />
          {props.variant === 'filled' && (
            <div className={styles.bottomLine} />
          )}
        </div>
      </label>
      {props.helperText && (
        <div className={styles.helperText}>
          {props.helperText}
        </div>
      )}
    </div>
  );
};

TextField.defaultProps = {
  changeHandler: null,
  disabled: false,
  fullWidth: false,
  helperText: null,
  isLabelVisible: true,
  layout: 'vertical',
  placeholder: null,
  required: false,
  size: null,
  type: 'text',
  validationState: null,
  value: undefined,
  variant: 'outline',
};

TextField.propTypes = {
  changeHandler: PropTypes.func,
  disabled: PropTypes.bool,
  fieldId: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  label: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.oneOf(['email', 'number', 'password', 'tel', 'text']),
  validationState: PropTypes.oneOf(['invalid', 'valid', 'warning']),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  variant: PropTypes.oneOf(['filled', 'outline']),
};

export default TextField;
