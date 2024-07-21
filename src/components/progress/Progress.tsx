import React from 'react';
import { FlexWrapper } from '../flex/FlexWrapper';
import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

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
      <ProgressTitle>{props.title}</ProgressTitle>
      <ProgressValue>{props.value}</ProgressValue>
      <ProgressLine width={props.value}></ProgressLine>
    </FlexWrapper>
  );
}

type ProgressLinePropsType = {
  width: string;
};

const ProgressWrapper = styled.div`
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: ${myTheme.colors.grey};
`;
const ProgressTitle = styled.h4`
  max-width: 50%;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`;
const ProgressValue = styled.span``;

const ProgressLine = styled.div<ProgressLinePropsType>`
  position: relative;
  height: 6px;
  width: 100%;
  padding: 1px;
  border: 0.5px solid ${myTheme.colors.main};
  border-radius: 30px;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: calc((${(props) => props.width}) - 2px);
    background-color: ${myTheme.colors.main};
    border-radius: inherit;
  }
`;
