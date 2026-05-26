import Card from "@/components/Card";
import ActivitiesAccordion from "@/components/ActivitiesAccordion";
import PretextDescription from "@/components/PretextDescription";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JunSeok-blog",
  description: "이준석의 개발 블로그입니다",
  openGraph: {
    title: "JunSeok-blog",
    description: "이준석의 개발 블로그입니다",
    locale: "ko-KR",
    siteName: "JunSeok-blog.com",
    url: "https://junseok-blog.vercel.app/about",
    type: "profile",
  },
};

function Highlight({ children }: { children: string }) {
  return (
    <span className="bg-cyan-200 px-[3px] mx-[2px] dark:bg-cyan-500">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <>
      <div className="flex gap-4 text-5xl text-center leading-relaxed max-md:text-4xl">
        <div className="font-light">안녕하세요</div>
        <strong>이준석</strong>
        <div className="font-light">입니다</div>
      </div>
      <div className="flex flex-col gap-4 mt-10 mb-[30px] text-[17px] font-light tracking-tight leading-7">
        <div className="flex flex-col">
          <strong>
            주변의 익숙한 불편함을 발견하고, 더 나은 경험을 만듭니다.
          </strong>
          <p>
            학생들의 맛집 정보를 한곳에 모아, 제공하는 KNU-Matzip을 개발·운영
            중입니다.
          </p>
          <p>
            학교 동아리 홍보·관리를 편리하게 제공하는 서비스를 개발·운영
            중입니다.
          </p>
          <p>
            교내 학생들의 택시 비용 절감을 위해 동승자를 모집하는 택시팟을 개발
            했습니다.
          </p>
        </div>
        <div className="flex flex-col">
          <strong>
            더 나은 경험을 위해서라면, 주도적으로 방법을 찾고 실행합니다.
          </strong>
          <p>
            파편화된 교내 동아리 정보 탐색의 불편함을 해결하기 위해, 서비스를
            기획하고 동아리연합회에 직접 제휴를 제안했습니다. 공식 데이터를
            확보함과 동시에 커뮤니티 홍보를 병행하여, 출시 2개월 만에 방문자
            5,000명을 달성했습니다.
          </p>
        </div>
        <div className="flex flex-col">
          <strong>
            ‘어떻게’보다 ‘무엇’을 정의하는 함수형 사고로 더 읽기 쉽고
            유지보수하기 쉬운 코드를 고민합니다.
          </strong>
          <p>
            핵심 의도가 드러나는 추상화를 통해, 동료가 직관적으로 이해할 수 있는
            코드를 지향합니다.
          </p>
        </div>
      </div>
      <Skills />
      <Projects />
      <Activities />
      <Issue />
      <Troubleshooting />
      <Teamwork />
      <FailureExperience />
      <TechInterests />
      <FuturePlan />
    </>
  );
}

function Projects() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Projects{" "}
          <span className="font-light text-base text-[gray]">직무 역량</span>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-2 gap-[40px]">
          <ProjectItem
            image="https://github.com/user-attachments/assets/ca63e59d-13b6-44bb-acca-d24f7feb3a88"
            title="KNU-Matzip"
            description="학생들의 맛집 정보를 한곳에 모아, 제공하는 서비스"
            date="2025.09 ~ 2025.11"
            techStack="https://go-skill-icons.vercel.app/api/icons?i=ts,nextjs,zustand,reactquery,tailwind,storybook,pnpm,turborepo,googleanalytics,sentry&perline=6"
          />
          <ProjectItem
            image="https://github.com/user-attachments/assets/253e7f34-0604-46ed-8c94-e103eadf1c68"
            title="Reev"
            description="개인과 모임이 성찰을 통해 함께 성장하는 회고 서비스"
            date="2025.01 ~ 2025.07"
            techStack="https://go-skill-icons.vercel.app/api/icons?i=ts,nextjs,zustand,reactquery,tailwind,storybook"
          />
          <ProjectItem
            image="https://github.com/user-attachments/assets/078cb298-b0cf-4e11-8962-333eb8d2dee4"
            title="택시팟 (Taxi-Mate)"
            description="택시를 함께 이용할 학생들을 모집하는 서비스"
            date="2024.06 ~ 2024.10"
            techStack="https://go-skill-icons.vercel.app/api/icons?i=ts,react,vite,redux,styledcomponents,vitest"
          />
        </ul>
      </div>
    </>
  );
}

