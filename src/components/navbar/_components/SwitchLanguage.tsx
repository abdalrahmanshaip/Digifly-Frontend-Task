'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { en, gb } from '@/assets/svg'
import Image from 'next/image'

const SwitchLanguage = () => {
  const lang = useLocale()
  const route = useRouter()

  const switchLang = (newLocale: string) => {
    route.push(`/${newLocale}`)
  }
  return (
    <Select
      defaultValue={lang}
      onValueChange={(value) => switchLang(value)}
      aria-label='Select Language'
    >
      <SelectTrigger
        className='sm:w-[140px] w-16'
        aria-label='Language Selector'
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='flex-col-reverse'>
          <SelectItem
            title='Language Selector'
            key='en'
            role='option'
            aria-label='Switch to English Language'
            value='en'
          >
            <div className='flex gap-x-4'>
              <span className='hidden sm:block w-16'>English</span>
              <Image
                src={gb}
                alt={'United Kingdom Flag'}
                width={20}
                aria-label='United Kingdom Flag'
              />
            </div>
          </SelectItem>
          <SelectItem
            title='Language Selector'
            key='ar'
            role='option'
            aria-label='Switch to Arabic Language'
            value='ar'
          >
            <div className='flex gap-x-4'>
              <span className='hidden sm:block w-16'>العربية</span>
              <Image
                src={en}
                alt={'Egypt Flag'}
                aria-label='Egypt Flag'
                width={20}
              />
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SwitchLanguage
