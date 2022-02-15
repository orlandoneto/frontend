import React from 'react';

import { MenuBarHeight } from '~/utils/constants';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import { TouchableOpacity, Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ArrowLeftIcon from '~/assets/svg/arrow-left.svg';
import HomeIcon from '~/assets/svg/tab/home-tab-icon.svg';
import HomeBlueIcon from '~/assets/svg/tab/home-tab-blue-icon.svg';

import SearchInput from '~/components/SearchInput';
import BasketShopIconButton from '~/components/BasketShopIconButton';
import Home from '../pages/Home';
import Cart from '~/pages/Cart';

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#007DC5' },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name='Home'
        accessibilityLabel='btn-home'
        component={Home}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: '#007DC5',
            elevation: 0,
            shadowOpacity: 0,
            height: 120,
          },
          headerLeft: () => null,
          headerRight: () => (
            <BasketShopIconButton
              style={{ marginRight: Platform.OS === 'ios' ? 0 : 12, marginBottom: Platform.OS === 'ios' ? 8 : 0 }}
              isWhite
            />
          ),
          headerTitle: () => (
            <SearchInput
              containerStyle={{ backgroundColor: '#3397D1', marginLeft: Platform.OS === 'ios' ? -20 : 0 }}
              accessibilityLabel='btn-pesquisa'
              placeholder='O que você procura?'
              isWhite={true}
              placeholderTextColor='#ffffff'
              handleChangeText={text => console.log(text)}
              onFocus={() => {
                navigation.navigate('Search');
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      accessibilityLabel='btn-home'
      tabBarOptions={{
        adaptive: true,
        safeAreaInsets: {
          bottom: Platform.OS === 'ios' ? 30 : 0,
        },
        style: {
          height: MenuBarHeight,
          borderTopEndRadius: 12,
          borderTopStartRadius: 12,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
          },
          elevation: 1,
          shadowOpacity: 0.09,
          shadowRadius: 6.27,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        accessibilityLabel='btn-home'
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeBlueIcon /> : <HomeIcon />;
          },
          tabBarLabel: 'Home',
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const AppStackScreen = () => {
  const { selectedProduct } = useSelector(state => state.products);
  return (
    <Stack.Navigator
      initialRouteName='App'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#F9F9F9',
        },
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 1,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 1.0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
        headerTitleStyle: {
          color: '#666666',
          fontSize: 16,
          fontFamily: 'Roboto-Medium',
        },
        headerTitleContainerStyle: {
          left: 45,
        },
        headerTitleAlign: 'left',
      }}
    >
      <Stack.Screen name='App' component={AppRoutes} />

      <Stack.Screen
        name='Cart'
        component={Cart}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Cesta',
          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 15,
                paddingRight: 10,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('App')}
            >
              <ArrowLeftIcon />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <>
      <AppStackScreen />
    </>
  );
};

export default Routes;
