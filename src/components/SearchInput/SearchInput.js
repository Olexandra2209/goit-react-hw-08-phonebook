import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { FilterInput, Filters } from './SearchInput.styled';

const SearchInput = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Filters>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </Filters>
  );
};

export default SearchInput;
