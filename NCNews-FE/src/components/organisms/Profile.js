import React from 'react';
import styled from 'styled-components'

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

const Profile = ({ user }) => {
  if (!user) return null;
  
  return (
    <StyledSection>
      <img src={user.avatar_url} alt={user.name} />
      <ProfileName>
        <h2>{user.name}</h2>
        <p>{user.username}</p>
      </ProfileName>
    </StyledSection>
  );
}

export default Profile;
