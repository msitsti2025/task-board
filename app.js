const categories = [
  { id: "all", label: "전체", color: "#1d2633" },
  { id: "science-policy", label: "기획/정책/전략수립 업무", color: "#2563eb" },
  { id: "budget-review", label: "예산/투자/심의조정 업무", color: "#0f766e" },
  { id: "rnd-management", label: "평가/제도/정보분석 업무", color: "#b45309" },
  { id: "outreach", label: "대외/홍보/현장소통 업무", color: "#7c3aed" },
];

const categoryGroups = categories.filter((category) => category.id !== "all");
const ownerOptions = [
  "과학기술정책과",
  "과학기술전략과",
  "과학기술정책조정과",
  "전략기술육성과",
  "연구예산총괄과",
  "연구개발투자기획과",
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
    category: "policy",
    title: "국가전략기술 체계 고도화 방향 발표",
    owner: "전략기술육성과",
    start: "2026-04-27",
    end: "2026-04-27",
    content: "기존 국가전략기술 체계를 국가임무, 범부처 협업 중심으로 재편.",
    milestones: [{ date: "2026-04-27", label: "고도화 방향 발표" }],
  },
  {
    category: "policy",
    title: "국가전략기술 선도 NEXT 프로젝트",
    owner: "전략기술육성과",
    start: "2026-04-30",
    end: "2026-04-30",
    content: "국가전략기술 육성을 위한 핵심사업 집중 지원 및 민관 얼라이언스 구축.",
    milestones: [{ date: "2026-04-30", label: "NEXT 프로젝트 보도" }],
  },
  {
    category: "system",
    title: "연구비 집행 자율성 확대",
    owner: "연구제도혁신과",
    start: "2026-04-28",
    end: "2026-04-28",
    content:
      "자율사용 비목 신설, 간접비 네거티브 전환 등 연구비 사용 자율성을 강화하고 사용불가 항목 외 연구 관련 모든 항목을 허용하는 방향으로 전환.",
    milestones: [{ date: "2026-04-28", label: "혁신법 시행령 개정 보도" }],
  },
  {
    category: "field",
    title: "R&D-IP 정책 협의회 개최",
    owner: "과학기술조정과",
    start: "2026-05-07",
    end: "2026-05-07",
    content: "R&D 및 연구성과 간 연계 전략 고도화를 위한 R&D-IP 총괄 부처 간 정책 협의.",
    milestones: [{ date: "2026-05-07", label: "정책 협의회" }],
  },
  {
    category: "field",
    title: "권역별 주요 R&D 정책간담회",
    owner: "과학기술정책과",
    start: "2026-05-08",
    end: "2026-05-08",
    content: "호남권 GIST 타운홀미팅을 통해 연구 현장과 직접 소통하고 주요 R&D 정책 방향 공유.",
    milestones: [{ date: "2026-05-08", label: "GIST 타운홀미팅" }],
  },
  {
    category: "system",
    title: "구축형 R&D 심사 시행 관련 시행령·세부지침",
    owner: "연구개발타당성심사팀",
    start: "2026-05-11",
    end: "2026-05-11",
    content: "예타폐지 후속 조치를 위한 과학기술기본법 시행령 개정 및 운용지침 제정.",
    milestones: [{ date: "2026-05-11", label: "시행령 개정 및 지침 제정 보도" }],
  },
  {
    category: "policy",
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
    category: "policy",
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
    category: "law",
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
    category: "law",
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
    category: "field",
    title: "구축형 R&D 심사제도 설명회",
    owner: "연구개발타당성심사팀",
    start: "2026-05-12",
    end: "2026-05-12",
    content: "과학기술분야 학회를 대상으로 구축형 R&D 심사제도를 설명하고 현장 이해도를 높임.",
    milestones: [{ date: "2026-05-12", label: "심사제도 설명회" }],
  },
  {
    category: "field",
    title: "구축형 R&D 심사제도 시행",
    owner: "연구개발타당성심사팀",
    start: "2026-05-15",
    end: "2026-05-15",
    content: "연구 현장의 수요를 반영한 구축형 R&D 기획 및 심사제도 운영에 대한 현장 반응과 환영 메시지 확산.",
    milestones: [{ date: "2026-05-15", label: "기고" }],
  },
  {
    category: "policy",
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
    category: "system",
    title: "R&D 행정서식 간소화",
    owner: "연구제도혁신과",
    start: "2026-05-01",
    end: "2026-05-31",
    tentative: true,
    content: "연구자 행정부담 완화를 위해 불요·중복 서식을 표준화하고 간소화.",
    milestones: [{ date: "2026-05-15", label: "간소화 방안 보도" }],
  },
  {
    category: "system",
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
    category: "system",
    title: "가칭 연구24 통합로그인체계 구축",
    owner: "과학기술정보분석과",
    start: "2026-06-01",
    end: "2026-06-10",
    tentative: true,
    content: "주요 국가 R&D 시스템들의 로그인 창구를 단일화하는 연구24 구축.",
    milestones: [{ date: "2026-06-05", label: "통합로그인체계 구축 보도" }],
  },
  {
    category: "policy",
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
    category: "system",
    title: "AI 기반 장비검색시스템(ZEUS 3.0) 구축",
    owner: "연구평가혁신과",
    start: "2026-06-01",
    end: "2026-06-30",
    tentative: true,
    content: "AI 기반 장비검색시스템을 도입해 연구자들이 공공장비를 더 쉽게 활용하도록 제공.",
    milestones: [{ date: "2026-06-30", label: "6월말 검토" }],
  },
  {
    category: "system",
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
    category: "policy",
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
    category: "law",
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
    category: "system",
    title: "도전적 목표 미달성 과제 재도약 지원",
    owner: "연구평가혁신과",
    start: "2026-07-01",
    end: "2026-07-31",
    tentative: true,
    content: "도전적 목표를 미달성한 과제도 우수성 평가를 통해 재도약을 지원하는 제도 개선 검토.",
    milestones: [{ date: "2026-07-15", label: "재도약 지원 검토" }],
  },
  {
    category: "law",
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
    category: "system",
    title: "연구자 중복정보입력 최소화",
    owner: "과학기술정보분석과",
    start: "2026-07-01",
    end: "2026-09-30",
    tentative: true,
    content: "IRIS와 기관 자체 시스템 간 정보연계를 강화해 연구자 중복정보 입력을 최소화.",
    milestones: [{ date: "2026-09-30", label: "정보연계 강화 검토" }],
  },
  {
    category: "system",
    title: "국제공동연구 연구비 관리 및 IP 확보 제도개선",
    owner: "성과평가정책과 · 연구제도혁신과",
    start: "2026-07-01",
    end: "2026-09-30",
    tentative: true,
    content: "국제공동연구 연구비 관리 강화와 IP 확보를 위한 제도개선 검토.",
    milestones: [{ date: "2026-09-30", label: "제도개선 검토" }],
  },
  {
    category: "system",
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
const legacyStorageKey = "osti-dashboard-items-v1";
const isDirectFileHost = isLocalEditableHost();
const isLoopbackHost = ["localhost", "127.0.0.1", "::1"].includes(location.hostname);
let activeCategory = "all";
let items = [];
let selectedItemId = "";
let storageMode = "readonly";
let isStaff = false;
let canWrite = false;

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
const taskContent = document.querySelector("#taskContent");
const milestoneRows = document.querySelector("#milestoneRows");
const addMilestoneButton = document.querySelector("#addMilestoneButton");
const newTaskButton = document.querySelector("#newTaskButton");
const duplicateButton = document.querySelector("#duplicateButton");
const deleteButton = document.querySelector("#deleteButton");
const exportButton = document.querySelector("#exportButton");
const editorPanel = document.querySelector("#editorPanel");
const staffLoginButton = document.querySelector("#staffLoginButton");
const staffLogoutButton = document.querySelector("#staffLogoutButton");
const loginPanel = document.querySelector("#loginPanel");
const loginForm = document.querySelector("#loginForm");
const staffId = document.querySelector("#staffId");
const staffPassword = document.querySelector("#staffPassword");
const loginMessage = document.querySelector("#loginMessage");
const taskImpact = document.querySelector("#taskImpact");

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
    tentative: false,
    content: item.content || "",
    impact: item.impact || inferImpact(item),
    milestones: (item.milestones || []).map((milestone) => ({
      id: milestone.id || createId("milestone"),
      date: milestone.date || item.start || "2026-05-01",
      label: milestone.label || "마일스톤",
    })),
  }));
}

