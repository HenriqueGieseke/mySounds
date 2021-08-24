import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


export const Nav = styled.nav`
  background: #fff;
  height: 3.66rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 9px 2px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 999;
  animation: ${FadeIn} .5s ease;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.66rem;
  padding: 0.96rem 2.1rem;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  color: #000;
  text-decoration: none;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-bottom: solid 1px #fff;
  padding-bottom: 0.18rem;
  transition: all 0.3s;

  &:hover {
    border-bottom: solid 1px #000;
  }
`;

export const Logo = styled.img`
  height: 1.74rem;
`;

export const LogoText = styled.h1`
  font-size: 0.84rem;
  font-weight: 600;
  margin-left: 0.36rem;
`;

export const Form = styled.form``;

export const SearchInput = styled.input`
  border: none;
  height: 1.8rem;
  width: 20.04rem;
  background: #f0f0f0;
  border-radius: 6px;
  padding: 0 0.9rem;
  outline: none;
  transition: all 0.3s;

  &:focus {
    width: 24.04rem;
    background-color: #e4e4e4;
  }

  &::-webkit-input-placeholder {
    color: #b5b5b5;
  }
`;

export const SearchIcon = styled.img`
  height: 0.9rem;
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 1.4rem;
  margin-left: -1.8rem;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
  }

  &:active,
  &:focus {
    transform: translateY(-1px);
  }
`;

export const NavigationLink = styled(Link)`
  font-size: 0.84rem;
  text-decoration: none;
  color: #000;
`;

export const StarIcon = styled.img`
  height: 0.8rem;
  margin-right: 0.36rem;
`;
