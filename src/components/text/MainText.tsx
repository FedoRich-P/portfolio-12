import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

type MainTextPropsType = {
  position?: string;
  $mb?: string;
};

export const MainText = styled.h4<MainTextPropsType>`
  margin-bottom: ${(props) => props.$mb || '5px'};
  position: ${(props) => props.position};
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: ${myTheme.colors.grey};
`;
