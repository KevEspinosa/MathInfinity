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
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
      );
    
      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            userToken = await AsyncStorage.getItem('userToken');
          } catch (e) {
            // Restoring token failed
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
      }, []);
    
      const authContext = React.useMemo(
        () => ({
          signIn: async data => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async data => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `AsyncStorage`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );
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
