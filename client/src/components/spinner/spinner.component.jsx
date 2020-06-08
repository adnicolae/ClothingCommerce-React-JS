import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = WrappedComponent => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
