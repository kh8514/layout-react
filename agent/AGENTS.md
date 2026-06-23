# 사내 React 레이아웃 라이브러리 - AI 에이전트 메모리

> 이 파일은 AI에게 프로젝트 컨텍스트를 제공합니다.
> 새로운 작업을 시작할 때 항상 이 파일을 참고하세요.

---

## 📋 프로젝트 개요

- **이름**: 사내 React 레이아웃 라이브러리 (Internal Layout Library)
- **목적**: 팀원들이 재사용 가능한 React 레이아웃을 미리보고 코드를 복사할 수 있는 사내 플랫폼
- **언어**: 한국어 (UI, 주석, 문서)
- **사용자**: 사내 개발팀

## 🛠️ 기술 스택

| 영역             | 기술                       | 버전     |
|----------------|--------------------------|--------|
| Framework      | React                    | 18+    |
| Build Tool     | Vite                     | latest |
| Styling        | Tailwind CSS             | 3.4    |
| Routing        | react-router-dom         | 6+     |
| Icons          | lucide-react             | latest |
| Code Highlight | react-syntax-highlighter | latest |
| Language       | JavaScript (ES6+)        | -      |
| client status  | Zustand                  | latest |

> ⚠️ **TypeScript 사용 안 함** - 단순함을 위해 JS만 사용

---

## 📁 폴더 구조

```
layout-library/
├── src/
│   ├── components/         # 공통 컴포넌트 (재사용)
│   │   ├── AppLayout.jsx
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── LayoutPreview.jsx
│   │   ├── CodeBlock.jsx
│   │   └── LayoutCard.jsx
│   ├── layouts/            # 샘플 레이아웃 JSX 모음
│   │   ├── HeaderLayouts/
│   │   ├── SidebarLayouts/
│   │   ├── CardLayouts/
│   │   └── FormLayouts/
│   ├── pages/              # 라우트 페이지
│   │   ├── HomePage.jsx
│   │   ├── LayoutDetailPage.jsx
│   │   ├── CategoryPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── data/               # 레이아웃 메타데이터
│   │   └── layouts.js
│   ├── utils/              # 유틸리티 함수
│   │   ├── clipboard.js    # 코드 복사
│   │   └── search.js       # 검색 필터링
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── agent/                  # AI 에이전트 파일
    ├── prd.json
    ├── AGENTS.md
    └── progress.md
```

---

## 🎨 코딩 컨벤션

### 컴포넌트 명명
- **PascalCase**: `HeaderLayout.jsx`, `LayoutCard.jsx`
- **파일명 = 컴포넌트명**
- 함수형 컴포넌트만 사용 (Class 컴포넌트 ❌)

### 컴포넌트 작성 패턴
```jsx
// ✅ 좋은 예
import { useState } from 'react';
import { Copy } from 'lucide-react';

function CodeBlock({ code, language = 'jsx' }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="relative">
      {/* JSX */}
    </div>
  );
}

export default CodeBlock;
```

### 스타일링 규칙
- **Tailwind CSS 우선 사용**
- 인라인 스타일 사용 금지 (특별한 경우 제외)
- 별도 CSS 파일 만들지 않기 (index.css 제외)

```jsx
// ✅ 좋은 예
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">

// ❌ 나쁜 예
<div style={{ display: 'flex', padding: '24px' }}>
```

### 상태 관리
- **useState, useEffect 위주**
- 전역 상태 관리 라이브러리 사용 안 함 (Redux, Zustand ❌)
- props drilling이 심해지면 Context API 고려

### 라우팅
- `react-router-dom` v6 사용
- `<Link>` 컴포넌트로 이동 (a 태그 ❌)
- URL 파라미터: `useParams()` 사용

```jsx
// ✅ 좋은 예
import { Link, useParams } from 'react-router-dom';

function LayoutDetailPage() {
  const { id } = useParams();
  return <Link to="/">홈으로</Link>;
}
```

---

## 🎯 디자인 시스템

### 색상 (Tailwind)
- **Primary**: `blue-600` (메인 색상)
- **Background**: `gray-50` (전체 배경)
- **Surface**: `white` (카드 배경)
- **Text**: `gray-900` (본문), `gray-600` (보조)
- **Border**: `gray-200`
- **Hover**: `gray-100`

### 간격
- **Container 패딩**: `p-6` (24px)
- **컴포넌트 간격**: `gap-4` (16px) 또는 `gap-6` (24px)
- **요소 간격**: `space-y-4` (16px)

### 반응형 브레이크포인트
```jsx
// 모바일 우선
className="text-sm md:text-base lg:text-lg"

// 그리드
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 숨김/표시
className="hidden md:block"  // 모바일에서 숨김
```

### 컴포넌트 크기
- **Header**: `h-16` (64px)
- **Sidebar**: `w-64` (256px)
- **Card**: `rounded-lg shadow-sm hover:shadow-md`
- **Button**: `px-4 py-2 rounded-md`

---

## 📦 레이아웃 데이터 구조

