'use client'

import { motion } from 'framer-motion'
import { usePathname } from '@/src/components/navigation'

export default function Template({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    return (
        <motion.div

        >
            {children}
        </motion.div>
    )
}