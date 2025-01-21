/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import PopupMessage from './PopupMessage'

const MapContent = () => {
  const DefaultIcon = L.icon({
    iconUrl: icon as any,
    shadowUrl: iconShadow as any,
  })
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
        icon={DefaultIcon}
      >
        <PopupMessage />
      </Marker>
    </MapContainer>
  )
}

export default MapContent
