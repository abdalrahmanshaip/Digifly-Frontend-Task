import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Redo,
  Strikethrough,
  Underline,
  Undo,
} from 'lucide-react'
import ButtonItem from './ButtonItem'
import SelectFontFamily from './SelectFontFamily'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

const TextEditorAria = () => {
  const t = useTranslations('textEditor')
  const textEditorProperties = useMemo(
    () => [
      {
        name: t('undo'),
        icon: Undo,
        exeCcommandAction: 'undo',
      },
      {
        name: t('redo'),
        icon: Redo,
        exeCcommandAction: 'redo',
      },
      {
        name: t('bold'),
        icon: Bold,
        exeCcommandAction: 'Bold',
      },
      {
        name: t('alignRight'),
        icon: AlignRight,
        exeCcommandAction: 'JustifyRight',
      },
      {
        name: t('alignCenter'),
        icon: AlignCenter,
        exeCcommandAction: 'JustifyCenter',
      },
      {
        name: t('alignLeft'),
        icon: AlignLeft,
        exeCcommandAction: 'JustifyLeft',
      },
      {
        name: t('underline'),
        icon: Underline,
        exeCcommandAction: 'underline',
      },
      {
        name: t('italic'),
        icon: Italic,
        exeCcommandAction: 'italic',
      },
      {
        name: t('strikeThrough'),
        icon: Strikethrough,
        exeCcommandAction: 'strikeThrough',
      },
    ],
    [t]
  )
  const handleAction = (command: string) => {
    document.execCommand(command, false, '')
  }
  return (
    <div className='border border-gray-300 rounded-sm min-h-80 focus:outline-none bg-our-purple-100 overflow-hidden'>
      <div className='flex items-center bg-our-purple-400 border-b border-our-purple/10'>
        <SelectFontFamily />
        {textEditorProperties.map((property) => (
          <ButtonItem
            key={property.name}
            property={property}
            onClick={() => handleAction(property.exeCcommandAction)}
          />
        ))}
      </div>
      <div
        contentEditable
        spellCheck='false'
        className='p-6  focus:outline-none  h-full'
      ></div>
    </div>
  )
}

export default TextEditorAria
