'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var css_248z = ".BannerFull-module__hp_banner___UW4hc {\n  position: relative;\n  margin-bottom: -1.875rem;\n  height: 93vh;\n  height: calc(100svh + 50px);\n  max-height: 800px;\n  overflow: hidden;\n  z-index: 2;\n  color: var(--color-white);\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner___UW4hc {\n    max-height: 1400px;\n    height: calc(100vh + 100px);\n  }\n  .BannerFull-module__hp_banner___UW4hc:hover .BannerFull-module__hp_banner_pause___FjfnG {\n    opacity: 0.8;\n  }\n}\n.BannerFull-module__hp_banner_inner___v29g7 {\n  position: relative;\n  height: 100%;\n  background: #030303;\n}\n.BannerFull-module__hp_banner_inner___v29g7:after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  top: 30%;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41%, rgb(0, 0, 0) 117%);\n}\n.BannerFull-module__hp_banner_content___2ZmnG {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 2rem 1rem 4.5rem 1rem;\n  z-index: 3;\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner_content___2ZmnG {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 5.625rem 2rem 8rem 2rem;\n    max-width: 2010px;\n    margin: auto;\n  }\n}\n@media (min-width: 1600px) {\n  .BannerFull-module__hp_banner_content___2ZmnG {\n    padding: 5.625rem 3rem 8rem 3rem;\n  }\n}\n.BannerFull-module__hp_banner_video___cKAxJ {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n  width: 100%;\n  object-fit: cover;\n  object-position: center center;\n}\n.BannerFull-module__hp_banner_title___bY9ni {\n  margin-bottom: 0.75rem;\n  font-weight: var(--font-light);\n  font-size: 1.5rem;\n  font-size: clamp(1.5rem, 1.3786rem + 0.5178vw, 2rem);\n  text-transform: uppercase;\n  white-space: pre-wrap;\n}\n.BannerFull-module__hp_banner_title___bY9ni b {\n  font-size: 1.5rem;\n  font-size: clamp(1.5rem, 1.1359rem + 1.5534vw, 3rem);\n  font-weight: var(--font-regular);\n}\n@media (max-width: 767px) {\n  .BannerFull-module__hp_banner_title___bY9ni {\n    transition-delay: unset;\n  }\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner_title___bY9ni {\n    margin-bottom: 0;\n  }\n}\n.BannerFull-module__hp_banner_description___Qvga4 {\n  font-size: 0.875rem;\n  font-size: clamp(0.875rem, 0.7612rem + 0.4854vw, 1.34375rem);\n  font-weight: var(--font-light);\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner_description___Qvga4 {\n    text-align: right;\n    padding-bottom: 0.5rem;\n    font-size: 0.95625rem;\n  }\n}\n.BannerFull-module__hp_banner_description___Qvga4 strong,\n.BannerFull-module__hp_banner_description___Qvga4 b {\n  font-weight: var(--font-light);\n  font-size: 0.875rem;\n  font-size: clamp(0.875rem, 0.7612rem + 0.4854vw, 1.34375rem);\n  letter-spacing: 0.45px;\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner_description___Qvga4 strong,\n  .BannerFull-module__hp_banner_description___Qvga4 b {\n    display: block;\n    font-size: 1.34375rem;\n  }\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner_shape___FUugS {\n    height: 150px;\n  }\n  .BannerFull-module__hp_banner_shape___FUugS:after {\n    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);\n    left: -150px;\n    right: -150px;\n  }\n}\n.BannerFull-module__hp_banner_pause___FjfnG {\n  display: none;\n}\n@media (min-width: 1280px) {\n  .BannerFull-module__hp_banner_pause___FjfnG {\n    display: block;\n    position: absolute;\n    z-index: 4;\n    cursor: pointer;\n    left: 0;\n    right: 0;\n    top: 45%;\n    transform: translateY(-50%);\n    text-align: center;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n  }\n  .BannerFull-module__hp_banner_pause___FjfnG svg {\n    max-width: 30px;\n  }\n  .BannerFull-module__hp_banner_pause___FjfnG svg path {\n    transition: fill 0.3s ease;\n  }\n  .BannerFull-module__hp_banner_pause___FjfnG:hover path {\n    fill: var(--color-primary) !important;\n  }\n}\n@media (min-width: 1600px) {\n  .BannerFull-module__hp_banner_pause___FjfnG {\n    right: 3rem;\n  }\n}";
var styles = {"hp_banner":"BannerFull-module__hp_banner___UW4hc","hp_banner_pause":"BannerFull-module__hp_banner_pause___FjfnG","hp_banner_inner":"BannerFull-module__hp_banner_inner___v29g7","hp_banner_content":"BannerFull-module__hp_banner_content___2ZmnG","hp_banner_video":"BannerFull-module__hp_banner_video___cKAxJ","hp_banner_title":"BannerFull-module__hp_banner_title___bY9ni","hp_banner_description":"BannerFull-module__hp_banner_description___Qvga4","hp_banner_shape":"BannerFull-module__hp_banner_shape___FUugS"};
styleInject(css_248z);

