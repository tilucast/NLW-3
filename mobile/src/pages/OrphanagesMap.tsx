import React, { useState} from 'react'

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import {Feather} from '@expo/vector-icons'

import mapMarker from '../images/Local.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface OrphanageItem{
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

export default function OrphanagesMap(){
  const [orphanages, setOrphanages] = useState<OrphanageItem[]>([])

  useFocusEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data)
    })
  })

    const navigation = useNavigation()

    function handleNavigateToOrphanageDetails(id: number){
        navigation.navigate('OrphanageDetails', {id})
    }

    function navigateToCreateOrphanage(){
      navigation.navigate('SelectMapPosition')
    }

    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map} 
                initialRegion={{
                latitude: -15.6372273,
                longitude: -47.6356851,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008
                }}
            >

                {orphanages.map(({id, name, latitude, longitude}) => {
                  return (
                    <Marker key={id}
                      icon={mapMarker}
                      calloutAnchor={{
                          x: 2.7,
                          y: 0.8
                      }}
                      coordinate={{
                          latitude,
                          longitude
                      }}
                    >

                      <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(id)}>
                          <View style={styles.calloutContainer}>
                          <Text style={styles.calloutText}>{name}</Text>
                          </View>
                      </Callout>

                    </Marker>
                  )
                })}

            </MapView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>{orphanages.length} orfanatos encontrados</Text>

                <RectButton 
                  style={styles.createOrphanageButton} 
                  onPress={navigateToCreateOrphanage}
                >
                  <Feather name="plus" size={20} color="#fff"/>
                </RectButton>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    map:{
      width: Dimensions.get('window').width,
      height: '100%'
    },

    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },

    calloutText:{
      color: '#0089a5',
      fontSize: 14,
      fontFamily: "Nunito_700Bold"
    },

    footer:{
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 46,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 4
    },

    footerText: {
      color: "#8fa7b3",
      fontFamily: "Nunito_700Bold"
    },

    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  
});