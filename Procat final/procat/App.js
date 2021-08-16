import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Button, Image, Pressable,TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';
import { GlobalContextProvider } from './views/GlobalContext';

import Login from "./views/LoginScreen";
import Reg from "./views/RegScreen";
import Tovar from "./views/TovarScreen";
import Tovar2 from "./views/TovarScreen2";
import Result from "./views/ResultScreen";
import Filter from "./views/FilterScreen";
import Menu from "./views/MenuScreen";
import Rebut from "./views/RebutPassScreen";
import Rebut_2 from "./views/RebutPassScreen_2";
import History from "./views/HistoryScreen";
import AddTovar from "./views/AddTovarScreen";
import MyOb from "./views/MyOb";
import MyZakaz from "./views/MyZakaz";
import Accept from "./views/AcceptScreen";
import MenuPart from "./views/MenuPartnerScreen";
import Settings from "./views/SettingScreen";
import VKP from "./views/VhodKakPartner";
import AddOb from "./views/AddObyavlenie";
import Search from "./views/SearchScreen";
// import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

// const navi = () => {
// navigation.navigate('MenuScreen')
// } 

function App() {
  // const navigation = useNavigation();
  return (
      <GlobalContextProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName=''>
                 {/* <Stack.Screen options={{headerTitle: 'Авторизация',headerTitleStyle: {color: '#000', fontSize: 20},headerLeft: null}} name="LoginScreen" component={Login} /> */}
                {/* <Stack.Screen options={{headerTitle: 'Регистрация',headerTitleStyle: {color: '#000', fontSize: 20}}} name="RegScreen" component={Reg} /> */}
                 
                
                
                
                {/* <Stack.Screen options={{ headerTitle: 'Восстановление пароля',headerTitleStyle: {color: '#000', fontSize: 20} }} name="RebutPassScreen" component={Rebut} /> */}
                {/* <Stack.Screen options={{ headerTitle: 'Восстановление пароля',headerTitleStyle: {color: '#000', fontSize: 20} }} name="RebutPassScreen_2" component={Rebut_2} /> */}
                {/* <Stack.Screen options={{ headerTitle: 'Редактирования товара',headerTitleStyle: {color: '#000', fontSize: 20}  }} name="TovarScreen2" component={Tovar2} /> */}
                <Stack.Screen options={{  headerTitle: 'Поиск машины',headerTitleStyle: {color: '#000', fontSize: 20} }} name="HistoryScreen" component={History} />
                {/* <Stack.Screen options={{headerTitle: 'Меню',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleStyle: {color: 'black',fontSize: 15}, headerTintColor: 'black',headerBackTitleVisible: false}} name="MenuScreen" component={Menu} /> */}
                {/* <Stack.Screen options={{ headerTitle: 'Добавить объявление',headerTitleStyle: {color: '#000', fontSize: 20}  }} name="AddTovarScreen" component={AddTovar} /> */}
                {/* <Stack.Screen options={{headerTitle: 'Мои объявления',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black'  }} name="MyOb" component={MyOb} /> */}
                {/* <Stack.Screen options={{ headerTitle: 'Мои заказы',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black'  }} name="MyZakaz" component={MyZakaz} /> */}
                {/* <Stack.Screen options={{headerTitle: 'Меню',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black'}} name="MenuPartnerScreen" component={MenuPart} /> */}
                {/* <Stack.Screen options={{headerTitle: 'Настройки',headerTitleStyle: {color: '#000', fontSize: 20},headerTintColor: 'black',headerBackTitleVisible: false }} name="SettingScreen" component={Settings} /> */}

                {/* <Stack.Screen options={{headerTitle: 'Регистрация партнера',headerTitleStyle: {color: '#000', fontSize: 20},headerTintColor: 'black',headerBackTitleVisible: false }} name="VhodKakPartner" component={VKP} /> */}
                {/* <Stack.Screen options={{ headerTitle: 'Верификация',headerTitleStyle: {color: '#000', fontSize: 20} }} name="AcceptScreen" component={Accept} /> */}

                {/* <Stack.Screen options={{ headerTitle: 'Добавить объявление',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black'  }} name="AddObyavlenie" component={AddOb} /> */}
                <Stack.Screen options={{ headerTitle: 'Поиск машины',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black' }} name="SearchScreen" component={Search} />
                <Stack.Screen options={{headerTitle: 'Марки',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black' }} name="FilterScreen" component={Filter} />
                <Stack.Screen options={{ headerTitle: 'Результат поиска',headerTitleStyle: {color: '#000', fontSize: 20},headerBackTitleVisible: false,headerTintColor: 'black'  }} name="ResultScreen" component={Result} /> 
                {/* <Stack.Screen options={{ headerTitle: 'Аренда машины',headerTitleStyle: {color: '#000', fontSize: 20}  }} name="TovarScreen" component={Tovar} /> */}
            </Stack.Navigator>
        </NavigationContainer>
      </GlobalContextProvider>
  );
}

export default App;