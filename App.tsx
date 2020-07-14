import * as React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './src/views/home/HomeView';
import ModeView from "./src/views/mode/ModeView";
import LegendModeView from "./src/views/legendMode/StartView/LegendModeView";
import ClassicModeView from "./src/views/clasicMode/StartView/ClassicModeView";
import FasterModeView from "./src/views/fasterMode/StartView/FasterModeView";
import ScoresView from "./src/views/scores/ScoresView";
import ScoreLegendView from "./src/views/legendMode/ScoreLegend/ScoreLegendView";
import ScoreFasterView from "./src/views/fasterMode/ScoreFaster/ScoreFasterView";
import GameLegendView from "./src/views/legendMode/GameLegend/GameLegendView";
import GameClassicView from "./src/views/clasicMode/GameClassic/GameClassicView";
import GameFasterView from "./src/views/fasterMode/GameFaster/GameFasterView";

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
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="LegendMode"
                    component={LegendModeView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="ScoreLegend"
                    component={ScoreLegendView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="GameLegend"
                    component={GameLegendView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="ClassicMode"
                    component={ClassicModeView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="GameClassic"
                    component={GameClassicView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="FasterMode"
                    component={FasterModeView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="ScoreFaster"
                    component={ScoreFasterView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="GameFaster"
                    component={GameFasterView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
                <Stack.Screen
                    name="Scores"
                    component={ScoresView}
                    options={{headerTitleStyle: { alignSelf: 'center' }, headerShown: false}}
                />
            </Stack.Navigator>
            <StatusBar hidden={true} />
        </NavigationContainer>
    );
}

export default React.memo(App);