const ProjectItem = ({
  image,
  title,
  description,
  date,
  techStack,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  techStack: string;
}) => {
  return (
    <li className="h-full">
      <Card className="flex h-full flex-col gap-4 p-4">
        <img
          alt={title}
          src={image}
          className="h-auto max-h-[220px] w-auto max-w-full rounded-xl object-contain"
        />
        <div>
          <p className="text-lg font-bold">{title}</p>
          <PretextDescription
            text={description}
            className="text-sm text-[gray]"
            maxLines={2}
          />
          <p className="text-sm text-[gray]">{date}</p>
        </div>
        <div>
          <span className="text-sm font-bold text-[gray]">Tech Stack</span>
          <p>
            <a href="https://skillicons.dev">
              <img className="w-[200px]" src={techStack} alt="" />
            </a>
          </p>
        </div>
      </Card>
    </li>
  );
};

function Activities() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Activities{" "}
          <span className="font-light text-base text-[gray]">
            역량 성장 과정
          </span>
        </h3>
      </div>
      <ActivitiesAccordion />
    </>
  );
}

function Issue() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Issue{" "}
          <span className="font-light text-base text-[gray]">
            AI 시대에서 개발자의 역할에 대한 생각
          </span>
        </h3>
      </div>
      <div className="flex flex-col gap-6">
        <p>
          개발자뿐 아니라 다양한 직군이 함께 고민하는 문제일 것입니다.
          공통적으로는 AI로 인한 생산성 향상에 대한 기대와 함께, 대체 가능성에
          대한 불안도 동시에 느끼는 것 같습니다.
        </p>

        <section className="flex flex-col gap-2">
          <strong>작성자에서 의사결정권자로</strong>
          <p>
            예전에는 구현을 위해 직접 타이핑하는 시간이 길었다면 지금은 AI에게
            프롬프트로 맥락을 전달하고, 생성된 코드를 읽고 고치고 다시 요청하는
            시간이 빠르게 늘어나고 있습니다. 즉, 코드를 통해 제품을 생산하는
            행위는 직접적인 코드 작성에서 점점 &ldquo;코드에 대한
            판단&rdquo;으로 이동하고 있습니다.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <strong>코드에 대한 책임을 질 사람이 필요합니다</strong>
          <p>
            AI는 법적으로 인격체가 아니기 때문에 책임을 질 수 없습니다. 그렇다면
            AI가 생성한 코드로 인해 문제가 발생했다면 과연 누가 책임을 져야 하는
            것인지에 대한 질문을 던져볼 필요가 있습니다.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <strong>AI 시대에 개발자에게 요구되는 역량</strong>

          <div className="flex flex-col gap-2">
            <strong>1. 장기 변경 비용을 예측하는 역량</strong>
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>
                <strong>지연된 비용의 관리:</strong> AI는 당장 &lsquo;작동하는
                코드&rsquo;를 만드는 데 최적화되어 있지만, 나쁜 설계의 대가는
                6개월 뒤 코드를 수정할 때 발생합니다.
              </li>
              <li>
                <strong>유지보수성 선별:</strong> 코드 생성 속도가 빨라진 만큼
                쌓이는 기술 부채의 속도도 빨라졌습니다. 단순히 코드를 읽는 것을
                넘어 미래의 변경 비용을 예측하고 관리하는 능력이 필수적입니다.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <strong>2. 코드를 다각도로 평가하는 검수 역량</strong>
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>
                <strong>구조적·성능적 품질 검증:</strong> 테스트로 잡기 어려운
                모듈의 책임 범위, 의존성 방향, 데이터 급증 시의 성능 저하, 보안
                취약점 등을 동시에 고려해야 합니다.
              </li>
              <li>
                <strong>리뷰 병목 해소:</strong> AI의 생산 속도가 리뷰 역량을
                앞지르는 환경에서, 잠재적 위험을 빠르게 선별해내는 개발자의
                가치는 더욱 높아집니다.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <strong>3. 맥락에 맞는 추상화 역량</strong>
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>
                <strong>통계적 평균 vs 전략적 판단:</strong> AI의 추상화는
                통계적 패턴에 기반하지만, 실제 설계는 자원과 미래 사이의
                &lsquo;트레이드오프&rsquo;를 결정하는 영역입니다.
              </li>
              <li>
                <strong>적정 수준의 설계:</strong> 프로젝트의 복잡도와 도메인
                특성을 이해하여, 추상화가 부족하거나 과잉되지 않도록 적절한
                경계를 긋는 능력이 중요합니다.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <strong>4. 암묵지를 명시화하는 역량</strong>
            <ul className="flex flex-col gap-1 list-disc pl-5">
              <li>
                <strong>언어화된 설계 감각:</strong> &ldquo;무언가
                이상하다&rdquo;는 직감을 &ldquo;책임 분리가 되어 있지
                않다&rdquo;는 식의 구체적인 언어로 정의할 수 있어야 합니다.
              </li>
              <li>
                <strong>정확한 지시와 교정:</strong> 시스템에 대한 깊은 이해를
                바탕으로 AI에게 맥락을 전달하고, AI가 생성한 코드의 오류를
                논리적으로 수정할 수 있는 설계 역량이 곧 실력이 됩니다.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

