import React from 'react';
import styled from 'styled-components';
import TopBar from './TopBar';
import Profile from "./Profile";
import Stories from './Stories';
import Tabs from './Tabs';
import Grid from './Grid';

const StyledWrapper = styled.div`
  width: 100%;
  background: black;
  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    width: 500px;
  }
`;

function Wrapper() {
    return (
        <StyledWrapper>
            <TopBar />
            <Profile />
            <Stories />
            <Tabs />
            <Grid />
        </StyledWrapper>
    )
}

export default Wrapper;
