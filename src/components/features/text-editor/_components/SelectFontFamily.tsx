import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTranslations } from 'next-intl'
const SelectFontFamily = () => {
  const t = useTranslations('textEditor')
  return (
    <Select
      onValueChange={(value) => document.execCommand('fontName', false, value)}
    >
      <SelectTrigger className='w-[180px] h-full rounded-none border-none focus:ring-0 py-4 px-6 border-our-purple/10'>
        <SelectValue placeholder={t('fontFamily')} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='Monospace'>Monospace</SelectItem>
          <SelectItem value='Sans Serif'>Sans Serif</SelectItem>
          <SelectItem value='Arial'>Arial</SelectItem>
          <SelectItem value='tajawal'>tajawal</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectFontFamily
