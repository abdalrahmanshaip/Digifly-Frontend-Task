import HeaderSections from '@/components/shared/HeaderSections'
import Layout from '@/components/shared/Layout'
import { useTranslations } from 'next-intl'
import TextEditorAria from './_components/TextEditorAria'

const TextEditor = () => {
  const t = useTranslations('contentThree')
  return (
    <Layout>
      <div className='pb-16 space-y-20'>
        <HeaderSections
          headerTitle={t('title')}
          paragraph={t('paragraph')}
        />
        <TextEditorAria />
      </div>
    </Layout>
  )
}

export default TextEditor
