# 🚀 JunSeok-blog

Next.js를 이용한 SSG(Static Site Generation) 마크다운 블로그 입니다.

## URL

<a href='https://junseok-blog.vercel.app/'>JunSeok-blog</a>

## 기술 스택, 기술 선정 이유

### Next.js

**서버 사이드 렌더링 (SSR) 및 정적 사이트 생성 (SSG) 지원:**  
기술 블로그는 SEO에 민감하며, 초기 로딩 속도와 검색 엔진 최적화가 중요합니다.  
Next.js의 SSR과 SSG 기능을 활용하면 검색 엔진에서 블로그 컨텐츠를 더 잘 인식하고 초기 로딩 속도를 개선할 수 있습니다.
해당 블로그는 SSG를 활용해 제작하였습니다.

**라우팅 및 코드 스플리팅:**  
 Next.js는 내장된 라우팅 시스템을 제공하여 페이지 간 전환을 쉽게 할 수 있습니다. 또한 코드 스플리팅을 지원하여 필요한 컴포넌트만 로드해 초기 로딩 시간을 줄일 수 있습니다.

### TypeScript

정적 타입 시스템을 통해 코드의 안정성을 높이고 런타임 오류를 사전에 방지하여 코드 품질을 향상시킵니다.

### Tailwind CSS

TailwindCSS는 utility-first 컨셉의 css 프레임워크입니다.
다크 모드를 지원하며, 클래스의 이름을 고민하지 않아도 됩니다.
