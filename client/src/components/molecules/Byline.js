import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledByline = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: #ccc;

  a {
    color: #a0c9d7;
  }
`;

const Avatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  margin-right: 0.5rem;
`;

class Byline extends React.Component {
  render () {
    if (!this.props.users || !this.props.username) return null;
    const thisUser = this.props.users.filter(user => user.username === this.props.username)[0];
    return (
    <StyledByline>
      <Avatar src={thisUser.avatar_url} alt={thisUser.name} />
      <Link to={`/users/${thisUser.username}`}>{thisUser.name}</Link>
      &nbsp;
      {this.props.topic && <Link to={`/topics/${this.props.topic}`}>in {this.props.topic}</Link>}
      {this.props.time && `at ${this.props.time}`}
    </StyledByline>
    );
  }
}

function MapStateToProps (state) {
  return {
    users: state.allUsers,
    loading: state.loading
  };
}
Byline.defaultProps = {
  username: ""
}

Byline.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  authorUsername: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default connect(MapStateToProps) (Byline);
