import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SelectsScreen } from '../screens';

export type AppStackScreenTypes = {
  HomeScreen : undefined;
  SelectsScreen : undefined;
  InputsScreen : undefined;
}

const Stack = createStackNavigator<AppStackScreenTypes>();

export const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="SelectsScreen" component={ SelectsScreen } />
    </Stack.Navigator>
  );
}