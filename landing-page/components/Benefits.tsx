export default function Benefits() {
  const beforeItems = [
    '수동 타임스탬프 기록',
    '메모 앱에 별도 정리',
    '다시 찾기 어려움',
    '루틴 붕괴로 포기',
  ]

  const afterItems = [
    '자동 하이라이트 생성',
    '자동 저장 및 구조화',
    '5초 안에 원하는 구간 찾기',
    '지속 가능한 학습 루틴',
  ]

  const metrics = [
    { label: '학습 사이클 단축', value: '70%' },
    { label: '검색 성공률', value: '80%+' },
    { label: '수동 정리 제거', value: '100%' },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          이렇게 달라집니다
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          기존 방식과 비교해보세요
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700">
              Before (기존 방식)
            </h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gray-500 text-xl">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary text-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">After (우리 서비스)</h3>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

