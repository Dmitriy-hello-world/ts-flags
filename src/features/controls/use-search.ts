import {useSelector} from 'react-redux';
import { setSearch } from './controls-slice';
import { useAppDispatch } from 'store';
import { selectSearch } from './controls-selectors';
import { ChangeEventHandler } from 'react';

type searchType = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [ string, searchType ] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: searchType = (e) => {
    dispatch(setSearch(e.target.value))
  }

  return [search, handleSearch];
}
