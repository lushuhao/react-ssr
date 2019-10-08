export const env = (function () {
  if (typeof window === 'undefined' && typeof global !== 'undefined') {
    return {
      isClient: false,
    };
  }

  const isSupportWebp =
    !![].map &&
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;
  const ua = navigator.userAgent.toLowerCase();
  return {
    protocol: window.location.protocol,
    isSupportWebp,
    isMainApp: /iting/.test(ua),
    isDev: process.env.NODE_ENV === 'development',
    isTest: /192|test|local/.test(window.location.href),
    isUat: process.env.REACT_APP_ENV === 'uat',
    isAndroid: /linux|android/.test(ua),
    isSafari: /safari/.test(ua) && !/chrome/.test(ua),
    isIos: !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
    isWeiXin: /micromessenger/.test(ua),
    isMobile: /mobile/.test(ua),
    isWeiXinDebug: /wxdebug/.test(window.location.href),
  };
})();
