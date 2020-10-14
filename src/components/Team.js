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

export const Item = ({ item}) => {
    return(
        <View style={styles.cardItem}>
            <List.Section>
                <List.Accordion title={item.full_name}>
                    <List.Item title={"abbreviation : " + item.abbreviation} />
                    <List.Item title={"city : " + item.city} />
                    <List.Item title={"conference : " + item.conference} />
                    <List.Item title={"division : " + item.division} />
                    <List.Item title={"Name : " + item.name} />
                    <List.Item title={"Check the Players of " + item.name}
                               left={props => <List.Icon {...props} icon="check" />}
                               onPress={() => item.navigation.navigate('Players',
                                   {teamId:item.id})}
                    />
                </List.Accordion>
            </List.Section>
        </View>
    )
}


export const renderItem = ({ item }) => {
    return (
        <Item
            item={item}
        />
    );
};
