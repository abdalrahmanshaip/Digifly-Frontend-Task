import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'
const SkeletonTable = () => {
  const items = new Array(3).fill(0)
  return items.map((_, index) => {
    return (
      <TableRow key={index} className=''>
        <TableCell>
          <Skeleton className='h-[10px] rounded-full w-[100px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-[10px] rounded-full w-[100px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-[10px] rounded-full w-[100px]' />
        </TableCell>
        <TableCell>
          <Skeleton className='h-[10px] rounded-full w-[140px]' />
        </TableCell>
      </TableRow>
    )
  })
}

export default SkeletonTable
