import React, { FC, useCallback, useEffect } from 'react';
import { resize } from '../store/slices/appSlice';
import {useAppDispatch} from "../store/store";
import { MOBILE_SCREEN_WIDTH } from '../utils/constants';


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
    <div>

    </div>
  )
}

export { App};
