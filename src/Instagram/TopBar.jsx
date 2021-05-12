import React from 'react';
import styled from "styled-components";
import {rgba} from "polished"

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 64px;
  background-color: white;
  border-bottom: ${rgba("white", 0.05)};
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  line-height: 1;
  color : black;
`;

const StyledTitleBadge = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #db555a;
`;

const StyledIconButton = styled.button`
  font-size: 28px;
  justify-content: space-between;
`;

function TopBar() {
    return (
        <StyledWrapper>
            <StyledTitle>
                <StyledTitleText>_im_abhi_pandey</StyledTitleText>
                <StyledTitleBadge>7</StyledTitleBadge>
            </StyledTitle>
            <div>
                <StyledIconButton>
                    <i className="uil uil-plus"></i>
                </StyledIconButton>
                <StyledIconButton>
                    <i className="uil uil-bars"></i>
                </StyledIconButton>
            </div>
        </StyledWrapper>
    )
}

export default TopBar;
