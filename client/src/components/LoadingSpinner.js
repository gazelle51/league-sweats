import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { usePromiseTracker } from 'react-promise-tracker';

/**
 * Loading spinner.
 * @param {Object} props
 * @param {string} [props.area] - Area label for spinner
 * @param {string} [props.variant] - Visual variants
 * @param {import('react').ElementType} [props.as] - Element type for this component, defaults to <div>
 * @param {any} [props.size] - Component size variations, use 'sm' to make small size
 */
export const LoadingSpinner = (props) => {
  const { promiseInProgress } = usePromiseTracker({ area: props.area, delay: 500 });

  return (
    promiseInProgress && (
      <Spinner animation='border' variant={props.variant} as={props.as} size={props.size} />
    )
  );
};
