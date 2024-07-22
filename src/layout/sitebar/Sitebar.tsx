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
      <FlexWrapper as={Aside} $wrap="wrap" $flex="0 1 305px">
        <SitebarCard></SitebarCard>
        <FlexWrapper
          as={SitebarWrapper}
          $direction="column"
          $rowgap="10px"
          $flex="0 1 100%"
          $mb="50px"
        >
          {Object.entries(AboutList).map((el, i) => {
            return <About name={el[0]} value={el[1]} key={i}></About>;
          })}
        </FlexWrapper>
        <SectionSubTitle>Languages </SectionSubTitle>
        <FlexWrapper as={SitebarWrapper} $wrap="wrap" $rowgap="10px" $mb="50px">
          <Progress title="Bangla" value="100%"></Progress>
          <Progress title="English" value="80% "></Progress>
          <Progress title="Spanish" value="60% "></Progress>
        </FlexWrapper>
        <SectionSubTitle>Skills </SectionSubTitle>
        <FlexWrapper as={SitebarWrapper} $wrap="wrap" $rowgap="10px" $mb="50px">
          <Progress title="Html" value="90%"></Progress>
          <Progress title="CSS" value="85%"></Progress>
          <Progress title="Js" value="80%"></Progress>
          <Progress title="PHP" value="75%"></Progress>
          <Progress title="WordPress" value="85%"></Progress>
        </FlexWrapper>
        <SectionSubTitle>Extra Skills</SectionSubTitle>
        <FlexWrapper
          as={SitebarWrapper}
          $wrap="wrap"
          $justify="flex-start"
          $mb="50px"
        >
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

const SitebarWrapper = styled.ul``;

const Aside = styled.aside`
  padding: 50px 46px 25px 40px;
`;

const ExtraSkillsTitle = styled.li`
  position: relative;
  padding-left: 30px;

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
