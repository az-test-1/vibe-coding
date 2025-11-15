export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'YouTube URL 입력',
      description: '복사한 영상 링크를 붙여넣으세요',
      icon: '🔗',
    },
    {
      number: '2',
      title: 'AI 자동 분석',
      description: 'AI가 transcript를 분석해 요약, 하이라이트, 키워드를 생성합니다',
      icon: '🤖',
    },
    {
      number: '3',
      title: '검색하고 재학습',
      description: '원하는 내용을 검색하고 해당 구간을 바로 재생하세요',
      icon: '🎯',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          3단계로 시작하세요
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          간단한 과정으로 영상 학습을 완전히 바꿔보세요
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-primary z-0 transform translate-x-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
              <div className="bg-white rounded-lg p-8 shadow-lg relative z-10 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <div className="text-5xl mb-4 text-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

