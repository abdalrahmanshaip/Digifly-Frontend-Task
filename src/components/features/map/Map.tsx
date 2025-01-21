import HeaderSections from "@/components/shared/HeaderSections"
import { useTranslations } from "next-intl"

const Map = () => {
   const t = useTranslations('contentTwo')
  return (
    <div className='pb-16 space-y-20'>
      <HeaderSections
        headerTitle={t('title')}
        paragraph={t('paragraph')}
      />
      
    </div>
  )
}

export default Map