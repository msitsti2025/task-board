const categories = [
  { id: "all", label: "전체", color: "#1d2633" },
  { id: "science-policy", label: "기획/정책/전략수립 업무", color: "#2563eb" },
  { id: "budget-review", label: "예산/투자/심의조정 업무", color: "#0f766e" },
  { id: "rnd-management", label: "평가/제도/정보분석 업무", color: "#b45309" },
  { id: "outreach", label: "대외/홍보/현장소통 업무", color: "#7c3aed" },
];

const categoryGroups = categories.filter((category) => category.id !== "all");
const ownerOptions = [
  "혁신본부",
  "과학기술정책과",
  "과학기술혁신지원팀",
  "과학기술전략과",
  "과학기술정책조정과",
  "전략기술육성과",
  "연구예산총괄과",
  "연구개발투자기획과",
  "국방연구기획투자기획팀",
  "공공에너지조정과",
  "기계정보통신조정과",
  "생명기초조정과",
  "성과평가정책과",
  "연구평가혁신과",
  "연구제도혁신과",
  "연구윤리권익보호과",
  "과학기술정보분석과",
  "연구개발타당성심사팀",
];

const defaultItems = [
  {
    category: "science-policy",
    title: "국가전략기술 체계 고도화 방향 발표",
    owner: "전략기술육성과",
    start: "2026-04-27",
    end: "2026-04-27",
    content: "기존 국가전략기술 체계를 국가임무, 범부처 협업 중심으로 재편.",
    milestones: [{ date: "2026-04-27", label: "고도화 방향 발표" }],
  },
  {
    category: "science-policy",
    title: "국가전략기술 선도 NEXT 프로젝트",
    owner: "전략기술육성과",
    start: "2026-04-30",
    end: "2026-04-30",
    content: "국가전략기술 육성을 위한 핵심사업 집중 지원 및 민관 얼라이언스 구축.",
    milestones: [{ date: "2026-04-30", label: "NEXT 프로젝트 보도" }],
  },
  {
    category: "rnd-management",
    title: "연구비 집행 자율성 확대",
    owner: "연구제도혁신과",
    start: "2026-04-28",
    end: "2026-04-28",
    content:
      "자율사용 비목 신설, 간접비 네거티브 전환 등 연구비 사용 자율성을 강화하고 사용불가 항목 외 연구 관련 모든 항목을 허용하는 방향으로 전환.",
    milestones: [{ date: "2026-04-28", label: "혁신법 시행령 개정 보도" }],
  },
  {
    category: "outreach",
    title: "R&D-IP 정책 협의회 개최",
    owner: "과학기술조정과",
    start: "2026-05-07",
    end: "2026-05-07",
    content: "R&D 및 연구성과 간 연계 전략 고도화를 위한 R&D-IP 총괄 부처 간 정책 협의.",
    milestones: [{ date: "2026-05-07", label: "정책 협의회" }],
  },
  {
    category: "outreach",
    title: "권역별 주요 R&D 정책간담회",
    owner: "과학기술정책과",
    start: "2026-05-08",
    end: "2026-05-08",
    content: "호남권 GIST 타운홀미팅을 통해 연구 현장과 직접 소통하고 주요 R&D 정책 방향 공유.",
    milestones: [{ date: "2026-05-08", label: "GIST 타운홀미팅" }],
  },
  {
    category: "rnd-management",
    title: "구축형 R&D 심사 시행 관련 시행령·세부지침",
    owner: "연구개발타당성심사팀",
    start: "2026-05-11",
    end: "2026-05-11",
    content: "예타폐지 후속 조치를 위한 과학기술기본법 시행령 개정 및 운용지침 제정.",
    milestones: [{ date: "2026-05-11", label: "시행령 개정 및 지침 제정 보도" }],
  },
  {
    category: "science-policy",
    title: "제6차 과학기술기본계획 수립",
    owner: "과학기술정책과",
    start: "2026-05-06",
    end: "2026-06-15",
    tentative: true,
    content:
      "연구자 현장간담회와 대국민 공청회를 거쳐 제6차 과학기술기본계획을 수립하고 자문회의 심의의결을 통해 발표.",
    milestones: [
      { date: "2026-05-06", label: "연구자 현장간담회 1차" },
      { date: "2026-05-13", label: "연구자 현장간담회 후속" },
      { date: "2026-05-22", label: "대국민 공청회, 5월중" },
      { date: "2026-06-15", label: "기본계획 발표, 6월 잠정" },
    ],
  },
  {
    category: "science-policy",
    title: "「K-Science」 추진 방안",
    owner: "과학기술전략과",
    start: "2026-05-01",
    end: "2026-05-31",
    tentative: true,
    content:
      "K-Science 추진배경, 정책추진 방향, 대표 프로젝트 내용 예시를 소개하고 후속 홍보를 검토.",
    milestones: [
      { date: "2026-05-15", label: "추진 방안 보도·기고" },
      { date: "2026-05-31", label: "후속 홍보 검토" },
    ],
  },
  {
    category: "science-policy",
    title: "지역 과학기술 혁신법 제정",
    owner: "과학기술전략과",
    start: "2026-04-23",
    end: "2026-05-31",
    tentative: true,
    content:
      "지역의 과학기술역량을 확충하고 지역기업·산업 경쟁력을 강화할 수 있는 종합 지원체계 마련.",
    milestones: [
      { date: "2026-04-23", label: "법 제정 통과" },
      { date: "2026-05-15", label: "보도·기고" },
    ],
  },
  {
    category: "rnd-management",
    title: "국가연구데이터법 제정",
    owner: "성과평가정책과",
    start: "2026-05-01",
    end: "2026-06-30",
    tentative: true,
    content:
      "국가R&D 과제로 생산된 데이터를 국가연구데이터통합플랫폼에 표준화해 연계하고 공개 원칙으로 연구데이터 활용을 촉진.",
    milestones: [
      { date: "2026-05-15", label: "국회 통과 예상 구간" },
      { date: "2026-06-30", label: "보도·기고, 통과시" },
    ],
  },
  {
    category: "outreach",
    title: "구축형 R&D 심사제도 설명회",
    owner: "연구개발타당성심사팀",
    start: "2026-05-12",
    end: "2026-05-12",
    content: "과학기술분야 학회를 대상으로 구축형 R&D 심사제도를 설명하고 현장 이해도를 높임.",
    milestones: [{ date: "2026-05-12", label: "심사제도 설명회" }],
  },
  {
    category: "outreach",
    title: "구축형 R&D 심사제도 시행",
    owner: "연구개발타당성심사팀",
    start: "2026-05-15",
    end: "2026-05-15",
    content: "연구 현장의 수요를 반영한 구축형 R&D 기획 및 심사제도 운영에 대한 현장 반응과 환영 메시지 확산.",
    milestones: [{ date: "2026-05-15", label: "기고" }],
  },
  {
    category: "budget-review",
    title: "27년도 국가연구개발사업 예산배분 조정(안)",
    owner: "연구예산총괄과",
    start: "2026-05-11",
    end: "2026-09-30",
    tentative: true,
    content:
      "국가연구개발사업 예산설명회를 시작으로 주요 R&D 예산 배분·조정안을 마련하고 정부 R&D 예산안을 간담회 등으로 홍보.",
    milestones: [
      { date: "2026-05-11", label: "국가연구개발사업 예산설명회" },
      { date: "2026-06-30", label: "주요 R&D 예산 배분·조정안 마련" },
      { date: "2026-09-30", label: "정부 R&D 예산안 홍보, 하반기" },
    ],
  },
  {
    category: "rnd-management",
    title: "R&D 행정서식 간소화",
    owner: "연구제도혁신과",
    start: "2026-05-01",
    end: "2026-05-31",
    tentative: true,
    content: "연구자 행정부담 완화를 위해 불요·중복 서식을 표준화하고 간소화.",
    milestones: [{ date: "2026-05-15", label: "간소화 방안 보도" }],
  },
  {
    category: "budget-review",
    title: "R&D 예산심의 특화 AI 도입",
    owner: "기계정보통신조정과",
    start: "2026-04-29",
    end: "2026-05-10",
    tentative: true,
    content:
      "예산심의 특화 AI를 전문위 예산설명회부터 혁신본부 예산심의 전 단계에 본격 도입.",
    milestones: [
      { date: "2026-04-29", label: "본부장 대상 시연, 보도자료 미배포" },
      { date: "2026-05-08", label: "5월초 보도" },
    ],
  },
  {
    category: "rnd-management",
    title: "가칭 연구24 통합로그인체계 구축",
    owner: "과학기술정보분석과",
    start: "2026-06-01",
    end: "2026-06-10",
    tentative: true,
    content: "주요 국가 R&D 시스템들의 로그인 창구를 단일화하는 연구24 구축.",
    milestones: [{ date: "2026-06-05", label: "통합로그인체계 구축 보도" }],
  },
  {
    category: "science-policy",
    title: "R&D 사업화 시스템 고도화 전략",
    owner: "과학기술혁신지원팀",
    start: "2026-06-01",
    end: "2026-06-30",
    tentative: true,
    content:
      "R&D 성과확산 고속도로 구축, 연구성과 창업 활성화, 투자형 R&D 도입 등 성과확산 체계 개편.",
    milestones: [{ date: "2026-06-15", label: "STEPI 원장 기고" }],
  },
  {
    category: "rnd-management",
    title: "AI 기반 장비검색시스템(ZEUS 3.0) 구축",
    owner: "연구평가혁신과",
    start: "2026-06-01",
    end: "2026-06-30",
    tentative: true,
    content: "AI 기반 장비검색시스템을 도입해 연구자들이 공공장비를 더 쉽게 활용하도록 제공.",
    milestones: [{ date: "2026-06-30", label: "6월말 검토" }],
  },
  {
    category: "rnd-management",
    title: "IRIS 운영 전담조직 개편",
    owner: "과학기술정보분석과",
    start: "2026-06-01",
    end: "2026-06-30",
    tentative: true,
    content:
      "4대 연구지원시스템 통합에 따른 운영 전담조직을 개편하고 연구자 중심의 IRIS 역량강화 방안을 발표.",
    milestones: [{ date: "2026-06-30", label: "운영 전담조직 개편방안 발표" }],
  },
  {
    category: "budget-review",
    title: "제2차 국가연구개발 중장기 투자전략 수립",
    owner: "연구개발투자기획과",
    start: "2026-07-01",
    end: "2026-07-31",
    tentative: true,
    content:
      "향후 5년간 R&D 투자의 목표와 방향을 제시하는 정부의 R&D 최상위 전략 수립. 산·학·연 의견수렴 및 공청회 검토.",
    milestones: [{ date: "2026-07-15", label: "중장기 투자전략 보도" }],
  },
  {
    category: "rnd-management",
    title: "도전적 R&D 연구환경 조성",
    owner: "연구평가혁신과",
    start: "2026-07-01",
    end: "2026-07-31",
    tentative: true,
    content:
      "혁신법 및 시행령 개정으로 평가기준에 목표 혁신성을 추가하고 우수 과제 후속과제 지정근거, 과제평가 등급 폐지, 최종평가 방식 다양화, 비영리기관 기술료 사용 자율성 확대 등을 추진.",
    milestones: [{ date: "2026-07-31", label: "혁신법 및 시행령 개정 보도" }],
  },
  {
    category: "rnd-management",
    title: "도전적 목표 미달성 과제 재도약 지원",
    owner: "연구평가혁신과",
    start: "2026-07-01",
    end: "2026-07-31",
    tentative: true,
    content: "도전적 목표를 미달성한 과제도 우수성 평가를 통해 재도약을 지원하는 제도 개선 검토.",
    milestones: [{ date: "2026-07-15", label: "재도약 지원 검토" }],
  },
  {
    category: "rnd-management",
    title: "연구비 부정사용 제재처분 강화",
    owner: "연구윤리권익보호과",
    start: "2026-07-01",
    end: "2026-09-30",
    tentative: true,
    content:
      "부정사용 근절을 위해 제재부가금 최대한도를 기지급 연구개발비의 5배에서 30배로, 참여제한 최대기간을 10년에서 20년으로 강화.",
    milestones: [{ date: "2026-09-30", label: "혁신법 개정 보도, 하반기" }],
  },
  {
    category: "rnd-management",
    title: "연구자 중복정보입력 최소화",
    owner: "과학기술정보분석과",
    start: "2026-07-01",
    end: "2026-09-30",
    tentative: true,
    content: "IRIS와 기관 자체 시스템 간 정보연계를 강화해 연구자 중복정보 입력을 최소화.",
    milestones: [{ date: "2026-09-30", label: "정보연계 강화 검토" }],
  },
  {
    category: "rnd-management",
    title: "국제공동연구 연구비 관리 및 IP 확보 제도개선",
    owner: "성과평가정책과 · 연구제도혁신과",
    start: "2026-07-01",
    end: "2026-09-30",
    tentative: true,
    content: "국제공동연구 연구비 관리 강화와 IP 확보를 위한 제도개선 검토.",
    milestones: [{ date: "2026-09-30", label: "제도개선 검토" }],
  },
  {
    category: "rnd-management",
    title: "연구보안 체계 내실화",
    owner: "연구윤리권익보호과",
    start: "2026-07-01",
    end: "2026-09-30",
    tentative: true,
    content: "민감과제 신설, 보안대책 수립기관 확대 등을 통해 연구보안 체계를 강화.",
    milestones: [{ date: "2026-09-30", label: "연구보안 체계 강화 검토" }],
  },
];

