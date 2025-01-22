'use client'
import dynamic from 'next/dynamic'
import UserData from './userData/UserData'
import TextEditor from './text-editor/TextEditor'

const Map = dynamic(() => import('./map/Map'), { ssr: false })

export { Map, UserData, TextEditor }

