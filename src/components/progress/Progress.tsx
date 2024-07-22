import React from 'react';
import { FlexWrapper } from '../flex/FlexWrapper';
import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';
import { MainText } from '../text/MainText';

type ProgressPropsType = {
  title: string;
  value: string;
};

export function Progress(props: ProgressPropsType) {
  return (
    <FlexWrapper
      as={ProgressWrapper}
      $wrap="wrap"
      $justify="space-between"
      $flex="0 1 100%"
    >
      <MainText as={ProgressTitle}>{props.title}</MainText>
      <MainText>{props.value}</MainText>
      <ProgressLine width={props.value}></ProgressLine>
    </FlexWrapper>
  );
}

type ProgressLinePropsType = {
  width: string;
};

const ProgressWrapper = styled.li``;

const ProgressTitle = styled.h4`
  max-width: 50%;
`;

const ProgressLine = styled.div<ProgressLinePropsType>`
  position: relative;
  height: 6px;
  width: 100%;
  border: 0.5px solid ${myTheme.colors.main};
  border-radius: 30px;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 1px;
    top: 50%;
    transform: translateY(-50%);
    width: calc((${(props) => props.width}) - 2px);
    background-color: ${myTheme.colors.main};
    border-radius: inherit;
  }
`;
