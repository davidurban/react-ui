import PropTypes from 'prop-types';
import React from 'react';
import styles from './Toolbar.scss';

const Toolbar = (props) => {
  const {
    align,
    children,
    justify,
  } = props;

  const alignClass = (value) => {
    if (value === 'top') {
      return styles.isAlignedToTop;
    }

    if (value === 'middle') {
      return styles.isAlignedToMiddle;
    }

    if (value === 'bottom') {
      return styles.isAlignedToBottom;
    }

    return styles.isAlignedToBaseline;
  };

  const justifyClass = (value) => {
    if (value === 'start') {
      return styles.isJustifiedToStart;
    }

    if (value === 'center') {
      return styles.isJustifiedToCenter;
    }

    if (value === 'end') {
      return styles.isJustifiedToEnd;
    }

    return styles.isJustifiedToSpaceBetween;
  };

  return (
    <div
      className={[
        styles.toolbar,
        alignClass(align),
        justifyClass(justify),
      ].join(' ')}
    >
      {children}
    </div>
  );
};

Toolbar.defaultProps = {
  align: 'bottom',
  justify: 'start',
};

Toolbar.propTypes = {
  align: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between']),
};

export default Toolbar;