const PlayIcon = () => {
    return (React__default["default"].createElement("svg", { height: "48", width: "48", viewBox: "0 0 459 459", xmlns: "http://www.w3.org/2000/svg", stroke: "#ffffff", fill: "#ffffff" },
        React__default["default"].createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        React__default["default"].createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("g", { id: "SVGRepo_iconCarrier" },
            ' ',
            React__default["default"].createElement("g", null,
                ' ',
                React__default["default"].createElement("g", null,
                    ' ',
                    React__default["default"].createElement("path", { d: "M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651 l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416 c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151 C315.662,233.564,313.652,237.364,310.292,239.651z" }),
                    ' '),
                ' '),
            ' ')));
};

const PauseIcon = () => {
    return (React__default["default"].createElement("svg", { height: "30", width: "30", viewBox: "0 0 271.953 271.953", xmlns: "http://www.w3.org/2000/svg" },
        React__default["default"].createElement("title", null, "Pause video"),
        React__default["default"].createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        React__default["default"].createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
        React__default["default"].createElement("g", { id: "SVGRepo_iconCarrier" },
            ' ',
            React__default["default"].createElement("g", null,
                ' ',
                React__default["default"].createElement("g", null,
                    ' ',
                    React__default["default"].createElement("path", { style: { fill: '#ffff' }, d: "M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977 S60.879,271.953,135.977,271.953z M135.977,21.756c62.979,0,114.22,51.241,114.22,114.22s-51.241,114.22-114.22,114.22 s-114.22-51.241-114.22-114.22S72.992,21.756,135.977,21.756z" }),
                    ' ',
                    React__default["default"].createElement("path", { style: { fill: '#ffff' }, d: "M110.707,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598 c-7.511,0-13.598,6.086-13.598,13.598v103.342C97.109,194.028,103.195,200.114,110.707,200.114z" }),
                    ' ',
                    React__default["default"].createElement("path", { style: { fill: '#ffff' }, d: "M165.097,200.114c7.511,0,13.598-6.086,13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598 S151.5,75.663,151.5,83.174v103.342C151.5,194.028,157.586,200.114,165.097,200.114z" }),
                    ' '),
                ' '),
            ' ')));
};

