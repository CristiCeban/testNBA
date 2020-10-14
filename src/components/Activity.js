import React from 'react'
import {View} from 'react-native'
import {ActivityIndicator} from "react-native-paper";
import {StyleSheet} from "react-native";

const activity = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export  const Activity = () => {
    return(
        <View style={[activity.container, activity.horizontal]}>
            <ActivityIndicator size='Large' color='#FF4F45'/>
        </View>
    )
}
