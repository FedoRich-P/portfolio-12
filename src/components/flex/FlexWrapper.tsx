import React from 'react';
import styled from 'styled-components';

type FlexWrapperPropsType = {
  $justify?: string;
  $align?: string;
  $direction?: string;
  $wrap?: string;
  $gap?: string;
  $columngap?: string;
  $rowgap?: string;
  $flex?: string;
  $mb?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${(props) => props.$justify || 'center'};
  align-items: ${(props) => props.$align || 'center'};
  flex-direction: ${(props) => props.$direction};
  flex-wrap: ${(props) => props.$wrap};
  gap: ${(props) => props.$gap};
  column-gap: ${(props) => props.$columngap};
  row-gap: ${(props) => props.$rowgap};
  flex: ${(props) => props.$flex};
  margin-bottom: ${(props) => props.$mb};
`;
