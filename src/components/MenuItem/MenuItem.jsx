/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import HeroiconsOutlineHomeImage from 'src/assets/images/MenuItem_heroicons_outline_home.svg';
import { styled } from '@mui/material/styles';

const StateInactive = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const HeroiconsOutlineHome = styled('img')({
  height: `auto`,
  width: `24px`,
  margin: `0px`,
});

const Home = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(52, 58, 64, 1)`,
  fontStyle: `normal`,
  fontFamily: `Inter`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 12px`,
}));

function MenuItem(props) {
  return (
    <StateInactive className={props.className}>
      <HeroiconsOutlineHome
        src={HeroiconsOutlineHomeImage}
        loading="lazy"
        alt={'heroicons-outline/home'}
      />
      <Home>{`Home`}</Home>
    </StateInactive>
  );
}

export default MenuItem;
