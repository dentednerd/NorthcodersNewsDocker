import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Byline from '../molecules/Byline';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled('article')`
  position: relative;
  background-color: #fff;
  border: solid 1px #eee;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0.25rem 0.25rem 0.25rem #ddd;
  padding: 2rem;
  width: calc(100% - 4rem);
  overflow: hidden;
  transition: all 0.25s;

  &:hover {
    box-shadow: 0.1rem 0.1rem 0.1rem #ccc;
    transition: all 0.25s;
  }
  
  h2 {
    font-family: "Zilla Slab", serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    margin: 0;
  }

  p {
    margin: 0;
  }

  img.header {
    margin: -2rem 0 1rem -2rem;
    width: calc(100% + 4rem);
    height: 15rem;
    object-fit: cover;
  }
`;

const ArticleCard = ({ article }) => {
  if (!article) return null;
  const images = {
    football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
    cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
    coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
  }

  return (
    <Card>
      <img className="header" src={images[article.belongs_to]} alt={article.title} />
      <StyledLink to={`/articles/${article._id}`}><h2>{article.title}</h2></StyledLink>
      <Byline username={article.created_by} topic={article.belongs_to} />
    </Card>
  );
};

ArticleCard.defaultProps = {
  article: null
}

ArticleCard.propTypes = {
  article: PropTypes.object
};

export default ArticleCard;
