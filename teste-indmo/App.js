import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';
import Juros from './components/Juros';
import SwitchLampada from './components/Switch';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Switch"
          component={SwitchLampada}
          options={{ title: "Switch" }}
        />
        <Stack.Screen
          name="Juros"
          component={Juros}
          options={{ title: "Juros" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
