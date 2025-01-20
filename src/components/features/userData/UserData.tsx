import HeaderSections from "@/components/shared/HeaderSections"
import { useTranslations } from "next-intl"
import UserForm from "./_components/UserForm"

const UserData = () => {
  const t = useTranslations('contentOne')
  return (
    <div className='py-16'>
      <HeaderSections headerTitle={t('title')} paragraph={t('paragraph')}/>
      <UserForm />
    </div>
  )
}

export default UserData
