export default function TechStack() {
  const technologies = [
    {
      name: 'Next.js',
      description: '최신 React 프레임워크',
      color: 'bg-black text-white',
    },
    {
      name: 'Supabase',
      description: '오픈소스 백엔드 플랫폼',
      color: 'bg-green-600 text-white',
    },
    {
      name: 'OpenAI',
      description: 'AI 분석 엔진',
      color: 'bg-gray-800 text-white',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          강력한 기술로 만들어졌습니다
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          최신 웹 기술과 AI를 결합해 빠르고 안정적인 서비스를 제공합니다
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div
                className={`${tech.color} rounded-lg py-4 px-6 mb-4 inline-block font-bold text-lg`}
              >
                {tech.name}
              </div>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

