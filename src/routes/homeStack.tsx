import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ScoresView from '../views/scores/ScoresView';
import { HomeView } from "../views/home/HomeView";

const screens = {
  Home: {
    screen: HomeView,
  },
  Score: {
    screen: ScoresView,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);