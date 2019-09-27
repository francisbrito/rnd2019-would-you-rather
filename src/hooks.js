import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setHeaderAction } from './actions';

export const useHeader = title => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderAction(title));
  }, [title, dispatch]);
};
