import React from 'react';
import {Root} from './navigation/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  // const [isPlayerReady, setIsPlayerReady] = useState(false);

  // async function setup() {
  //   let isSetup = await setupPlayer();
  //   if (isSetup) {
  //     await addTrack();
  //   }
  //   setIsPlayerReady(isSetup);
  // }
  // useEffect(() => {
  //   setup();
  // }, []);

  // if (!isPlayerReady) {
  //   return (
  //     <SafeAreaView>
  //       <ActivityIndicator />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaProvider>
      <Root />
    </SafeAreaProvider>
  );
};
export default App;
