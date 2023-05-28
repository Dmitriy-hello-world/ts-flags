import {useEffect} from 'react';

import { selectControls } from '../controls/controls-selectors';
import { selectCountriesInfo, selectVisibleCountries } from './countries-selectors';
import { loadCountries } from './countries-slice';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { Country, Status } from 'types';

export const useCountries = (): [Country[], {status: Status, error: string | null, qty:  number}] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) => selectVisibleCountries(state, controls));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, {status, error, qty}];
}
