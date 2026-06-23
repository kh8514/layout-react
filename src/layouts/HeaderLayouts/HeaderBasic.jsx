// 패턴(B방식, Task 0): Preview는 실제로 렌더링되는 원본 컴포넌트이고,
// code.jsx/html/css는 화면에 "보여주기 위한" 문자열일 뿐입니다(eval 금지).
// 이 파일을 고칠 때는 Preview 마크업과 code 문자열을 함께 갱신해서
// 항상 의미상 동일하게 유지하세요(단일 출처 원칙).

function Preview() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <span className="text-lg font-semibold text-gray-900">Logo</span>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">홈</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">소개</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">문의</a>
      </nav>
    </header>
  )
}

const headerBasic = {
  id: 'header-01',
  name: '기본 헤더',
  category: 'navigation',
  description: '로고와 내비게이션 링크가 있는 기본 헤더',
  tags: ['header', 'navigation', '반응형'],
  Preview,
  code: {
    jsx: `<header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
  <span className="text-lg font-semibold text-gray-900">Logo</span>
  <nav className="flex items-center gap-6">
    <a href="#" className="text-gray-600 hover:text-gray-900">홈</a>
    <a href="#" className="text-gray-600 hover:text-gray-900">소개</a>
    <a href="#" className="text-gray-600 hover:text-gray-900">문의</a>
  </nav>
</header>`,
    html: `<header class="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
  <span class="text-lg font-semibold text-gray-900">Logo</span>
  <nav class="flex items-center gap-6">
    <a href="#" class="text-gray-600 hover:text-gray-900">홈</a>
    <a href="#" class="text-gray-600 hover:text-gray-900">소개</a>
    <a href="#" class="text-gray-600 hover:text-gray-900">문의</a>
  </nav>
</header>`,
    css: '/* Tailwind 유틸리티 클래스만 사용 — 별도 CSS 없음 */',
  },
}

export default headerBasic
