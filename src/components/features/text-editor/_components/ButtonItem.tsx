import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { TextEditorButton } from '@/types'
const ButtonItem = ({
  property,
  onClick,
}: {
  property: TextEditorButton
  onClick: () => void
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className='border-x py-4 px-6 border-our-purple/10 hover:bg-our-green hover:text-white duration-300 '
            role='button'
          >
            <property.icon size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{property.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ButtonItem
