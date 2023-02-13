import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import SharePage from './SharePage';
import Intro from './Intro';
import CalendarScreen from './calendar';
import Result from './result';
import Complete from './complete';
import Pic from './Pic';
import PPAP from './PPAP';
import AgendaScreen from './Agenda';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pic">
        <Stack.Screen name="Pic" component={Pic} />
        <Stack.Screen name="PPAP" component={PPAP} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="SharePage" component={SharePage} />
        <Stack.Screen name="calendar" component={CalendarScreen} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
        <Stack.Screen name="result" component={Result} />
        <Stack.Screen name="complete" component={Complete} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
