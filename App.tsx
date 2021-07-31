import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeView from './src/views/home/HomeView';
import ScoresView from "./src/views/scores/ScoresView";
import HelpView from './src/views/help/HelpView';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeView}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name="Help"
                    component={HelpView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                 <Stack.Screen
                    name="Score"
                    component={ScoresView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
            </Stack.Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    );
}

export default React.memo(App);
