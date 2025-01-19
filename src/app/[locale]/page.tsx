import { useTranslations } from "next-intl"

const HomePage = () => {
  const t = useTranslations('navbar')
  return (
    <div>{t('home')}</div>
  )
}

export default HomePage