import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const SoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: ["/audio.mp3"],
      loop: true,
      volume: 0.9,
    });
    setSound(newSound);

    return () => {
      newSound.stop();
    };
  }, []);

  const toggleSound = () => {
    if (!sound) return;

    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
      <div onClick={toggleSound} className="-mt-4 cursor-pointer hover:scale-1.2">
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#e3e3e3"
          >
            <path d="M280-240v-480h80v480h-80ZM440-80v-800h80v800h-80ZM120-400v-160h80v160h-80Zm480 160v-480h80v480h-80Zm160-160v-160h80v160h-80Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#e3e3e3"
          >
            <path d="M791-55 520-326v246h-80v-326l-80-80v246h-80v-326L55-791l57-57 736 736-57 57ZM120-400v-160h80v160h-80Zm400-154-80-80v-246h80v326Zm160 160-80-80v-246h80v326Zm80-6v-160h80v160h-80Z" />
          </svg>
        )}
      </div>
      
  );
};

export default SoundPlayer;