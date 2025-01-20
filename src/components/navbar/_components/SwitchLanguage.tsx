'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

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
        className='w-[180px]'
        aria-label='Language Selector'
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel aria-label=''>Language</SelectLabel>
          <SelectItem
            title='Language Selector'
            key='en'
            role='option'
            aria-label='Switch to English Language'
            value='en'
          >
            En
          </SelectItem>
          <SelectItem
            title='Language Selector'
            key='ar'
            role='option'
            aria-label='Switch to Arabic Language'
            value='ar'
          >
            العربية
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SwitchLanguage
