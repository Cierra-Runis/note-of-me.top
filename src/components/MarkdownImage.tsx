'use client';

import { ImageProps, useImage } from '@nextui-org/image';
import { cloneElement, forwardRef } from 'react';

export interface MarkdownImageProps extends ImageProps {}

const MarkdownImage = forwardRef<HTMLImageElement, MarkdownImageProps>(
  (props, ref) => {
    const {
      Component,
      domRef,
      slots,
      classNames,
      isBlurred,
      isZoomed,
      fallbackSrc,
      removeWrapper,
      disableSkeleton,
      getImgProps,
      getWrapperProps,
      getBlurredImgProps,
    } = useImage({
      ...props,
      ref,
    });
    const img = <Component {...getImgProps()} ref={domRef} />;

    if (removeWrapper) {
      return img;
    }
    const zoomed = (
      <span
        className={slots.zoomedWrapper({
          class: classNames?.zoomedWrapper,
        })}
      >
        {img}
      </span>
    );

    if (isBlurred) {
      return (
        <span {...getWrapperProps()}>
          {isZoomed ? zoomed : img}
          {cloneElement(img, getBlurredImgProps())}
        </span>
      );
    }

    if (isZoomed || !disableSkeleton || fallbackSrc) {
      return <span {...getWrapperProps()}> {isZoomed ? zoomed : img}</span>;
    }

    return img;
  },
);

MarkdownImage.displayName = 'MarkdownImage';

export default MarkdownImage;
