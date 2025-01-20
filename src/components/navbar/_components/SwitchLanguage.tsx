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
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value='en'>En</SelectItem>
          <SelectItem value='ar'>العربية</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default SwitchLanguage
