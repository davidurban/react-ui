import PropTypes from 'prop-types';
import React from 'react';
import styles from './Media.scss';

export const Media = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={styles.media}>
      {children}
    </div>
  );
};

Media.propTypes = {
  /**
   * Slot for MediaBody and MediaObject components.
   */
  children: PropTypes.node.isRequired,
};

export default Media;
