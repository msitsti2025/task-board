# 업무 타임라인 대시보드

부처·기관의 업무 추진 현황을 한눈에 보여주는 타임라인 대시보드입니다.  
순수 HTML/CSS/JavaScript로 구성되어 있어 별도의 프레임워크나 빌드 도구 없이 바로 사용할 수 있습니다.

---

## 빠른 시작

### 1. 소스 받기

```bash
git clone -b release https://github.com/msitsti2025/task-board.git
cd task-board
```

### 2. 서버 실행 (Node.js 18 이상 필요)

```bash
node server.js
```

브라우저에서 `http://localhost:4173` 접속

### 3. 우리 기관에 맞게 설정하기

1. 우측 상단 **로그인** 클릭 (비밀번호 불필요)
2. **설정** 클릭
3. 아래 항목을 수정한 뒤 **저장**

| 항목 | 설명 | 기본값 |
|------|------|--------|
| 부처명 (회사명) | 기관 상위 조직명 | 부처명(회사명) |
| 조직명 | 대시보드를 운영하는 조직명 | 조직명 |
| 현황판명 | 화면 상단 제목 | 현황판명 |
| 업무그룹 | 업무를 분류하는 카테고리 (추가/삭제 가능) | 업무그룹 1 |

설정은 `settings.json` 파일에 저장됩니다.

### 4. 업무 등록하기

1. 로그인 후 타임라인 하단 에디터에서 **새 업무** 클릭
2. 업무명, 업무그룹, 기간 등 입력 후 **저장**
3. 마일스톤(주요일정)을 추가하려면 에디터 하단 **+ 마일스톤** 클릭

---

## 기능 소개

| 기능 | 설명 |
|------|------|
| 타임라인 | 업무 기간을 막대로 표시, 드래그로 날짜 조정 |
| 주요일정 | 마일스톤·기간 일정 표시 (원형 마커, 범위 선) |
| 업무 편집 | 로그인 후 업무 추가·수정·삭제 |
| 필터·검색 | 업무그룹별 필터, 키워드 검색 |
| 인쇄 | A4 PDF 출력 (표지·목차·챕터별) |
| 내려받기·업로드 | 업무 데이터를 Markdown 파일로 백업·복원 |
| 설정 | 조직명·업무그룹 등 커스터마이징 |

---

## 로그인 방식

### 로컬 서버 (`node server.js`)

- **로그인** 클릭 → 비밀번호 없이 즉시 로그인
- 기본 비밀번호 변경: 환경변수 `STAFF_PASSWORD` 설정

### GitHub Pages (정적 호스팅)

1. GitHub Personal Access Token(PAT) 발급  
   GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens  
   권한: **Contents** (Read and write), 대상 저장소 지정
2. 대시보드에서 **로그인** 클릭 → PAT 입력
3. 업무 저장 시 GitHub `tasks.json` 자동 업데이트

---

## GitHub Pages 배포

1. 이 저장소를 **Fork** 또는 코드를 자신의 저장소에 복사
2. `app.js` 상단 `GITHUB_REPO` 값을 자신의 저장소로 수정

   ```js
   const GITHUB_REPO = "your-org/your-repo";
   ```

3. GitHub 저장소 → Settings → Pages → Source: `main` 브랜치 선택 → Save
4. 배포 URL을 직원들에게 공유

---

## 환경변수

| 변수 | 설명 | 기본값 |
|------|------|--------|
| `PORT` | 서버 포트 | `4173` |
| `STAFF_PASSWORD` | 관리자 비밀번호 | `osti2026` |
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
├── tasks.json       # 업무 데이터 (자동 생성/수정)
└── settings.json    # 설정 (로그인 후 설정 화면에서 자동 생성)
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
      {
        "id": "ms-uuid",
        "startDate": "2026-06-01",
        "endDate": "2026-06-30",
        "label": "중간 보고"
      }
    ]
  }
]
```

### settings.json

```json
{
  "ministry": "부처명(회사명)",
  "organization": "조직명",
  "dashboardTitle": "현황판명",
  "categories": [
    { "id": "group-1", "label": "업무그룹 1", "color": "#2563eb" }
  ]
}
```

---

## 라이선스

MIT License
