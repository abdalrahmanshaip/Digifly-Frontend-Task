import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  return (
    <div className='bg-our-purple py-6 text-our-white text-center' aria-description='Copy Right Digifly'>
      {t('title')}
    </div>
  )
}

export default Footer
