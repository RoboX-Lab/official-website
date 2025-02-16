import React from 'react'
import { Loader2 } from 'lucide-react'

interface SpinProps {
  loading?: boolean
  children: React.ReactNode
}

const Spin: React.FC<SpinProps> = ({ loading = false, children }) => {
  return (
    <div className="relative size-full">
      <div className={`${loading ? 'opacity-20' : 'opacity-100'} transition-all`}>{children}</div>
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <Loader2 className="size-8 animate-spin" />
        </div>
      )}
    </div>
  )
}

export default Spin
