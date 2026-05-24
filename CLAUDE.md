# OSTI Task Board — Claude 작업 지침

## 프로젝트 개요
과학기술정보통신부 과학기술혁신본부 업무 타임라인 대시보드.
Node.js 정적 서버 + 순수 HTML/CSS/JS (프레임워크 없음).

## 새 컴퓨터에서 시작하는 법
```bash
# 1. 저장소 클론 (처음) 또는 최신화 (이미 있으면)
git clone https://github.com/msitsti2025/task-board.git
# 또는
git pull origin main

# 2. 서버 실행 (Node.js 필요)
node server.js   # http://localhost:4173

# 3. GitHub에 push할 때
git add app.js index.html styles.css server.js tasks.json
git commit -m "설명"
git push origin main
```

## 로컬 서버 로그인
- "로그인" 버튼 클릭 → **팝업 없이 바로 로그인** (비밀번호 불필요)
- 내부적으로 `admin` / `osti2026` 자동 전송

## 주요 파일
| 파일 | 역할 |
|------|------|
| `index.html` | 단일 페이지 UI |
| `app.js` | 전체 프론트엔드 로직 |
| `styles.css` | 스타일 |
| `tasks.json` | 업무 데이터 (서버 저장소) |
| `server.js` | Node.js HTTP 서버, 세션 관리 |
| `.gitignore` | `.claude/`, `node_modules/`, `.DS_Store` 제외 |

## 저장 모드 (storageMode)
| 모드 | 조건 | 설명 |
|------|------|------|
| `"api"` | `node server.js` 실행 중 | 서버 API로 `tasks.json` 저장. 로그인 버튼 클릭 시 팝업 없이 즉시 로그인 |
| `"github"` | `GITHUB_REPO` 설정 + GitHub Pages | PAT 입력 팝업 → GitHub API로 직접 저장 |
| `"local"` | 로컬 파일/localhost, 서버 없음 | localStorage + File System Access API |
| `"readonly"` | GitHub Pages, 로그인 전 | 읽기 전용. 비밀번호 `osti2026` 입력 시 검토 팝업 활성화 |

## GitHub 연동
- 저장소: `https://github.com/msitsti2025/task-board`
- `app.js` 상단 `GITHUB_REPO = "msitsti2025/task-board"` 설정됨
- 직원들이 GitHub Pages에서 PAT로 로그인 → `tasks.json` 직접 수정 가능
- 동시 저장 충돌 시 409 → "페이지를 새로고침한 뒤 다시 저장" 안내 알림

## 데이터 구조 (tasks.json 항목)
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
  "complete": true,
  "content": "업무 내용",
  "milestones": [
    { "id": "ms-uuid", "startDate": "2026-06-01", "endDate": "2026-06-30", "label": "일정명" }
  ]
}
```

## 업무 그룹 (category)
- `science-policy` — 기획/정책/전략수립
- `budget-review` — 예산/투자/심의조정
- `rnd-management` — 평가/제도/정보분석
- `outreach` — 대외/홍보/현장소통

## 소관 목록 (ownerOptions)
혁신본부, 과학기술정책과, 과학기술전략과, 과학기술정책조정과, 전략기술육성과,
연구예산총괄과, 연구개발투자기획과, 공공에너지조정과, 기계정보통신조정과,
생명기초조정과, 성과평가정책과, 연구평가혁신과, 연구제도혁신과,
연구윤리권익보호과, 과학기술정보분석과, 연구개발타당성심사팀

## 주요 기능 (구현 완료)
- 타임라인 렌더링 (카테고리별 그룹, 드래그로 날짜 조정)
- 업무 수정 에디터 (로그인 후 활성화, 상단 kicker 레이블 없음)
- **주요일정 (milestones)**:
  - `startDate === endDate`: 원형 마커
  - `startDate ≠ endDate`: 범위 선 (양끝 작은 검은 원)
  - 미래 일정: 실선이되 흐리게 (opacity 0.3)
  - 레이블: 첫 번째는 아래, 이후 위/아래 교차. 선 위치와 레이블 위치 일치
  - 2025-07-01 이전 마일스톤은 타임라인에 표시 안 함
- **인쇄**: "인쇄" 버튼 → A4 PDF (표지 + 목차 + 업무그룹별 챕터)
- **마크다운 내보내기/가져오기**: 에디터의 "내려받기"/"업로드" 버튼
- **공개 여부** / **완료 여부** 체크박스 (미완료 시 흐리게 표시)
- **로그인/로그아웃**: 페이지 우측 상단 (hero 배너 바깥) 텍스트 버튼

## 알려진 사항
- git 저장소로 초기화됨 (remote: `https://github.com/msitsti2025/task-board.git`)
- 타임라인 시작/종료 범위: `app.js` 상단 `timelineStart`, `timelineEnd` 변수
- `login-panel[hidden] { display: none }` CSS 필수 — `display:flex`가 `hidden` 속성을 덮어씌우기 때문
- `CLAUDE.md`와 `dashboard.html`은 GitHub에 올리지 않음 (`.gitignore` 추가 고려)
