/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import PopupMessage from './PopupMessage'

const markerIcon = new L.Icon({
  iconUrl: '/map-marker.png',
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const MapContent = () => {
  return (
    <MapContainer
      center={[30.061736656473236, 31.336938759513913]}
      zoom={50}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={[30.061736656473236, 31.336938759513913]}
        icon={markerIcon}
      >
        <PopupMessage />
      </Marker>
    </MapContainer>
  )
}

export default MapContent
