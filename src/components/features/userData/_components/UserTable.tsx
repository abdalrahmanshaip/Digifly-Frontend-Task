import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTranslations } from 'next-intl'

const invoices = [
  {
    firstName: 'Ahmed',
    lastName: 'Alaa',
    mobileNumber: '01020889544',
    email: 'mostafa123@gmail.com',
  },
  {
    firstName: 'Ahmed',
    lastName: 'Alaa',
    mobileNumber: '01020889544',
    email: 'mostafa123@gmail.com',
  },
]

const UserTable = () => {
  const t = useTranslations('')
  return (
    <div className='w-full space-y-4'>
      <p className='font-bold text-our-purple'>{t('result.title')}</p>
      <Table className='shadow-lg bg-white border'>
        <TableHeader>
          <TableRow className='text-sm font-normal text-our-dark-200'>
            <TableHead className='p-6 text-start'>{t('form.firstName')}</TableHead>
            <TableHead className='p-6 text-start'>{t('form.lastName')}</TableHead>
            <TableHead className='p-6 text-start'>{t('form.mobileNumber')}</TableHead>
            <TableHead className='w-[100px] p-6 text-start'>{t('form.email')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.mobileNumber}>
              <TableCell className='text-sm font-medium p-6 text-our-dark'>
                {invoice.firstName}
              </TableCell>
              <TableCell className='text-sm font-medium p-6 text-our-dark'>
                {invoice.lastName}
              </TableCell>
              <TableCell className='text-sm font-medium p-6 text-our-dark'>
                {invoice.mobileNumber}
              </TableCell>
              <TableCell className='text-sm font-medium p-6 text-our-dark'>
                {invoice.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default UserTable
