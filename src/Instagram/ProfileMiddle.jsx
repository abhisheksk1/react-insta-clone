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
            <StyledTitle>𝐀𝐁𝐇𝐈 𝐏𝐀𝐍𝐃𝐄𝐘</StyledTitle>
            <StyledBioLine>
                <StyledEmoji> ☞</StyledEmoji>ωєℓ¢σмє тσ му ωσяℓ∂
            </StyledBioLine>
            <StyledBioLine>
                <StyledEmoji> ☞</StyledEmoji>🅴🆇 🆂🅲🅾🆃🆃🅸🆂🅸🅰🅽 😎💪
            </StyledBioLine>
            <StyledBioLine>
                <StyledEmoji> ☞</StyledEmoji>Front End Developer.❤️
            </StyledBioLine>
            <StyledBioLine>
                <StyledEmoji> ☞</StyledEmoji>🆂🅸🅽🅶🅻🅴 🙏🏿🙏🏿
            </StyledBioLine>
            <StyledLink>abhi-pandey.netlify.app</StyledLink>
        </StyledWrapper>
    )
}

export default ProfileMiddle
