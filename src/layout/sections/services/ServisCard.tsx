import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { SectionSubTitle } from '../../../components/titles/SectionSubTitle';
import { MainText } from '../../../components/text/MainText';

export function ServisCard() {
  return (
    <>
      <ServisCardItem>
        <Icon iconId="web" width="78" height="78" viewBox="0 0 78 78"></Icon>
        <SectionSubTitle> Web Development</SectionSubTitle>
        <MainText>Blog, E-Commerce</MainText>
      </ServisCardItem>
    </>
  );
}

const ServisCardItem = styled.li`
  padding-top: 25px;
  padding-bottom: 42px;
  text-align: center;
`;
