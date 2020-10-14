import React from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    } from 'react-native';
import {connect} from 'react-redux';
import {Activity} from "../components/Activity";
import {getTeams} from "../redux/actions/teams_action";
import {renderItem} from "../components/Team";
import {getPlayers} from "../redux/actions/players_action";

class Teams extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        if(!this.props.teams)
            this.props.getTeams();
        if(Array.isArray(this.props.players) && !this.props.players.length)
            this.props.getPlayers();

    }

    render() {
        return(
            <>
                {!this.props.teams
                    ?
                    (
                        <Activity/>
                    )
                    :
                    (<>
                        <SafeAreaView style={{flex: 1}}>
                            <>
                                {
                                    <View style={{flex: 1}}>
                                        <FlatList
                                            data={this.props.teams.map(el => Object.assign(el,{navigation:this.props.navigation}))}
                                            renderItem={renderItem}
                                            keyExtractor={(item) => item.id.toString()}
                                        />
                                    </View>
                                }
                            </>
                        </SafeAreaView>
                    </>
                    )
                }
            </>
        )
    }
}


const mapStateToProps = state =>{
    return {
        teams: state.teams.data.data,
        players : state.players.data,
        isSuccess: state.teams.isSuccess,
    }
}

const mapDispatchToProps = {
    getTeams,
    getPlayers,
}
export default connect(mapStateToProps,mapDispatchToProps)(Teams)
