import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import dayjs from 'dayjs';
import * as actions from '../../actions/actions';

const StyledSection = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  border: solid 1px #ddd;
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin-right: 1rem;
  }

  h2, p {
    margin: 0;
  }
`;

const ProfileName = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const UserList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 0.5rem 0;
  }

  h3 {
    margin-top: 0;
  }
`;

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.users !== this.props.users;
  }

  render() {
    return (
      <React.Fragment>
        <StyledSection>
          <img src="https://avatars3.githubusercontent.com/u/6791502?v=3&s=200" alt="" />
          <ProfileName>
            <h2>Awesome Northcoder</h2>
            <p>northcoder</p>
          </ProfileName>
        </StyledSection>
        <StyledSection>
          <p>Welcome, Awesome Northcoder! It's {dayjs().format('MMMM DD, YYYY')}.</p>
        </StyledSection>
        <StyledSection>
          <UserList>
            <h3>Topics</h3>
            <li><Link to="/topics/coding">coding</Link></li>
            <li><Link to="/topics/cooking">cooking</Link></li>
            <li><Link to="/topics/football">football</Link></li>
          </UserList>
        </StyledSection>
        <StyledSection>
          <UserList>
            <h3>Users</h3>
            {this.props.users && this.props.users.map(user => (
              <Link to={`/users/${user.username}`} key={user.name}>
                <li>
                  <img src={user.avatar_url} alt={user.name} />
                  <p>{user.name}</p>
                </li>
              </Link>
            ))}
          </UserList>
        </StyledSection>
      </React.Fragment>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAllUsers: () => {
      dispatch(actions.fetchAllUsers());
    }
  };
}

function MapStateToProps (state) {
  return {
    users: state.allUsers,
    loading: state.loading
  };
}

export default connect(MapStateToProps, mapDispatchToProps) (Sidebar);