function Troubleshooting() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Troubleshooting{" "}
          <span className="font-light text-base text-[gray]">문제 해결</span>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-[40px]">
          <li className="flex flex-col gap-[12px]">
            <div>
              <strong>
                폰트 리소스 경량화를 통한 LCP 73% 개선 (5.9s → 1.6s)
              </strong>
              <p className="text-sm text-[gray]">
                📌 Lighthouse · 웹폰트(.woff2) 전환 및 서브셋 적용
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p>
                서비스 초기 로딩 속도가 느리다는 문제를 해결하는 과정에서, 폰트
                리소스 최적화를 통해 LCP(Largest Contentful Paint)를 크게 개선한
                경험이 있습니다.
              </p>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">원인</strong>
                <p>
                  Lighthouse 성능 측정 결과, LCP가 5.9초까지 지연되고 있었으며,
                  주요 원인이 6.7MB에 달하는 대용량 폰트 파일임을 확인했습니다.
                  초기 설정 과정에서 웹 최적화 포맷(.woff2)이 아닌 로컬 설치용
                  폰트(.ttf)가 그대로 적용되어 있었던 것이 문제였습니다.
                </p>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">조치</strong>
                <ul className="flex flex-col gap-1 list-disc pl-5">
                  <li>
                    폰트 포맷을 웹 최적화 형식(.woff2)으로 변경하여 용량을
                    6.7MB에서 2.1MB로 약 69% 감소
                  </li>
                  <li>
                    실제 서비스에서 자주 쓰이는 한글 2,350자와 필수 기호만
                    포함하는 서브셋 폰트 적용으로 불필요한 데이터 제거
                  </li>
                </ul>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">결과</strong>
                <p>
                  최종적으로 폰트 용량을 1.4MB까지 줄이며 약 79% 경량화에
                  성공했고, LCP를 5.9초에서 1.6초로 약 73% 단축시킬 수
                  있었습니다.
                </p>
              </section>

              <p>
                이 경험을 통해 성능 문제는 단순한 설정 변경이 아니라, 병목
                지점을 정확히 측정하고 단계적으로 개선하는 과정이 중요하다는
                것을 배웠습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

