'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetUsersQuery } from '@/state/api/apiSlice'
import { useTranslations } from 'next-intl'

const UserTable = () => {
  const t = useTranslations('')
  const { data: usersInfo } = useGetUsersQuery()
  return (
    <div className='w-full space-y-4'>
      <p className='font-bold text-our-purple'>{t('result.title')}</p>
      <Table className='shadow-lg bg-white border'>
        <TableHeader>
          <TableRow className='xl:text-sm lg:text-xs text-sm font-normal text-our-dark-200'>
            <TableHead className='2xl:p-6 p-3 text-nowrap text-start'>
              {t('form.firstName')}
            </TableHead>
            <TableHead className='2xl:p-6 p-3 text-nowrap text-start'>
              {t('form.lastName')}
            </TableHead>
            <TableHead className='xl:p-6 p-3 text-nowrap text-start'>
              {t('form.mobileNumber')}
            </TableHead>
            <TableHead className='2xl:p-6 p-3 text-nowrap text-start'>
              {t('form.email')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {usersInfo?.map((user, index) => (
            <TableRow key={index}>
              <TableCell className='xl:text-sm lg:text-xs text-sm font-medium 2xl:p-6 p-3 text-nowrap text-our-dark'>
                {user.FirstName}
              </TableCell>
              <TableCell className='xl:text-sm lg:text-xs text-sm font-medium 2xl:p-6 p-3 text-nowrap text-our-dark'>
                {user.LastName}
              </TableCell>
              <TableCell className='xl:text-sm lg:text-xs text-sm font-medium 2xl:p-6 p-3 text-nowrap text-our-dark'>
                {user.Phone}
              </TableCell>
              <TableCell className='xl:text-sm lg:text-xs text-sm font-medium 2xl:p-6 p-3 text-nowrap text-our-dark'>
                {user.Email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default UserTable
