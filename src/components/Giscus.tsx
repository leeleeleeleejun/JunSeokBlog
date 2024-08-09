'use client';

import {useEffect, useRef} from 'react';
import {useTheme} from "next-themes";


// <script src="https://giscus.app/client.js"
//         data-repo="leeleeleeleejun/JunSeokBlog"
//         data-repo-id="R_kgDOJ4ptlw"
//         data-category="General"
//         data-category-id="DIC_kwDOJ4ptl84ChgSG"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="ko"
//         crossOrigin="anonymous"
//         async>
// </script>

export const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', 'leeleeleeleejun/JunSeokBlog');
    scriptElem.setAttribute('data-repo-id', 'R_kgDOJ4ptlw');
    scriptElem.setAttribute('data-category', 'General');
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOJ4ptl84ChgSG');
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElem);
  }, []);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame'
    );
    iframe?.contentWindow?.postMessage(
      {giscus: {setConfig: {theme}}},
      'https://giscus.app'
    );
  }, [theme]);

  return <section className='mt-[150px]' ref={ref}/>;
};