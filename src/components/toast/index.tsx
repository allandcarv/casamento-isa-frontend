import React from 'react';
import { ToastContainerProps } from 'react-toastify';

import { CustomToastContainer } from './styles';

const ToastContainer: React.FC<ToastContainerProps> = props => (
  <CustomToastContainer {...props} />
);

export default ToastContainer;
