import React, { useRef, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".VideoScale-module__videoScale___lgD6v {\n  position: relative;\n  width: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  z-index: 2;\n}\n@media (min-width: 1280px) {\n  .VideoScale-module__videoScale___lgD6v {\n    height: 150vh;\n  }\n}\n.VideoScale-module__videoScale_shim___PHRG6 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.VideoScale-module__videoScale_sticky___7kVAA {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n@media (min-width: 1280px) {\n  .VideoScale-module__videoScale_sticky___7kVAA {\n    height: 80%;\n  }\n}\n.VideoScale-module__videoScale_video___bx869 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  object-fit: cover;\n  transform: scale(0.5);\n  will-change: transform;\n}\n.VideoScale-module__videoScale_overlay___syWUg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  font-size: 2rem;\n  color: white;\n  overflow: hidden;\n}\n@media (min-width: 1280px) {\n  .VideoScale-module__videoScale_overlay___syWUg {\n    font-size: 6rem;\n  }\n}\n.VideoScale-module__videoScale_overlay___syWUg h2:first-child {\n  transform: translateX(-100vw);\n  color: var(--color-primary);\n}\n.VideoScale-module__videoScale_overlay___syWUg h2:last-child {\n  transform: translateX(100vw);\n}";
var styles = {"videoScale":"VideoScale-module__videoScale___lgD6v","videoScale_shim":"VideoScale-module__videoScale_shim___PHRG6","videoScale_sticky":"VideoScale-module__videoScale_sticky___7kVAA","videoScale_video":"VideoScale-module__videoScale_video___bx869","videoScale_overlay":"VideoScale-module__videoScale_overlay___syWUg"};
styleInject(css_248z);

const VideoScale = ({ videoWebm, videoMP4, text1 = '', text2 = '' }) => {
    const videoRef = useRef(null);
    // function isSafari() {
    //   const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    //   const isNotChrome =
    //     navigator.userAgent.toLowerCase().indexOf('chrome') === -1;
    //   const isNotFirefox =
    //     navigator.userAgent.toLowerCase().indexOf('firefox') === -1;
    //   return isSafari && isNotChrome && isNotFirefox;
    // }
    // useEffect(() => {
    //   if (isSafari() && videoMP4) {
    //     const videoElement = videoRef.current;
    //     if (videoElement) {
    //       const webmSource = videoElement.querySelector(
    //         'source[type="video/webm"]'
    //       );
    //       if (webmSource) {
    //         webmSource.setAttribute('src', videoMP4.url);
    //         webmSource.setAttribute('type', 'video/mp4');
    //         videoElement.load();
    //       }
    //     }
    //   }
    // }, []);
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handleEnded = () => {
                videoRef.current.play();
            };
            videoElement.addEventListener('ended', handleEnded);
            return () => {
                videoElement.removeEventListener('ended', handleEnded);
            };
        }
    }, []);
    return (React.createElement("section", { className: `${styles.videoScale} observe videoScaleContainer` },
        React.createElement("div", { className: `${styles.videoScale_shim}` }),
        React.createElement("div", { className: `${styles.videoScale_sticky}` },
            React.createElement("video", { ref: videoRef, className: `${styles.videoScale_video} videoScaleVideo`, 
                // loop={true}
                autoPlay: true, muted: true, playsInline: true, preload: "metadata" },
                videoWebm ? (React.createElement("source", { src: `${videoWebm.url}`, type: `${videoWebm.mime}` })) : null,
                videoMP4 ? (React.createElement("source", { src: `${videoMP4.url}`, type: `${videoMP4.mime}` })) : null),
            React.createElement("div", { className: `${styles.videoScale_overlay}` },
                React.createElement("h2", { className: "videoScale_header_left" }, text1),
                React.createElement("h2", { className: "videoScale_header_right" }, text2)))));
};

export { VideoScale };
//# sourceMappingURL=index.esm.js.map
