import PropTypes from 'prop-types';
import React from 'react';
import styles from './Card.scss';

export const CardBody = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={styles.body}>
      {children}
    </div>
  );
};

CardBody.propTypes = {
  /**
   * Content of the card.
   */
  children: PropTypes.node.isRequired,
};

export default CardBody;
