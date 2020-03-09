import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  font-size: 1.5rem;
`;

const ArticleText = ({ body }) => <Text>{body}</Text>;


ArticleText.defaultProps = {
  body: ""
}

ArticleText.propTypes = {
  body: PropTypes.string
};

export default ArticleText;
