'use client'

import { CopyButton } from "@/src/components/copy-button"
import { useConfig } from "@/src/hooks/use-config"

const CopyCustomizer = () => {
    const [config] = useConfig()
    const code = JSON.stringify(config, null, 2)
    return (
        <CopyButton
            event="copy_chunk_code"
            name="Copy Customizer"
            tooltip="Copy Customizer"
            code={code}
            variant="ghost"
            className="  relative -top-1.5 [&_svg]-h-4 [&_svg]:w-4"

        />
    )
}

export default CopyCustomizer