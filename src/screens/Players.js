import React from 'react'
import {
    SafeAreaView,
    View,
    FlatList
} from 'react-native';
import {connect} from 'react-redux';
import {renderPlayer} from "../components/Player";
import {Activity} from "../components/Activity";


class Players extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <>{Array.isArray(this.props.players) && !this.props.players.length
                ?
                    (
                    <Activity/>
                    )
                :
                    (
                    <SafeAreaView style={{flex: 1}}>
                        <>
                            {
                                <View style={{flex: 1}}>
                                    <FlatList
                                        data={this.props.players.filter(el => el.team.id === this.props.navigation.state.params.teamId)}
                                        renderItem={renderPlayer}
                                        keyExtractor={(player) => player.id.toString()}
                                    />
                                </View>
                            }
                        </>
                    </SafeAreaView>
                    )
            }
            </>
        )
    }
};
const mapStateToProps = state =>{
    return {
        players : state.players.data,
    }
}

export default connect(mapStateToProps)(Players);
