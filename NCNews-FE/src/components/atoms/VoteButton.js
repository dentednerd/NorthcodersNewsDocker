import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/actions';
import styled from 'styled-components';

const Votes = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;
`;

const Button = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 0.25rem;
  align-items: center;
  background-color: #354262;
  color: #fff;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

class VoteButton extends React.Component {
  render () {
    return (
      <Votes>
        {this.props.votes} votes
        <Button onClick={this.props.articleVoteUp.bind(this)}>+</Button>
        <Button onClick={this.props.articleVoteDown.bind(this)}>-</Button>
      </Votes>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    articleVoteUp: function () {
      dispatch(actions.articleVoteUp(this.props.id));
    },
    articleVoteDown: function () {
      dispatch(actions.articleVoteDown(this.props.id));
    }
  };
}

function mapStateToProps (state) {
  return state;
}

VoteButton.propTypes = {
    votes: PropTypes.number,
    id: PropTypes.string.isRequired,
    articleVoteUp: PropTypes.func,
    articleVoteDown: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);
