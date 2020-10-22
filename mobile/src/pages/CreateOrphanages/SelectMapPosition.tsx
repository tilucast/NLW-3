import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/Local.png';

export default function SelectMapPosition() {
  const navigation = useNavigation();

  const [positionOnMap, setPositionOnMap] = useState({latitude:0, longitude: 0})

  function handleNextStep() {
    navigation.navigate('OrphanageData', {positionOnMap});
  }

  function handleSelectMapPosition(event: MapEvent){
    setPositionOnMap(event.nativeEvent.coordinate)
  }

  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{
          latitude: -15.6407982,
          longitude: -47.6434281,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {positionOnMap.latitude !== 0 && (
          <Marker 
          icon={mapMarkerImg}
          coordinate={{ latitude: positionOnMap.latitude, longitude: positionOnMap.longitude}}
        />
        )}
      </MapView>

      {positionOnMap.latitude !== 0 && (
        <RectButton style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})