import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLoginSignUpNavigation from './component/UserLoginSignNavigation/UserLoginSignUpNavigation.js';
import Login from './component/UserLogin/Login.js';
import Sign from './component/UserSign/Sign.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginsignupnavigation" component={UserLoginSignUpNavigation} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="login" component={Login} options={{
          headerShown: false,
        }} />
          <Stack.Screen name="sign" component={Sign} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
