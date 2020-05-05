/* eslint-disable react/prop-types */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashAppScreen } from 'components';
import { navigationRef } from './RootNavigation';

const Home = React.lazy(() => import('../pages/Home'));
const Agora = React.lazy(() => import('../pages/Agora'));
const Seguindo = React.lazy(() => import('../pages/Seguindo'));

const Tab = createBottomTabNavigator();
export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <React.Suspense fallback={<SplashAppScreen />}>
        <NavigationContainer ref={navigationRef}>
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
            <Tab.Screen name="Play" component={Agora} />
            <Tab.Screen name="Explorar" component={Agora} />
            <Tab.Screen name="Conta" component={Agora} />
          </Tab.Navigator>
        </NavigationContainer>
      </React.Suspense>
    </SafeAreaProvider>
  );
}
