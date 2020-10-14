import React from 'react'
import { View} from 'react-native';
import {List} from 'react-native-paper'
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    cardItem:{
        flex:1,
        marginLeft: 15,
        marginRight:15,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 15,
        elevation: 2,
        backgroundColor: '#F8F8F8'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    items:{
        marginRight: 20,
        fontSize: 20
    }
})

export const Player = ({ item}) => {
    return(
        <View style={styles.cardItem}>
            <List.Section>
                <List.Accordion title={item.first_name + item.last_name}>
                    <List.Item title={"height feet : " + (item.height_feet ? item.height_feet : "no data")} />
                    <List.Item title={"height inches : " + (item.height_inches ? item.height_inches : "no data")} />
                    <List.Item title={"weight pounds : " + (item.weight_pounds ? item.weight_pounds : "no data")} />
                    <List.Item title={"position : " + (item.position ? item.position : "no data")} />
                    <List.Accordion title = {'team'} left={props => <List.Icon {...props} icon="basketball" />}>
                        <List.Item title={"abbreviation : " + item.team.abbreviation} />
                        <List.Item title={"city : " + item.team.city} />
                        <List.Item title={"conference : " + item.team.conference} />
                        <List.Item title={"division : " + item.team.division} />
                        <List.Item title={"Name : " + item.team.name} />
                    </List.Accordion>
                </List.Accordion>
            </List.Section>
        </View>
    )
}


export const renderPlayer = ({ item }) => {
    return (
        <Player
            item={item}
        />
    );
};
