import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

type SectionSubTitlePropsType = {
  mb?: string;
  width?: string;
};

export const SectionSubTitle = styled.h3<SectionSubTitlePropsType>`
  margin-bottom: ${(props) => props.mb || '15px'};
  width: ${(props) => props.width || '100%'};
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 22.25px;
  color: ${myTheme.colors.black};
`;
