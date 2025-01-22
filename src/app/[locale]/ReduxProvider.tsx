'use client'
import { store } from '@/state/store'
import { useLocale } from 'next-intl'
import React from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale()
  return (
    <Provider store={store}>
      {children}
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            error: 'bg-red-400',
            success: 'bg-our-green',
            warning: 'text-yellow-400',
            info: 'bg-blue-400',
          },
        }}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        position={locale === 'ar' ? 'bottom-left' : 'bottom-right'}
      />
    </Provider>
  )
}
