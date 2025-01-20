const HeaderSections = ({
  headerTitle,
  paragraph,
}: {
  headerTitle: string
  paragraph: string
}) => {
  return (
    <header className='space-y-8'>
      <div className='flex gap-x-4 items-center'>
        <span className='w-16 h-1 rounded-full bg-our-purple'></span>
        <h1 className='font-bold text-3xl text-our-dark'>{headerTitle}</h1>
      </div>
      <p className='text-our-dark-100 font-normal text-lg md:w-4/6'>
        {paragraph}
      </p>
    </header>
  )
}

export default HeaderSections
