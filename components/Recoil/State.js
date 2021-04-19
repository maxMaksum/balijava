import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';

 const reposState = atom({
    key: 'repos',
    default: false,
  });

export const drawerState = atom({
    key: 'drawerBig',
    default:false,
  });

  export default reposState