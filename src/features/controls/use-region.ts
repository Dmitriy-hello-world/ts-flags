import {useSelector} from 'react-redux'

import { setRegion } from './controls-slice';
import { useAppDispatch } from 'store';
import { selectRegion } from './controls-selectors';
import { CustomRegions } from './CustomSelect';
import { Region } from 'types';
import { SingleValue } from 'react-select';

type handleSelectType = (reg: SingleValue<CustomRegions>) => void;

export const useRegion = (): [ Region | '', handleSelectType ] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: handleSelectType = (reg) => {
    if(reg) {
      dispatch(setRegion(reg.value))
    } else {
      dispatch(setRegion(''))
    }
  }

  return [region, handleSelect];
}
