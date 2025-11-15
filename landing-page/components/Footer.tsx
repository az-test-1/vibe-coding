export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">YouTube 러닝 세컨드 브레인</h3>
            <p className="text-gray-400">
              AI가 유튜브 영상을 자동으로 구조화하고 검색 가능하게 만듭니다
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">링크</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://github.com/az-test-1/vibe-coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  문서
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">문의</h4>
            <p className="text-gray-400">
              GitHub Issues를 통해 문의해주세요
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 YouTube 러닝 세컨드 브레인. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