`src/data/layouts.js`의 객체 형식:

```javascript
{
  id: 'header-01',                    // 고유 ID
  name: '기본 헤더',                   // 표시 이름
  category: 'navigation',              // navigation | content | form | card
  description: '로고와 메뉴가 있는 기본 헤더',
  tags: ['header', 'navigation', '반응형'],
  jsx: `<header>...</header>`,        // JSX 코드 (문자열)
  html: `<header>...</header>`,       // HTML 버전
  css: `.header { ... }`,             // CSS (Tailwind 미사용 시)
  preview: 'header-01.png',           // (선택) 미리보기 이미지
  createdAt: '2024-01-15'
}
```

### 카테고리 종류
- `navigation`: Header, Navbar, Sidebar
- `content`: Hero, Content sections
- `form`: 로그인, 회원가입 폼
- `card`: 프로필, 상품 카드

---

## ⚠️ 주의사항 (Gotchas)

### 1. Tailwind JIT 모드
- 동적 클래스 사용 시 컴파일되지 않음
- ❌ `className={`bg-${color}-500`}`
- ✅ `className={color === 'red' ? 'bg-red-500' : 'bg-blue-500'}`

### 2. React Router v6
- `<Switch>` 대신 `<Routes>` 사용
- `<Route exact>` 더 이상 사용 안 함
- `useHistory` 대신 `useNavigate` 사용

### 3. Vite 환경변수
- `VITE_` 접두사 필수 (예: `VITE_API_URL`)
- `import.meta.env.VITE_XXX` 로 접근

### 4. 코드 문자열 처리
- 레이아웃 JSX는 **문자열**로 저장
- 화면에 표시할 때는 그대로 보여줌 (eval ❌)
- 미리보기는 별도 컴포넌트로 렌더링

### 5. 한국어 처리
- 모든 UI 텍스트는 한국어
- 변수명/함수명은 영어
- 주석은 한국어 OK

---

## 🧪 테스트 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드 확인
npm run build

# 빌드 결과 미리보기
npm run preview

# Lint 체크 (있는 경우)
npm run lint
```

### 수동 테스트 체크리스트
- [ ] 데스크톱 (1920px) 정상 표시
- [ ] 태블릿 (768px) 정상 표시
- [ ] 모바일 (375px) 정상 표시
- [ ] 모든 링크 작동
- [ ] 코드 복사 작동
- [ ] 검색 기능 작동

---

## 📈 학습 내용 (Learnings)

> 작업하면서 발견한 패턴이나 실수를 여기에 추가하세요.
> AI가 다음 작업에서 같은 실수를 반복하지 않도록 합니다.

### 2024-XX-XX: 시작 단계
- (작업 진행하면서 채워질 예정)

### Task 1: 폴더 구조 설계
- 리포 스캐폴드가 TypeScript(tsconfig, .tsx)로 시작되어 있어 본 문서의 "JS만 사용" 방침과 충돌. 사용자 확인 결과 AGENTS.md 기준(.jsx/.js)을 따르기로 결정.
- `tsconfig.app.json`에 `allowJs`가 없어 `.js`/`.jsx`는 tsc 타입체크 대상에서 제외됨 — `tsc -b`가 깨지지 않음. Vite는 `.jsx` 확장자를 기본 지원.
- src/components, src/layouts, src/pages, src/data, src/utils 폴더를 README.md 플레이스홀더로 생성. `npm run build` 통과 확인.

---

## 🚀 작업 시작 시 체크리스트

새 작업을 AI에게 요청할 때:

1. ✅ **prd.json에서 해당 task의 acceptanceCriteria 확인**
2. ✅ **AGENTS.md의 규칙 따르기 요청**
3. ✅ **기존 컴포넌트 패턴 참고 요청**
4. ✅ **Tailwind 사용, 인라인 스타일 금지**
5. ✅ **한국어 UI, 영어 변수명**

### Claude.ai에 보낼 프롬프트 템플릿
```
다음 작업을 해주세요:

[작업 정보]
- Task ID: #{id}
- 제목: {title}
- 설명: {description}

[수락 기준]
{acceptanceCriteria 목록}

[규칙]
- AGENTS.md의 코딩 컨벤션을 반드시 따라주세요
- Tailwind CSS 사용 (인라인 스타일 금지)
- 함수형 컴포넌트만 사용
- UI는 한국어, 변수명은 영어
- 기존 폴더 구조에 맞게 파일 생성

[참고 - 기존 코드]
(필요시 기존 컴포넌트 코드 첨부)
```

---

## 🔄 워크플로우

```
1. prd.json에서 다음 작업 선택
   ↓
2. Claude.ai에 작업 요청 (위 템플릿 사용)
   ↓
3. 받은 코드 IDE에 적용
   ↓
4. npm run dev로 동작 확인
   ↓
5. 잘 되면 Git 커밋
   ↓
6. prd.json의 passes: true로 변경
   ↓
7. AGENTS.md의 "학습 내용"에 메모 추가
   ↓
8. 다음 작업으로!
```
