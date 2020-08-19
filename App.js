import React from 'react';
import HomeView from './src/components/Home/HomeView';
import FinishView from './src/components/Finish/FinishView';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HistoryView from './src/components/History/HistoryView';

const HomeStackScreen = ()=>{
  const Stack = createStackNavigator();

  return(
    <Stack.Navigator initialRouteName="Home" headerMode='none'>
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Finish" component={FinishView} />
    </Stack.Navigator>  
  )
}

const App = () => {
  const BottomTabNavigator = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <BottomTabNavigator.Navigator initialRouteName="Home" headerMode='none' 
          tabBarOptions={{
            activeTintColor: '#6D6D6D',
            inactiveTintColor: '#A3A3A3',
            labelStyle: {
              fontSize: 30
            },
            style: {backgroundColor: '#E0E0E0',
              borderColor: 'rgba(140,140,140,0.8)}', borderTopWidth: 1}
          }}
          >
          <BottomTabNavigator.Screen name="Home" component={HomeStackScreen} />
          <BottomTabNavigator.Screen name="History" component={HistoryView} />
        </BottomTabNavigator.Navigator>
      </NavigationContainer>
  );
};


export default App;