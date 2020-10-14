import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {Root} from 'native-base';
import Teams from "../screens/Teams";
import Players from "../screens/Players";
import Player from "../screens/Player";

const HomeNav = createStackNavigator({
    Teams: {
        screen: Teams,
    },
    Players: {
        screen: Players,
    },
    Player: {
        screen: Player,
    },
},{initialRouteName: 'Teams'})

const AppContainer = createAppContainer(HomeNav);

class Router extends React.Component {
    render() {
        return (
            <Root>
                <AppContainer/>
            </Root>
        )
    }
}

export default Router;
