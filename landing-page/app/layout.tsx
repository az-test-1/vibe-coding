import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://az-test-1.github.io/vibe-coding'),
  title: 'YouTube 러닝 세컨드 브레인 - 영상을 검색 가능하게',
  description: 'AI가 유튜브 영상을 자동으로 요약하고 하이라이트해 검색 가능하게 만듭니다. 학습 효율을 70% 높이세요.',
  keywords: '유튜브 학습, 영상 요약, AI 요약, 지식 관리, 세컨드 브레인',
  openGraph: {
    title: 'YouTube 러닝 세컨드 브레인 - 영상을 검색 가능하게',
    description: 'AI가 유튜브 영상을 자동으로 요약하고 하이라이트해 검색 가능하게 만듭니다.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

