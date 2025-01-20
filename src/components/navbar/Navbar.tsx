import NavLink from './_components/NavLink'
import Logo from './_components/Logo'
import SwitchLanguage from './_components/SwitchLanguage'

const Navbar = () => {
  return (
    <nav className='w-full max-w-screen-2xl mx-auto flex justify-between  items-center px-6 md:px-10 lg:px-16 py-6' role='navigation'>
      <Logo />
      <NavLink />
      <SwitchLanguage />
    </nav>
  )
}

export default Navbar
