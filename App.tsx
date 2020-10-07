import 'react-native-gesture-handler';
enableScreens();

import React from 'react';
import { enableScreens } from 'react-native-screens';

import Navigator from './src/routes/MainNavigator';

import AppRoutes from './src/routes/app.routes';

export default function App() {
  return (
    <AppRoutes />

  );
}


