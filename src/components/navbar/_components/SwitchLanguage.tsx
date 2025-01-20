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
        className='w-[140px]'
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
              <Image
                src={gb}
                alt={'English flag'}
                width={20}
              />
              <span>English</span>
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
              <Image
                src={en}
                alt={'Arabic flag'}
                width={20}
              />
              <span>العربية</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SwitchLanguage
