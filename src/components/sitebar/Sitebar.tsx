import React from 'react';
import { SitebarCard } from './SitebarCard';
import styled from 'styled-components';

export function Sitebar() {
  return (
    <>
      <Aside>
        <SitebarCard></SitebarCard>
      </Aside>
    </>
  );
}

const Aside = styled.aside`
  box-sizing: border-box;
  padding: 50px 46px 25px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 305px;
`;
