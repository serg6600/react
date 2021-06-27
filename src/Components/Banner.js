import React from 'react';
import styled from 'styled-components';

const BannerStyle = styled.div`
    background-image: url('./banner.png');
    height: 210px;
    width: 100%;
`;

export const Banner = () => (
    <BannerStyle/>
);