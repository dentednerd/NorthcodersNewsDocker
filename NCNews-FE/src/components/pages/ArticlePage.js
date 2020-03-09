import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import ArticleText from '../atoms/ArticleText';
import CommentList from '../organisms/CommentList';
import VoteAndComment from '../organisms/VoteAndComment';
import Byline from '../molecules/Byline';

const Article = styled.article`
  background-color: #fff;
  padding: 1rem;

  h2, p {
    margin: 0;
  }
`;

class ArticlePage extends React.Component {
  componentDidMount () {
    this.props.fetchArticlesByID(this.props.match.params.article_id);
    this.props.fetchCommentsByArticleID(this.props.match.params.article_id);
  }

  render () {
    const images = {
      football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
      cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
      coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
    }

    const HeaderImage = styled.div`
      background-image: url(${images[this.props.selectedArticle.belongs_to]});
      background-position: center;
      margin-top: -1rem;
      margin-left: -1rem;
      width: 100%;
      height: 20rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 3rem;
      text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000;
      text-align: center;
      padding: 1rem;
      margin-bottom: 1rem;

      h2 {
        font-size: 3rem;
      }
    `;

    return (
      <div>
        <Article>
          <HeaderImage>
            <h2>{this.props.selectedArticle.title}</h2>
          </HeaderImage>
          <hr />
          <Byline username={this.props.selectedArticle.created_by} />
          <hr />
          <ArticleText 
            body={this.props.selectedArticle.body} 
          />
        </Article>
        <VoteAndComment
          votes={this.props.selectedArticle.votes} 
          id={this.props.match.params.article_id}
          postComment={this.props.addCommentsByArticleID}
        />
        <CommentList 
          selectedComments={this.props.comments} 
        />               
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticlesByID: (id) => {
      dispatch(actions.fetchArticlesByID(id));
    },
    fetchCommentsByArticleID: (id) => {
      dispatch(actions.fetchCommentsByArticleID(id));  
    },
    addCommentsByArticleID: (id, data) => {
        dispatch(actions.addCommentsByArticleID(id, data));
    }
  };
}

function MapStateToProps (state) {
  return {
    selectedArticle: state.selectedArticle,
    comments: state.selectedComments
  };
}

ArticlePage.defaultProps = {
  selectedArticle: {},
  comments: []
}

ArticlePage.propTypes = {
    selectedArticle: PropTypes.object,
    comments: PropTypes.array,
    fetchArticlesByID: PropTypes.func.isRequired,
    fetchCommentsByArticleID: PropTypes.func.isRequired,
    addCommentsByArticleID: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (ArticlePage);
