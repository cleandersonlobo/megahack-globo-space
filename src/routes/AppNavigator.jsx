/* eslint-disable react/prop-types */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading } from 'components';
import { navigationRef } from './RootNavigation';

const Home = React.lazy(() => import('../pages/Home'));
const Globoplay = React.lazy(() => import('../pages/Globoplay'));
const Seguindo = React.lazy(() => import('../pages/Seguindo'));
const Explorar = React.lazy(() => import('../pages/Explorar'));
const Conta = React.lazy(() => import('../pages/Conta'));
const WebPage = React.lazy(() => import('../pages/WebPage'));

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = {
            Home: 'home',
            Play: 'play-circle', // 'radio'
            Explorar: 'search',
            Seguindo: 'grid',
            Conta: 'user',
          }[route.name];

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6041A5',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Seguindo" component={Seguindo} />
      <Tab.Screen name="Play" component={Globoplay} />
      <Tab.Screen name="Explorar" component={Explorar} />
      <Tab.Screen name="Conta" component={Conta} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <React.Suspense fallback={<Loading />}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
            <Stack.Screen name="WebPage" options={{ headerShown: false }} component={WebPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </React.Suspense>
    </SafeAreaProvider>
  );
}
