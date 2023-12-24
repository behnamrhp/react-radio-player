import { useEffect, useRef, useState } from "react"


export const useUILogic = (streamUrl: string, onErrorCatched?: (mediaError: MediaError | null, event: ErrorEvent) => void) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const audioRef = useRef(new Audio(streamUrl))
  const [volume, setVolume] = useState(50)

  // Change station on changing stream url
  useEffect(() => {
    if (audioRef.current.src === streamUrl) return;
    audioRef.current.src = streamUrl
  }, [streamUrl])

  // clear audio on onmount
  useEffect(() => {
    const savedAudio = audioRef.current
    setIsDisabled(false)
    const errorHandler = (e: ErrorEvent) => {
      setIsDisabled(true)
      if (onErrorCatched) onErrorCatched(savedAudio.error, e)
    }
    savedAudio.addEventListener('error', errorHandler)

    if (!savedAudio) return;
    return () => {
      savedAudio.pause()
      savedAudio.removeEventListener('error', errorHandler)
    }
  }, [onErrorCatched])

  // change volume
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume])

  // chage audio play state
  useEffect(() => {
    isPlay ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlay, onErrorCatched])
  
  const onClickPlayToggler = () => {
    setIsPlay((prev) => !prev)
  }

  const onChangeVolume = (value: number) => {
    setVolume(value)
  }

  const onClickPrevNextHandler = () => {
    setIsPlay(false)
  }

  return {
    isPlay,
    volume,
    onClickPlayToggler,
    onChangeVolume,
    onClickPrevNextHandler,
    isDisabled
  }
}