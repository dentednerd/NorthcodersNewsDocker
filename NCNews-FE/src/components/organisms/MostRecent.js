import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Byline from '../molecules/Byline';

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
`;

const Card = styled.article`
  width: calc(33% - 5rem);
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
`;

const images = {
  football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
  cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
  coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
}

const MostRecentCard = ({ article }) => (
  <Card>
    <section></section>
    <img className="header" src={images[article.belongs_to]} alt={article.title} />
    <Link to={`/articles/${article._id}`}><h2>{article.title}</h2></Link>
    <Byline username={article.created_by} topic={article.belongs_to} />
  </Card>
);

const MostRecent = ({ articles }) => (
  <MostRecentContainer>
    {articles.sort((a, b) => a._id - b._id).filter(article => article.belongs_to === "football")
      .map((article, index) => {
        if (index > 0) return null;
        return <MostRecentCard article={article} key={article._id} />
      })
    }
    {articles.filter(article => article.belongs_to === "cooking")
      .map((article, index) => {
        if (index > 0) return null;
        return <MostRecentCard article={article} key={article._id} />
      })
    }

    {articles.filter(article => article.belongs_to === "coding")
      .map((article, index) => {
        if (index > 0) return null;
        return <MostRecentCard article={article} key={article._id} />
      })
    }
  </MostRecentContainer>
);


MostRecent.defaultProps = {
  articles: []
}

MostRecent.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

export default MostRecent;
