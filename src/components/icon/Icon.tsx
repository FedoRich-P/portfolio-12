import React from 'react';

import IconsSprite from '../../assets/icons/sprite.svg';

type IconPropsType = {
  width?: string;
  height?: string;
  viewBox?: string;
  iconId: string;
};

export function Icon(props: IconPropsType) {
  let { width, height, viewBox, iconId } = props;
  return (
    <>
      <svg
        width={width || '15'}
        height={height || '15'}
        viewBox={viewBox || '0 0 15 15'}
        fill={'none'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${IconsSprite}#${iconId}`}></use>
      </svg>
    </>
  );
}
