import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

type MainBtnPropsType = {
  width?: string;
};

export const MainBtn = styled.button<MainBtnPropsType>`
  width: ${(props) => props.width};
  padding: 10px 40px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgba(43, 43, 43, 1);
  background-color: ${myTheme.colors.main};
  text-transform: uppercase;
  text-align: start;
`;
