import React, { FC, useCallback, useEffect } from 'react';
import { Header } from '../components/Header';
import { Router } from '../routers';
import { resize } from '../store/slices/app-slice';
import {useAppDispatch} from "../store";
import { MOBILE_SCREEN_WIDTH } from '../utils/constants';
import styles from "./App.module.sass";
import { Footer } from '../components/Footer';

const App: FC = () => {
  const dispatch = useAppDispatch();

  const updateDimensions = useCallback((): void => {
    window.screen.availWidth <= MOBILE_SCREEN_WIDTH
      ? dispatch(resize(true))
      : dispatch(resize(false));
  }, [dispatch]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <Header/>
      </div>

      <div className={styles['content']}>
        <Router/>
      </div>

      <div className={styles["footer"]}>
        <Footer/>
      </div>
    </div>
  )
}

export { App };
