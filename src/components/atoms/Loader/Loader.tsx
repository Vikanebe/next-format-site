import React, { ReactElement } from 'react';

import styles from './Loader.module.sass';

interface LoaderProps {
  type?: 'spinner' | 'dots'
}

export const Loader = ({ type = 'spinner' }: LoaderProps): ReactElement => (
  <div className={styles[type]}>
    <div />
  </div>
);
