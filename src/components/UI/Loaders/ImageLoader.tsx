import React, { useEffect, useRef, useState } from "react";
import styles from "./Loader.module.scss";
import useOnScreen from "../../../hooks/useOnScreen";

export interface IImageLoaderProps {
  src: string;
  alt?: string;
  onLoad?(): void;
  minHeightImg?: number;
  minWidthImg?: number;
  onClick?(): void;
}

const ImageLoader: React.FC<IImageLoaderProps> = ({
  src,
  onLoad = () => {},
  onClick,
  minHeightImg,
  minWidthImg,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const isVisible = useOnScreen(containerRef);
  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      };
    }
  }, [isVisible, onLoad, isLoaded]);
  return (
    <div
      ref={containerRef}
      className={isLoaded ? styles.containerLoaded : styles.container}
    >
      {(isVisible || isLoaded) && (
        <img
          style={{
            minWidth: minWidthImg ? `${minWidthImg}px` : "",
            minHeight: minHeightImg ? `${minHeightImg}px` : "",
          }}
          className={isLoaded ? styles.imageLoaded : styles.image}
          ref={imageRef}
          src={src}
          alt=""
          onClick={() => onClick && onClick()}
        />
      )}
    </div>
  );
};

export default ImageLoader;
