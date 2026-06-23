// 패턴(B방식, Task 0 준수): Preview가 원본, code.jsx/html/css는 표시 전용 문자열.

function Preview() {
  return (
    <div className="w-72 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
      <h3 className="text-base font-semibold text-gray-900">프로필 카드</h3>
      <p className="mt-1 text-sm text-gray-600">팀원 소개와 역할을 보여주는 카드입니다.</p>
    </div>
  )
}

const cardBasic = {
  id: 'card-01',
  name: '기본 카드',
  category: 'card',
  description: '제목과 설명이 있는 기본 카드',
  tags: ['card', 'profile'],
  Preview,
  code: {
    jsx: `<div className="w-72 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
  <h3 className="text-base font-semibold text-gray-900">프로필 카드</h3>
  <p className="mt-1 text-sm text-gray-600">팀원 소개와 역할을 보여주는 카드입니다.</p>
</div>`,
    html: `<div class="w-72 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md">
  <h3 class="text-base font-semibold text-gray-900">프로필 카드</h3>
  <p class="mt-1 text-sm text-gray-600">팀원 소개와 역할을 보여주는 카드입니다.</p>
</div>`,
    css: '/* Tailwind 유틸리티 클래스만 사용 — 별도 CSS 없음 */',
  },
}

export default cardBasic
