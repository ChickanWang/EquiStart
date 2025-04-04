import { useContext, useEffect, useRef } from "react";
import { GameContext } from "../context/GameContext";

export default function BackgroundMusic() {
  const { metrics } = useContext(GameContext);
  const audioRef = useRef(null);

  const failedMetric = Object.keys(metrics).find((key) => metrics[key] < 25);
  const music = failedMetric ? "/music/low_health.mp3" : "/music/default.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // 0 = mute, 1 = max
    }
  }, [music]); // re-apply volume if music changes

  return (
    <audio ref={audioRef} src={music} autoPlay loop>
      Your browser does not support the audio element.
    </audio>
  );
}
