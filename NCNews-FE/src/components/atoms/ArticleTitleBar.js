import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-size: 2rem;
  font-family: "Zilla Slab", serif;
  font-weight: 600;
`;

const ArticleTitleBar = ({ title }) => <Title>{title}</Title>;

ArticleTitleBar.defaultProps = {
  title: ""
}

ArticleTitleBar.propTypes = {
  title: PropTypes.string
};

export default ArticleTitleBar;
