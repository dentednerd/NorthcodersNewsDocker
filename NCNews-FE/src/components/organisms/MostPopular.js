import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArticleCard from '../molecules/ArticleCard';
import Byline from '../molecules/Byline';
import WhiteTitle from '../atoms/WhiteTitle';

const MostPopular = ({ articles, topic }) => {
  const currentArticles = articles.filter(article => article.belongs_to === topic).sort((a,b) => b.votes - a.votes).slice(0,4);

  const MostRecentContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;

  img.header {
    margin: -2rem 0 1rem -2rem;
    width: calc(100% + 4rem);
    object-fit: cover;
    height: 15rem;
  }

  article {
    width: ${currentArticles.length < 3 ? 'calc(50% - 5rem)' : 'calc(33% - 5rem)'};
    padding: 2rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0.25rem 0.25rem 0.25rem #ddd;
    overflow: hidden;
    transition: all 0.25s;

    &:hover {
      box-shadow: 0.1rem 0.1rem 0.1rem #ccc;
      transition: all 0.25s;
    }

    p {
      margin: 0;
    }
  }
`;

  const images = {
    football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
    cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
    coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
  }

  return (
    <>
      <WhiteTitle>{topic}</WhiteTitle>
      {currentArticles.length > 3 && <ArticleCard article={currentArticles[0]} />}
      <MostRecentContainer>
        {currentArticles.slice(currentArticles.length > 3 ? 1 : 0,4).map(article => (
          <article key={article._id}>
            <img className="header" src={images[article.belongs_to]} alt={article.title} />
            <Link to={`/articles/${article._id}`}><h2>{article.title}</h2></Link>
            <Byline username={article.created_by} topic={article.belongs_to} />
          </article>
        ))}
      </MostRecentContainer>
    </>
  );
}

MostPopular.defaultProps = {
  articles: []
}

MostPopular.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

export default MostPopular;
