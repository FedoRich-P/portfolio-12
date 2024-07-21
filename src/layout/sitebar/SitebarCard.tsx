import React from 'react';
import { Socials } from '../../components/socials/Socials';
import styled from 'styled-components';
import Src from '../../assets/images/sidebar-foto.jpg';
import { FlexWrapper } from '../../components/flex/FlexWrapper';

const socialIconsArray = [
  'facebook',
  'instagram',
  'twitter',
  'linkeding',
  'youtube',
  'dribbble',
];

export function SitebarCard() {
  return (
    <FlexWrapper as={SidebarWrapper} $wrap="wrap">
      <ImageBox>
        <Image src={Src}></Image>
      </ImageBox>
      <Name>Rayan Adlardard</Name>
      <CardText>Font-end Developer</CardText>
      <Socials iconsArray={socialIconsArray}></Socials>
    </FlexWrapper>
  );
}

const SidebarWrapper = styled.div``;

const ImageBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;

  &::after {
    content: '';
    position: absolute;
    bottom: 14px;
    right: 14px;
    width: 16px;
    height: 16px;
    background-color: rgba(126, 185, 66, 1);
    border-radius: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: 0px -10px;
  border-radius: 100%;
`;

const Name = styled.h3`
  position: relative;
  margin-bottom: 15px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.25px;
  color: rgba(43, 43, 43, 1);
`;

const CardText = styled.span`
  margin-bottom: 15px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: rgba(118, 118, 118, 1);
`;
