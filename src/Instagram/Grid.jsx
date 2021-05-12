import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

import Story1 from '../Image/Story1.jpg';
import Story2 from '../Image/Story2.jpg';
import post1 from "../Image/post1.jpg";
import post2 from "../Image/post2.jpg";
import post3 from "../Image/post3.jpg";
import post4 from "../Image/post4.jpg";
import post5 from "../Image/post5.jpg";

const posts = [
    Story1,
    Story2,
    post1,
    post2,
    post3,
    post4,
    post5
]


const StyledPostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
`;

const StyledPostImage = styled.img`
  flex: 0 0 32.5%;
  padding: 1px;
  width: 30%;
`;

function Grid() {
    return (
        <StyledPostsList>
            {posts.map((post, index) => (
                <StyledPostImage key={`post-${index}`} src={post} />
            ))}
        </StyledPostsList>
    )
}

export default Grid