const timelineStart = new Date("2025-06-15T00:00:00");
const timelineEnd = new Date("2027-06-30T00:00:00");
const legacyStorageKey = "osti-task-board-items-v1";
const isDirectFileHost = isLocalEditableHost();
const isLoopbackHost = ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
let activeCategory = "all";
// GitHub Pages 편집 모드: 저장소 경로를 설정하면 PAT 로그인으로 직접 저장 가능
// 예: "username/osti-task-board" — 비워두면 readonly 모드로 동작
const GITHUB_REPO = "msitsti2025/task-board";

let items = [];
let selectedItemId = "";
let storageMode = "readonly";
let isStaff = false;
let canWrite = false;
let githubToken = "";
let githubFileSha = "";

const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const timeline = document.querySelector("#timeline");
const timelinePanel = document.querySelector(".timeline-panel");
const timelineScrollbar = document.querySelector("#timelineScrollbar");
const timelineScrollbarInner = document.querySelector("#timelineScrollbarInner");
const taskForm = document.querySelector("#taskForm");
const editorTitle = document.querySelector("#editorTitle");
const taskId = document.querySelector("#taskId");
const taskTitle = document.querySelector("#taskTitle");
const taskCategory = document.querySelector("#taskCategory");
const taskOwner = document.querySelector("#taskOwner");
const taskManager = document.querySelector("#taskManager");
const taskStart = document.querySelector("#taskStart");
const taskEnd = document.querySelector("#taskEnd");
const taskTentative = document.querySelector("#taskTentative");
const taskComplete = document.querySelector("#taskComplete");
const taskContent = document.querySelector("#taskContent");
const milestoneRows = document.querySelector("#milestoneRows");
const newTaskButton = document.querySelector("#newTaskButton");
const duplicateButton = document.querySelector("#duplicateButton");
const saveButton = document.querySelector("#saveButton");
const deleteButton = document.querySelector("#deleteButton");
const downloadButton = document.querySelector("#downloadButton");
const uploadButton = document.querySelector("#uploadButton");
const editorPanel = document.querySelector("#editorPanel");
const editorNotice = document.querySelector("#editorNotice");
const editorKicker = document.querySelector("#editorKicker");
const reviewModalBackdrop = document.querySelector("#reviewModalBackdrop");
const reviewCloseButton = document.querySelector("#reviewCloseButton");
const staffLoginButton = document.querySelector("#staffLoginButton");
const staffLogoutButton = document.querySelector("#staffLogoutButton");
const loginCloseButton = document.querySelector("#loginCloseButton");
const staffPasswordLabel = document.querySelector("#staffPasswordLabel");
const printButton = document.querySelector("#printButton");
const loginPanel = document.querySelector("#loginPanel");
const loginForm = document.querySelector("#loginForm");
const staffPassword = document.querySelector("#staffPassword");
const loginMessage = document.querySelector("#loginMessage");

function createId(prefix = "task") {
  if (globalThis.crypto?.randomUUID) return `${prefix}-${globalThis.crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeItems(source) {
  return source.map((item, index) => ({
    id: item.id || createId(`task-${index + 1}`),
    category: normalizeCategory(item),
    order: Number.isFinite(item.order) ? item.order : index,
    title: item.title || "새 업무",
    owner: item.owner || "",
    manager: item.manager || "",
    start: item.start || "2026-05-01",
    end: item.end || item.start || "2026-05-01",
    visible: item.visible !== false,
    complete: item.complete !== false,
    tentative: false,
    content: item.content || item.impact || "",
    milestones: (item.milestones || []).map((milestone) => {
      const fallback = milestone.date || item.start || "2026-05-01";
      return {
        id: milestone.id || createId("milestone"),
        startDate: milestone.startDate || fallback,
        endDate: milestone.endDate || milestone.startDate || fallback,
        label: milestone.label || "",
      };
    }),
  }));
}


function normalizeCategory(item) {
  if (categoryGroups.some((category) => category.id === item.category)) return item.category;

  const text = [item.title, item.owner, item.content].join(" ");
  if (/예산|투자|심의|타당성|구축형 R&D|전문위/.test(text)) return "budget-review";
  if (/성과|평가|제도|연구비|데이터|IRIS|장비|로그인|보안|부정사용|혁신법|시행령|행정서식|연구24/.test(text)) {
    return "rnd-management";
  }
  return "science-policy";
}

function isLocalEditableHost() {
  return location.protocol === "file:";
}

async function loadItems() {
  try {
    const response = await fetch("api/items", { cache: "no-store" });
    if (response.ok) {
      const stored = await response.json();
      canWrite = true;
      storageMode = "api";
      if (Array.isArray(stored)) return normalizeItems(stored);
    }
  } catch (error) {
    console.warn("편집 API를 찾지 못했습니다. 읽기 전용으로 전환합니다.", error);
  }

  if (isDirectFileHost || isLoopbackHost) {
    try {
      const legacyItems = localStorage.getItem(legacyStorageKey);
      if (legacyItems) {
        canWrite = true;
        storageMode = "local";
        const parsed = JSON.parse(legacyItems);
        if (Array.isArray(parsed)) return normalizeItems(parsed);
      }
    } catch (error) {
      console.warn("기존 브라우저 저장 데이터를 불러오지 못했습니다.", error);
    }
  }

  if (GITHUB_REPO) {
    storageMode = "github";
    const savedToken = sessionStorage.getItem("github_token");
    if (savedToken) githubToken = savedToken;
    try {
      const headers = { Accept: "application/vnd.github.v3+json" };
      if (githubToken) headers.Authorization = `Bearer ${githubToken}`;
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/tasks.json`,
        { headers }
      );
      if (res.ok) {
        const data = await res.json();
        githubFileSha = data.sha;
        const text = decodeURIComponent(escape(atob(data.content.replace(/\n/g, ""))));
        return normalizeItems(JSON.parse(text));
      }
    } catch (e) {
      console.warn("GitHub API로 데이터를 불러오지 못했습니다. tasks.json으로 대체합니다.", e);
    }
  }

  try {
    const response = await fetch("tasks.json", { cache: "no-store" });
    if (response.ok) {
      const stored = await response.json();
      if (Array.isArray(stored) && stored.length > 0) {
        canWrite = isDirectFileHost || isLoopbackHost;
        if (canWrite) storageMode = "local";
        return normalizeItems(stored);
      }
    }
  } catch (error) {
    console.warn("업무 데이터를 불러오지 못했습니다. 기본 데이터를 사용합니다.", error);
  }
  canWrite = isDirectFileHost || isLoopbackHost;
  if (canWrite) storageMode = "local";
  return normalizeItems(defaultItems);
}

