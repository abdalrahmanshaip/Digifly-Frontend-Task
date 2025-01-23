import { useLocale } from 'next-intl'
import { Popup } from 'react-leaflet'

const PopupMessage = () => {
  const locale = useLocale()
  return (
    <Popup>
      {locale == 'en' ? (
        <div className='!text-white !font-bold !text-base text-start'>
          <div className=''>
            <span className='!text-our-green'>Digi </span>
            <span>Fly Company</span>
          </div>
          <span>welcomes you</span>
        </div>
      ) : (
        <div className='!text-white !font-bold !text-base text-start'>
          <div className=''>
            <span>شركة</span>
            <span className='!text-our-green'> ديجى </span>
            <span> فلاي </span>
            <span> ترحب بكم</span>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default PopupMessage
