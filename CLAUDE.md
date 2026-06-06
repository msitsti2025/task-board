# OSTI Task Board — Claude 작업 지침

## 프로젝트 개요
과학기술정보통신부 과학기술혁신본부 업무 타임라인 대시보드.
Node.js 정적 서버 + 순수 HTML/CSS/JS (프레임워크 없음).

---

## 새 컴퓨터에서 시작하는 법

로컬 폴더는 Synology Drive로 자동 동기화됨. 클론 불필요.

```bash
# 1. 작업 브랜치 확인 (항상 develop에서 작업)
cd ~/SynologyDrive/Drive/MSIT/osti-task-board
git checkout develop
git status

# 2. GitHub 최신 코드 반영
git pull origin develop

# 3. 직원들이 GitHub Pages에서 업무를 수정했다면 tasks.json 동기화
git fetch origin && git checkout origin/main -- tasks.json

# 4. 서버 실행 (Node.js 필요)
node server.js   # http://localhost:4173

# 5. 로그인: "로그인" 버튼 클릭 → 팝업 없이 즉시 로그인 (비밀번호 불필요)
```

---

## 브랜치 전략

| 브랜치 | 역할 | GitHub Pages |
|--------|------|:------------:|
| `develop` | 개발·수정 작업 (CLAUDE.md 포함) | ❌ |
| `main` | OSTI 운영 버전 (settings.json, tasks.json 포함) | ✅ |
| `release` | 신규 사용자 배포용 (샘플 데이터, README) | ❌ |

### push 규칙
- **코드 변경(app.js, index.html, styles.css, server.js)**: develop 커밋 후 main·release에도 반영
- **tasks.json**: main에서 직원 PAT 저장으로 자동 업데이트됨. develop에서 수동 동기화 필요
- **settings.json**: gitignore 대상이지만 main에는 force-add로 추적

```bash
# develop 커밋·push
git add app.js index.html styles.css server.js
git commit -m "설명"
git push origin develop

# 코드를 main에도 반영 (tasks.json·settings.json은 건드리지 않음)
git checkout main
git checkout develop -- app.js index.html styles.css server.js
git commit -m "설명"
git pull origin main --rebase
git push origin main

# 코드를 release에도 반영
git checkout release
git checkout develop -- app.js index.html styles.css server.js
git commit -m "설명"
git push origin release

git checkout develop  # 항상 develop으로 돌아오기

# settings.json을 main에 push할 때 (force-add 필요)
git checkout main
git add -f settings.json
git commit -m "settings.json 업데이트"
git push origin main
git checkout develop
```

---

## 주요 파일

| 파일 | 역할 | develop | main | release |
|------|------|:-------:|:----:|:-------:|
| `index.html` | 단일 페이지 UI | ✅ | ✅ | ✅ |
| `app.js` | 전체 프론트엔드 로직 | ✅ | ✅ | ✅ |
| `styles.css` | 스타일 | ✅ | ✅ | ✅ |
| `server.js` | Node.js HTTP 서버 | ✅ | ✅ | ✅ |
| `tasks.json` | 업무 데이터 | ✅ (동기화) | ✅ (실운영) | ✅ (샘플) |
| `settings.json` | 설정 (gitignore) | ❌ | ✅ (force-add) | ❌ |
| `README.md` | 사용법 | ✅ | ❌ | ✅ |
| `CLAUDE.md` | 이 파일 | ✅ | ❌ | ❌ |

---

## 저장 모드 (storageMode)

| 모드 | 조건 | 설명 |
|------|------|------|
| `"api"` | `node server.js` 실행 중 | 서버 API로 저장. 로그인 즉시 (비밀번호 불필요) |
| `"github"` | GitHub Pages + PAT 로그인 | PAT 입력 → GitHub API로 tasks.json 직접 저장 |
| `"local"` | localhost, 서버 없음 | localStorage + File System Access API |
| `"readonly"` | GitHub Pages, 로그인 전 | 읽기 전용 |

---

## 설정 시스템