async function apiPost(body) {
  const response = await fetch("api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    credentials: "same-origin",
  });
  if (response.ok) return;
  if (response.status === 401) {
    isStaff = false;
    renderAuthState();
    alert("세션이 만료되었습니다. 다시 로그인해 주세요.\n\n방금 저장한 내용은 이 세션에서만 유지되며 새로고침 시 사라집니다.");
    return;
  }
  const text = await response.text().catch(() => "");
  alert(`데이터 저장에 실패했습니다 (오류 ${response.status}).\n${text || "서버 오류가 발생했습니다."}`);
}

async function persistItemsToGithub() {
  try {
    if (!githubFileSha) {
      const r = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/tasks.json`,
        { headers: { Authorization: `Bearer ${githubToken}`, Accept: "application/vnd.github.v3+json" } }
      );
      if (r.ok) githubFileSha = (await r.json()).sha;
    }
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(items, null, 2) + "\n")));
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/tasks.json`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `업무 데이터 업데이트 (${new Date().toLocaleString("ko-KR")})`,
          content,
          sha: githubFileSha,
        }),
      }
    );
    if (!res.ok) {
      if (res.status === 409) {
        alert("저장 충돌: 다른 사람이 동시에 수정했습니다. 페이지를 새로고침한 뒤 다시 저장해 주세요.");
        return;
      }
      if (res.status === 401) {
        githubToken = "";
        githubFileSha = "";
        sessionStorage.removeItem("github_token");
        isStaff = false;
        renderAuthState();
        alert("토큰이 만료되었습니다. 다시 로그인해 주세요.");
        return;
      }
      alert(`GitHub 저장 실패 (오류 ${res.status}).`);
      return;
    }
    githubFileSha = (await res.json()).content.sha;
  } catch (e) {
    console.error("GitHub에 저장하지 못했습니다.", e);
    alert("GitHub에 연결하지 못했습니다. 인터넷 연결을 확인해 주세요.");
  }
}

function persistItems() {
  if (storageMode === "api" && canWrite && isStaff) {
    return apiPost(JSON.stringify(items, null, 2)).catch((error) => {
      console.error("데이터를 저장하지 못했습니다. node server.js로 실행했는지 확인하세요.", error);
      alert("서버에 연결하지 못했습니다. node server.js가 실행 중인지 확인해 주세요.");
    });
  }

  if (storageMode === "github" && isStaff && githubToken) {
    return persistItemsToGithub();
  }

  if (storageMode === "local") {
    try {
      localStorage.setItem(legacyStorageKey, JSON.stringify(items));
    } catch (error) {
      console.error("브라우저 저장소에 업무 데이터를 저장하지 못했습니다.", error);
    }
    autoSaveToFile();
    return Promise.resolve();
  }
}

async function refreshStaffSession() {
  if (storageMode !== "api" || !canWrite) return;

  try {
    const response = await fetch("api/session", {
      cache: "no-store",
      credentials: "same-origin",
    });
    if (!response.ok) {
      isStaff = false;
      return;
    }
    const session = await response.json();
    isStaff = Boolean(session.authenticated);
  } catch (error) {
    isStaff = false;
  }
}

function dateValue(value) {
  return new Date(`${value}T00:00:00`);
}

