'use client'

import { useState } from 'react'

export default function Features() {
  const [activeTab, setActiveTab] = useState<'p0' | 'p1'>('p0')

  const p0Features = [
    'YouTube URL 입력 → 자동 요약/하이라이트 생성',
    '의미 단위 타임스탬프 자동 생성',
    '텍스트·구간 기반 검색 기능',
    '본 날짜/구간별 메모 자동 저장',
    '키워드 기반 재검색 → 해당 구간 즉시 재생',
  ]

  const p1Features = [
    'Notion/Obsidian 자동 페이지 생성 Export',
    '개인별 반복 시청 구간 자동 추출',
    '"나중에 다시 보기" AI 추천',
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          주요 기능
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          지금 사용 가능한 기능과 곧 출시될 기능을 확인하세요
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('p0')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'p0'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              MVP 필수 기능
            </button>
            <button
              onClick={() => setActiveTab('p1')}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === 'p1'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              곧 출시 예정
            </button>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            {activeTab === 'p0' && (
              <ul className="space-y-4">
                {p0Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'p1' && (
              <ul className="space-y-4">
                {p1Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary text-xl mt-1">⏳</span>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

