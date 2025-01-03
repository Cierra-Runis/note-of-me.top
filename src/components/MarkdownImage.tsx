'use client';

import { ImageProps, useImage } from '@nextui-org/image';
import { cloneElement, forwardRef } from 'react';

const MarkdownImage = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    classNames,
    Component,
    disableSkeleton,
    domRef,
    fallbackSrc,
    getBlurredImgProps,
    getImgProps,
    getWrapperProps,
    isBlurred,
    isZoomed,
    removeWrapper,
    slots,
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
});

MarkdownImage.displayName = 'MarkdownImage';

export default MarkdownImage;
