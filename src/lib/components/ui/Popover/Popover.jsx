// TODO
// eslint-disable

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { usePopper } from 'react-popper';

const Popover = ({
  children,
  id,
  // parentElementReference,
  portalId,
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const {
    styles,
    attributes,
  } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'arrow',
        options: { element: arrowElement },
      },
    ],
  });

  styles.popper = {
    backgroundColor: 'white',
    border: '1px solid gray',
  };

  const PopoverEl = (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference
      </button>
      <div
        id={id}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </>
  );

  if (portalId === null) {
    return PopoverEl;
  }

  return createPortal(PopoverEl, document.getElementById(portalId));
};

Popover.defaultProps = {
  id: undefined,
  portalId: null,
};

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  // parentElementReference: PropTypes.func.isRequired,
  portalId: PropTypes.string,
};

export default Popover;