function formatDateLabel(value) {
  const date = dateValue(value);
  if (Number.isNaN(date.getTime())) return value || "";
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

function isoDate(value) {
  return [
    value.getFullYear(),
    String(value.getMonth() + 1).padStart(2, "0"),
    String(value.getDate()).padStart(2, "0"),
  ].join("-");
}

function monthTicks() {
  const ticks = [];
  const cursor = new Date(2025, 6, 1);
  const lastTick = new Date(2027, 5, 1);
  while (cursor <= lastTick) {
    const year = cursor.getFullYear();
    const month = cursor.getMonth() + 1;
    ticks.push({
      date: `${year}-${String(month).padStart(2, "0")}-01`,
      yearLabel: month === 1 || (year === 2025 && month === 7) ? `${year}년` : "",
      monthLabel: `${month}월`,
    });
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return ticks;
}

function pct(value) {
  const date = typeof value === "string" ? dateValue(value) : value;
  return ((date - timelineStart) / (timelineEnd - timelineStart)) * 100;
}

function boundedPct(value) {
  return Math.min(100, Math.max(0, pct(value)));
}

function dateFromChartEvent(event, chart) {
  const rect = chart.getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  const nextTime = timelineStart.getTime() + ratio * (timelineEnd.getTime() - timelineStart.getTime());
  const nextDate = new Date(nextTime);
  nextDate.setHours(0, 0, 0, 0);
  return nextDate;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          type="button"
          data-category="${category.id}"
          aria-pressed="${category.id === activeCategory}"
          style="--accent:${category.color}"
        >${category.label}</button>
      `,
    )
    .join("");
}

function renderCalendarScale(ticks) {
  return ticks
    .map(
      (tick) => `
        <div class="axis-tick" style="left:${pct(tick.date)}%">
          <span class="year-label">${tick.yearLabel}</span>
          <span class="month-label">${tick.monthLabel}</span>
        </div>
      `,
    )
    .join("");
}

function renderCategoryOptions() {
  taskCategory.innerHTML = categories
    .filter((category) => category.id !== "all")
    .map((category) => `<option value="${category.id}">${category.label}</option>`)
    .join("");
}

function renderOwnerOptions(selectedOwner = "") {
  const options = selectedOwner && !ownerOptions.includes(selectedOwner)
    ? [...ownerOptions, selectedOwner]
    : ownerOptions;
  taskOwner.innerHTML = options
    .map((owner) => `<option value="${escapeHtml(owner)}">${escapeHtml(owner)}</option>`)
    .join("");
  taskOwner.value = selectedOwner || ownerOptions[0];
}

function renderAuthState() {
  const githubMode = storageMode === "github";
  // readonly: 실제 readonly 모드이거나, github 모드에서 로그인 전
  const readonlyMode = storageMode === "readonly" || (githubMode && !isStaff);
  // 에디터 패널: 모달로만 표시, 현재 모달 상태 유지
  if (!editorPanel.classList.contains("is-modal")) {
    editorPanel.hidden = true;
  }
  // local 모드는 로그인 불필요; 나머지 모드에서 로그인/로그아웃 버튼 표시
  staffLoginButton.hidden = storageMode === "local" || isStaff;
  staffLogoutButton.hidden = storageMode === "local" || !isStaff;
  printButton.hidden = false;
  if (isStaff) {
    loginPanel.hidden = true;
    loginMessage.textContent = "";
  }
  const writeOnly = [newTaskButton, duplicateButton, saveButton, deleteButton];
  writeOnly.forEach((btn) => { btn.hidden = readonlyMode; });
  uploadButton.hidden = false;
  downloadButton.hidden = false;
  reviewCloseButton.hidden = false;
  editorNotice.hidden = !readonlyMode;
  editorKicker.textContent = readonlyMode ? "검토 / 수정 제안" : "직원 입력 화면";
}

function emptyTask() {
  const today = new Date().toLocaleDateString("sv"); // YYYY-MM-DD
  const defaultCategory = activeCategory !== "all" ? activeCategory : "science-policy";
  return {
    id: "",
    category: defaultCategory,
    title: "",
    owner: ownerOptions[0],
    manager: "",
    start: today,
    end: today,
    visible: true,
    complete: true,
    tentative: false,
    content: "",
    impact: "",
    milestones: [],
  };
}

function nextOrderForCategory(category) {
  const categoryOrders = items
    .filter((item) => item.category === category)
    .map((item) => item.order)
    .filter(Number.isFinite);
  return categoryOrders.length ? Math.max(...categoryOrders) + 1 : 0;
}

function getSelectedItem() {
  return items.find((item) => item.id === selectedItemId) || null;
}

function renderEditor(item = getSelectedItem()) {
  const current = item || emptyTask();
  if (storageMode === "readonly" || (storageMode === "github" && !isStaff)) {
    editorTitle.textContent = current.id ? "업무 검토 및 수정 제안" : "업무를 선택하세요";
  } else {
    editorTitle.textContent = current.id ? "업무 수정" : "새 업무 추가";
  }
  taskId.value = current.id;
  taskTitle.value = current.title;
  taskCategory.value = current.category;
  renderOwnerOptions(current.owner);
  taskManager.value = current.manager || "";
  taskStart.value = current.start;
  taskEnd.value = current.end;
  taskTentative.checked = current.visible !== false;
  taskComplete.checked = current.complete !== false;
  taskContent.value = current.content;
  deleteButton.disabled = !current.id;
  duplicateButton.disabled = !current.id;
  renderMilestoneRows(current.milestones);
}

function renderMilestoneRows(milestones = []) {
  if (!milestones.length) {
    milestoneRows.innerHTML = `
      <div class="milestone-empty-row">
        <p class="empty-small">주요 일정이 없습니다.</p>
        <button type="button" class="mini-button" data-action="add-milestone">+ 추가</button>
      </div>`;
    return;
  }

  milestoneRows.innerHTML = milestones
    .map(
      (milestone, index) => `
        <div class="milestone-row" data-milestone-id="${escapeHtml(milestone.id)}">
          <label>
            ${index === 0 ? "<span>일정 시작일</span>" : ""}
            <input type="date" data-field="startDate" value="${escapeHtml(milestone.startDate)}" />
          </label>
          <label>
            ${index === 0 ? "<span>일정 종료일</span>" : ""}
            <input type="date" data-field="endDate" value="${escapeHtml(milestone.endDate)}" />
          </label>
          <label>
            ${index === 0 ? "<span>주요 일정 내용</span>" : ""}
            <input data-field="label" value="${escapeHtml(milestone.label)}" placeholder="주요 일정 내용" />
          </label>
          <button type="button" class="mini-button" data-action="add-after-milestone">추가</button>
          <button type="button" class="mini-button danger" data-action="remove-milestone">삭제</button>
        </div>
      `,
    )
    .join("");
}

function readMilestonesFromForm() {
  return [...milestoneRows.querySelectorAll(".milestone-row")]
    .map((row) => {
      const startDate = row.querySelector('[data-field="startDate"]').value;
      const endDate = row.querySelector('[data-field="endDate"]').value || startDate;
      return {
        id: row.dataset.milestoneId || createId("milestone"),
        startDate,
        endDate,
        label: row.querySelector('[data-field="label"]').value.trim(),
      };
    })
    .filter((milestone) => milestone.startDate && milestone.label)
    .sort((a, b) => dateValue(a.startDate) - dateValue(b.startDate));
}

function readTaskFromForm() {
  const existing = items.find((item) => item.id === taskId.value);
  const category = taskCategory.value;
  return {
    id: taskId.value || createId("task"),
    category,
    order: existing && existing.category === category ? existing.order : nextOrderForCategory(category),
    title: taskTitle.value.trim(),
    owner: taskOwner.value.trim(),
    manager: taskManager.value.trim(),
    start: taskStart.value,
    end: taskEnd.value,
    visible: taskTentative.checked,
    complete: taskComplete.checked,
    tentative: false,
    content: taskContent.value.trim(),
    milestones: readMilestonesFromForm(),
  };
}

function openReviewModal() {
  editorPanel.style.width = "";
  editorPanel.style.height = "";
  editorPanel.hidden = false;
  editorPanel.classList.add("is-modal");
  reviewModalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeReviewModal() {
  editorPanel.hidden = true;
  editorPanel.classList.remove("is-modal");
  reviewModalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function selectItem(id) {
  if (!isStaff) return;
  selectedItemId = id;
  renderEditor();
  renderTimeline();
  openReviewModal();
}

function startNewTask() {
  if (!isStaff) return;
  selectedItemId = "";
  renderEditor(null);
  renderTimeline();
  openReviewModal();
  taskTitle.focus();
}

function saveTask(event) {
  event.preventDefault();
  if (!isStaff) return;
  const isNew = !taskId.value;
  const nextTask = readTaskFromForm();
  if (dateValue(nextTask.end) < dateValue(nextTask.start)) {
    taskEnd.setCustomValidity("완료일은 시작일보다 빠를 수 없습니다.");
    taskEnd.reportValidity();
    return;
  }
  taskEnd.setCustomValidity("");

  const index = items.findIndex((item) => item.id === nextTask.id);
  if (index >= 0) {
    items[index] = nextTask;
  } else {
    items.push(nextTask);
  }
  selectedItemId = nextTask.id;
  persistItems();
  if (storageMode === "local") saveToLocalFile();

  // 새 업무 저장 시 필터/검색이 가려서 화면에 안 보이는 문제 방지
  if (isNew) {
    if (activeCategory !== "all" && activeCategory !== nextTask.category) {
      activeCategory = "all";
      renderFilters();
    }
    if (searchInput.value.trim()) {
      searchInput.value = "";
    }
  }

  renderEditor();
  renderTimeline();
}

function deleteSelectedTask() {
  if (!isStaff) return;
  const current = getSelectedItem();
  if (!current) return;
  const confirmed = confirm(`'${current.title}' 업무를 삭제할까요? 이 브라우저에 저장된 편집 데이터에서 제거됩니다.`);
  if (!confirmed) return;
  items = items.filter((item) => item.id !== current.id);
  selectedItemId = items[0]?.id ?? "";
  persistItems();
  renderEditor();
  renderTimeline();
}

function duplicateSelectedTask() {
  if (!isStaff) return;
  const current = getSelectedItem();
  if (!current) return;
  const copy = {
    ...current,
    id: createId("task"),
    order: nextOrderForCategory(current.category),
    title: `${current.title} 복사본`,
    milestones: current.milestones.map((milestone) => ({
      ...milestone,
      id: createId("milestone"),
    })),
  };
  items.push(copy);
  selectedItemId = copy.id;
  persistItems();
  renderEditor();
  renderTimeline();
}

let taskDirHandle = null;
let pendingDirHandle = null; // IndexedDB에서 복원했지만 아직 권한 승인 전인 핸들

// ── IndexedDB 핸들 영속화 ─────────────────────────────────────────────────
const HANDLE_DB_NAME = "osti-task-board";
const HANDLE_DB_STORE = "handles";
const HANDLE_DB_KEY = "taskDir";

function openHandleDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(HANDLE_DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(HANDLE_DB_STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveHandleToDb(handle) {
  try {
    const db = await openHandleDb();
    const tx = db.transaction(HANDLE_DB_STORE, "readwrite");
    tx.objectStore(HANDLE_DB_STORE).put(handle, HANDLE_DB_KEY);
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
    db.close();
  } catch (error) {
    console.warn("폴더 핸들 저장 실패:", error);
  }
}

async function loadHandleFromDb() {
  try {
    const db = await openHandleDb();
    const tx = db.transaction(HANDLE_DB_STORE, "readonly");
    const handle = await new Promise((res, rej) => {
      const req = tx.objectStore(HANDLE_DB_STORE).get(HANDLE_DB_KEY);
      req.onsuccess = () => res(req.result ?? null);
      req.onerror = () => rej(req.error);
    });
    db.close();
    return handle;
  } catch {
    return null;
  }
}

// 앱 시작 시 이전 세션의 폴더 핸들을 복원.
// 이미 권한이 있으면 taskDirHandle로 바로 설정, 승인이 필요하면 pendingDirHandle에 보관.
async function restoreDirHandle() {
  if (!window.showDirectoryPicker) return;
  const handle = await loadHandleFromDb();
  if (!handle) return;
  try {
    const perm = await handle.queryPermission({ mode: "readwrite" });
    if (perm === "granted") {
      taskDirHandle = handle;
    } else if (perm === "prompt") {
      pendingDirHandle = handle;
    }
  } catch {
    // 핸들이 유효하지 않으면 무시
  }
}
// ─────────────────────────────────────────────────────────────────────────────

async function autoSaveToFile() {
  if (!taskDirHandle) return;
  const json = JSON.stringify(items, null, 2);
  try {
    const fileHandle = await taskDirHandle.getFileHandle("tasks.json", { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(json);
    await writable.close();
  } catch (error) {
    taskDirHandle = null;
    console.warn("자동 파일 저장 실패:", error);
  }
}

// 로컬 모드 저장: 이전 세션 핸들 재사용 → 권한 재승인 → 새 폴더 선택 순으로 시도.
async function saveToLocalFile() {
  if (!window.showDirectoryPicker || taskDirHandle) return;

  // 이전 세션 핸들이 있으면 권한 재승인 시도 (저장 버튼 클릭 = user gesture 충족)
  if (pendingDirHandle) {
    try {
      const perm = await pendingDirHandle.requestPermission({ mode: "readwrite" });
      if (perm === "granted") {
        taskDirHandle = pendingDirHandle;
        pendingDirHandle = null;
        await autoSaveToFile();
        return;
      }
    } catch {
      // 권한 거부 또는 핸들 만료 시 새로 선택
    }
    pendingDirHandle = null;
  }

  // 새 폴더 선택
  try {
    taskDirHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    await saveHandleToDb(taskDirHandle);
    await autoSaveToFile();
  } catch (error) {
    if (error.name !== "AbortError") console.error("폴더 선택 실패:", error);
  }
}

function updateItemDateFromDrag(target, nextIsoDate) {
  const item = items.find((candidate) => candidate.id === target.dataset.id);
  if (!item) return;

  if (target.dataset.dragKind === "start") {
    item.start = nextIsoDate;
    if (dateValue(item.end) < dateValue(item.start)) item.end = nextIsoDate;
  }

  if (target.dataset.dragKind === "end") {
    item.end = nextIsoDate;
    if (dateValue(item.end) < dateValue(item.start)) item.start = nextIsoDate;
  }

  if (target.dataset.dragKind === "milestone") {
    const milestone = item.milestones.find((candidate) => candidate.id === target.dataset.milestoneId);
    if (milestone) {
      const diff = dateValue(milestone.endDate) - dateValue(milestone.startDate);
      milestone.startDate = nextIsoDate;
      milestone.endDate = isoDate(new Date(dateValue(nextIsoDate) + diff));
    }
  }
  if (target.dataset.dragKind === "milestone-start") {
    const milestone = item.milestones.find((candidate) => candidate.id === target.dataset.milestoneId);
    if (milestone) milestone.startDate = nextIsoDate;
  }
  if (target.dataset.dragKind === "milestone-end") {
    const milestone = item.milestones.find((candidate) => candidate.id === target.dataset.milestoneId);
    if (milestone) milestone.endDate = nextIsoDate;
  }

  reindexGroup(item.category);
  selectedItemId = item.id;
  persistItems();
  renderEditor(item);
}

function orderedGroupItems(categoryId) {
  return items
    .filter((item) => item.category === categoryId)
    .sort((a, b) => {
      const startDiff = dateValue(a.start) - dateValue(b.start);
      if (startDiff !== 0) return startDiff;
      const endDiff = dateValue(a.end) - dateValue(b.end);
      if (endDiff !== 0) return endDiff;
      return a.title.localeCompare(b.title, "ko");
    });
}

function reindexGroup(categoryId) {
  orderedGroupItems(categoryId).forEach((item, index) => {
    item.order = index;
  });
}

function moveItemToGroup(sourceId, targetCategory) {
  const source = items.find((item) => item.id === sourceId);
  if (!source || !categoryById[targetCategory] || targetCategory === "all") return;

  const previousCategory = source.category;
  source.category = targetCategory;
  if (previousCategory !== targetCategory) reindexGroup(previousCategory);
  reindexGroup(targetCategory);
  selectedItemId = source.id;
  persistItems();
  renderEditor(source);
  renderTimeline();
}

function filteredItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  return items
    .filter((item) => activeCategory === "all" || item.category === activeCategory)
    .filter((item) => isStaff || item.visible !== false)
    .filter((item) => {
      if (!keyword) return true;
      return [
        item.title,
        item.content,
        item.owner,
        item.manager,
        categoryById[item.category]?.label || "",
        ...item.milestones.map((milestone) => milestone.label),
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    })
    .sort((a, b) => {
      const startDiff = dateValue(a.start) - dateValue(b.start);
      if (startDiff !== 0) return startDiff;
      const endDiff = dateValue(a.end) - dateValue(b.end);
      if (endDiff !== 0) return endDiff;
      return a.title.localeCompare(b.title, "ko");
    });
}

function renderLane(item, ticks) {
  const category = categoryById[item.category];
  const start = boundedPct(item.start);
  const end = boundedPct(item.end);
  const startOutside = pct(item.start) < 0;
  const endOutside = pct(item.end) > 100;
  const todayPct = boundedPct(isoDate(new Date()));
  const width = Math.max(end - start, 0.8);
  const today = isoDate(new Date());
  const visibleMilestones = item.milestones.filter((ms) => ms.startDate >= "2025-07-01");

  // 마커: startDate===endDate → 원형 버튼, startDate≠endDate → 검은 실선(미래는 점선)
  // 우변 추적: 마지막으로 배치된 라벨의 오른쪽 끝 위치(%) 추적
  let lastAboveRightPct = -Infinity;
  let lastBelowRightPct = -Infinity;
  // 10px bold 한글 1자 ≈ 9px, 차트폭 ~900px → 1자 ≈ 1%; 보수적으로 1.1 사용
  const CHAR_PCT = 1.1;
  const MAX_LABEL_HALF_W = 6.5; // CSS max-width 120px의 절반 (900px 기준)
  function labelHalfW(text) {
    return Math.min(text.length * CHAR_PCT / 2, MAX_LABEL_HALF_W);
  }
  // 라벨이 lastRightPct 이후에 겹치지 않게 들어갈 수 있는 최장 텍스트 반환
  function fitInlineLabel(text, pos, lastRightPct) {
    for (let len = text.length; len >= 3; len--) {
      const candidate = len === text.length ? text : text.slice(0, len) + "…";
      const hw = labelHalfW(candidate);
      if (pos - hw >= lastRightPct + 0.5) {
        return { text: candidate, rightEdge: pos + hw };
      }
    }
    return null;
  }
  // 기간 일정 수직 위치: 중앙 → 위 → 아래 순서로 교차
  const rangeTopLevels = ["50%", "calc(50% - 6px)", "calc(50% + 6px)"];
  let rangeIndex = 0;
  const milestoneMarkers = visibleMilestones
    .map((ms, msIndex) => {
      const mStart = boundedPct(ms.startDate);
      const isRange = ms.startDate !== ms.endDate;
      const isFuture = ms.startDate > today;
      const dateLabel = isRange
        ? `${formatDateLabel(ms.startDate)} ~ ${formatDateLabel(ms.endDate)}`
        : formatDateLabel(ms.startDate);
      if (isRange) {
        const mEnd = boundedPct(ms.endDate);
        const spanWidth = Math.max(mEnd - mStart, 0);
        if (spanWidth < 0.05) return "";
        const topStyle = rangeTopLevels[rangeIndex % rangeTopLevels.length];
        const isRangeBelow = rangeIndex % 2 === 1;
        rangeIndex++;
        // 라벨을 span 바로 뒤에 배치해야 :hover + .ms-label CSS 셀렉터가 동작함
        const futureClass = isFuture ? " is-future" : "";
        const rangeHandles = `<button class="ms-range-handle ms-range-handle-start draggable-point${futureClass}" style="left:${mStart}%; top:${topStyle}" data-drag-kind="milestone-start" data-id="${escapeHtml(item.id)}" data-milestone-id="${escapeHtml(ms.id)}"></button><button class="ms-range-handle ms-range-handle-end draggable-point${futureClass}" style="left:${mEnd}%; top:${topStyle}" data-drag-kind="milestone-end" data-id="${escapeHtml(item.id)}" data-milestone-id="${escapeHtml(ms.id)}"></button>`;
        let rangeInlineLabel = "";
        if (ms.label) {
          const lastRightPct = isRangeBelow ? lastBelowRightPct : lastAboveRightPct;
          const fit = fitInlineLabel(ms.label, mStart, lastRightPct);
          if (fit) {
            if (isRangeBelow) lastBelowRightPct = fit.rightEdge; else lastAboveRightPct = fit.rightEdge;
            rangeInlineLabel = `<span class="ms-inline-label ${isRangeBelow ? "ms-inline-label-below" : "ms-inline-label-above"}" style="left:${mStart}%">${escapeHtml(fit.text)}</span>`;
          }
        }
        return `<span class="ms-span ms-span-range${isFuture ? " is-future" : ""}" style="left:${mStart}%; width:${spanWidth}%; top:${topStyle}" data-drag-kind="milestone" data-id="${escapeHtml(item.id)}" data-milestone-id="${escapeHtml(ms.id)}" aria-label="${escapeHtml(item.title)}: ${escapeHtml(ms.label)}"></span><span class="ms-label" style="left:${mStart}%">${escapeHtml(dateLabel)} ${escapeHtml(ms.label)}</span>${rangeHandles}${rangeInlineLabel}`;
      }
      // 로그아웃 상태: 위아래 교대로 표시, 겹치면 점진 축약해서 표시
      let inlineLabel = "";
      if (!isStaff && ms.label) {
        const isBelow = msIndex % 2 === 1;
        const lastRightPct = isBelow ? lastBelowRightPct : lastAboveRightPct;
        const fit = fitInlineLabel(ms.label, mStart, lastRightPct);
        if (fit) {
          if (isBelow) lastBelowRightPct = fit.rightEdge; else lastAboveRightPct = fit.rightEdge;
          inlineLabel = `<span class="ms-inline-label ${isBelow ? "ms-inline-label-below" : "ms-inline-label-above"}" style="left:${mStart}%">${escapeHtml(fit.text)}</span>`;
        }
      }
      return `
        <button
          class="milestone draggable-point"
          style="left:${mStart}%"
          data-drag-kind="milestone"
          data-id="${escapeHtml(item.id)}"
          data-milestone-id="${escapeHtml(ms.id)}"
          aria-label="${escapeHtml(item.title)}: ${escapeHtml(ms.label)}"
        ></button>
        <span class="ms-label" style="left:${mStart}%">${escapeHtml(dateLabel)} ${escapeHtml(ms.label)}</span>
        ${inlineLabel}
      `;
    })
    .join("");

  // 로그인 상태: 박스 위에 소관, 아래에 담당자
  const ownerLabel = isStaff && item.owner
    ? `<span class="bar-meta bar-meta-above" style="left:${start}%">${escapeHtml(item.owner)}</span>`
    : "";
  const managerLabel = isStaff && item.manager
    ? `<span class="bar-meta bar-meta-below" style="left:${start}%">${escapeHtml(item.manager)}</span>`
    : "";

  return `
    <article
      class="lane ${isStaff && item.id === selectedItemId ? "is-selected" : ""} ${item.visible === false ? "is-hidden-item" : ""} ${item.complete === false ? "is-incomplete" : ""}"
      style="color:${category.color}"
      data-id="${escapeHtml(item.id)}"
      draggable="${isStaff}"
    >
      <div class="lane-meta">
        <h2>${escapeHtml(item.title)}</h2>
        <p class="lane-description">${escapeHtml(item.content)}</p>
      </div>
      <div class="lane-chart">
        ${ticks.map((tick) => `<span class="grid-line" style="left:${pct(tick)}%"></span>`).join("")}
        <span class="today-line" style="left:${todayPct}%"></span>
        <span
          class="bar"
          style="left:${start}%; width:${width}%"
          aria-hidden="true"
        ></span>
        <span class="endpoint start-point draggable-point${startOutside ? ' clipped' : ''}" style="left:${start}%" data-drag-kind="start" data-id="${escapeHtml(item.id)}"></span>
        <span class="endpoint end-point draggable-point${endOutside ? ' clipped' : ''}" style="left:${end}%" data-drag-kind="end" data-id="${escapeHtml(item.id)}"></span>
        ${ownerLabel}${managerLabel}
        ${milestoneMarkers}
      </div>
    </article>
  `;
}

function renderTimeline() {
  const rows = filteredItems();

  if (!rows.length) {
    timeline.innerHTML = '<div class="empty">조건에 맞는 업무가 없습니다.</div>';
    return;
  }

  const tickData = monthTicks();
  const ticks = tickData.map((tick) => tick.date);
  const visibleGroups =
    activeCategory === "all"
      ? categoryGroups
      : categoryGroups.filter((category) => category.id === activeCategory);

  timeline.innerHTML = visibleGroups
    .map((group) => {
      const groupRows = rows.filter((item) => item.category === group.id);
      const groupNumber = categoryGroups.findIndex((category) => category.id === group.id) + 1;
      return `
        <section
          class="category-section"
          style="--group-color:${group.color}"
          data-category="${group.id}"
        >
          <header class="category-section-head">
            <div class="category-section-title">
              <div>
                <span>${groupNumber}</span>
                <h3>${group.label}</h3>
              </div>
            </div>
            <div class="group-calendar" aria-hidden="true">
              ${renderCalendarScale(tickData)}
            </div>
          </header>
          ${
            groupRows.length
              ? groupRows.map((item) => renderLane(item, ticks)).join("")
              : '<div class="empty group-empty">조건에 맞는 업무가 없습니다.</div>'
          }
        </section>
      `;
    })
    .join("");
  requestAnimationFrame(updateTimelineScrollbar);
}

function updateTimelineScrollbar() {
  if (!timelinePanel || !timelineScrollbar || !timelineScrollbarInner) return;
  const rect = timelinePanel.getBoundingClientRect();
  const hasOverflow = timelinePanel.scrollWidth > timelinePanel.clientWidth + 1;
  timelineScrollbar.hidden = !hasOverflow;
  if (!hasOverflow) return;
  const axisLabelWidth = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--axis-label")) || 0;
  const left = Math.max(rect.left + axisLabelWidth, 0);
  const width = Math.max(0, Math.min(rect.width - axisLabelWidth, window.innerWidth - left));
  timelineScrollbar.hidden = width <= 0;
  timelineScrollbar.style.left = `${left}px`;
  timelineScrollbar.style.width = `${width}px`;
  timelineScrollbarInner.style.width = `${Math.max(width, timelinePanel.scrollWidth - axisLabelWidth)}px`;
  timelineScrollbar.scrollLeft = timelinePanel.scrollLeft;
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderTimeline();
});

searchInput.addEventListener("input", renderTimeline);
timelinePanel.addEventListener("scroll", () => {
  timelineScrollbar.scrollLeft = timelinePanel.scrollLeft;
});
timelineScrollbar.addEventListener("scroll", () => {
  timelinePanel.scrollLeft = timelineScrollbar.scrollLeft;
});
window.addEventListener("resize", updateTimelineScrollbar);
window.addEventListener("scroll", updateTimelineScrollbar, { passive: true });
taskForm.addEventListener("submit", saveTask);
newTaskButton.addEventListener("click", startNewTask);
deleteButton.addEventListener("click", deleteSelectedTask);
duplicateButton.addEventListener("click", duplicateSelectedTask);
function itemToMarkdown(item) {
  const cat = categoryById[item.category]?.label || item.category;
  const dateRange = item.start === item.end
    ? item.start
    : `${item.start} ~ ${item.end}`;
  const lines = [
    `# ${item.title}`,
    ``,
    `| 항목 | 내용 |`,
    `|------|------|`,
    `| 업무 그룹 | ${cat} |`,
    `| 소관 | ${item.owner || "-"} |`,
  ];
  if (item.manager) lines.push(`| 담당자 | ${item.manager} |`);
  lines.push(
    `| 기간 | ${dateRange} |`,
    `| 공개 여부 | ${item.visible !== false ? "공개" : "비공개"} |`,
    `| 완료 여부 | ${item.complete !== false ? "완료" : "미완료"} |`,
  );
  if (item.content) {
    lines.push(``, `## 업무 내용`, ``, item.content);
  }
  if (item.milestones?.length) {
    lines.push(``, `## 주요 일정`, ``);
    item.milestones.forEach((ms) => {
      const dateRange = ms.endDate && ms.endDate !== ms.startDate
        ? `**${ms.startDate}** ~ **${ms.endDate}**`
        : `**${ms.startDate}**`;
      lines.push(`- ${dateRange} ${ms.label}`);
    });
  }
  return lines.join("\n");
}

function downloadMarkdown(item) {
  const md = itemToMarkdown(item);
  const blob = new Blob([md], { type: "text/plain; charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  const safeName = (item.title || "task").replace(/[/\\?%*:|"<>]/g, "_");
  a.download = `${safeName}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

// 에디터 내려받기: 현재 선택된 업무를 마크다운으로 저장
downloadButton.addEventListener("click", () => {
  const item = getSelectedItem();
  if (!item) return;
  downloadMarkdown(item);
});

// ── 마크다운 업로드 ───────────────────────────────────────────────────────
function parseMarkdownToForm(text) {
  const lines = text.split("\n");
  const result = {};

  // # 제목
  const titleLine = lines.find((l) => l.startsWith("# "));
  if (titleLine) result.title = titleLine.slice(2).trim();

  // 표 행 파싱
  for (const line of lines) {
    const m = line.match(/^\|\s*(.+?)\s*\|\s*(.+?)\s*\|/);
    if (!m) continue;
    const key = m[1].trim();
    const val = m[2].trim();
    if (key === "항목" || /^[-:]+$/.test(key)) continue;
    switch (key) {
      case "업무 그룹": {
        const cat = categories.find((c) => c.label === val);
        if (cat) result.category = cat.id;
        break;
      }
      case "소관":
        result.owner = val === "-" ? "" : val;
        break;
      case "담당자":
        result.manager = val === "-" ? "" : val;
        break;
      case "기간": {
        const parts = val.split("~").map((s) => s.trim());
        if (parts[0]) result.start = parts[0];
        result.end = parts[1] || parts[0] || result.start;
        break;
      }
      case "공개 여부":
        result.visible = val === "공개";
        break;
      case "완료 여부":
        result.complete = val === "완료";
        break;
    }
  }

  // ## 섹션 파싱
  let section = null;
  const sectionLines = {};
  const milestones = [];
  for (const line of lines) {
    if (line.startsWith("## ")) {
      section = line.slice(3).trim();
      sectionLines[section] = [];
    } else if (section === "주요 일정") {
      const ms = line.match(/^-\s+\*\*(.+?)\*\*(?:\s*~\s*\*\*(.+?)\*\*)?\s*(.*)/);
      if (ms) milestones.push({ id: createId("milestone"), startDate: ms[1], endDate: ms[2] || ms[1], label: ms[3].trim() });
    } else if (section) {
      sectionLines[section].push(line);
    }
  }
  if (sectionLines["업무 내용"] !== undefined)
    result.content = sectionLines["업무 내용"].join("\n").trim();
  if (milestones.length) result.milestones = milestones;

  return result;
}

function applyParsedToForm(parsed) {
  if (parsed.title !== undefined) taskTitle.value = parsed.title;
  if (parsed.category !== undefined) taskCategory.value = parsed.category;
  if (parsed.owner !== undefined) renderOwnerOptions(parsed.owner);
  if (parsed.manager !== undefined) taskManager.value = parsed.manager;
  if (parsed.start !== undefined) taskStart.value = parsed.start;
  if (parsed.end !== undefined) taskEnd.value = parsed.end;
  if (parsed.visible !== undefined) taskTentative.checked = parsed.visible;
  if (parsed.complete !== undefined) taskComplete.checked = parsed.complete;
  if (parsed.content !== undefined) taskContent.value = parsed.content;
  if (parsed.milestones !== undefined) renderMilestoneRows(parsed.milestones);
}

uploadButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".md,text/markdown,text/plain";
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = parseMarkdownToForm(reader.result);
      applyParsedToForm(parsed);
    };
    reader.readAsText(file, "utf-8");
  });
  input.click();
});
// ─────────────────────────────────────────────────────────────────────────────

// ── 업무 상세 팝업 ────────────────────────────────────────────────────────
const taskModal = document.querySelector("#taskModal");
const taskModalTitle = document.querySelector("#taskModalTitle");
const taskModalBody = document.querySelector("#taskModalBody");
const taskModalClose = document.querySelector("#taskModalClose");
const taskModalDownload = document.querySelector("#taskModalDownload");
let modalItem = null;

function openTaskModal(item) {
  modalItem = item;
  taskModalTitle.textContent = item.title;
  taskModalBody.textContent = itemToMarkdown(item);
  taskModal.hidden = false;
  taskModalClose.focus();
}

function closeTaskModal() {
  taskModal.hidden = true;
  modalItem = null;
}

taskModalClose.addEventListener("click", closeTaskModal);
taskModal.querySelector(".task-modal-backdrop").addEventListener("click", closeTaskModal);
taskModalDownload.addEventListener("click", () => {
  if (modalItem) downloadMarkdown(modalItem);
});
reviewCloseButton.addEventListener("click", closeReviewModal);
reviewModalBackdrop.addEventListener("click", closeReviewModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!taskModal.hidden) closeTaskModal();
    else if (!reviewModalBackdrop.hidden) closeReviewModal();
  }
});
// ─────────────────────────────────────────────────────────────────────────────

function openLoginPanel() {
  if (storageMode === "github") {
    staffPasswordLabel.textContent = "GitHub Access Token";
    staffPassword.placeholder = "github_pat_...";
  } else {
    staffPasswordLabel.textContent = "비밀번호";
    staffPassword.placeholder = "";
  }
  loginMessage.textContent = "";
  loginPanel.hidden = false;
  staffPassword.focus();
}

staffLoginButton.addEventListener("click", async () => {
  if (storageMode === "local") return;
  if (storageMode === "api") {
    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ user: "admin", password: "osti2026" }),
      });
      if (response.ok) {
        isStaff = true;
        renderAuthState();
        renderEditor();
        renderTimeline();
      }
    } catch (e) {
      console.error("로그인 실패", e);
    }
    return;
  }
  openLoginPanel();
});

loginCloseButton.addEventListener("click", () => {
  loginPanel.hidden = true;
  loginForm.reset();
  loginMessage.textContent = "";
});

staffLogoutButton.addEventListener("click", async () => {
  if (storageMode === "api") {
    await fetch("api/logout", {
      method: "POST",
      credentials: "same-origin",
    }).catch((error) => {
      console.error("로그아웃 요청을 처리하지 못했습니다.", error);
    });
  }
  if (storageMode === "github") {
    githubToken = "";
    githubFileSha = "";
    sessionStorage.removeItem("github_token");
  }
  isStaff = false;
  selectedItemId = "";
  renderAuthState();
  renderTimeline();
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // github 모드: PAT를 GitHub API로 검증 후 저장
  if (storageMode === "github") {
    const token = staffPassword.value.trim();
    if (!token) {
      loginMessage.textContent = "GitHub Access Token을 입력해 주세요.";
      return;
    }
    loginMessage.textContent = "토큰 확인 중...";
    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/tasks.json`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (!res.ok) {
        loginMessage.textContent =
          res.status === 401 ? "토큰이 유효하지 않습니다." :
          res.status === 403 ? "이 저장소에 쓰기 권한이 없습니다." :
          `인증 실패 (오류 ${res.status})`;
        return;
      }
      const data = await res.json();
      githubFileSha = data.sha;
      githubToken = token;
      sessionStorage.setItem("github_token", token);
      isStaff = true;
      loginForm.reset();
      loginPanel.hidden = true;
      loginMessage.textContent = "";
      renderAuthState();
      renderEditor();
      renderTimeline();
    } catch (e) {
      loginMessage.textContent = "GitHub API에 연결하지 못했습니다.";
    }
    return;
  }

  // readonly 모드: 클라이언트 사이드 인증
  if (storageMode === "readonly") {
    const ok = staffPassword.value === "osti2026";
    if (!ok) {
      loginMessage.textContent = "직원 ID와 비밀번호를 확인하세요.";
      return;
    }
    isStaff = true;
    loginForm.reset();
    loginPanel.hidden = true;
    renderAuthState();
    renderTimeline();
    return;
  }

  if (storageMode !== "api") return;

  try {
    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({
        user: "admin",
        password: staffPassword.value,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      loginMessage.textContent = error.message || "직원 ID와 비밀번호를 확인하세요.";
      return;
    }

    isStaff = true;
    loginForm.reset();
    loginPanel.hidden = true;
    loginMessage.textContent = "";
    renderAuthState();
    renderEditor();
    renderTimeline();
  } catch (error) {
    loginMessage.textContent = "로그인 서버에 연결하지 못했습니다.";
  }
});

