import { useEffect, useRef, useState } from "react";

export const useUILogic = (
  streamUrl: string,
  onErrorCatched?: (mediaError: MediaError | null, event: ErrorEvent) => void,
) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const audioRef = useRef(new Audio(streamUrl));
  const [volume, setVolume] = useState(50);

  useChangeStationStreamUrlSideEffect({
    audioRef,
    setIsPlay,
    streamUrl,
  });

  useErrorHandledSideEffect({
    audioRef,
    setIsDisabled,
    onErrorCatched,
  });

  useChangeVolumeSideEffect({
    audioRef,
    volume,
  });

  useChangePlayPauseSideEffect({
    audioRef,
    isPlay,
    onErrorCatched,
  });

  const onClickPlayToggler = () => {
    setIsPlay((prev) => !prev);
  };

  const onChangeVolume = (value: number) => {
    setVolume(value);
  };

  const onClickPrevNextHandler = () => {
    setIsPlay(false);
  };

  return {
    isPlay,
    volume,
    onClickPlayToggler,
    onChangeVolume,
    onClickPrevNextHandler,
    isDisabled,
    audioRef: audioRef.current,
  };
};

/**
 * Change station on changing stream url
 */
const useChangeStationStreamUrlSideEffect = (props: {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  streamUrl: string;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { audioRef, setIsPlay, streamUrl } = props;
  useEffect(() => {
    if (audioRef.current.src === streamUrl) return;

    const savedAudio = audioRef.current;

    savedAudio.src = streamUrl;
    const onLoadedDataCallback = () => {
      document.documentElement.click();
      setIsPlay(true);
    };
    savedAudio.addEventListener("loadeddata", onLoadedDataCallback);

    return () => {
      savedAudio.removeEventListener("loadeddata", onLoadedDataCallback);
    };
  }, [audioRef, setIsPlay, streamUrl]);
};

/**
 * clear audio on unmount and error handled
 */
const useErrorHandledSideEffect = (props: {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  onErrorCatched?: (mediaError: MediaError | null, event: ErrorEvent) => void;
}) => {
  const { setIsDisabled, onErrorCatched, audioRef } = props;
  useEffect(() => {
    const savedAudio = audioRef.current;
    setIsDisabled(false);
    const errorHandler = (e: ErrorEvent) => {
      setIsDisabled(true);
      if (onErrorCatched) onErrorCatched(savedAudio.error, e);
    };
    savedAudio.addEventListener("error", errorHandler);

    if (!savedAudio) return;
    return () => {
      savedAudio.pause();
      savedAudio.removeEventListener("error", errorHandler);
    };
  }, [audioRef, onErrorCatched, setIsDisabled]);
};

const useChangeVolumeSideEffect = (props: {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  volume: number;
}) => {
  const { audioRef, volume } = props;
  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [audioRef, volume]);
};

const useChangePlayPauseSideEffect = (props: {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  isPlay: boolean;
  onErrorCatched?: (mediaError: MediaError | null, event: ErrorEvent) => void;
}) => {
  const { audioRef, isPlay, onErrorCatched } = props;
  // chage audio play state
  useEffect(() => {
    isPlay ? audioRef.current.play() : audioRef.current.pause();
  }, [audioRef, isPlay, onErrorCatched]);
};
