import { useCallback, useEffect, useState } from 'react'
import ArrowDownImage from '@/assets/airdrop/arrow-down.png'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'
import airdropApi from '@/apis/airdrop.api'
import { useSignMessage } from 'wagmi'
import { PublicKey } from '@solana/web3.js'
import { Loader2 } from 'lucide-react'
import { AppkitUIProvider } from '@/components/appkit-ui-provider'

function ConnectWallet(props: { onConnect: (address: string) => Promise<void>; onDisconnect: () => void }) {
  const { onConnect, onDisconnect } = props
  const { address, isConnected } = useAppKitAccount()
  const [loading, setLoading] = useState(false)
  const { open } = useAppKit()

  const handleConnect = useCallback(
    async (address: string) => {
      setLoading(true)
      try {
        await onConnect(address)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    },
    [onConnect]
  )

  useEffect(() => {
    if (!isConnected) onDisconnect()
    if (address && isConnected) handleConnect(address)
  }, [address, handleConnect, isConnected, onDisconnect])

  return (
    <div className="flex flex-col items-center text-white">
      <p className="mb-[120px] text-center">Please link the wallet you used on Codatta OR Aspecta.</p>
      <button
        disabled={loading}
        onClick={() => open({ view: 'Connect' })}
        className="flex w-[240px] justify-center rounded-lg bg-white py-3 text-black"
      >
        {loading ? <Loader2 className="size-6 animate-spin" /> : 'Connect EVM Wallet'}
      </button>
    </div>
  )
}

function LinkSolAddress(props: { onSubmit: (address: string) => Promise<void> }) {
  const [solAddress, setSolAddress] = useState('')
  const [canSubmit, setCanSubmit] = useState(false)
  const [loading, setLoading] = useState(false)

  function isValidSolanaAddress(address: string): boolean {
    try {
      new PublicKey(address)
      return true
    } catch (error) {
      console.log(error.message)
      return false
    }
  }

  useEffect(() => {
    if (isValidSolanaAddress(solAddress)) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [solAddress, props])

  async function handleSubmit() {
    setLoading(true)
    try {
      await props.onSubmit(solAddress)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <div className="flex w-full flex-col items-center">
      <p className="mb-3 text-center">Provide your Solana wallet address to claim the airdrop.</p>
      <input
        className="mb-[60px] block w-full rounded-lg border border-white/10 bg-white/5 px-8 py-3 text-center"
        type="text"
        placeholder="Enter your Solana wallet address"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSolAddress(e.target.value)}
      />
      <button
        disabled={!canSubmit || loading}
        onClick={handleSubmit}
        className="flex w-[240px] justify-center rounded-lg bg-white py-3 text-black transition-all disabled:opacity-20"
      >
        {loading ? <Loader2 className="size-6 animate-spin" /> : 'Confirm'}
      </button>
    </div>
  )
}

function ClaimStatus() {
  return <div>We have received your Solana address. Please check back later for the results.</div>
}

function Steps(props: { step: 'connect-wallet' | 'link-solana' | 'claim-status' }) {
  const { step } = props

  return (
    <div className="mx-auto flex max-w-[754px] gap-4 rounded-[1px] border border-white p-2 text-sm font-bold sm:text-xl">
      <div
        className={`${step === 'connect-wallet' ? 'rounded-l-sm bg-white text-black' : 'bg-white/0 text-white'} relative basis-1/3 py-1 text-center transition-all`}
      >
        Connect Wallet
        <div
          className={` ${step === 'connect-wallet' ? 'opacity-100' : 'opacity-0'} absolute right-[-10px] top-0 h-0 border-y-[calc(50%)] border-l-[10px] border-white border-y-white/0 transition-all`}
        ></div>
      </div>
      <div
        className={`${step === 'link-solana' ? 'rounded-l-sm bg-white text-black' : 'text-white'} relative basis-1/3 py-1 text-center transition-all`}
      >
        Connect Claim Wallet
        <div
          className={` ${step === 'link-solana' ? 'opacity-100' : 'opacity-0'} absolute right-[-10px] top-0 h-0 border-y-[calc(50%)] border-l-[10px] border-white border-y-white/0 transition-all`}
        ></div>
      </div>
      <div
        className={`${step === 'claim-status' ? 'rounded-l-sm bg-white text-black' : 'text-white'} relative basis-1/3 py-1 text-center transition-all`}
      >
        Claim $Pengu
      </div>
    </div>
  )
}

export function AirdropAction() {
  const { address, isConnected } = useAppKitAccount()
  const { signMessageAsync } = useSignMessage()
  const [step, setStep] = useState<'connect-wallet' | 'link-solana' | 'claim-status'>('connect-wallet')

  async function handleWalletConnect(address: string) {
    try {
      const res = await airdropApi.getAirdropInfo(address)
      if (res.data.register_flag) setStep('link-solana')
      else setStep('claim-status')
    } catch (err) {
      console.log(err.message)
    }
  }

  async function handleSubmitSolAddress(solAddress: string) {
    try {
      const nonce = new Date().getTime()
      const message = `Please sign this message to confirm your ownership of the provided address. nonce:${nonce}`
      const signature = await signMessageAsync({ message })
      await airdropApi.linkSolAddress({ message, address: address || '', signature, sol_address: solAddress })
      setStep('claim-status')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!isConnected) setStep('connect-wallet')
  }, [isConnected])

  return (
    <div className="px-5">
      <h1 className="ms:mt-[120px] mx-auto mb-[70px] mt-[60px] block max-w-[593px] text-center text-[30px] font-bold text-primary-light sm:mb-[140px] sm:text-[48px]">
        Connect a wallet to check eligibility for Airdrop
      </h1>
      <div className="mb-5">
        <Steps step={step} />
      </div>
      <div className="mb-[80px] flex justify-center">
        <img src={ArrowDownImage} className="h-9 w-[30px]" alt="" />
      </div>
      <div className="mx-auto flex max-w-[754px] justify-center">
        {step === 'connect-wallet' && (
          <ConnectWallet onConnect={handleWalletConnect} onDisconnect={() => setStep('connect-wallet')}></ConnectWallet>
        )}
        {step === 'link-solana' && <LinkSolAddress onSubmit={handleSubmitSolAddress} />}
        {step === 'claim-status' && <ClaimStatus />}
      </div>
    </div>
  )
}

export default function AirdropRegister() {
  return (
    <AppkitUIProvider>
      <AirdropAction />
    </AppkitUIProvider>
  )
}