milestoneRows.addEventListener("focus", (event) => {
  const input = event.target.closest('[data-field="startDate"]');
  if (input) input.dataset.prevValue = input.value;
}, true);

milestoneRows.addEventListener("change", (event) => {
  const input = event.target.closest('[data-field="startDate"]');
  if (!input) return;
  const row = input.closest(".milestone-row");
  if (!row) return;
  const endInput = row.querySelector('[data-field="endDate"]');
  if (!endInput.value || endInput.value === (input.dataset.prevValue ?? "")) {
    endInput.value = input.value;
  }
});

milestoneRows.addEventListener("click", (event) => {
  if (!isStaff) return;
  const button = event.target.closest("[data-action]");
  if (!button) return;

  if (button.dataset.action === "add-milestone") {
    const d = taskStart.value || "2026-05-01";
    const newMs = { id: createId("milestone"), startDate: d, endDate: d, label: "" };
    const milestones = readMilestonesFromForm();
    milestones.push(newMs);
    renderMilestoneRows(milestones);
    milestoneRows.querySelector(`[data-milestone-id="${newMs.id}"] [data-field="label"]`)?.focus();
    return;
  }

  if (button.dataset.action === "add-after-milestone") {
    const row = button.closest(".milestone-row");
    const milestones = readMilestonesFromForm();
    const idx = milestones.findIndex((m) => m.id === row.dataset.milestoneId);
    const d = row.querySelector('[data-field="startDate"]').value || taskStart.value || "2026-05-01";
    const newMs = { id: createId("milestone"), startDate: d, endDate: d, label: "" };
    milestones.splice(idx === -1 ? milestones.length : idx + 1, 0, newMs);
    renderMilestoneRows(milestones);
    milestoneRows.querySelector(`[data-milestone-id="${newMs.id}"] [data-field="label"]`)?.focus();
    return;
  }

  if (button.dataset.action === "remove-milestone") {
    const row = button.closest(".milestone-row");
    row.remove();
    if (!milestoneRows.querySelector(".milestone-row")) renderMilestoneRows([]);
  }
});

