"use client";

import { layout, prepare } from "@chenglou/pretext";
import { useLayoutEffect, useRef, useState } from "react";

const BODY_FONT = "400 16px Inter, ui-sans-serif, system-ui, sans-serif";
const BODY_LINE_HEIGHT = 24;
const PARAGRAPH_GAP = 4;

type Activity = {
  title: string;
  subtitle: string;
  paragraphs: string[];
};

const ACTIVITIES: Activity[] = [
  {
    title: "9oormthonUniv 구름톤 유니브 연합 동아리 3기 | Front-end",
    subtitle: "📌 카카오와 Goorm이 주관한 전국 대학 IT 연합 동아리",
    paragraphs: [
      "해커톤에서 프로젝트 경험이 부족한 팀원들을 대신해 프론트엔드 개발을 리드하며, 함께 고민하고 해결 방안을 제시하며 팀 전체의 성장에 기여할 수 있었습니다.",
      "짧은 시간 몰입해 목표를 이루는 경험을 할 수 있었습니다. 기획자와 디자이너, 개발자가 함께 작업 하며 협업에 대해 많은 것을 배울 수 있었습니다.",
    ],
  },
  {
    title: "DND 12기 | Front-end",
    subtitle: "📌 8주간 개발자와 디자이너가 협업하는 사이드 프로젝트",
    paragraphs: [
      "개발자와 디자이너로만 팀을 이뤄 리서치부터 서비스 기획, 개발까지 빠짐없이 의견을 내며 더 넓은 시야를 가질 수 있었습니다.",
      "코드 리뷰를 통해, 내가 아는 것을 공유하고, 몰랐던 것을 배우며 스스로 더 좋은 코드를 만들기 위해 고민하는 즐거움을 느낄 수 있었습니다.",
      "또한, 기획부터 개발까지 모두 수행해야 하는 짧은 일정 속에서 MVP 중심으로 우선순위를 정하고 집중적으로 개발하는 역량을 키울 수 있었습니다.",
    ],
  },
  {
    title: "멋쟁이 사자처럼 대학 14기 공주대학교 대표",
    subtitle:
      "📌 122개 대학, 12,000명 이상이 활동한 국내 최대 규모의 AI/IT 동아리",
    paragraphs: [
      "멋쟁이 사자처럼 대학 14기 공주대학교 대표로써, 아기사자(동아리원)들이 성장할 수 있는 환경을 만들고, 학교 멋대를 하나의 커뮤니티로 만들어가는 역할을 수행하고 있습니다.",
      "충남권 대학들과 함께 해커톤을 진행 예정에 있으며, 아기사자들의 개발 역량 향상에 기여할 수 있도록 도와주고 있습니다.",
    ],
  },
  {
    title: "Yapp 28기 | Front-end",
    subtitle:
      "📌 Your own idea can change the Actual world at anytime with Passion and Potential 의 약자로, 기획자, 디자이너, 개발자가 함께 서비스를 만들고 운영하며 성장하는 동아리 동아리",
    paragraphs: [
      "실제 사용자 문제를 해결하는 서비스를 목표로, 기획 단계부터 적극적으로 의견을 제안하며 프론트엔드 개발뿐 아니라 프로덕트 관점에서도 고민하는 경험을 하고 있습니다.",
      "다양한 직군의 팀원들과 협업하며 기술적인 완성도뿐 아니라 사용자 경험과 서비스 운영까지 함께 고려하는 개발 역량을 키우고 있습니다.",
      "또한, 빠르게 MVP를 구현하고 사용자 피드백을 반영하는 과정을 통해 문제를 정의하고 개선하는 실전 중심의 협업 방식을 배우고 있습니다.",
    ],
  },
];

function measureParagraphsHeight(paragraphs: string[], width: number) {
  return paragraphs.reduce((total, paragraph, index) => {
    const prepared = prepare(paragraph, BODY_FONT);
    const { height } = layout(prepared, width, BODY_LINE_HEIGHT);
    const gap = index > 0 ? PARAGRAPH_GAP : 0;
    return total + gap + height;
  }, 0);
}

function ActivityItem({
  activity,
  index,
  isOpen,
  onToggle,
}: {
  activity: Activity;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const panelId = `activity-panel-${index}`;

  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const measure = () => {
      const width = el.offsetWidth;
      if (width <= 0) return;
      setContentHeight(measureParagraphsHeight(activity.paragraphs, width));
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [activity.paragraphs]);

  return (
    <li className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 py-4 text-left"
      >
        <span className="flex flex-col gap-1">
          <strong>{activity.title}</strong>
          <span className="text-sm font-normal text-[gray]">
            {activity.subtitle}
          </span>
        </span>
        <span
          className={`mt-1 shrink-0 text-sm text-[gray] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          ▼
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
        className="overflow-hidden transition-[height] duration-300 ease-out"
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        <div ref={panelRef} className="flex flex-col gap-[4px] pb-4">
          {activity.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function ActivitiesAccordion() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set([0]),
  );

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <ul className="flex flex-col">
      {ACTIVITIES.map((activity, index) => (
        <ActivityItem
          key={activity.title}
          index={index}
          activity={activity}
          isOpen={openIndices.has(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </ul>
  );
}
