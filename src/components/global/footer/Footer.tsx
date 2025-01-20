import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  return (
    <div className='bg-our-purple py-10 text-our-white text-center'>
      {t('title')}
    </div>
  )
}

export default Footer