function Teamwork() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Teamwork & Conflict Resolution{" "}
          <span className="font-light text-base text-[gray]">
            협업과 충돌 해결
          </span>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-[40px]">
          <li className="flex flex-col gap-[12px]">
            <div>
              <strong>데이터 캐싱에 따른 정합성 훼손 해결</strong>
              <p className="text-sm text-[gray]">
                📌 모임(팟) 참여 기능 · 캐시와 서버 상태 불일치
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p>
                프로젝트에서 사용자들이 모임(팟)에 참여할 수 있는 기능을
                개발하던 중, 상세 페이지에서 데이터 캐싱으로 인해 정합성 문제가
                발생했고, 이를 해결하는 과정에서 백엔드 개발자와 의견 충돌을
                겪었습니다.
              </p>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">배경</strong>
                <p>
                  당시 페이지 로딩 속도를 개선하기 위해 상세 페이지 데이터를
                  일정 시간 캐싱하고 있었습니다. 하지만 이로 인해 서버의 최신
                  상태가 즉시 반영되지 않는 문제가 발생했습니다. 예를 들어,
                  사용자가 모임에 참여했음에도 화면에는 여전히 참여 전 상태로
                  보이거나, 이미 정원이 초과된 상황에서도 참여 가능한 것처럼
                  표시되는 등 실제 데이터와 UI 간 불일치가 발생했습니다.
                </p>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">의견 차이</strong>
                <p>
                  이 문제의 원인을 캐싱으로 판단한 백엔드 개발자는 정합성을 위해
                  캐싱을 제거하자는 입장이었고, 저는 캐싱을 제거할 경우 동일한
                  데이터를 반복 요청하게 되어 서비스 성능이 저하될 수 있다고
                  보았습니다.
                </p>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-base">훼손 시나리오</strong>
                <ul className="mt-1 flex flex-col gap-2 list-disc pl-5">
                  <li className="flex flex-col gap-1">
                    <strong>참여 상태 인지 어려움</strong>
                    <p>
                      팟 참여 후 다시 진입 시 캐시된 데이터로 인해 UI가
                      업데이트되지 않아 참여 여부 파악이 어려웠습니다.
                    </p>
                  </li>
                  <li className="flex flex-col gap-1">
                    <strong>데이터 불일치</strong>
                    <p>
                      3/4 상태에서 사용자 A가 먼저 참여하고 B가 뒤늦게 요청하면,
                      B는 실패 응답을 받지만 화면에는 여전히 3/4로 표시되는
                      문제가 있었습니다.
                    </p>
                  </li>
                </ul>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">해결 방법</strong>
                <p>
                  서로의 관점을 공유하며 해결 방안을 논의한 끝에, 캐싱을
                  유지하되 캐싱 시간을 최소화하고, 사용자가 모임에 참여하는
                  순간에는 refetch를 통해 서버의 최신 데이터를 즉시 반영하는
                  방식으로 합의했습니다.
                </p>
                <p>
                  이를 통해 데이터 정합성을 확보하고, 캐싱으로 얻는 이점은
                  유지하면서 불필요한 네트워크 요청 증가와 사용자 경험 저하를
                  방지할 수 있었습니다.
                </p>
              </section>

              <p>
                이 경험을 통해 협업에서는 단순히 각자의 방식을 고수하기보다,
                문제의 원인을 명확히 정의하고 서로의 기준을 이해한 뒤 균형점을
                찾아가는 과정이 중요하다는 것을 깨달았습니다. 이후에는 기능 구현
                전 데이터 처리 방식과 같은 핵심 전제를 먼저 공유하며 협업을
                진행하고 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

