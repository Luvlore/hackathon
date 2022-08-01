import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import SelectRole from './screens/SelectRole';
import LoginOrRegister from './screens/LoginOrRegister';
import RegisterUser from './screens/RegisterUser';
import RegisterServiceCenter from './screens/RegisterServiceCenter';
import Profile from './screens/Profile';
import LoggedScreen from './screens/LoggedScreen';
import Accompaniment from './screens/Accompaniment';
import Classes from './screens/Classes';
import Students from './screens/Students';
import TeacherAndClasses from './screens/TeacherAndClasses';
import Donators from './screens/Donators';
import AboutUs from './screens/AboutUs';
import { TeamManager } from './screens/TeamManager';
import { StudentProfileCenter } from './screens/StudentProfileCenter';
import { ConfirmClass } from './screens/ConfirmClass';
import { DonationManager } from './screens/DonationManager';
import { ConfirmDonation } from './screens/ConfirmDonation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName='SelectRole'
    >
      <Stack.Screen
        name="SelectRole"
        component={ SelectRole }
        options={
          {
            title: 'SELECIONE UMA CATEGORIA'
          }
        }
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
      <Stack.Screen name="RegisterServiceCenter" component={RegisterServiceCenter} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="LoggedScreen"
        component={LoggedScreen}
        options={
          {
            title: 'TELA INICIAL'
          }
        }
      />
      <Stack.Screen name="Accompaniment" component={Accompaniment} />
      <Stack.Screen name="Classes" component={ Classes } />
      <Stack.Screen
        name="Students"
        component={ Students }
        options={
          {
            title: 'ESTUDANTES'
          }
        }
      />
      <Stack.Screen
        name="TeacherAndClasses"
        component={ TeacherAndClasses }
        options={
          {
            title: 'PROFESSORES'
          }
        }
      />
      <Stack.Screen
        name="Donators"
        component={ Donators }
        options={
          {
            title: 'DOADORES'
          }
        }
      />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen
        name="TeamManager"
        component={ TeamManager }
        options={
          {
            title: 'SELECIONAR TURMA'
          }
        }
      />
      <Stack.Screen
        name="StudentProfileCenter"
        component={ StudentProfileCenter }
        options={
          {
            title: 'PERFIL DO ESTUDANTE'
          }
        }
        />
      <Stack.Screen
        name="ConfirmClass"
        component={ ConfirmClass }
        options={
          {
            title: 'CONFIRMAR TURMAR'
          }
        }
      />
      <Stack.Screen
        name="DonationManager"
        component={ DonationManager }
        options={
          {
            title: 'DOADOR'
          }
        }
      />
      <Stack.Screen
        name="ConfirmDonation"
        component={ ConfirmDonation }
        options={
          {
            title: 'CONFIRMAR DOAÇÃO'
          }
        }
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <MyStack />
      
    </NavigationContainer>
  );
}
