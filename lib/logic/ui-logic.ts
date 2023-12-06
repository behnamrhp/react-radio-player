import { useEffect, useRef, useState } from "react"

export const useUILogic = (streamUrl: string) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(new Audio(streamUrl))

  // clear audio on onmount
  useEffect(() => {
    const savedAudio = audioRef.current
    return () => {
      savedAudio.pause()
    }
  }, [])

  // chage audio play state
  useEffect(() => {
    isPlay ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlay])
  
  const onClickPlayToggler = () => {
    setIsPlay((prev) => !prev)
  }

  return {
    isPlay,
    onClickPlayToggler,
  }
}