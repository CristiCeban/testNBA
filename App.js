import React from 'react';
import {Text, View, Image} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import storage from './src/redux/store'

import Router from "./src/config/Router";


const {store, persistor} = storage()
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected : true,
        }
    }


    unsubscribe = null;

    componentDidMount(){
        this.unsubscribe = NetInfo.addEventListener(state => {
            this.setState({isConnected : state.isConnected})
        })
    }

    componentWillUnmount(){
        this.unsubscribe()
    }

  render() {
    return(
        <>
            {
                this.state.isConnected
                ?
                    (
                        <Provider store={store}>
                            <PersistGate persistor={persistor}>
                                <Router/>
                            </PersistGate>
                        </Provider>

                    )
                    :
                    (
                        <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width:200, height:200, opacity: 0.5}} resizeMode={'cover'} source ={require('./src/assets/no-wifi.png')}/>
                            <Text>Check internet connection</Text>
                        </View>
                    )
            }
        </>
    )
  }
}

export default App;
