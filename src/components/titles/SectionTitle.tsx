import styled from 'styled-components';
import { myTheme } from '../theme/Theme.staled';

type SectionTitlePropsType = {
  $mb?: string;
  $width?: string;
};

export const SectionTitle = styled.h3<SectionTitlePropsType>`
  margin-bottom: ${(props) => props.$mb || '15px'};
  width: ${(props) => props.$width || '100%'};
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 39.55px;
  color: ${myTheme.colors.black};
  text-align: center;
`;
