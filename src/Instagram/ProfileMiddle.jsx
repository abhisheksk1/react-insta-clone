import React from 'react';
import styled from "styled-components";
import {rgba} from "polished";

const StyledWrapper = styled.div`
    font-size: 14px;
    margin-left: 2px;
`;

const StyledTitle = styled.div`
    margin-bottom: 4px;
    font-Weight: 800px;
`;

const StyledBioLine = styled.div`
    margin-bottom: 6px;
    line-height: 1;
`;

const StyledEmoji = styled.span`
  margin-right: 6px;
`;

const StyledLink = styled.a`
  color: black;
`;



function ProfileMiddle() {
    return (
        <StyledWrapper>
            <StyledTitle>ππππ ππππππ</StyledTitle>
            <StyledBioLine>
                <StyledEmoji> β</StyledEmoji>ΟΡβΒ’ΟΠΌΡ ΡΟ ΠΌΡ ΟΟΡββ
            </StyledBioLine>
            <StyledBioLine>
                <StyledEmoji> β</StyledEmoji>π΄π ππ²πΎπππΈππΈπ°π½ ππͺ
            </StyledBioLine>
            <StyledBioLine>
                <StyledEmoji> β</StyledEmoji>Front End Developer.β€οΈ
            </StyledBioLine>
            <StyledBioLine>
                <StyledEmoji> β</StyledEmoji>ππΈπ½πΆπ»π΄ ππΏππΏ
            </StyledBioLine>
            <StyledLink>abhi-pandey.netlify.app</StyledLink>
        </StyledWrapper>
    )
}

export default ProfileMiddle
