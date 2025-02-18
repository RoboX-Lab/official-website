import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'
import { bsc, bscTestnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '6a2d318d7237d68546b0bbd72067083d'

// 2. Create a metadata object - optional
const metadata = {
  name: 'R6D9.ai',
  description: 'Your Agentic Copilot, from Virtual to Real',
  url: 'https://r6d9.ai', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Set the networks
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const networks = [bsc, bscTestnet] as any

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    email: false,
    socials: false
  }
})

export function AppkitUIProvider(props: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
    </WagmiProvider>
  )
}
