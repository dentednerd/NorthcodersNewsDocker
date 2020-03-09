import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: -webkit-radial-gradient(center bottom, rgba(160, 201, 215, 0.8) 0%, rgba(160, 201, 215, 0) 70%), -webkit-linear-gradient(top, black 0%,#282F44 6%,#2C3551 52%,#354262 91%,#050C54 100%);
  /* background-color:#ddf; */
  margin-bottom: 2rem;
  padding:0;
  height: 3rem;
  box-shadow: 1px 1px 5px #000;
  color:#FFF;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 3rem;
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;


const NavTab = styled(Link)`
  display:flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0 1rem;
  margin: 0; 
  min-width: 7rem;
  width: 7rem;
  height: 3rem;
  font-family: 'Zilla Slab', serif;
  font-size: 1.5rem;
  text-align:center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  box-shadow: -1px -1px 3px #666;
  text-decoration: none;
  color: #222;

  &:hover {
    background-color: rgba(200, 200, 255, 0.5);
    box-shadow: inset 1px 1px 3px #666;
    color:#fff;
  }
`;

const Title = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-size:2rem;
  line-height:60px;
  color:#fff;
  text-shadow: -1px -1px 3px #000;
  white-space:nowrap;
  overflow:hidden;
`;

class Navbar extends React.Component {
  render() {
    return (
      <StyledNav>
        <Container>
          <Title>Northcoders News</Title>
          <NavTab to="/">Home</NavTab>
        </Container>
      </StyledNav>
    );
  }
}

export default Navbar;
