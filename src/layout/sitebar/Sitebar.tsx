import React from 'react';
import { SitebarCard } from './SitebarCard';
import styled from 'styled-components';
import { About } from './About';
import { FlexWrapper } from '../../components/flex/FlexWrapper';
import { Progress } from '../../components/progress/Progress';
import { SectionSubTitle } from '../../components/titles/SectionSubTitle';

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
        <FlexWrapper $wrap="wrap">
          <SectionSubTitle>Languages </SectionSubTitle>
          <Progress title="Bangla" value="100%"></Progress>
          <Progress title="English" value="80% "></Progress>
          <Progress title="Spanish" value="60% "></Progress>
        </FlexWrapper>
        <FlexWrapper $wrap="wrap">
          <SectionSubTitle>Skills </SectionSubTitle>
          <Progress title="Html" value="90%"></Progress>
          <Progress title="CSS" value="85%"></Progress>
          <Progress title="Js" value="80%"></Progress>
          <Progress title="PHP" value="75%"></Progress>
          <Progress title="WordPress" value="85%"></Progress>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
}
const Aside = styled.aside`
  padding: 50px 46px 25px 40px;
  /* max-width: 305px; */
`;
