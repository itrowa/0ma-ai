import type { ReactNode } from 'react'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://0ma.ai'),
  title: {
    template: '%s – 0ma.ai',
    default: '0ma.ai – The system for zero-man company',
  },
  description:
    'Build a company that runs itself. AI workflows, automation, and agent systems for the zero-man era.',
  openGraph: {
    url: 'https://0ma.ai',
    siteName: '0ma.ai',
  },
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html lang="zh" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
                  0ma.ai
                </span>
              }
              logoLink="/"
            />
          }
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/acesolo/0ma-ai"
          editLink={null}
          feedback={{ content: null }}
          footer={
            <Footer>
              <span>© {new Date().getFullYear()} 0ma.ai · Zero-man Agency</span>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
