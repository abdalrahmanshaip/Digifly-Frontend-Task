import HeaderSections from "@/components/shared/HeaderSections"
import { useTranslations } from "next-intl"

const UserData = () => {
  const t = useTranslations('contentOne')
  return (
    <div className='py-16'>
      <HeaderSections headerTitle={t('title')} paragraph={t('paragraph')}/>
    </div>
  )
}

export default UserData