let rowDragState = null;
let didDragRow = false;

let dragState = null;
const dragDateTooltip = document.createElement("div");
dragDateTooltip.className = "drag-date-tooltip";
document.body.append(dragDateTooltip);

function moveDragPoint(event) {
  if (!dragState) return;
  const nextDate = dateFromChartEvent(event, dragState.chart);
  const nextIsoDate = isoDate(nextDate);
  const nextPct = boundedPct(nextIsoDate);
  dragState.target.style.left = `${nextPct}%`;
  if (dragState.target.dataset.dragKind === "start" || dragState.target.dataset.dragKind === "end") {
    const startPoint = dragState.chart.querySelector(".start-point");
    const endPoint = dragState.chart.querySelector(".end-point");
    const startPct = parseFloat(startPoint.style.left) || 0;
    const endPct = parseFloat(endPoint.style.left) || 0;
    const bar = dragState.chart.querySelector(".bar");
    bar.style.left = `${Math.min(startPct, endPct)}%`;
    bar.style.width = `${Math.max(Math.abs(endPct - startPct), 0.8)}%`;
  }
  if (dragState.target.dataset.dragKind === "milestone-start" || dragState.target.dataset.dragKind === "milestone-end") {
    const msId = dragState.target.dataset.milestoneId;
    const span = dragState.chart.querySelector(`.ms-span-range[data-milestone-id="${msId}"]`);
    const startHandle = dragState.chart.querySelector(`.ms-range-handle-start[data-milestone-id="${msId}"]`);
    const endHandle = dragState.chart.querySelector(`.ms-range-handle-end[data-milestone-id="${msId}"]`);
    if (span && startHandle && endHandle) {
      const sPct = parseFloat(startHandle.style.left) || 0;
      const ePct = parseFloat(endHandle.style.left) || 0;
      span.style.left = `${Math.min(sPct, ePct)}%`;
      span.style.width = `${Math.max(Math.abs(ePct - sPct), 0.1)}%`;
    }
  }
  dragDateTooltip.textContent = formatDateLabel(nextIsoDate);
  dragDateTooltip.style.left = `${event.clientX}px`;
  dragDateTooltip.style.top = `${event.clientY}px`;
}

