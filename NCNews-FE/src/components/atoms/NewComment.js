import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../../actions/actions';

const Form = styled.form`
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;
`;

const Input = styled.input`
height: 1rem;
font-size: 1rem;
border: none;
border-radius: 0.25rem;
padding: 0.25rem;
`;

const Button = styled.button`
  height: 1.5rem;
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

class NewComment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: {
        value: '',
        touched: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input id="comment-input" type="text" placeholder="Leave your comment" onChange={this.handleChange.bind(null, 'comment')} />
        <Button type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  handleChange (field, e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state, {
      [field]: {
        value: e.target.value,
        touched: true
      }
    });
    this.setState(Object.assign(newState));
  }

  handleSubmit (event) {
    event.preventDefault();
    let data = {comment: this.state.comment.value};
    this.props.postComment(this.props.article_id, data);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postComment: function (id, newComment) {
      dispatch(actions.addCommentsByArticleID(id, newComment));
    }
  };
}

function mapStateToProps (state) {
  return {
    comment: state.comment
  };
}

NewComment.propTypes = {
  article_id: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
