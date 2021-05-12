import React from 'react'
import ProfileTop from './ProfileTop';
import styled from "styled-components"
import ProfileMiddle from './ProfileMiddle';
import ProfileBottom from './ProfileBottom';

const StyledWrapper = styled.div`
    padding: 8px 16px;
    background-color: white;
`

function Profile() {
    return (
        <StyledWrapper>
            <ProfileTop />
            <ProfileMiddle />
            <ProfileBottom />
        </StyledWrapper>
    )
}

export default Profile;