function inferImpact(item) {
  if (item.impact) return item.impact;
  const title = item.title || "해당 업무";
  const category = normalizeCategory(item);
  if (category === "budget-review") return `${title}이 완료되면 국가 R&D 투자 우선순위가 명확해지고 예산 심의의 전문성과 예측 가능성이 높아집니다.`;
  if (category === "rnd-management") return `${title}을 통해 연구 현장의 행정부담을 줄이고 성과관리와 제도 운영의 신뢰도를 높입니다.`;
  return `${title}이 완료되면 국가 R&D 정책 방향을 구체화하고 관련 기관의 실행력을 높입니다.`;
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

  try {
    const response = await fetch("tasks.json", { cache: "no-store" });
    if (response.ok) {
      const stored = await response.json();
      if (Array.isArray(stored)) {
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

function persistItems() {
  if (storageMode === "api" && canWrite && isStaff) {
    return fetch("api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items, null, 2),
      credentials: "same-origin",
    }).catch((error) => {
      console.error("데이터를 저장하지 못했습니다. node server.js로 실행했는지 확인하세요.", error);
    });
  }

  if (storageMode === "local") {
    try {
      localStorage.setItem(legacyStorageKey, JSON.stringify(items));
    } catch (error) {
      console.error("브라우저 저장소에 업무 데이터를 저장하지 못했습니다.", error);
    }
    return Promise.resolve();
  }

  return fetch("api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(items, null, 2),
    credentials: "same-origin",
  }).catch((error) => {
    console.error("데이터를 저장하지 못했습니다. node server.js로 실행했는지 확인하세요.", error);
  });
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
  const editable = canWrite;
  const apiMode = storageMode === "api";
  editorPanel.hidden = !editable || (apiMode && !isStaff);
  staffLoginButton.hidden = !editable || !apiMode || isStaff;
  staffLogoutButton.hidden = !editable || !apiMode || !isStaff;
  if (!editable || !apiMode || isStaff) {
    loginPanel.hidden = true;
    loginMessage.textContent = "";
  }
}

function emptyTask() {
  const today = "2026-05-01";
  return {
    id: "",
    category: "science-policy",
    title: "",
    owner: ownerOptions[0],
    manager: "",
    start: today,
    end: today,
    visible: true,
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
  editorTitle.textContent = current.id ? "업무 수정" : "새 업무 추가";
  taskId.value = current.id;
  taskTitle.value = current.title;
  taskCategory.value = current.category;
  renderOwnerOptions(current.owner);
  taskManager.value = current.manager || "";
  taskStart.value = current.start;
  taskEnd.value = current.end;
  taskTentative.checked = current.visible !== false;
  taskContent.value = current.content;
  taskImpact.value = current.impact || "";
  deleteButton.disabled = !current.id;
  duplicateButton.disabled = !current.id;
  renderMilestoneRows(current.milestones);
}

function renderMilestoneRows(milestones = []) {
  if (!milestones.length) {
    milestoneRows.innerHTML = '<p class="empty-small">주요 일정이 없습니다. 필요한 시점을 추가하세요.</p>';
    return;
  }

  milestoneRows.innerHTML = milestones
    .map(
      (milestone, index) => `
        <div class="milestone-row" data-milestone-id="${escapeHtml(milestone.id)}">
          <label>
            ${index === 0 ? "<span>주요일정 일자</span>" : ""}
            <input type="date" data-field="date" value="${escapeHtml(milestone.date)}" />
          </label>
          <label>
            ${index === 0 ? "<span>주요 일정 내용</span>" : ""}
            <input data-field="label" value="${escapeHtml(milestone.label)}" placeholder="주요 일정 내용" />
          </label>
          <button type="button" class="mini-button danger" data-action="remove-milestone">삭제</button>
        </div>
      `,
    )
    .join("");
}

function readMilestonesFromForm() {
  return [...milestoneRows.querySelectorAll(".milestone-row")]
    .map((row) => ({
      id: row.dataset.milestoneId || createId("milestone"),
      date: row.querySelector('[data-field="date"]').value,
      label: row.querySelector('[data-field="label"]').value.trim(),
    }))
    .filter((milestone) => milestone.date && milestone.label)
    .sort((a, b) => dateValue(a.date) - dateValue(b.date));
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
    tentative: false,
    content: taskContent.value.trim(),
    impact: taskImpact.value.trim(),
    milestones: readMilestonesFromForm(),
  };
}

function selectItem(id) {
  if (!isStaff) return;
  selectedItemId = id;
  renderEditor();
  renderTimeline();
}

function startNewTask() {
  if (!isStaff) return;
  selectedItemId = "";
  renderEditor(null);
  taskTitle.focus();
  renderTimeline();
}

function saveTask(event) {
  event.preventDefault();
  if (!isStaff) return;
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

let dashboardFileHandle = null;

async function exportItemsAsJson() {
  const json = JSON.stringify(items, null, 2);

  if (window.showSaveFilePicker) {
    try {
      if (!dashboardFileHandle) {
        dashboardFileHandle = await window.showSaveFilePicker({
          suggestedName: "tasks.json",
          types: [{ description: "JSON", accept: { "application/json": [".json"] } }],
        });
      }
      const writable = await dashboardFileHandle.createWritable();
      await writable.write(json);
      await writable.close();
      exportButton.textContent = "저장 완료 ✓";
      setTimeout(() => { exportButton.textContent = "JSON 업데이트"; }, 2000);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
      dashboardFileHandle = null;
      console.error("파일 저장에 실패했습니다.", error);
    }
  }

  // File System Access API를 지원하지 않는 브라우저: 다운로드로 대체
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "tasks.json";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
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
    if (milestone) milestone.date = nextIsoDate;
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
        item.impact,
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
  const todayPct = boundedPct(isoDate(new Date()));
  const width = Math.max(end - start, 0.8);
  const milestones = item.milestones
    .map(
      (milestone) => `
        <button
          class="milestone draggable-point"
          style="left:${boundedPct(milestone.date)}%"
          data-drag-kind="milestone"
          data-id="${escapeHtml(item.id)}"
          data-milestone-id="${escapeHtml(milestone.id)}"
          aria-label="${escapeHtml(item.title)}: ${escapeHtml(milestone.label)}"
        ></button>
        <span class="ms-label" style="left:${boundedPct(milestone.date)}%">${escapeHtml(milestone.label)}</span>
      `,
    )
    .join("");

  return `
    <article
      class="lane ${isStaff && item.id === selectedItemId ? "is-selected" : ""} ${item.visible === false ? "is-hidden-item" : ""}"
      style="color:${category.color}"
      data-id="${escapeHtml(item.id)}"
      draggable="${isStaff}"
    >
      <div class="lane-meta">
        <h2>${escapeHtml(item.title)}</h2>
        <p class="lane-description">${escapeHtml(item.impact || inferImpact(item))}</p>
      </div>
      <div class="lane-chart">
        ${ticks.map((tick) => `<span class="grid-line" style="left:${pct(tick)}%"></span>`).join("")}
        <span class="today-line" style="left:${todayPct}%"></span>
        <span
          class="bar"
          style="left:${start}%; width:${width}%"
          aria-hidden="true"
        ></span>
        <span
          class="endpoint start-point draggable-point"
          style="left:${start}%"
          data-drag-kind="start"
          data-id="${escapeHtml(item.id)}"
          aria-label="${escapeHtml(item.title)} 시작일 ${escapeHtml(formatDateLabel(item.start))}"
        ></span>
        <span
          class="endpoint end-point draggable-point"
          style="left:${end}%"
          data-drag-kind="end"
          data-id="${escapeHtml(item.id)}"
          aria-label="${escapeHtml(item.title)} 완료일 ${escapeHtml(formatDateLabel(item.end))}"
        ></span>
        ${milestones}
        <p class="timeline-content" style="left:${start}%">${escapeHtml(item.content)}</p>
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
  updateTimelineScrollbar();
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
exportButton.addEventListener("click", exportItemsAsJson);

staffLoginButton.addEventListener("click", () => {
  if (storageMode !== "api") return;
  loginPanel.hidden = !loginPanel.hidden;
  if (!loginPanel.hidden) {
    if (!staffId.value.trim()) staffId.value = "admin";
    staffPassword.focus();
  }
});

staffLogoutButton.addEventListener("click", async () => {
  if (storageMode !== "api") return;
  await fetch("api/logout", {
    method: "POST",
    credentials: "same-origin",
  }).catch((error) => {
    console.error("로그아웃 요청을 처리하지 못했습니다.", error);
  });
  isStaff = false;
  selectedItemId = "";
  renderAuthState();
  renderTimeline();
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (storageMode !== "api") return;

  try {
    const response = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({
        user: staffId.value.trim(),
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
    renderAuthState();
    renderEditor();
    renderTimeline();
    return;
  } catch (error) {
    loginMessage.textContent = "로그인 서버에 연결하지 못했습니다.";
  }
});

addMilestoneButton.addEventListener("click", () => {
  if (!isStaff) return;
  const milestones = readMilestonesFromForm();
  milestones.push({
    id: createId("milestone"),
    date: taskStart.value || "2026-05-01",
    label: "",
  });
  renderMilestoneRows(milestones);
  const labels = milestoneRows.querySelectorAll('[data-field="label"]');
  labels[labels.length - 1]?.focus();
});

milestoneRows.addEventListener("click", (event) => {
  if (!isStaff) return;
  const button = event.target.closest('[data-action="remove-milestone"]');
  if (!button) return;
  const row = button.closest(".milestone-row");
  row.remove();
  if (!milestoneRows.querySelector(".milestone-row")) {
    renderMilestoneRows([]);
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
  const button = event.target.closest("[data-action]");
  if (button) {
    const id = button.dataset.id;
    if (button.dataset.action === "edit-task") {
      selectItem(id);
      if (isStaff) document.querySelector(".editor-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (button.dataset.action === "delete-task") {
      selectedItemId = id;
      renderEditor();
      deleteSelectedTask();
    }
    return;
  }

  const lane = event.target.closest(".lane[data-id]");
  if (!lane || !isStaff) return;
  selectItem(lane.dataset.id);
  document.querySelector(".editor-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

async function init() {
  items = await loadItems();
  if (storageMode === "local" && canWrite) isStaff = true;
  else await refreshStaffSession();
  selectedItemId = items[0]?.id ?? "";
  renderCategoryOptions();
  renderOwnerOptions();
  renderFilters();
  renderAuthState();
  renderEditor();
  renderTimeline();
}

init();