function FailureExperience() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Failure Experience{" "}
          <span className="font-light text-base text-[gray]">실패 경험</span>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-[40px]">
          <li className="flex flex-col gap-[12px]">
            <div>
              <strong>
                사용자 전환 비용을 간과해 유입에 실패했던 택시팟 경험
              </strong>
              <p className="text-sm text-[gray]">
                📌 사용자 행동 기반 제품 설계의 중요성 학습
              </p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p>
                사용자의 문제를 해결하는 서비스를 만들고자 했지만, 실제 사용자
                선택을 고려하지 못해 실패를 경험한 적이 있습니다.
              </p>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">배경</strong>
                <p>
                  재학 중인 대학에서는 대중교통 접근성이 낮아 학생들이 택시를
                  함께 타기 위해 500명 규모의 오픈 채팅방을 사용하고 있었습니다.
                  메시지 탐색의 비효율과 과도한 알림 문제를 해결하고자
                  &lsquo;택시팟&rsquo; 서비스를 개발했지만, 기대와 달리 사용자
                  유입이 거의 발생하지 않았습니다.
                </p>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">실패 원인</strong>
                <p>
                  초기에는 기능 부족을 원인으로 생각했지만, 실제 문제는 사용자의
                  행동을 충분히 고려하지 않은 제 판단에 있었습니다. 이미 많은
                  학생들이 익숙하게 사용하고 있는 카카오톡을 떠나 새로운
                  서비스로 이동해야 한다는 전환 비용을 간과했고, 신뢰성을 높이기
                  위해 도입한 실명 기반 소셜 로그인 또한 오히려 진입 장벽으로
                  작용했습니다.
                </p>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">학습한 점</strong>
                <p>
                  이 경험을 통해 문제 해결에서 중요한 것은 기능의 완성도가
                  아니라, 사용자가 실제로 행동할 수 있는 환경을 설계하는
                  것이라는 점을 깨달았습니다.
                </p>
              </section>

              <section className="flex flex-col gap-1">
                <strong className="text-[15px]">이후 적용</strong>
                <p>
                  이후 &lsquo;KNU-Matzip&rsquo; 프로젝트에서는 이러한 실패를
                  반영해, 소셜 로그인은 유지하되 랜덤 닉네임 시스템을 도입해
                  부담을 낮추고, 초기 참여를 유도하는 구조를 설계했습니다.
                </p>
                <p>
                  그 결과 MAU 300명을 달성하며 실제 사용자 유입을 만들어낼 수
                  있었습니다.
                </p>
              </section>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