function finishDragPoint(event) {
  if (!dragState) return;
  moveDragPoint(event);
  const nextIsoDate = isoDate(dateFromChartEvent(event, dragState.chart));
  updateItemDateFromDrag(dragState.target, nextIsoDate);
  dragState.target.releasePointerCapture?.(event.pointerId);
  dragState = null;
  dragDateTooltip.classList.remove("is-visible");
  renderTimeline();
}

timeline.addEventListener("pointerdown", (event) => {
  const target = event.target.closest(".draggable-point");
  if (!target || !isStaff) return;
  event.preventDefault();
  event.stopPropagation();
  dragState = {
    target,
    chart: target.closest(".lane-chart"),
  };
  target.setPointerCapture?.(event.pointerId);
  dragDateTooltip.classList.add("is-visible");
  moveDragPoint(event);
});

timeline.addEventListener("pointermove", (event) => {
  if (!dragState) return;
  event.preventDefault();
  moveDragPoint(event);
});

timeline.addEventListener("pointerup", finishDragPoint);
timeline.addEventListener("pointercancel", (event) => {
  if (!dragState) return;
  dragState.target.releasePointerCapture?.(event.pointerId);
  dragState = null;
  dragDateTooltip.classList.remove("is-visible");
  renderTimeline();
});

timeline.addEventListener("dragstart", (event) => {
  const lane = event.target.closest(".lane[data-id]");
  if (!lane || !isStaff || event.target.closest(".draggable-point")) {
    event.preventDefault();
    return;
  }

  rowDragState = {
    id: lane.dataset.id,
  };
  didDragRow = true;
  lane.classList.add("is-row-dragging");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", lane.dataset.id);
});

