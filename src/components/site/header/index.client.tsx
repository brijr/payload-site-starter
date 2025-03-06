'use client'
import { useHeaderTheme } from '@/providers/header-theme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './nav'
import { Section, Container } from '@/components/craft'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="">
      <Section className="py-0 lg:py-0">
        <Container className="flex justify-between">
          <Link className="text-lg font-semibold tracking-tight" href="/">
            Payload Site Starter
          </Link>
          <HeaderNav data={data} />
        </Container>
      </Section>
    </header>
  )
}
