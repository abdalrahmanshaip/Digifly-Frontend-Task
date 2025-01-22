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
  ListOrdered,
  Redo,
  Undo,
} from 'lucide-react'

const TextEditorAria = () => {
  const textEditorProperties = [
    {
      name: 'undo',
      icon: <Undo />,
      action: () => document.execCommand('undo', false, ''),
    },
    {
      name: 'redo',
      icon: <Redo />,
      action: () => document.execCommand('redo', false, ''),
    },
    {
      name: 'Bold',
      icon: <Bold />,
      action: () => document.execCommand('Bold', false, ''),
    },
    {
      name: 'Align Right',
      icon: <AlignRight />,
      action: () => document.execCommand('JustifyRight', false, ''),
    },
    {
      name: 'Align Center',
      icon: <AlignCenter />,
      action: () => document.execCommand('JustifyCenter', false, ''),
    },
    {
      name: 'Align Left',
      icon: <AlignLeft />,
      action: () => document.execCommand('JustifyLeft', false, ''),
    },
    {
      name: 'Order List',
      icon: <ListOrdered />,
      action: () => document.execCommand('insertOrderedList', false, ''),
    },
  ]
  return (
    <div className='border border-gray-300 rounded-sm min-h-80 focus:outline-none bg-our-purple-100 overflow-hidden'>
      <TooltipProvider>
        <div className='flex items-center bg-our-purple-400'>
          {textEditorProperties.map((property) => (
            <Tooltip key={property.name}>
              <TooltipTrigger asChild>
                <button
                  onClick={property.action}
                  className='border-x py-4 px-6 border-our-purple/10'
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
        className='p-6  focus:outline-none  h-full'
      ></div>
    </div>
  )
}

export default TextEditorAria

//  onChange={(e) => document.execCommand('fontName', false, e.target.value)}
