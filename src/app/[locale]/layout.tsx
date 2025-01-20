import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Poppins, Tajawal } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/global/navbar/Navbar'
import Footer from '@/components/global/footer/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
})

export const metadata: Metadata = {
  title: 'Digifly Frontend Task',
  description:
    'A frontend challenge for Digifly marketing agency contains a form and a list of users, a leaflet map, and a rich text editor.',
}

// Providing all messages to the client
// side is the easiest way to get started
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = (await params).locale
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body
        className={`${
          locale === 'ar'
            ? `${tajawal.className} bg-gradient-to-bl`
            : `${poppins.className} bg-gradient-to-br`
        } antialiased   from-our-purple-200/40 to-our-purple-300/50 h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
