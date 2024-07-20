import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type SocialsPropsType = {
  iconsArray: Array<string>;
};

export function Socials(props: SocialsPropsType) {
  const socialArray = props.iconsArray.map((element, i) => {
    return (
      <SocialListItems key={i}>
        <SocialListLink>
          <Icon iconId={element}></Icon>
        </SocialListLink>
      </SocialListItems>
    );
  });

  return <SocialList>{socialArray}</SocialList>;
}

const SocialList = styled.ul`
  display: flex;
  column-gap: 15px;
`;
const SocialListItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: rgba(255, 180, 0, 1);
`;
const SocialListLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// return (
//   <>
//     {socialIconsArray.map((element, i) => {
//       return (
//         <SocialList>
//           <SocialListItems key={i}>
//             <SocialListLink>
//               <Icon iconId={element}></Icon>
//             </SocialListLink>
//           </SocialListItems>
//         </SocialList>
//       );
//     })}
//     ;
//   </>)
