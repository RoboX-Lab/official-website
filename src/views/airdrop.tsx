import { useEffect, useState } from 'react'
import ArrowDownImage from '@/assets/airdrop/arrow-down.png'
import { useAnchorWallet, useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import BotImage from '@/assets/airdrop/claim-bot.webp'
import { Connection, PublicKey } from '@solana/web3.js'
import { utils, AnchorProvider, Program } from '@coral-xyz/anchor'
import { IDL, Airdrop } from '@/contract/idl'
import * as spl from '@solana/spl-token'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'

function LinkSolAddress() {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="mb-3 text-center">Connect the Solana Wallet you provided before.</p>
      <WalletMultiButton style={{ backgroundColor: 'white', color: 'black' }}></WalletMultiButton>
    </div>
  )
}

function ClaimAction() {
  const { publicKey } = useWallet()
  const wallet = useAnchorWallet()
  const [loading, setLoading] = useState(false)
  const [userClaimStatus, setUserClaimStatus] = useState<'not-eligible' | 'claimable' | 'claimed'>('claimable')

  async function checkClaimStatus(publicKey: PublicKey) {
    setLoading(true)
    const rpcURL = import.meta.env.VITE_SOLANA_RPC_URL
    const connection = new Connection(rpcURL)

    if (!wallet) return
    const provider = new AnchorProvider(connection, wallet)
    const program = new Program(IDL as Airdrop, provider)

    const [userPDA] = PublicKey.findProgramAddressSync(
      [utils.bytes.utf8.encode('claim-states'), publicKey!.toBuffer()],
      program.programId
    )

    try {
      const claimState = await program.account.claimState.fetch(userPDA)
      setUserClaimStatus(claimState.claimed ? 'claimed' : 'claimable')
    } catch (err) {
      if (err.message.includes('Account does not exist or has no data')) {
        setUserClaimStatus('not-eligible')
      } else toast(err.message)
    }

    setLoading(false)
  }

  async function handleClaim() {
    toast('Please connect wallet')
    if (!publicKey || publicKey?.toString() === '') {
      toast('Please connect wallet')
      return
    }
    setLoading(true)
    try {
      const mint = new PublicKey(import.meta.env.VITE_SOLANA_MINT)
      const rpcURL = import.meta.env.VITE_SOLANA_RPC_URL
      const connection = new Connection(rpcURL)

      if (!wallet) return
      const provider = new AnchorProvider(connection, wallet)
      const program = new Program(IDL as Airdrop, provider)
      const [configPDA] = PublicKey.findProgramAddressSync([utils.bytes.utf8.encode('config')], program.programId)
      const vault = spl.getAssociatedTokenAddressSync(mint, configPDA, true)

      const tx_hash = await program.methods
        .claim()
        .accounts({
          recipient: publicKey?.toString(),
          vault,
          mint
        })
        .rpc()
      console.log(tx_hash)
      const confirmRes = await connection.confirmTransaction(tx_hash, 'finalized')
      console.log(confirmRes)
      await connection.confirmTransaction(tx_hash)
      const [userPDA] = PublicKey.findProgramAddressSync(
        [utils.bytes.utf8.encode('claim-states'), publicKey!.toBuffer()],
        program.programId
      )
      const claimState = await program.account.claimState.fetch(userPDA)
      console.log(claimState.claimed)
      if (!claimState.claimed) return
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!publicKey) return
    checkClaimStatus(publicKey)
  }, [publicKey])

  return (
    <div className="flex flex-col items-center">
      <img src={BotImage} alt="" className="mb-6" />
      {userClaimStatus === 'not-eligible' && (
        <p className="mb-6 text-center text-lg">Sorry, you are currently not eligible to make a claim.</p>
      )}
      {userClaimStatus === 'claimable' && (
        <button
          disabled={loading}
          className="flex w-48 justify-center rounded-md bg-white p-3 text-black"
          onClick={handleClaim}
        >
          {loading ? <Loader2 className="animate-spin" /> : 'Claim'}
        </button>
      )}
      {userClaimStatus === 'claimed' && (
        <p className="mb-6 text-center text-lg">
          You have successfully claimed. Please check your wallet for the airdrop
        </p>
      )}
    </div>
  )
}

function Steps(props: { step: 'connect-wallet' | 'link-solana' | 'claim-status' }) {
  const { step } = props

  return (
    <div className="mx-auto flex max-w-[508px] gap-4 rounded-[2px] border border-white p-2 text-sm font-bold sm:text-xl">
      <div
        className={`${step === 'link-solana' ? 'rounded-l-sm bg-white text-black' : 'bg-white/0 text-white'} relative basis-1/2 py-1 text-center transition-all`}
      >
        Connect Wallet
        <div
          className={` ${step === 'connect-wallet' ? 'opacity-100' : 'opacity-0'} absolute right-[-10px] top-0 h-0 border-y-[calc(50%)] border-l-[10px] border-white border-y-white/0 transition-all`}
        ></div>
      </div>

      <div
        className={`${step === 'claim-status' ? 'rounded-l-sm bg-white text-black' : 'text-white'} relative basis-1/2 py-1 text-center transition-all`}
      >
        Claim $R6D9
      </div>
    </div>
  )
}

export default function AirdropPage() {
  const [step, setStep] = useState<'link-solana' | 'claim-status'>('link-solana')

  const { publicKey } = useWallet()

  useEffect(() => {
    if (!publicKey) setStep('link-solana')
    else setStep('claim-status')
  }, [publicKey])

  return (
    <div className="px-5">
      <h1 className="ms:mt-[120px] mx-auto mb-[70px] mt-[60px] block max-w-[593px] text-center text-[30px] font-bold text-primary-light sm:mb-[140px] sm:text-[48px]">
        Connect Solana Wallet To Claim Airdrop Now !
      </h1>
      <div className="mb-5">
        <Steps step={step} />
      </div>
      <div className="mb-6 flex justify-center">
        <img src={ArrowDownImage} className="h-9 w-[30px]" alt="" />
      </div>
      <div className="mx-auto flex max-w-[754px] justify-center">
        {step === 'link-solana' && <LinkSolAddress />}
        {step === 'claim-status' && <ClaimAction />}
      </div>
    </div>
  )
}
