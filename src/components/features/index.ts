'use client'
import dynamic from 'next/dynamic'
import UserData from './userData/UserData'

const Map = dynamic(() => import('./map/Map'), { ssr: false })

export { Map, UserData }

