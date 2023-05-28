import React from 'react';

import {Root} from './navigation/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <Root />
  </SafeAreaProvider>
);
export default App;

