export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            유튜브 영상, 이제{' '}
            <span className="text-primary">검색 가능하게</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            본 영상의 그 부분, 5초 안에 찾기
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            AI가 자동으로 요약하고, 하이라이트하고, 검색 가능하게 만듭니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              베타 테스트 참여하기
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-gray-50 text-primary font-semibold py-4 px-8 rounded-lg text-lg border-2 border-primary transition-colors"
            >
              더 알아보기
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">서비스 UI 미리보기</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

