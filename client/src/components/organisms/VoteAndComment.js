import React from 'react';
import styled from 'styled-components';
import VoteButton from '../atoms/VoteButton';
import NewComment from '../atoms/NewComment';

const Voter = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const VoteAndComment = ({ votes, id, postComment}) => {
  return (
    <Voter>
      <VoteButton 
        votes={votes} 
        id={id}
      />
      <NewComment 
        postComment={postComment}
        article_id={id} 
      />
    </Voter>
  )
};

export default VoteAndComment;
