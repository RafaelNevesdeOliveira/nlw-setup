import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AppRoutes} from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}