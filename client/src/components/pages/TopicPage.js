import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ArticleCard from '../molecules/ArticleCard';
import WhiteTitle from '../atoms/WhiteTitle';
import * as actions from '../../actions/actions';

class TopicPage extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  
  render () {
    if (!this.props.articles) return <p>No articles!</p>;
    return (
      <div>
        <WhiteTitle>{this.props.match.params.topic_id}</WhiteTitle>
        {this.props.articles.filter(article => {
          return article.belongs_to === this.props.match.params.topic_id;
        })       
        .map(article => <ArticleCard key={article._id} article={article} />)}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function MapStateToProps (state) {
  return {
    articles: state.articles,
    loading :state.loading
  };
}

TopicPage.propTypes = {
  fetchArticles:PropTypes.func.isRequired,
  articles:PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (TopicPage);
