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

const TextEditorAria = () => {
  const textEditorProperties = [
    {
      name: 'undo',
      icon: Undo,
      exeCcommandAction: 'undo',
    },
    {
      name: 'redo',
      icon: Redo,
      exeCcommandAction: 'redo',
    },
    {
      name: 'Bold',
      icon: Bold,
      exeCcommandAction: 'Bold',
    },
    {
      name: 'Align Right',
      icon: AlignRight,
      exeCcommandAction: 'JustifyRight',
    },
    {
      name: 'Align Center',
      icon: AlignCenter,
      exeCcommandAction: 'JustifyCenter',
    },
    {
      name: 'Align Left',
      icon: AlignLeft,
      exeCcommandAction: 'JustifyLeft',
    },
    {
      name: 'Underline',
      icon: Underline,
      exeCcommandAction: 'underline',
    },
    {
      name: 'Italic',
      icon: Italic,
      exeCcommandAction: 'italic',
    },
    {
      name: 'Strike Through',
      icon: Strikethrough,
      exeCcommandAction: 'strikeThrough',
    },
  ]
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
