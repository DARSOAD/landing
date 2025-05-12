"use client"
import Loader from '@/src/components/loader'

import { useMounted } from '@/src/hooks/use-mounted'
import React from 'react'

const MountedProvider = ({ children }: { children: React.ReactNode }) => {
  const mounted = useMounted()
  if (!mounted) return <Loader />
  return children
}

export default MountedProvider