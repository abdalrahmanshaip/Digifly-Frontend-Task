import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
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

const TextEditorAria = () => {
  const textEditorProperties = [
    {
      name: 'undo',
      icon: <Undo size={20} />,
      action: () => document.execCommand('undo', false, ''),
    },
    {
      name: 'redo',
      icon: <Redo size={20} />,
      action: () => document.execCommand('redo', false, ''),
    },
    {
      name: 'Bold',
      icon: <Bold size={20} />,
      action: () => document.execCommand('Bold', false, ''),
    },
    {
      name: 'Align Right',
      icon: <AlignRight size={20} />,
      action: () => document.execCommand('JustifyRight', false, ''),
    },
    {
      name: 'Align Center',
      icon: <AlignCenter size={20} />,
      action: () => document.execCommand('JustifyCenter', false, ''),
    },
    {
      name: 'Align Left',
      icon: <AlignLeft size={20} />,
      action: () => document.execCommand('JustifyLeft', false, ''),
    },
    {
      name: 'Underline',
      icon: <Underline size={20} />,
      action: () => document.execCommand('underline', false, ''),
    },
    {
      name: 'Italic',
      icon: <Italic size={20} />,
      action: () => document.execCommand('italic', false, ''),
    },
    {
      name: 'strikethrough',
      icon: <Strikethrough size={20} />,
      action: () => document.execCommand('strikeThrough', false, ''),
    },
  ]
  return (
    <div className='border border-gray-300 rounded-sm min-h-80 focus:outline-none bg-our-purple-100 overflow-hidden'>
      <TooltipProvider>
        <div className='flex items-center bg-our-purple-400 border-b border-our-purple/10'>
          <Select
            onValueChange={(value) =>
              document.execCommand('fontName', false, value)
            }
          >
            <SelectTrigger className='w-[180px] h-full rounded-none border-none focus:ring-0 py-4 px-6 border-our-purple/10'>
              <SelectValue placeholder='Select font' />
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
          {textEditorProperties.map((property) => (
            <Tooltip key={property.name}>
              <TooltipTrigger asChild>
                <button
                  onClick={property.action}
                  className='border-x py-4 px-6 border-our-purple/10 hover:bg-our-green hover:text-white duration-300 '
                  role='button'
                >
                  {property.icon}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{property.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      <div
        contentEditable
        spellCheck='false'
        className='p-6  focus:outline-none  h-full'
      ></div>
    </div>
  )
}

export default TextEditorAria
