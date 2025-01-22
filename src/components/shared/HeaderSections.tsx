const HeaderSections = ({
  headerTitle,
  paragraph,
}: {
  headerTitle: string
  paragraph: string
}) => {
  return (
    <header
      className='space-y-8'
      aria-labelledby='header-title'
      aria-describedby='header-description'
    >
      <div className='flex gap-x-4 items-center'>
        <span
          className='w-16 h-1 rounded-full bg-our-purple'
          aria-hidden='true'
        ></span>
        <h1
          id='header-title'
          className='font-bold text-3xl text-our-dark'
        >
          {headerTitle}
        </h1>
      </div>
      <p
        id='header-description'
        className='text-our-dark-100 font-normal md:text-lg md:w-4/6'
      >
        {paragraph}
      </p>
    </header>
  )
}

export default HeaderSections
