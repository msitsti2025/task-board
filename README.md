# 업무 타임라인 대시보드

부처·기관의 업무 추진 현황을 한눈에 보여주는 타임라인 대시보드입니다.  
순수 HTML/CSS/JavaScript로 구성되어 있어 별도의 프레임워크나 빌드 도구 없이 바로 사용할 수 있습니다.

---

## 빠른 시작

### 1. 저장소 받기
```bash
git clone https://github.com/msitsti2025/task-board.git
cd task-board
```

### 2. 서버 실행 (Node.js 18 이상 필요)
```bash
node server.js
```
브라우저에서 `http://localhost:4173` 접속

### 3. 우리 기관에 맞게 설정하기
1. 브라우저에서 우측 상단 **로그인** 클릭
2. **설정** 클릭
3. 아래 항목을 수정 후 **저장**

| 항목 | 설명 | 기본값 |
|------|------|--------|
| 부처명 (회사명) | 기관 상위 조직명 | 과학기술정보통신부 |
| 조직명 | 대시보드를 운영하는 조직명 | 과학기술혁신본부 |
| 대시보드명 | 화면 상단에 표시되는 제목 | 한눈에 보는 과학기술혁신본부 업무 추진 현황 |
| 업무그룹 | 업무를 분류하는 카테고리 (추가/삭제 가능) | 기획/정책, 예산/투자, 평가/제도, 대외/홍보 |

설정은 `settings.json` 파일에 저장됩니다.

---

## 기능 소개

- **타임라인**: 업무 기간을 막대로 표시, 드래그로 날짜 조정
- **주요일정**: 마일스톤 및 기간 일정 표시 (원형 마커, 범위 선)
- **업무 편집**: 로그인 후 업무 추가·수정·삭제
- **필터**: 업무그룹별 필터, 검색
- **인쇄**: 표지·목차·챕터별 A4 PDF 출력
- **내려받기/업로드**: 업무 데이터를 Markdown 파일로 백업·복원

---

## 직원 접근 방법

### 로컬 서버 사용 시 (관리자)
- 서버 실행 후 로그인 버튼 클릭 → 즉시 로그인 (비밀번호 불필요)
- 기본 비밀번호: 환경변수 `STAFF_PASSWORD` (미설정 시 `osti2026`)

### GitHub Pages 사용 시 (외부 직원)
1. GitHub Personal Access Token(PAT) 발급
   - GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
   - 권한: **Contents** (Read and write)
2. 대시보드에서 **로그인** 클릭 → PAT 입력
3. 업무 수정 후 저장 시 GitHub `tasks.json` 자동 업데이트

---

## 환경변수

| 변수 | 설명 | 기본값 |
|------|------|--------|
| `PORT` | 서버 포트 | `4173` |
| `STAFF_PASSWORD` | 관리자 비밀번호 | `osti2026` |
| `STAFF_USER` | 관리자 ID | `admin` |
| `DATA_FILE` | 업무 데이터 파일 경로 | `tasks.json` |
| `SETTINGS_FILE` | 설정 파일 경로 | `settings.json` |

```bash
# 예시
PORT=8080 STAFF_PASSWORD=mypassword node server.js
```

---

## 파일 구조

```
task-board/
├── index.html       # 단일 페이지 UI
├── app.js           # 프론트엔드 전체 로직
├── styles.css       # 스타일
├── server.js        # Node.js HTTP 서버
├── tasks.json       # 업무 데이터 (자동 생성)
└── settings.json    # 설정 (자동 생성)
```

---

## 데이터 구조

### tasks.json
```json
[
  {
    "id": "task-uuid",
    "category": "업무그룹-id",
    "title": "업무명",
    "owner": "소관 부서",
    "manager": "담당자",
    "start": "2026-01-01",
    "end": "2026-12-31",
    "visible": true,
    "complete": false,
    "content": "업무 내용",
    "milestones": [
      { "id": "ms-uuid", "startDate": "2026-06-01", "endDate": "2026-06-30", "label": "중간 보고" }
    ]
  }
]
```

### settings.json
```json
{
  "ministry": "부처명",
  "organization": "조직명",
  "dashboardTitle": "대시보드 제목",
  "categories": [
    { "id": "cat-id", "label": "업무그룹명", "color": "#2563eb" }
  ]
}
```

---

## GitHub Pages 배포

1. GitHub 저장소 → Settings → Pages
2. Source: `main` 브랜치 선택 → Save
3. 배포 URL 확인 후 직원들에게 공유

> **주의**: GitHub Pages는 정적 호스팅이므로 `node server.js` 없이 동작합니다.  
> 직원들이 PAT로 로그인해야 업무를 수정할 수 있습니다.

---

## 라이선스

MIT License
