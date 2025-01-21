import HeaderSections from '@/components/shared/HeaderSections'
import { useTranslations } from 'next-intl'
import MapContent from './_component/MapContent'
import Layout from '@/components/shared/Layout'

const Map = () => {
  const t = useTranslations('contentTwo')
  return (
    <div className=''>
      <Layout>
        <div className='pb-16 space-y-20 '>
          <HeaderSections
            headerTitle={t('title')}
            paragraph={t('paragraph')}
          />
        </div>
      </Layout>
      <MapContent />
    </div>
  )
}

export default Map
