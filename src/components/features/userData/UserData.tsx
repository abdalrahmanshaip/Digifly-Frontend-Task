import HeaderSections from '@/components/shared/HeaderSections'
import { useTranslations } from 'next-intl'
import UserForm from './_components/UserForm'
import UserTable from './_components/UserTable'

const UserData = () => {
  const t = useTranslations('contentOne')
  return (
    <div className='pt-16 space-y-20'>
      <HeaderSections
        headerTitle={t('title')}
        paragraph={t('paragraph')}
      />
      <div className='flex lg:flex-row flex-col 2xl:gap-x-28 xl:gap-x-20 lg:gap-14 gap-10 flex-1'>
        <UserForm />
        <UserTable />
      </div>
    </div>
  )
}

export default UserData
