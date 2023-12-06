import { useEffect, useRef, useState } from "react"

export const useUILogic = (streamUrl: string) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(new Audio(streamUrl))
  const [volume, setVolume] = useState(50)

  // clear audio on onmount
  useEffect(() => {
    const savedAudio = audioRef.current
    return () => {
      savedAudio.pause()
    }
  }, [])

  // change volume
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume])

  // chage audio play state
  useEffect(() => {
    isPlay ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlay])
  
  const onClickPlayToggler = () => {
    setIsPlay((prev) => !prev)
  }

  const onChangeVolume = (value: number) => {
    setVolume(value)
  }

  return {
    isPlay,
    volume,
    onClickPlayToggler,
    onChangeVolume
  }
}