import Image from 'next/image'
import LogoImage from '@/assets/png/digifly-logo.png'

const Logo = () => {
  return (
    <Image
      src={LogoImage}
      alt='Digifly logo'
      width={70}
      height={56}
      priority
    />
  )
}

export default Logo
