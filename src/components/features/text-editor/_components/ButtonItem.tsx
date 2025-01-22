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
            className='border py-4 px-6 border-our-purple/10 hover:bg-our-green hover:text-white duration-300 flex-grow flex justify-center'
            role='button'
            aria-label={property.name}
            aria-describedby={`tooltip-${property.name}`}
          >
            <property.icon size={20} className='md:w-5 w-4'/>
          </button>
        </TooltipTrigger>
        <TooltipContent  id={`tooltip-${property.name}`}>
          <p>{property.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default ButtonItem
