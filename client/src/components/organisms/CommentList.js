import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from '../molecules/Comment';

class CommentList extends React.Component {
  render () {
    if (!this.props.selectedComments.length) return null;

    const StyledCommentList = styled.section`
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    `;

    return (
      <StyledCommentList>
        {this.props.selectedComments.sort((a, b) => b.created_at - a.created_at).map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </StyledCommentList>
    );
  }
}

CommentList.propTypes = {
  selectedComments: PropTypes.array.isRequired
};

export default CommentList;
