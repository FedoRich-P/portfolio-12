import React from 'react';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/titles/SectionTitle';
import { MainText } from '../../../components/text/MainText';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flex/FlexWrapper';
import { ServisCard } from './ServisCard';

export function Services() {
  return (
    <FlexWrapper as={Container} $direction="column">
      <SectionTitle $mb="25px">My Services</SectionTitle>
      <MainText as={ServicesText}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </MainText>
      <ServisCard></ServisCard>
    </FlexWrapper>
  );
}

const ServicesText = styled.p`
  margin-bottom: 50px;
  max-width: 438px;
`;
