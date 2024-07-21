import React from 'react';
import { SitebarCard } from './SitebarCard';
import styled from 'styled-components';
import { About } from './About';
import { FlexWrapper } from '../../components/flex/FlexWrapper';
import { Progress } from '../../components/progress/Progress';
import { SectionSubTitle } from '../../components/titles/SectionSubTitle';
import { MainText } from '../../components/text/MainText';
import PsevdoIcon from '../../assets/icons/exemple.svg';
import { MainBtn } from '../../components/buttons/MainBtn';
import ButtonIcon from '../../assets/icons/button.svg';

const AboutList = {
  Age: '4',
  Resience: 'BD',
  Freelance: 'Available',
  Address: 'Dhaka, Bangladesh',
};

export function Sitebar() {
  return (
    <>
      <FlexWrapper as={Aside} $wrap="wrap" $rowgap="50px" $flex="0 1 305px">
        <SitebarCard></SitebarCard>
        <FlexWrapper $direction="column" $rowgap="10px" $flex="0 1 100%">
          {Object.entries(AboutList).map((el, i) => {
            return <About name={el[0]} value={el[1]} key={i}></About>;
          })}
        </FlexWrapper>
        <FlexWrapper $wrap="wrap" $rowgap="10px">
          <SectionSubTitle>Languages </SectionSubTitle>
          <Progress title="Bangla" value="100%"></Progress>
          <Progress title="English" value="80% "></Progress>
          <Progress title="Spanish" value="60% "></Progress>
        </FlexWrapper>
        <FlexWrapper $wrap="wrap" $rowgap="10px">
          <SectionSubTitle>Skills </SectionSubTitle>
          <Progress title="Html" value="90%"></Progress>
          <Progress title="CSS" value="85%"></Progress>
          <Progress title="Js" value="80%"></Progress>
          <Progress title="PHP" value="75%"></Progress>
          <Progress title="WordPress" value="85%"></Progress>
        </FlexWrapper>
        <FlexWrapper $wrap="wrap" $justify="flex-start">
          <SectionSubTitle>Extra Skills</SectionSubTitle>
          <MainText as={ExtraSkillsTitle}>Bootstrap, Materialize</MainText>
          <MainText as={ExtraSkillsTitle}>Stylus, Sass, Less</MainText>
          <MainText as={ExtraSkillsTitle}>Gulp, Webpack, Grunt</MainText>
          <MainText as={ExtraSkillsTitle}>GIT Knowledge</MainText>
        </FlexWrapper>
        <MainBtn as={SitebarBtn}>Download cv</MainBtn>
      </FlexWrapper>
    </>
  );
}
const Aside = styled.aside`
  /* position: fixed;
  width: 305px;
  top: 0;
  left: 0; */
  padding: 50px 46px 25px 40px;
`;

const ExtraSkillsTitle = styled.h4`
  position: relative;
  padding-left: 30px;
  /* background-image: url(${PsevdoIcon});
  background-position: 0 4px;
  background-size: cover; */

  &::before {
    content: '';
    position: absolute;
    width: 17px;
    height: 17px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-image: url(${PsevdoIcon});
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
  }
`;

const SitebarBtn = styled.button`
  position: relative;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    right: 39px;
    width: 14px;
    height: 16px;
    background-image: url(${ButtonIcon});
    background-size: cover;
    background-position: top left;
  }
`;
