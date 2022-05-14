import React, { Component } from 'react';
import MapView,{Marker} from 'react-native-maps';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Alert,
    Platform
} from 'react-native';

export default class IssLocationScreen extends Component {
    
    render() {
        if(Object.keys(this.state.location).length===0)
        {
            return{
                <View style={{flex:1,
                    justifyContent:"center",
                    alignItems:"center"}}>
                  <Text>
                      Loading...
                  </Text>
                  </View>
            }
        }
        else
        {

        
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ISS Location</Text>
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView
                        style={styles.map}
                        region={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude,
                            latitudeDelta:100,
                            longitudeDelta:100,
                        }}
                        >
                        <Marker
                        coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}
                        >
                            <Image source={require ("../assets/iss_icon.png")} style={{height:50,width:50}}/>
                        </Marker>
                        </MapView>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex:0.6,
    },
    map: {
        width:"100%",
        height:"100%",
    }
})
