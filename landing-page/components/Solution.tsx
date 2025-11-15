export default function Solution() {
  const features = [
    {
      icon: '📝',
      title: '자동 요약',
      description: 'OpenAI가 영상 전체를 분석해 핵심 내용을 요약합니다',
    },
    {
      icon: '⏱️',
      title: '자동 하이라이트',
      description: '의미 단위로 구간을 나누고 타임스탬프를 자동 생성합니다',
    },
    {
      icon: '🔍',
      title: '검색 가능',
      description: '키워드, 문장, 질문으로 원하는 구간을 즉시 찾습니다',
    },
    {
      icon: '💾',
      title: '개인 지식 저장소',
      description: '본 날짜, 핵심 문장, 메모가 자동으로 저장됩니다',
    },
    {
      icon: '▶️',
      title: '즉시 재생',
      description: '검색 결과를 클릭하면 해당 구간으로 바로 이동합니다',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          AI가 자동으로 처리합니다
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          복잡한 작업은 모두 AI가 대신합니다
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

