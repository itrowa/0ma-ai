import type { ReactNode } from 'react'
import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

export function useMDXComponents(components: Record<string, any>) {
  const { wrapper: BlogWrapper, ...rest } = getBlogMDXComponents(components)

  return {
    ...rest,
    wrapper: ({ children, metadata }: { children: ReactNode; metadata: Record<string, any> }) => {
      if (metadata?.layout === 'raw') {
        return <>{children}</>
      }
      return <BlogWrapper metadata={metadata}>{children}</BlogWrapper>
    },
  }
}
