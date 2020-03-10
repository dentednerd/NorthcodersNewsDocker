import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: 3rem;
  color: #fff;
  text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000;
  text-align: center;
  margin: 0 auto 1rem auto;
`;

const WhiteTitle = ({ children }) => (
  <StyledHeading>{children}</StyledHeading>
);

export default WhiteTitle;