function TechInterests() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-6 pb-2">
          Tech Interests{" "}
          <span className="font-light text-base text-[gray]">
            관심 기술 및 관련 기업
          </span>
        </h3>

        <div className="flex flex-col gap-10">
          <section>
            {/* 기업 헤더 */}
            <div className="flex items-center gap-2 mb-4">
              <video
                src="https://static.toss.im/assets/homepage/brand/Toss_Logo_Motion_Light_1920.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-[150px]"
              />
              <strong className="text-2xl">Viva Republica </strong>
            </div>

            {/* 기업 소개 */}
            <div className=" leading-relaxed space-y-4 mb-8">
              <p>
                토스는 <strong>'금융의 모든 순간을 쉽고 간편하게'</strong>라는
                슬로건 아래, 아주 복잡한 금융 절차를 매끄러운 UX로 풀어내는 데
                집중합니다.
              </p>
              <p>
                토스팀은 바꾸고 싶은 세상의 모습이 있고 생각만 해도 가슴 뛰는
                목표가 있는 조직입니다. 어렵고, 불편하고, 멀게 느껴지는 금융이
                아닌 누구에게나 쉽고 상식적인 금융을 만드는 것이 토스팀의 존재
                이유입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <strong className="block text-lg mb-4 border-b pb-1 text-gray-800">
                  주요 토스 계열사
                </strong>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <b className="text-gray-900">비바리퍼블리카:</b> 토스 앱을
                    운영하는 모기업
                  </li>
                  <li>
                    <b className="text-gray-900">토스뱅크 / 증권:</b> 인터넷
                    전문 은행 및 MTS 특화 증권사
                  </li>
                  <li>
                    <b className="text-gray-900">토스페이먼츠:</b>{" "}
                    전자결제대행(PG) 서비스
                  </li>
                  <li>
                    <b className="text-gray-900">토스인슈어런스 / 플레이스:</b>{" "}
                    보험 분석 및 오프라인 포스(POS)
                  </li>
                  <li>
                    <b className="text-gray-900">토스모바일 / 씨엑스:</b> MVNO
                    서비스 및 고객 상담 운영
                  </li>
                  <li>
                    <b className="text-gray-900">토스인컴 / 인사이트:</b> 투자
                    및 데이터 분석 관련 서비스
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-sm">
                <strong className="block text-lg mb-4 border-b pb-1 text-gray-800">
                  토스가 사용하는 기술
                </strong>
                <div className="space-y-4">
                  <div>
                    <span className="font-bold block">코어</span>
                    <p className="text-gray-600">React, TypeScript, Next.js</p>
                  </div>
                  <div>
                    <span className="font-bold block">상태 관리</span>
                    <p className="text-gray-600">TanStack Query, Jotai</p>
                  </div>
                  <div>
                    <span className="font-bold block">스타일링</span>
                    <p className="text-gray-600">Emotion</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-bold block">패키지 매니저</span>
                      <p className="text-gray-600">Yarn Berry, PNPM</p>
                    </div>
                    <div>
                      <span className="font-bold block">빌드</span>
                      <p className="text-gray-600">Vite, ESBuild, SWC</p>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold block">CI/CD</span>
                    <p className="text-gray-600">GitHub Actions, CircleCI</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            {/* 기업 헤더 */}
            <div className="flex items-center mb-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 203 114"
                className="w-[100px]"
              >
                <path
                  fill="#FF6F0F"
                  d="M29.234 36.895C13.09 36.895 0 49.695 0 65.856c0 22.328 29.318 34.175 29.234 34.143-.08.032 29.234-11.816 29.234-34.143 0-16.148-13.089-28.96-29.234-28.96Zm0 40.684A11.069 11.069 0 0 1 18.386 64.34a11.073 11.073 0 0 1 15.097-8.061 11.071 11.071 0 0 1 6.83 10.23A11.07 11.07 0 0 1 29.233 77.6v-.02Z"
                ></path>
                <path
                  fill="#00A05B"
                  d="M35.817 0c-6.823 0-11.574 4.768-12.322 10.4-9.094-2.512-16.22 4.4-16.22 12 0 5.82 3.999 10.52 9.33 12.047 4.299 1.228 12.041.312 12.041.312-.04-1.88 1.692-3.944 4.363-5.824 7.599-5.343 13.542-7.863 14.458-15.151C48.427 6.16 42.767 0 35.817 0Z"
                ></path>
                <path
                  fill="#FF6F0F"
                  d="M116.493 46.963c-6.174 1.94-16.864 2.972-26.906 2.972V37.719h20.74v-9.096H78.465v30.975c17.424 0 32.637-2.1 39.06-4.087l-1.032-8.548ZM131.134 25h-11.106v35.611h11.106V49.448h8.958v-9.716h-8.958V25ZM110.506 60.526c-11.765 0-20.396 6.484-20.396 16s8.639 16 20.396 16c11.758 0 20.396-6.488 20.396-16s-8.63-16-20.396-16Zm0 23.092c-5.303 0-9.282-2.544-9.282-7.108s3.979-7.104 9.282-7.104 9.282 2.544 9.282 7.104c0 4.56-3.975 7.108-9.282 7.108ZM161.72 65.251h-11.354v24.091h45.127v-9.535H161.72V65.25ZM194.086 27.972h-44.232v9.535h33.082c0 2.369.112 8-.972 14.4h-40.568v9.864h61.588v-9.848H192.01c1.472-8.088 1.892-14.392 2.076-23.951Z"
                ></path>
              </svg>
            </div>

            {/* 기업 소개 */}
            <div className="leading-relaxed space-y-4 mb-8">
              <p>
                당근은 <strong>'당신 근처'</strong>이라는 슬로건 아래, 지역
                기반의 하이퍼로컬 커뮤니티 서비스를 통해 이웃 간의 연결을
                혁신합니다.
              </p>
              <p>
                중고 거래를 넘어 동네 생활 정보, 알바, 부동산, 중고차 등 지역
                사회에서 발생하는 모든 오프라인 연결을 디지털로 전환하여, 신뢰할
                수 있는 지역 기반 플랫폼을 만드는 것이 당근의 미션입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <strong className="block text-lg mb-4 border-b pb-1 text-gray-800">
                  주요 당근 서비스 및 조직
                </strong>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <b className="text-gray-900">당근 서비스:</b> 중고거래,
                    동네생활, 내 근처 등 하이퍼로컬 플랫폼
                  </li>
                  <li>
                    <b className="text-gray-900">당근 비즈니스:</b> 지역
                    광고주를 위한 로컬 마케팅 시스템
                  </li>
                  <li>
                    <b className="text-gray-900">당근페이:</b> 이웃 간 안전하고
                    간편한 결제 서비스
                  </li>
                  <li>
                    <b className="text-gray-900">당근 알바/부동산/중고차:</b>{" "}
                    지역 밀착형 버티컬 서비스
                  </li>
                  <li>
                    <b className="text-gray-900">글로벌 서비스 (Karrot):</b>{" "}
                    캐나다, 일본 등 글로벌 시장 확장
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-sm">
                <strong className="block text-lg mb-4 border-b pb-1 text-gray-800">
                  당근이 사용하는 기술
                </strong>
                <div className="space-y-4">
                  <div>
                    <span className="font-bold block">코어</span>
                    <p className="text-gray-600">
                      React, TypeScript, Next.js (SSR)
                    </p>
                  </div>
                  <div>
                    <span className="font-bold block">
                      상태 관리 및 데이터 페칭
                    </span>
                    <p className="text-gray-600">TanStack Query, GraphQL</p>
                  </div>
                  <div>
                    <span className="font-bold block">스타일링</span>
                    <p className="text-gray-600">
                      Vanilla Extract (Zero-runtime CSS-in-JS)
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-bold block">실행 환경</span>
                      <p className="text-gray-600">App WebView</p>
                    </div>
                    <div>
                      <span className="font-bold block">빌드 도구</span>
                      <p className="text-gray-600">Webpack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function FuturePlan() {
  return (
    <>
      <div className="mt-[50px]">
        <h3 className="text-h3 font-semibold border-b border-gray-200 mb-2">
          Future Plan
        </h3>
        <div className=" leading-relaxed space-y-4 mb-8">
          <p>
            현재 React와 Next.js를 중심으로 프론트엔드 기술을 학습하고 있으며,
            단순히 문법이나 사용법을 익히는 것에서 끝나는 것이 아니라 내부 동작
            원리를 이해하는 방향으로 공부하고 있습니다. 특히 최근에는 서버
            사이드 렌더링(SSR), hydration, 서버 컴포넌트와 클라이언트 컴포넌트의
            차이와 같은 렌더링 구조에 관심을 가지고 공부하고 있습니다. 또한
            재사용성과 유지보수성을 고려한 컴포넌트 설계 방식, 상태 관리, 사용자
            인터랙션 최적화와 같은 부분도 함께 학습하며 더 나은 사용자 경험을
            만들기 위한 방법을 고민하고 있습니다.
          </p>
          <p>
            앞으로는 단순한 개인 프로젝트를 넘어 실제 사용자의 피드백을 받을 수
            있는 프로젝트를 지속적으로 진행해보고 싶습니다. 현재 진행하고 있는
            프로젝트에서도 사용자 참여율이나 서비스 흐름을 분석하며 개선점을
            찾는 경험을 하고 있으며, 앞으로도 데이터를 기반으로 문제를 발견하고
            해결하는 경험을 더 많이 쌓고자 합니다. 또한 다양한 팀 프로젝트와
            공모전, 개발 동아리 활동 등을 통해 협업 경험과 커뮤니케이션 능력도
            함께 발전시키고 싶습니다.
          </p>
          <p>
            취업 준비 측면에서는 단순히 기술 스택을 많이 사용하는 개발자보다,
            “왜 이 기술을 사용해야 하는가”를 설명할 수 있는 개발자가 되는 것을
            목표로 하고 있습니다. 이를 위해 프로젝트 경험을 꾸준히 기록하고 기술
            블로그를 작성하며, 개발 과정에서 고민했던 내용과 문제 해결 과정을
            정리하는 습관을 만들고 있습니다. 실제로 단순 구현 경험보다 문제를
            어떻게 정의하고 해결했는지가 더 중요하다고 생각하기 때문에, 앞으로도
            다양한 경험을 통해 문제 해결 능력을 키워나갈 계획입니다.
          </p>
          <p>
            장기적으로는 사용자 경험과 기술적 완성도를 함께 고려할 수 있는
            프론트엔드 개발자로 성장하여, 단순히 주어진 기능을 구현하는 사람이
            아니라 서비스의 방향성과 사용자 경험 개선에도 기여할 수 있는
            개발자가 되고 싶습니다. 또한 새로운 기술을 빠르게 받아들이고
            끊임없이 학습하며 성장하는 개발자로 남는 것이 제 목표입니다.
          </p>
        </div>
      </div>
    </>
  );
}
