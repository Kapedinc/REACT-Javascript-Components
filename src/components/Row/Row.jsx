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
import { Badge } from '@mui/material';
import VectorImage from 'src/assets/images/Row_Vector.png';
import Vector1Image from 'src/assets/images/Row_Vector_1.png';
import Vector2Image from 'src/assets/images/Row_Vector_2.png';
import Vector3Image from 'src/assets/images/Row_Vector_3.png';
import Vector4Image from 'src/assets/images/Row_Vector_4.png';
import { styled } from '@mui/material/styles';
import Cell from 'src/components/Cell/Cell';

const RowHeader = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(241, 243, 245, 1)`,
  borderRadius: `24px 24px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `16px 24px`,
  boxSizing: `border-box`,
  height: 'auto',
}));

const Frame28 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Cell1 = styled(Cell)(({ theme }) => ({
  width: `200px`,
  margin: `0px`,
}));

const Cell2 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px 0px 0px 96px`,
}));

const Frame27 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px 100px 0px 0px`,
  boxSizing: `border-box`,
});

const Cell3 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px`,
}));

const Cell4 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px 0px 0px 96px`,
}));

const Frame281 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Cell5 = styled(Cell)(({ theme }) => ({
  width: `200px`,
  margin: `0px`,
}));

const Cell6 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px 0px 0px 96px`,
}));

const Frame271 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 100px 0px 0px`,
  boxSizing: `border-box`,
});

const Cell7 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px`,
}));

const Frame29 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `80px`,
  margin: `0px 0px 0px 96px`,
});

const Badge1 = styled(Badge)(({ theme }) => ({
  margin: `0px`,
}));

const Frame282 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Cell8 = styled(Cell)(({ theme }) => ({
  width: `200px`,
  margin: `0px`,
}));

const Cell9 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px 0px 0px 96px`,
}));

const Frame272 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 100px 0px 0px`,
  boxSizing: `border-box`,
});

const Cell10 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px`,
}));

const Frame291 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `80px`,
  margin: `0px 0px 0px 96px`,
});

const Badge2 = styled(Badge)(({ theme }) => ({
  margin: `0px`,
}));

const Frame283 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Cell11 = styled(Cell)(({ theme }) => ({
  width: `200px`,
  margin: `0px`,
}));

const Cell12 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px 0px 0px 96px`,
}));

const Group = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `12.76px`,
  height: `15.25px`,
  left: `194px`,
  top: `12px`,
});

const Vector = styled('img')({
  height: `15.25px`,
  width: `12.76px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1 = styled('img')({
  height: `15.25px`,
  width: `12.76px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector2 = styled('img')({
  height: `3.4px`,
  width: `0px`,
  position: `absolute`,
  left: `10px`,
  top: `9px`,
});

const Vector3 = styled('img')({
  height: `3.4px`,
  width: `0.09px`,
  position: `absolute`,
  left: `8px`,
  top: `9px`,
});

const Vector4 = styled('img')({
  height: `3.4px`,
  width: `0px`,
  position: `absolute`,
  left: `6px`,
  top: `9px`,
});

const Frame31 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 100px 0px 0px`,
  boxSizing: `border-box`,
});

const Frame32 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Frame273 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Cell13 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px`,
}));

const Frame292 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `80px`,
  margin: `0px 0px 0px 96px`,
});

const Badge3 = styled(Badge)(({ theme }) => ({
  margin: `0px`,
}));

const Frame284 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Cell14 = styled(Cell)(({ theme }) => ({
  width: `200px`,
  margin: `0px`,
}));

const Cell15 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px 0px 0px 96px`,
}));

const Frame274 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px 100px 0px 0px`,
  boxSizing: `border-box`,
});

const Cell16 = styled(Cell)(({ theme }) => ({
  width: `80px`,
  margin: `0px`,
}));

const Frame293 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `80px`,
  margin: `0px 0px 0px 96px`,
});

const Badge4 = styled(Badge)(({ theme }) => ({
  margin: `0px`,
}));

function Row(props) {
  return (
    <RowHeader className={props.className}>
      <Frame28>
        <Cell1 />
        <Cell2 />
      </Frame28>
      <Frame27>
        <Cell3 />
        <Cell4 />
      </Frame27>
      {false && (
        <Frame281>
          <Cell5 />
          <Cell6 />
        </Frame281>
      )}
      {false && (
        <Frame271>
          <Cell7 />
          <Frame29>
            <Badge1 />
          </Frame29>
        </Frame271>
      )}
      {false && (
        <Frame282>
          <Cell8 />
          <Cell9 />
        </Frame282>
      )}
      {false && (
        <Frame272>
          <Cell10 />
          <Frame291>
            <Badge2 />
          </Frame291>
        </Frame272>
      )}
      {false && (
        <Frame283>
          <Cell11 />
          <Cell12 />
          <Group>
            <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
            <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
            <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
            <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
            <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
          </Group>
        </Frame283>
      )}
      {false && (
        <Frame31>
          <Frame32>
            <Frame273>
              <Cell13 />
              <Frame292>
                <Badge3 />
              </Frame292>
            </Frame273>
          </Frame32>
        </Frame31>
      )}
      {false && (
        <Frame284>
          <Cell14 />
          <Cell15 />
        </Frame284>
      )}
      {false && (
        <Frame274>
          <Cell16 />
          <Frame293>
            <Badge4 />
          </Frame293>
        </Frame274>
      )}
    </RowHeader>
  );
}

export default Row;