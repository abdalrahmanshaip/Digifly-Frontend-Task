/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { useTranslations } from 'next-intl'

const MapContent = () => {
  const t = useTranslations('lableMap')
  const DefaultIcon = L.icon({
    iconUrl: icon as any,
    shadowUrl: iconShadow as any,
  })
  return (
    <MapContainer
      center={[30.061728, 31.335321]}
      zoom={50}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker
        position={[30.061728, 31.335321]}
        icon={DefaultIcon}
      >
        <Popup>
          <div className='!text-white !font-bold !text-base !p-2'>
            <div className=''>
              <span className='!text-our-green'>{t('specialTitle')}</span>
              <span>{t('firstTitle')}</span>
            </div>
            <span>{t('secTitle')}</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapContent
