
/* install   npm install --save @fancyapps/ui  */

import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

// Import  node   Swiper styles
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function FancyboxGallery(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]);

  return <div ref={containerRef}>{props.children}</div>;
}

function GalleryComponent() {
  return (
    <FancyboxGallery
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
      </a>
      <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
        <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
      </a>
      <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
        <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
      </a>
      <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
        <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
      </a>
      <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
        <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
      </a>
    </FancyboxGallery>
  );
}

export default GalleryComponent;
