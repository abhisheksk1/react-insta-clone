import React from 'react'
import styled from "styled-components";
import avatar from "../Image/avatar.jpg";
import {rgba} from "polished";


const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    background-color: white;
`;

const StyledAvatarWrapper = styled.div`
  flex: 0 0 80px;
  border: 2px solid ${rgba("white", 0.25)};
  border-radius: 50%;
  padding: 3px;
  width: 80px;
  height: 80px;
`;

const StyledAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const StyledStatList = styled.div`
    display: flex;
    marginRight: 10px;
`;

const StyledStatListBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 12px;
    width: 70px;
    &:first-child {
    margin: 0;
    }
`;

const StyledStatListLabel = styled.div`
  font-size: 14px;
`;

const StyledStatListValue = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

function ProfileTop() {
    return (
        <StyledWrapper>
            <StyledAvatarWrapper>
                <StyledAvatar src={avatar} />
            </StyledAvatarWrapper>
            <StyledStatList>
                <StyledStatListBlock>
                    <StyledStatListValue>7</StyledStatListValue>
                    <StyledStatListLabel>Posts</StyledStatListLabel>
                </StyledStatListBlock>
                <StyledStatListBlock>
                    <StyledStatListValue>172</StyledStatListValue>
                    <StyledStatListLabel>Followers</StyledStatListLabel>
                </StyledStatListBlock>
                <StyledStatListBlock>
                    <StyledStatListValue>136</StyledStatListValue>
                    <StyledStatListLabel>Following</StyledStatListLabel>
                </StyledStatListBlock>
            </StyledStatList>
        </StyledWrapper>
    )
}

export default ProfileTop
