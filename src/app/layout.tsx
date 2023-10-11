import { mainNavConfig } from '@/config'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'

import '@/styles/globals.css'

export const metadata = {
  title: {
    template: '%s | Diogo Rocha',
    default: 'Diogo Rocha',
  },
  description: 'Description',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-100 text-zinc-900">
        <Header />

        <Layout>
          <div className="py-20">{children}</div>
        </Layout>

        <Footer items={mainNavConfig.mainNav} />
      </body>
    </html>
  )
}
