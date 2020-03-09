import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MostRecent from '../organisms/MostRecent';
import MostPopular from '../organisms/MostPopular';
import * as actions from '../../actions/actions';

class Home extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    if (!this.props.articles) return <p>No articles!</p>;
    return (
      <React.Fragment>
        <MostRecent articles={this.props.articles} />
        <MostPopular articles={this.props.articles} topic="coding" />
        <MostPopular articles={this.props.articles} topic="cooking" />
        <MostPopular articles={this.props.articles} topic="football" />
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

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

export default connect(MapStateToProps, mapDispatchToProps) (Home);
