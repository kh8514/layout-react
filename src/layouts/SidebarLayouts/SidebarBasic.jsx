// 패턴(B방식, Task 0 준수): Preview가 원본, code.jsx/html/css는 표시 전용 문자열.

function Preview() {
  return (
    <aside className="flex h-full w-64 flex-col gap-1 border-r border-gray-200 bg-white p-4">
      <a href="#" className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900">홈</a>
      <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">레이아웃</a>
      <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">설정</a>
    </aside>
  )
}

const sidebarBasic = {
  id: 'sidebar-01',
  name: '기본 사이드바',
  category: 'navigation',
  description: '메뉴 항목이 있는 기본 사이드바',
  tags: ['sidebar', 'navigation'],
  Preview,
  code: {
    jsx: `<aside className="flex h-full w-64 flex-col gap-1 border-r border-gray-200 bg-white p-4">
  <a href="#" className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900">홈</a>
  <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">레이아웃</a>
  <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">설정</a>
</aside>`,
    html: `<aside class="flex h-full w-64 flex-col gap-1 border-r border-gray-200 bg-white p-4">
  <a href="#" class="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900">홈</a>
  <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">레이아웃</a>
  <a href="#" class="rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">설정</a>
</aside>`,
    css: '/* Tailwind 유틸리티 클래스만 사용 — 별도 CSS 없음 */',
  },
}

export default sidebarBasic