const BannerFull = ({ props }) => {
    var _a, _b, _c, _d;
    const [isPlaying, setIsPlaying] = React.useState(true);
    const videoRef = React.useRef(null);
    const togglePlayPause = React.useCallback(() => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            }
            else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, []);
    const isIOS = React.useCallback(() => {
        return /iPad|iPhone|iPod/i.test(navigator.userAgent);
    }, []);
    const isSafari = React.useCallback(() => {
        const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
        const isNotChrome = navigator.userAgent.toLowerCase().indexOf('chrome') === -1;
        const isNotFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') === -1;
        return isSafari && isNotChrome && isNotFirefox;
    }, []);
    const getSafariVersion = React.useCallback(() => {
        const userAgent = navigator.userAgent;
        const versionMatch = userAgent.match(/Version\/(\d+(\.\d+)?)/);
        return versionMatch ? versionMatch[1] : null;
    }, []);
    const isChrome = React.useCallback(() => {
        const userAgent = typeof window !== 'undefined' ? navigator.userAgent : null;
        return userAgent ? Boolean(userAgent.match(/Chrome|CriOS/i)) : false;
    }, []);
    React.useEffect(() => {
        var _a, _b, _c, _d;
        const isSafariCondition = isSafari() &&
            (parseInt(getSafariVersion() || '0') < 17 ||
                (parseInt(getSafariVersion() || '0') >= 17 &&
                    window.innerWidth >= 768));
        const isChromeOnIOSCondition = isChrome() && isIOS();
        if ((((_b = (_a = props.video) === null || _a === void 0 ? void 0 : _a.video_mp4) === null || _b === void 0 ? void 0 : _b.data) && isSafariCondition) ||
            isChromeOnIOSCondition) {
            const videoElement = videoRef.current;
            if (videoElement) {
                const webmSource = videoElement.querySelector('source[type="video/webm"]');
                if (webmSource && ((_d = (_c = props.video) === null || _c === void 0 ? void 0 : _c.video_mp4) === null || _d === void 0 ? void 0 : _d.data)) {
                    webmSource.setAttribute('src', props.video.video_mp4.data.attributes.url);
                    webmSource.setAttribute('type', 'video/mp4');
                    videoElement.load();
                }
            }
        }
    }, [
        (_b = (_a = props.video) === null || _a === void 0 ? void 0 : _a.video_mp4) === null || _b === void 0 ? void 0 : _b.data,
        isChrome,
        isIOS,
        isSafari,
        getSafariVersion,
    ]);
    React.useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handleEnded = () => {
                togglePlayPause();
            };
            videoElement.addEventListener('ended', handleEnded);
            return () => {
                videoElement.removeEventListener('ended', handleEnded);
            };
        }
    }, [togglePlayPause]);
    return (React__default["default"].createElement("div", { className: `${styles.hp_banner}` },
        React__default["default"].createElement("div", { className: `${styles.hp_banner_inner}` },
            ((_c = props.video) === null || _c === void 0 ? void 0 : _c.video_webm.data) || ((_d = props.video) === null || _d === void 0 ? void 0 : _d.video_mp4.data) ? (React__default["default"].createElement("video", { ref: videoRef, muted: true, autoPlay: true, playsInline: true, preload: "auto", className: `${styles.hp_banner_video}` },
                props.video.video_webm.data ? (React__default["default"].createElement("source", { src: `${props.video.video_webm.data.attributes.url}`, type: `${props.video.video_webm.data.attributes.mime}` })) : null,
                props.video.video_mp4.data && !props.video.video_webm.data ? (React__default["default"].createElement("source", { src: `${props.video.video_mp4.data.attributes.url}`, type: `${props.video.video_mp4.data.attributes.mime}` })) : null)) : null,
            React__default["default"].createElement("div", { className: `${styles.hp_banner_pause}`, onClick: togglePlayPause }, isPlaying ? React__default["default"].createElement(PauseIcon, null) : React__default["default"].createElement(PlayIcon, null)),
            React__default["default"].createElement("div", { className: `${styles.hp_banner_content}` },
                props.title ? (React__default["default"].createElement("h1", { dangerouslySetInnerHTML: {
                        __html: props.title,
                    }, className: `${styles.hp_banner_title}` })) : null,
                props.description ? (React__default["default"].createElement("h2", { className: `${styles.hp_banner_description}`, dangerouslySetInnerHTML: { __html: props.description } })) : null)),
        React__default["default"].createElement("div", { className: `${styles.hp_banner_shape} shape-before` })));
};

exports.BannerFull = BannerFull;
//# sourceMappingURL=index.js.map