timeline.addEventListener("dragover", (event) => {
  if (!rowDragState || !isStaff) return;
  const section = event.target.closest(".category-section[data-category]");
  if (!section) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  timeline.querySelectorAll(".category-section.is-drop-target").forEach((candidate) => {
    if (candidate !== section) candidate.classList.remove("is-drop-target");
  });
  section.classList.add("is-drop-target");
});

timeline.addEventListener("drop", (event) => {
  if (!rowDragState || !isStaff) return;
  const section = event.target.closest(".category-section[data-category]");
  if (!section) return;
  event.preventDefault();
  moveItemToGroup(rowDragState.id, section.dataset.category);
  rowDragState = null;
  setTimeout(() => {
    didDragRow = false;
  }, 0);
  timeline.querySelectorAll(".is-row-dragging, .is-drop-target").forEach((element) => {
    element.classList.remove("is-row-dragging", "is-drop-target");
  });
});

timeline.addEventListener("dragend", () => {
  rowDragState = null;
  setTimeout(() => {
    didDragRow = false;
  }, 0);
  timeline.querySelectorAll(".is-row-dragging, .is-drop-target").forEach((element) => {
    element.classList.remove("is-row-dragging", "is-drop-target");
  });
});

timeline.addEventListener("click", (event) => {
  if (didDragRow) {
    didDragRow = false;
    return;
  }
  if (event.target.closest(".draggable-point")) return;

  // 업무명(h2) 클릭
  const titleEl = event.target.closest(".lane-meta h2");
  if (titleEl) {
    const lane = titleEl.closest(".lane[data-id]");
    if (lane) {
      const item = items.find((candidate) => candidate.id === lane.dataset.id);
      if (item) {
        selectItem(item.id);
        return;
      }
    }
  }

});

function printTasks() {
  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function fmtDate(d) {
    return d ? formatDateLabel(d) : "";
  }

  const printableItems = items
    .filter((item) => item.visible !== false)
    .sort((a, b) => {
      const diff = dateValue(a.start) - dateValue(b.start);
      return diff !== 0 ? diff : a.title.localeCompare(b.title, "ko");
    });

  const groups = categoryGroups
    .map((cat) => ({
      ...cat,
      tasks: printableItems.filter((item) => item.category === cat.id),
    }))
    .filter((g) => g.tasks.length > 0);

  const today = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });

  const tocHtml = `<section class="toc">
    <h2 class="toc-heading">목 차</h2>
    <div class="toc-body">
      ${groups
        .map((group, gi) => `
          <div class="toc-chapter">
            <div class="toc-chapter-title" style="--cat:${group.color}">
              <span class="toc-num">${gi + 1}장</span>
              <span class="toc-label">${esc(group.label)}</span>
            </div>
            <ol class="toc-tasks">
              ${group.tasks.map((task) => `<li>${esc(task.title)}</li>`).join("")}
            </ol>
          </div>
        `)
        .join("")}
    </div>
  </section>`;

  const chaptersHtml = groups
    .map((group, gi) => {
      const tasksHtml = group.tasks
        .map((task) => {
          const msHtml = task.milestones.length
            ? `<div class="ms-section">
                <div class="ms-title">주요 일정</div>
                ${task.milestones
                  .map((ms) => {
                    const dateStr =
                      ms.startDate === ms.endDate
                        ? fmtDate(ms.startDate)
                        : `${fmtDate(ms.startDate)} ~ ${fmtDate(ms.endDate)}`;
                    return `<div class="ms-item"><span class="ms-date">${esc(dateStr)}</span><span>${esc(ms.label)}</span></div>`;
                  })
                  .join("")}
              </div>`
            : "";
          return `<div class="task">
            <div class="task-title">${esc(task.title)}</div>
            <div class="task-meta">
              ${task.owner ? `<span>소관: ${esc(task.owner)}</span>` : ""}
              ${task.manager ? `<span>담당자: ${esc(task.manager)}</span>` : ""}
              <span>기간: ${fmtDate(task.start)} ~ ${fmtDate(task.end)}</span>
            </div>
            ${task.content ? `<div class="task-content">${esc(task.content).replace(/\n/g, "<br>")}</div>` : ""}
            ${msHtml}
          </div>`;
        })
        .join("");

      return `<section class="chapter" style="--cat:${group.color}">
        <div class="chapter-heading">
          <span class="chapter-num">${gi + 1}장</span>
          <span class="chapter-label">${esc(group.label)}</span>
        </div>
        ${tasksHtml}
      </section>`;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>과학기술혁신본부 업무 추진 현황</title>
<style>
  @page { size: A4 portrait; margin: 20mm 18mm 18mm; }
  * { box-sizing: border-box; }
  body { font-family: "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif; color: #1d2633; font-size: 13px; line-height: 1.6; margin: 0; }
  .cover { display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 80vh; text-align: center; page-break-after: always; }
  .cover-org { font-size: 13px; color: #667085; margin-bottom: 20px; }
  .cover h1 { font-size: 28px; font-weight: 900; margin: 0 0 16px; line-height: 1.35; color: #1a2f4e; }
  .cover-date { font-size: 12px; color: #aaa; margin-top: 32px; }
  .chapter { page-break-before: always; }
  .chapter-heading { display: flex; align-items: baseline; gap: 12px; border-bottom: 3px solid var(--cat); padding-bottom: 10px; margin-bottom: 22px; }
  .chapter-num { font-size: 12px; font-weight: 700; color: var(--cat); opacity: 0.65; }
  .chapter-label { font-size: 20px; font-weight: 900; color: var(--cat); }
  .task { margin-bottom: 16px; padding: 13px 16px; border: 1px solid #e7ebf0; border-left: 4px solid var(--cat); border-radius: 6px; page-break-inside: avoid; }
  .task-title { font-size: 14px; font-weight: 800; color: var(--cat); margin-bottom: 6px; }
  .task-meta { display: flex; flex-wrap: wrap; gap: 16px; font-size: 11px; color: #667085; margin-bottom: 7px; }
  .task-content { font-size: 12px; color: #333; white-space: pre-wrap; }
  .ms-section { margin-top: 10px; border-top: 1px solid #f0f0f0; padding-top: 8px; }
  .ms-title { font-size: 10px; font-weight: 700; color: #aaa; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 5px; }
  .ms-item { display: flex; gap: 12px; font-size: 11px; padding: 3px 0; border-bottom: 1px dashed #f0f0f0; }
  .ms-date { color: #667085; min-width: 140px; flex-shrink: 0; }
  .toc { page-break-after: always; padding-top: 20px; }
  .toc-heading { font-size: 24px; font-weight: 900; color: #1a2f4e; border-bottom: 2px solid #1a2f4e; padding-bottom: 10px; margin-bottom: 28px; letter-spacing: 0.1em; }
  .toc-body { display: flex; flex-direction: column; gap: 20px; }
  .toc-chapter { page-break-inside: avoid; }
  .toc-chapter-title { display: flex; align-items: baseline; gap: 10px; margin-bottom: 8px; }
  .toc-num { font-size: 12px; font-weight: 700; color: var(--cat); opacity: 0.7; min-width: 28px; }
  .toc-label { font-size: 16px; font-weight: 900; color: var(--cat); }
  .toc-tasks { margin: 0; padding-left: 42px; list-style: none; }
  .toc-tasks li { font-size: 12px; color: #444; padding: 3px 0; border-bottom: 1px dotted #e7ebf0; }
  .toc-tasks li::before { content: "· "; color: #aaa; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style>
</head>
<body>
<div class="cover">
  <p class="cover-org">과학기술정보통신부 · 과학기술혁신본부</p>
  <h1>한눈에 보는<br>과학기술혁신본부<br>업무 추진 현황</h1>
  <p class="cover-date">인쇄일: ${today}</p>
</div>
${tocHtml}
${chaptersHtml}
</body>
</html>`;

  const win = window.open("", "_blank", "width=960,height=720");
  if (!win) {
    alert("팝업이 차단되어 있습니다. 팝업 허용 후 다시 시도해 주세요.");
    return;
  }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 600);
}

printButton.addEventListener("click", printTasks);

async function init() {
  items = await loadItems();
  if (storageMode === "local" && canWrite) {
    isStaff = true;
    await restoreDirHandle();
  } else if (storageMode === "github") {
    if (githubToken) isStaff = true; // sessionStorage에서 복원된 토큰이 있으면 로그인 유지
  } else {
    await refreshStaffSession();
  }
  selectedItemId = items[0]?.id ?? "";
  renderCategoryOptions();
  renderOwnerOptions();
  renderFilters();
  renderAuthState();
  renderEditor();
  renderTimeline();
}

init();
