import type { ReactNode } from 'react'
import { Footer } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { ThemeProvider } from 'next-themes'
import { Link, ViewTransitions } from 'next-view-transitions'
import 'nextra-theme-blog/style.css'

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <Head />
      <body>
        <ThemeProvider attribute="class">
          <div
            style={{
              maxWidth: '48rem',
              margin: '0 auto',
              padding: '2rem 1.5rem',
            }}
          >
            <ViewTransitions>
              <header
                className="x:mb-8 x:flex x:items-center x:gap-3"
                style={{ justifyContent: 'flex-end' }}
                data-pagefind-ignore="all"
              >
                <Link
                  href="/blog"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 500,
                    opacity: 0.75,
                  }}
                >
                  Blog
                </Link>
                <Link
                  href="/club"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: 500,
                    opacity: 0.75,
                  }}
                >
                  零人公司俱乐部
                </Link>
              </header>
              <article
                className="x:prose x:max-md:prose-sm x:dark:prose-invert"
                dir="ltr"
                data-pagefind-body
              >
                {children}
              </article>
            </ViewTransitions>
            <Footer>© {new Date().getFullYear()} 0ma.ai · Zero-man Agency</Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