- **설정 버튼**: `api` 모드(로컬 서버)에서 로그인 후에만 표시됨 (관리자 전용)
- **저장 위치**: `settings.json` (api 모드 → 서버 파일, 폴백 → localStorage)
- **설정 항목**: 회사명, 조직명, 현황판명, 타임라인 시작·종료일, 업무그룹, 소관
- **초기화 버튼**: 설정을 일반 기본값으로 리셋, tasks.json도 샘플 1개로 초기화
- **소관 목록**: settings.json의 `owners` 배열에서 동적으로 로드 (하드코딩 없음)

### DEFAULT_SETTINGS (app.js 상단)
```js
company: "회사명"
organization: "조직명"
dashboardTitle: "현황판명"
timelineStart: "2025-06-16"
timelineEnd: "2027-06-15"
categories: [{ id: "group-1", label: "업무그룹 1", color: "#2563eb" }]
owners: ["부서 1"]
```

---

## 데이터 구조

### tasks.json 항목
```json
{
  "id": "task-uuid",
  "category": "science-policy",
  "title": "업무명",
  "owner": "과학기술정책과",
  "manager": "담당자명",
  "start": "2026-05-01",
  "end": "2026-09-30",
  "visible": true,
  "complete": false,
  "tentative": false,
  "content": "업무 내용",
  "milestones": [
    { "id": "ms-uuid", "startDate": "2026-06-01", "endDate": "2026-06-30", "label": "일정명" }
  ]
}
```

### settings.json 구조
```json
{
  "company": "과학기술정보통신부",
  "organization": "과학기술혁신본부",
  "dashboardTitle": "한눈에 보는 과학기술혁신본부 업무 추진 현황",
  "timelineStart": "2025-06-16",
  "timelineEnd": "2027-06-15",
  "categories": [
    { "id": "science-policy", "label": "기획/정책/전략수립 업무", "color": "#2563eb" }
  ],
  "owners": ["혁신본부", "과학기술정책과", "..."]
}
```

---

## OSTI 업무그룹 (main 브랜치 기준)
- `science-policy` — 기획/정책/전략수립 업무
- `budget-review` — 예산/투자/심의조정 업무
- `rnd-management` — 평가/제도/정보분석 업무
- `outreach` — 대외/홍보/현장소통 업무

---

## GitHub 연동
- 저장소: `https://github.com/msitsti2025/task-board`
- `app.js` 상단 `GITHUB_REPO = "msitsti2025/task-board"` 설정됨
- 직원들이 GitHub Pages에서 PAT로 로그인 → `tasks.json` 직접 수정 가능 (설정은 불가)
- 동시 저장 충돌 시 409 → "페이지를 새로고침한 뒤 다시 저장" 안내 알림

---

## 주요 기능 (구현 완료)
- 타임라인 렌더링 (카테고리별 그룹, 드래그로 날짜 조정)
- 업무 수정 에디터 (로그인 후 활성화)
- **주요일정 (milestones)**:
  - `startDate === endDate`: 원형 마커
  - `startDate ≠ endDate`: 범위 선 (양끝 작은 검은 원)
  - 미래 일정: 실선이되 흐리게 (opacity 0.3)
  - 레이블: 첫 번째는 아래, 이후 위/아래 교차
- **설정 패널**: 관리자 전용 (api 모드), 초기화 버튼 포함
- **인쇄**: A4 PDF (표지 + 목차 + 업무그룹별 챕터)
- **마크다운 내보내기/가져오기**: 에디터의 "내려받기"/"업로드" 버튼
- **공개 여부** / **완료 여부** 체크박스

---

## 알려진 사항
- `login-panel[hidden] { display: none }` CSS 필수 — `display:flex`가 `hidden`을 덮어씌우기 때문
- `settings-panel[hidden] { display: none }` 동일 이유로 필수
- `normalizeCategory()`: settings 로드 전 호출되므로 알 수 없는 category ID는 보존
- `ministry` → `company` 명칭 변경됨. 이전 settings.json의 `ministry` 키는 자동 마이그레이션
- `CLAUDE.md`, `dashboard.html`은 develop에만 존재 (gitignore 처리)
