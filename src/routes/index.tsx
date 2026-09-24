import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';

import AuthStack from './stacks/authStack/authStack';
import BottomTabs from './bottomTabs/BottomTabs';

function Routes() {
  const user = useSelector((state: RootState) => state.user.user);

//   if (user) {
//     return ;
//   }

  return user?<BottomTabs />: <AuthStack />;
}

export default Routes;