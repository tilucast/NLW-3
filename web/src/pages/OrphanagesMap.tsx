import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

import mapMarker from '../images/Local.svg'

import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'
import api from '../services/api'

interface Orphanage{
    id: number,
    latitude: number,
    longitude: number,
    name: string
}

function OrphanagesMap(){
    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(() => {
        api.get('/orphanages').then(data => {
            setOrphanages(data.data)
        })
    },[])

    return (
        <main id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="map marker"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Distrito Federal</strong>
                    <span>Planaltina</span>
                </footer>
            </aside>

            <Map 
                center={[-15.6372273, -47.6356851]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="http://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {orphanages.map(({id, latitude, longitude, name}) => {
                    return (
                        <Marker key={id}
                            position={[latitude, longitude]}
                            icon={mapIcon}
                        >
                            <Popup 
                                closeButton={false} 
                                minWidth={240} maxWidth={240} className="map-popup"
                            >
                                {name}
                                <Link to={`/orphanages/${id}`}>
                                    <FiArrowRight size={20} color="#fff"/>
                                </Link>
                            </Popup>

                        </Marker>
                    )
                })}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </main>
    )
}

export default OrphanagesMap