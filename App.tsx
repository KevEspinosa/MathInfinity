import * as React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/views/home/HomeView';
import ModeView from "./src/views/mode/ModeView";
import LegendModeView from "./src/views/legendMode/StartView/LegendModeView";
import ClassicModeView from "./src/views/clasicMode/StartView/ClassicModeView";
import FasterModeView from "./src/views/fasterMode/StartView/FasterModeView";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeView}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Mode"
                    component={ModeView}
                    options={{title: 'Elige el modo de juego', headerTitleStyle: { alignSelf: 'center' }}}
                />
                <Stack.Screen
                    name="LegendMode"
                    component={LegendModeView}
                    options={{title: 'Modo Leyenda', headerTitleStyle: { alignSelf: 'center' }}}
                />
                <Stack.Screen
                    name="ClassicMode"
                    component={ClassicModeView}
                    options={{title: 'Modo Clásico', headerTitleStyle: { alignSelf: 'center' }}}
                />
                <Stack.Screen
                    name="FasterMode"
                    component={FasterModeView}
                    options={{title: 'Modo Rápido', headerTitleStyle: { alignSelf: 'center' }}}
                />
            </Stack.Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    );
}

export default React.memo(App);
