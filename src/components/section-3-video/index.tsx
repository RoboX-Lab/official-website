/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { BigPlayButton, ControlBar, Player } from 'video-react'
import { useEffect, useState, useRef } from 'react'
import { cn } from '@udecode/cn'

import videoCover from '@/assets/video-cover.jpg'

export default function Section() {
  const playerRef = useRef<PlayerReference>(null)
  const [paused, setPaused] = useState<boolean>(true)

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.subscribeToStateChange((state) => {
        setPaused(state.paused && !state.ended)
      })
    }
  }, [playerRef])

  return (
    <div className="section flex items-center justify-between px-0 md:px-[80px] md:py-10 lg:px-[120px]">
      <Player
        ref={(player) => {
          playerRef.current = player
        }}
        src="https://s.r6d9.ai/static/b6d9-20250126-114445.mp4"
        poster={videoCover}
        aspectRatio="16:9"
      >
        <BigPlayButton
          position="center"
          className={cn(
            '!ml-[-0.75em] !block !w-[1.5em] !rounded-full transition-opacity duration-300',
            paused ? '!opacity-100' : '!opacity-0'
          )}
        />
        <ControlBar autoHide={true} className="!hidden" disableDefaultControls={true} />
      </Player>
    </div>
  )
}
