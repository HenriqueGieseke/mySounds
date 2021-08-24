import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form,
  Logo,
  Nav,
  NavbarContainer,
  LinkWrapper,
  LogoWrapper,
  SearchButton,
  SearchInput,
  NavigationLink,
  LogoText,
  SearchIcon,
  StarIcon,
} from './Navbar.elements';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import favIcon from '../../assets/fav-star.svg';
import { clearTracks, searchTracks, setQuery } from '../../store/actions/storeActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(setQuery(searchQuery));
    dispatch(searchTracks(searchQuery));
  };

  const clearOnClick = () => {
    dispatch(clearTracks());
  };

  return (
    <Nav>
      <NavbarContainer>
        <LogoWrapper to="/" onClick={clearOnClick}>
          <Logo src={logo} />
          <LogoText>mySounds</LogoText>
        </LogoWrapper>

        <Form onSubmit={onSubmit}>
          <SearchInput
            placeholder="Busque por música, artista ou album"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton type="submit">
            <SearchIcon src={searchIcon} />
          </SearchButton>
        </Form>

        <LinkWrapper>
          <StarIcon src={favIcon} />
          <NavigationLink to="/favorites" onClick={clearOnClick}>
            Favoritos
          </NavigationLink>
        </LinkWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
