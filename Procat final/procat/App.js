import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='LoginScreen'>
              {/* Логин/Регистрация */}
              <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={Login} /> 
              <Stack.Screen options={{ headerShown: false }} name="RegScreen" component={Reg} />
              {/* Восстоновление пароля */}
              <Stack.Screen options={{ headerShown: false }} name="RebutPassScreen" component={Rebut} />
              <Stack.Screen options={{ headerShown: false }} name="RebutPassScreen_2" component={Rebut_2}/> 
              {/* Главная страница */}
              <Stack.Screen options={{ headerShown: false }} name="HistoryScreen" component={History} />
              {/* Поиск машин */}
              <Stack.Screen options={{ headerShown: false }} name="SearchScreen" component={Search} />
              {/* Меню */}
              <Stack.Screen options={{ headerShown: false }} name="MenuScreen" component={Menu} />
              {/* Профиль/Сохранение профиля */}
              <Stack.Screen options={{ headerShown: false }} name="VhodKakPartner" component={VKP} />
              {/* Настройик */}
              <Stack.Screen options={{ headerShown: false }} name="SettingScreen" component={Settings} />
              {/* Мои заказы */}
              <Stack.Screen options={{ headerShown: false }} name="MyZakaz" component={MyZakaz} />
              {/* Фильтр марок */}
              <Stack.Screen options={{ headerShown: false }} name="FilterScreen" component={Filter} /> 
              {/* Результат поиска */}
              <Stack.Screen options={{ headerShown: false }} name="ResultScreen" component={Result} />
              {/* Товар/Карточка товара */}
              <Stack.Screen options={{ headerShown: false }} name="TovarScreen" component={Tovar} />



              {/* <Stack.Screen options={{ headerShown: false }} name="AddTovarScreen" component={AddTovar} /> */}
              {/* <Stack.Screen options={{ headerShown: false }} name="MyOb" component={MyOb} />  */}
              {/* <Stack.Screen options={{ headerShown: false }} name="MenuPartnerScreen" component={MenuPart} /> */}
              {/* <Stack.Screen options={{ headerShown: false }} name="AcceptScreen" component={Accept} />  */}
              {/* <Stack.Screen options={{ headerShown: false }} name="AddObyavlenie" component={AddOb} /> */}
              {/* <Stack.Screen options={{ headerShown: false }} name="TovarScreen2" component={Tovar2} />  */}

              
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;