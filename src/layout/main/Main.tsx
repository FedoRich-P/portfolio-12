import React from 'react';
import { Container } from '../../components/container/Container';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/flex/FlexWrapper';
import { MainBtn } from '../../components/buttons/MainBtn';
import ButtonIcon from '../../assets/icons/mainBtn.svg';
import { myTheme } from '../../components/theme/Theme.staled';
import MainImg from '../../assets/images/mainPhoto.png';

export function Main() {
  return (
    <Container as={MainWrapper}>
      <FlexWrapper $direction="column" $align="flex-start">
        <MainSuPTitle>I’m Rayan Adlrdard</MainSuPTitle>
        <MainTitle>
          <span>Front-end</span> Developer{' '}
        </MainTitle>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </MainText>
        <MainBtn as={MainLink}>HIRE ME</MainBtn>
      </FlexWrapper>
      <MainPhoto src={MainImg} alt="Main Photo"></MainPhoto>
    </Container>
  );
}

const MainWrapper = styled.main`
  margin-bottom: 137px;
  display: flex;
  align-items: flex-start;
  column-gap: 27px;
  flex-wrap: wrap;
  padding-top: 93px;
  padding-left: 60px;
  /* padding: 93px 60px 74px; */
  height: 30%;
`;
const MainTitle = styled.h1`
  margin-bottom: 18px;
  font-family: Inter;
  font-size: 48px;
  font-weight: 700;
  line-height: 59.33px;
  color: ${myTheme.colors.black};

  span {
    color: ${myTheme.colors.main};
  }
`;
const MainSuPTitle = styled.h2`
  font-family: Inter;
  font-size: 48px;
  font-weight: 700;
  line-height: 59.33px;
  color: ${myTheme.colors.black};
`;

const MainText = styled.p`
  display: inline-block;
  margin-bottom: 25px;
  max-width: 424px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${myTheme.colors.grey};
`;
const MainLink = styled.a`
  position: relative;
  min-width: 154px;
  &::after {
    content: '';
    position: absolute;
    right: 35px;
    width: 14px;
    height: 16px;
    background-image: url(${ButtonIcon});
    background-size: 14px 16px;
    background-position: top left;
  }
`;

const MainPhoto = styled.img`
  width: 325px;
  height: 460px;
  object-fit: contain;
  transform: translateY(-93px);
`;
