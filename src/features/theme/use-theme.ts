import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import { Theme, setTheme } from './theme-slice';
import { getThemeSelector } from './theme-selectors';

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(getThemeSelector);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme]
}
