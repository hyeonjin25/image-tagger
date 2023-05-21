import React from 'react';
import {BackBar} from './components/bar/BasicHeaderBar';
import {SearchBar} from './components/bar/SearchBar';
import {ImageList} from './components/List/ImageList';
import {Container} from './HomeScreen';
import styled from 'styled-components';

const SearchScreen = () => {
  return (
    <>
      <Header>
        <BackBar />
        <SearchBox>
          <SearchBar />
        </SearchBox>
      </Header>
      <Container>
        <ImageList/>
      </Container>
    </>
  );
};

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SearchBox = styled.View`
  width: 90%;
  padding-right: 5%;
`;

export default SearchScreen;
