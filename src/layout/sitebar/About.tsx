import styled from 'styled-components';
import { myTheme } from '../../components/theme/Theme.staled';
import { FlexWrapper } from '../../components/flex/FlexWrapper';

type AboutPropsType = {
  name: string;
  value: string;
};

export function About(props: AboutPropsType) {
  return (
    <FlexWrapper as={AboutBox} $justify="space-between">
      <AboutName>{props.name}</AboutName>
      <AboutValue>{props.value}</AboutValue>
    </FlexWrapper>
  );
}

const AboutBox = styled.li`
  width: 100%;
  font-family: Inter;
  color: ${myTheme.colors.black};
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`;
const AboutName = styled.span`
  padding: 1px 5px;
  background-color: ${myTheme.colors.main};
`;
const AboutValue = styled.span``;
