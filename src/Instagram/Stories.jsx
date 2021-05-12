import React from 'react';
import styled from "styled-components";
import {rgba} from 'polished';

import Story1 from "../Image/Story1.jpg";
import Story2 from "../Image/Story2.jpg";
import Story3 from "../Image/Story3.jpg";
import Story4 from "../Image/Story4.jpg";


const stories = [
    {title: 'just for fun', src: Story1},
    {title: '❤️', src: Story2},
    {title: '❤️', src: Story3},
    {title: '#sunset', src: Story4}
]

const StyledWrapper = styled.div`
    position: relative;
    height: 100px;
    overflow: hidden;
    background-color: white;
    @media only screen and (min-width: 600px) {
        height: 120px;
    }
`;

const StyledStoryList = styled.div`
    position: absolute;
    display: flex;
    padding-left: 16px;
`;

const StyledStoryBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 16px;
`;

const StyledImg = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 6px;
    border: 1px solid ${rgba("white", 0.25)};
    padding: 4px;
    @media only screen and (min-width: 600px) {
        width: 70px;
        height: 70px;
    }
`;

const StyledStoryTitle = styled.div`
  font-size: 12px;
  color: black;
`;

function Stories() {
    return (
        <StyledWrapper>
            <StyledStoryList>
                {stories.map((img) => (
                    <StyledStoryBlock key={img.title}>
                        <StyledImg src={img.src} />
                        <StyledStoryTitle>{img.title}</StyledStoryTitle>
                    </StyledStoryBlock>
                ))}
            </StyledStoryList>
        </StyledWrapper>
    )
}

export default Stories;
