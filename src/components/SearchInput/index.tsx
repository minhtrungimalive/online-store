import React, { FunctionComponent } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import SearchInputStyled from './SearchInputStyled';

const { Search } = Input;
const SearchInput: FunctionComponent<{}> = () => {
  return (
    <SearchInputStyled>
      <Search placeholder="Searching what you need ..." enterButton="Search" size="large" onSearch={value => alert(`value la ${value}`)} />
    </SearchInputStyled>
  );
};

export default SearchInput;
