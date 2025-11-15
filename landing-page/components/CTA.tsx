'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 이메일 수집 로직 구현
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section id="cta" className="py-20 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            베타 테스트에 참여하고 먼저 경험해보세요
          </p>
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors whitespace-nowrap"
                >
                  {submitted ? '신청 완료!' : '베타 테스트 신청하기'}
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-600 mt-4">
              30명 베타 사용자 모집 중 · 무료로 사용 가능합니다
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

