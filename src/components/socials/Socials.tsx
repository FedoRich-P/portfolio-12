import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { FlexWrapper } from '../flex/FlexWrapper';
import { myTheme } from '../theme/Theme.staled';

type SocialsPropsType = {
  iconsArray: Array<string>;
};

export function Socials(props: SocialsPropsType) {
  const socialArray = props.iconsArray.map((element, i) => {
    return (
      <FlexWrapper as={SocialListItems} key={i}>
        <FlexWrapper as={SocialListLink}>
          <Icon
            iconId={element}
            width="14"
            height="14"
            viewBox="0 0 14 14"
          ></Icon>
        </FlexWrapper>
      </FlexWrapper>
    );
  });

  return (
    <FlexWrapper as={SocialList} $columngap="15px">
      {socialArray}
    </FlexWrapper>
  );
}

const SocialList = styled.ul``;
const SocialListItems = styled.li`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${myTheme.colors.main};
`;
const SocialListLink = styled.a``;
