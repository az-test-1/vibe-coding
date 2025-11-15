export default function Problem() {
  const problems = [
    {
      icon: '🤔',
      text: '어디서 본 내용인지 기억이 안 나요',
    },
    {
      icon: '⏰',
      text: '타임스탬프를 수동으로 기록하기 너무 번거로워요',
    },
    {
      icon: '📝',
      text: '메모/북마크를 해도 결국 다시 찾는 데 실패해요',
    },
    {
      icon: '🔍',
      text: '영상은 텍스트처럼 검색이 안 되죠',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          이런 경험 있으신가요?
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          학습→정리→복습 사이클이 평균 70% 더 오래 걸립니다
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{problem.icon}</span>
                <p className="text-xl font-medium flex-1">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

