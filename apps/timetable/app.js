const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
const fontDefaultsVersion = 1;
const safeSiteCopy = true;

const elements = {
  toggleTools: document.querySelector("#toggleTools"),
  undoAction: document.querySelector("#undoAction"),
  redoAction: document.querySelector("#redoAction"),
  weekStart: document.querySelector("#weekStart"),
  dayCount: document.querySelector("#dayCount"),
  sixthDayLabel: document.querySelector("#sixthDayLabel"),
  sixthDayDate: document.querySelector("#sixthDayDate"),
  bubbleColor: document.querySelector("#bubbleColor"),
  insertBubble: document.querySelector("#insertBubble"),
  insertBackPageImage: document.querySelector("#insertBackPageImage"),
  backPageImageInput: document.querySelector("#backPageImageInput"),
  toggleBackPage: document.querySelector("#toggleBackPage"),
  backPage: document.querySelector("#backPage"),
  backPageText: document.querySelector("#backPageText"),
  importBackPageDocx: document.querySelector("#importBackPageDocx"),
  backPageDocxInput: document.querySelector("#backPageDocxInput"),
  eventDay: document.querySelector("#eventDay"),
  eventText: document.querySelector("#eventText"),
  scheduleFont: document.querySelector("#scheduleFont"),
  labelFont: document.querySelector("#labelFont"),
  noticeFont: document.querySelector("#noticeFont"),
  selectionFont: document.querySelector("#selectionFont"),
  applySelectionFont: document.querySelector("#applySelectionFont"),
  selectionSize: document.querySelector("#selectionSize"),
  applySelectionSize: document.querySelector("#applySelectionSize"),
  selectionColor: document.querySelector("#selectionColor"),
  applySelectionColor: document.querySelector("#applySelectionColor"),
  applySelectionBold: document.querySelector("#applySelectionBold"),
  rubyText: document.querySelector("#rubyText"),
  applyRuby: document.querySelector("#applyRuby"),
  clearRuby: document.querySelector("#clearRuby"),
  applyEvent: document.querySelector("#applyEvent"),
  clearEvent: document.querySelector("#clearEvent"),
  highlightColor: document.querySelector("#highlightColor"),
  highlightText: document.querySelector("#highlightText"),
  clearHighlight: document.querySelector("#clearHighlight"),
  textAlign: document.querySelector("#textAlign"),
  applyTextAlign: document.querySelector("#applyTextAlign"),
  cellColor: document.querySelector("#cellColor"),
  applyCellColor: document.querySelector("#applyCellColor"),
  cellImageSize: document.querySelector("#cellImageSize"),
  presetImage: document.querySelector("#presetImage"),
  insertPresetImage: document.querySelector("#insertPresetImage"),
  insertCellImage: document.querySelector("#insertCellImage"),
  insertNoticeImage: document.querySelector("#insertNoticeImage"),
  resizeCellImage: document.querySelector("#resizeCellImage"),
  imageScaleSlider: document.querySelector("#imageScaleSlider"),
  imageScaleValue: document.querySelector("#imageScaleValue"),
  scheduleLineHeight: document.querySelector("#scheduleLineHeight"),
  scheduleLineHeightValue: document.querySelector("#scheduleLineHeightValue"),
  noticeLineHeight: document.querySelector("#noticeLineHeight"),
  noticeLineHeightValue: document.querySelector("#noticeLineHeightValue"),
  noticeBrGap: document.querySelector("#noticeBrGap"),
  noticeBrGapValue: document.querySelector("#noticeBrGapValue"),
  resetSpacing: document.querySelector("#resetSpacing"),
  autoBuildWeek: document.querySelector("#autoBuildWeek"),
  importSpecialRooms: document.querySelector("#importSpecialRooms"),
  specialRoomsInput: document.querySelector("#specialRoomsInput"),
  deleteCellImage: document.querySelector("#deleteCellImage"),
  cellImageInput: document.querySelector("#cellImageInput"),
  noticeImageInput: document.querySelector("#noticeImageInput"),
  prevWeek: document.querySelector("#prevWeek"),
  nextWeek: document.querySelector("#nextWeek"),
  addPeriod: document.querySelector("#addPeriod"),
  resetSample: document.querySelector("#resetSample"),
  printPage: document.querySelector("#printPage"),
  exportData: document.querySelector("#exportData"),
  importData: document.querySelector("#importData"),
  exportWord: document.querySelector("#exportWord"),
  exportPdf: document.querySelector("#exportPdf"),
  exportStatus: document.querySelector("#exportStatus"),
  importDataInput: document.querySelector("#importDataInput"),
  importAnnualSchedule: document.querySelector("#importAnnualSchedule"),
  applyAnnualSchedule: document.querySelector("#applyAnnualSchedule"),
  annualScheduleInput: document.querySelector("#annualScheduleInput"),
  importCurriculum: document.querySelector("#importCurriculum"),
  applyUnitCandidate: document.querySelector("#applyUnitCandidate"),
  curriculumInput: document.querySelector("#curriculumInput"),
  saveWeek: document.querySelector("#saveWeek"),
  weekArchiveSelect: document.querySelector("#weekArchiveSelect"),
  openSavedWeek: document.querySelector("#openSavedWeek"),
  importPreviousSchedule: document.querySelector("#importPreviousSchedule"),
  applyPreviousSchedule: document.querySelector("#applyPreviousSchedule"),
  previousScheduleInput: document.querySelector("#previousScheduleInput"),
  changeTitleImage: document.querySelector("#changeTitleImage"),
  changeBadgeImage: document.querySelector("#changeBadgeImage"),
  restoreImages: document.querySelector("#restoreImages"),
  toggleReverseNotice: document.querySelector("#toggleReverseNotice"),
  titleImageInput: document.querySelector("#titleImageInput"),
  badgeImageInput: document.querySelector("#badgeImageInput"),
  titleImage: document.querySelector("#titleImage"),
  badgeImageElement: document.querySelector("#badgeImageElement"),
  schoolName: document.querySelector("#schoolName"),
  issueDate: document.querySelector("#issueDate"),
  periodBadge: document.querySelector("#periodBadge"),
  reverseNotice: document.querySelector("#reverseNotice"),
  noticeText: document.querySelector("#noticeText"),
  printNoticeContinuation: document.querySelector("#printNoticeContinuation"),
  currentStateDump: document.querySelector("#currentStateDump"),
  head: document.querySelector("#tableHead"),
  body: document.querySelector("#tableBody"),
};

const fixedRows = [
  { key: "plan", label: "よてい", className: "mini-row", cells: Array(6).fill("") },
  { key: "items", label: "もちもの", className: "", cells: Array(6).fill("") },
  { key: "kitakko", label: "朝の時間", className: "mini-row", cells: Array(6).fill("") },
];

const presetIllustrations = {
  apron: {
    label: "エプロン",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M33 16h30l8 23 4 40H21l4-40 8-23Z" fill="#8fd3ff" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M34 17c2 12 7 18 14 18s12-6 14-18" fill="#fff" stroke="#222" stroke-width="4"/><path d="M27 42h42M34 55h28" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M25 39 9 31M71 39l16-8" stroke="#222" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
  mask: {
    label: "マスク",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M19 35c8-8 50-8 58 0v22c-11 14-47 14-58 0V35Z" fill="#d9f6ff" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M25 42h46M25 51h46" stroke="#80cfe3" stroke-width="4" stroke-linecap="round"/><path d="M18 39C8 38 8 61 19 57M78 39c10-1 10 22-1 18" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
  bottle: {
    label: "水筒",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M30 33C18 40 13 55 17 71M66 33c12 7 17 22 13 38" fill="none" stroke="#5a4632" stroke-width="5" stroke-linecap="round"/><path d="M36 13h24v11H36z" fill="#ffd36e" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M39 24h18v8H39z" fill="#fff4bf" stroke="#222" stroke-width="3" stroke-linejoin="round"/><path d="M31 30h34c4 0 8 4 8 8v38c0 5-4 9-9 9H32c-5 0-9-4-9-9V38c0-4 4-8 8-8Z" fill="#8ee2d1" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M31 47h34v22H31z" fill="#fff" stroke="#222" stroke-width="3"/><path d="M41 58h14" stroke="#58bda9" stroke-width="5" stroke-linecap="round"/><path d="M25 39c7 5 13 5 20 0M51 39c7 5 13 5 20 0" fill="none" stroke="#45b6a7" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
  paints: {
    label: "絵の具",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M18 25h60v47H18z" fill="#fff7d1" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M25 35h46M25 48h46M25 61h46" stroke="#222" stroke-width="2"/><circle cx="31" cy="35" r="5" fill="#ff6b6b"/><circle cx="47" cy="35" r="5" fill="#ffd166"/><circle cx="63" cy="35" r="5" fill="#4dabf7"/><path d="M20 74h56" stroke="#222" stroke-width="4" stroke-linecap="round"/><path d="M73 22 84 11l4 4-11 11Z" fill="#8d6e63" stroke="#222" stroke-width="3"/></svg>`,
  },
  melodica: {
    label: "鍵盤ハーモニカ",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M15 34h66v31H15z" fill="#f4a7c5" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M24 43h48v15H24z" fill="#fff" stroke="#222" stroke-width="3"/><path d="M31 43v15M39 43v15M47 43v15M55 43v15M63 43v15" stroke="#222" stroke-width="2"/><path d="M35 43v9M51 43v9M67 43v9" stroke="#222" stroke-width="5"/><path d="M75 38c8-12 15-9 13 1-2 11-15 9-17 21" fill="none" stroke="#6bb7ff" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
  lunchbag: {
    label: "給食袋",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M27 30h42l7 47c1 5-3 9-8 9H28c-5 0-9-4-8-9l7-47Z" fill="#fff0a8" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M32 31c0-12 32-12 32 0" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><path d="M28 43h40" stroke="#f1b84b" stroke-width="5" stroke-linecap="round"/><circle cx="39" cy="61" r="6" fill="#ff8fa3" stroke="#222" stroke-width="3"/><circle cx="57" cy="61" r="6" fill="#8fd3ff" stroke="#222" stroke-width="3"/></svg>`,
  },
  redcap: {
    label: "体育帽子（赤）",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M20 51c4-19 19-29 36-24 14 4 21 15 22 31H21c-2 0-3-2-1-7Z" fill="#ff6b6b" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M22 58h59c6 0 8 8 2 10-15 5-43 5-62 0-7-2-6-10 1-10Z" fill="#ff8787" stroke="#222" stroke-width="4"/><path d="M45 29c4 9 4 18 1 29" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
  backpack: {
    label: "リュックサック",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="16" fill="#fff"/><path d="M31 25c2-11 32-11 34 0" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/><path d="M25 31h46c5 0 9 4 9 9v34c0 6-5 11-11 11H27c-6 0-11-5-11-11V40c0-5 4-9 9-9Z" fill="#8fc7ff" stroke="#222" stroke-width="4" stroke-linejoin="round"/><path d="M28 55h40v22H28z" fill="#ffe08a" stroke="#222" stroke-width="3"/><path d="M24 40h48M38 31v54M58 31v54" stroke="#4f9ee8" stroke-width="4"/><path d="M18 48c-9 10-8 25 0 35M78 48c9 10 8 25 0 35" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/></svg>`,
  },
};

const periods = [
  { key: "p1", label: "1", cells: Array(6).fill("") },
  { key: "p2", label: "2", cells: Array(6).fill("") },
  { key: "break", label: "なかやすみ", className: "mini-row", cells: Array(6).fill("") },
  { key: "p3", label: "3", cells: Array(6).fill("") },
  { key: "p4", label: "4", cells: Array(6).fill("") },
  { key: "lunch", label: "ひるやすみ", className: "mini-row", cells: Array(6).fill("") },
  { key: "p5", label: "5", cells: Array(6).fill("") },
  { key: "home", label: "げこう\nじこく", className: "mini-row", cells: Array(6).fill("") },
];

let state = loadState();
let savedSelectionRange = null;
let lastEditableTarget = null;
let selectedCellImage = null;
let undoStack = [];
let redoStack = [];
let isRestoringHistory = false;
let lastSavedStateJson = JSON.stringify(state);
let printNoticeOriginalHtml = null;
let persistTimer = null;
let lastPersistedStateJson = "";
let lastUndoSnapshotAt = 0;

function defaultWeekStart() {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  today.setDate(today.getDate() + diff);
  return toDateInput(today);
}

function createDefaultState() {
  return {
    weekStart: defaultWeekStart(),
    dayCount: 5,
    sixthDayDate: "",
    backPageHtml: "",
    showBackPage: false,
    schoolName: "時間割",
    issueDate: "",
    titleImage: "timetable-title-v2.png",
    badgeImage: "chiilabo-timetable-badge.png",
    showReverseNotice: false,
    dayEvents: Array(6).fill(""),
    annualEvents: defaultAnnualEvents(),
    curriculumUnits: defaultCurriculumUnits(),
    previousSchedules: defaultPreviousSchedules(),
    specialRoomSlots: defaultSpecialRoomSlots(),
    weekArchive: {},
    scheduleFont: "hg-gothic",
    labelFont: "pop",
    noticeFont: "gothic",
    selectionFont: "gothic",
    selectionSize: "normal",
    selectionColor: "black",
    fontDefaultsVersion,
    cellHtml: {},
    cellHighlight: {},
    cellColor: {},
    cellAlign: {},
    blockAlign: {},
    noticeHighlight: false,
    highlightColor: "yellow",
    scheduleLineHeight: 0,
    noticeLineHeight: 0,
    noticeBrGap: 0,
    monthLabel: "",
    periodBadge: elements.periodBadge.innerHTML.trim(),
    reverseNotice: "",
    noticeText: "",
    rows: [...fixedRows, ...periods].map(copyRow),
  };
}

function copyRow(row) {
  return {
    key: row.key,
    label: row.label,
    className: row.className || "",
    cells: Array.from({ length: 6 }, (_, index) => row.cells[index] || ""),
  };
}

function loadState() {
  return createDefaultState();
}

function parseSavedState(text) {
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

function extractScheduleState(imported) {
  if (!imported || typeof imported !== "object") return null;
  if (imported.weekStart || Array.isArray(imported.rows)) return imported;
  if (imported.state) return extractScheduleState(imported.state);
  if (imported.data) return extractScheduleState(imported.data);
  if (imported.schedule) return extractScheduleState(imported.schedule);
  if (imported.current) return extractScheduleState(imported.current);
  if (imported.weekArchive && typeof imported.weekArchive === "object") {
    const firstWeek = Object.values(imported.weekArchive).find((week) => week && typeof week === "object");
    if (firstWeek) return { ...firstWeek, weekArchive: imported.weekArchive };
  }
  return null;
}

function loadImportedSchedule(imported) {
  const source = extractScheduleState(imported);
  if (!source) throw new Error("No schedule state found");
  const normalized = normalizeState(source);
  normalized.weekArchive ||= {};
  if (!normalized.weekArchive[normalized.weekStart]) {
    normalized.weekArchive[normalized.weekStart] = archiveSnapshotForStorage(normalized);
  }
  // 参照データ（行事予定・教育課程・特別教室・昨年度テンプレ）は読込で消さず統合する。
  // 行事予定は同じ日付なら今の画面（＝今年の読込済みデータ）を優先。
  normalized.annualEvents = { ...normalized.annualEvents, ...(state?.annualEvents || {}) };
  normalized.weekArchive = { ...(state?.weekArchive || {}), ...normalized.weekArchive };
  normalized.curriculumUnits = state?.curriculumUnits?.length ? state.curriculumUnits : normalized.curriculumUnits;
  normalized.specialRoomSlots = state?.specialRoomSlots || normalized.specialRoomSlots;
  const templates = [...(state?.previousSchedules || []), ...(normalized.previousSchedules || [])];
  normalized.previousSchedules = templates.filter((template, index) => {
    return templates.findIndex((other) => other.weekStart === template.weekStart && other.name === template.name) === index;
  });
  return normalized;
}

function shouldUseLegacyForImproved(improved, legacy) {
  if (!legacy) return false;
  if (!improved) return true;
  if (legacy.weekStart === "2026-05-11" && improved.weekStart !== "2026-05-11") return true;
  const improvedRows = Array.isArray(improved.rows) ? improved.rows : [];
  const legacyRows = Array.isArray(legacy.rows) ? legacy.rows : [];
  const improvedText = JSON.stringify(improvedRows);
  const legacyText = JSON.stringify(legacyRows);
  return legacy.weekStart === improved.weekStart && legacyText.length > improvedText.length + 1000;
}

function stripPopFontSpans(value) {
  const html = decodeSavedHtml(value);
  if (!String(html).includes("<")) return html;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  wrapper.querySelectorAll("[style]").forEach((node) => {
    const family = node.style.fontFamily || "";
    if (family.includes("創英角") || family.toLowerCase().includes("pop")) {
      node.style.fontFamily = "";
      node.style.fontWeight = "";
      if (!node.getAttribute("style")) node.removeAttribute("style");
    }
  });
  return wrapper.innerHTML.trim();
}

function normalizeState(nextState) {
  const fallback = createDefaultState();
  const rows = Array.isArray(nextState.rows) && nextState.rows.length ? nextState.rows : fallback.rows;
  const badgeImage = !nextState.badgeImage || nextState.badgeImage === "assets/period-badge-from-pdf.png"
    ? "chiilabo-timetable-badge.png"
    : nextState.badgeImage;
  const shouldFixDefaultFonts = Number(nextState.fontDefaultsVersion || 0) < fontDefaultsVersion;
  return {
    ...fallback,
    ...nextState,
    schoolName: shouldFixDefaultFonts ? stripPopFontSpans(nextState.schoolName || fallback.schoolName) : nextState.schoolName,
    issueDate: shouldFixDefaultFonts ? stripPopFontSpans(nextState.issueDate || fallback.issueDate) : nextState.issueDate,
    periodBadge: shouldFixDefaultFonts ? stripPopFontSpans(nextState.periodBadge || fallback.periodBadge) : nextState.periodBadge,
    monthLabel: fullWidthMonthLabel(nextState.monthLabel || fallback.monthLabel),
    scheduleFont: shouldFixDefaultFonts || nextState.scheduleFont === "pop" ? "hg-gothic" : nextState.scheduleFont || "hg-gothic",
    labelFont: nextState.labelFont || "pop",
    noticeFont: nextState.noticeFont === "pop" && shouldFixDefaultFonts ? "gothic" : nextState.noticeFont || "gothic",
    selectionFont: "gothic",
    selectionSize: nextState.selectionSize || "normal",
    selectionColor: nextState.selectionColor || "black",
    fontDefaultsVersion,
    badgeImage,
    dayCount: Number(nextState.dayCount) === 6 ? 6 : 5,
    sixthDayDate: /^\d{4}-\d{2}-\d{2}$/.test(nextState.sixthDayDate || "") ? nextState.sixthDayDate : "",
    // 裏面が空のときは、空の初期状態へ戻す。
    // 裏面を印刷したくないときは「裏面を閉じる」を使う（閉じていれば印刷されない）。
    backPageHtml: String(nextState.backPageHtml || "").replace(/<[^>]*>/g, "").trim() || (nextState.backPageHtml || "").includes("<img")
      ? nextState.backPageHtml
      : defaultBackPageHtml(),
    showBackPage: nextState.showBackPage !== undefined ? Boolean(nextState.showBackPage) : true,
    dayEvents: Array.from({ length: 6 }, (_, index) => nextState.dayEvents?.[index] || ""),
    annualEvents: Object.keys(nextState.annualEvents || {}).length ? nextState.annualEvents : defaultAnnualEvents(),
    curriculumUnits: normalizeStoredCurriculumUnits(nextState.curriculumUnits),
    previousSchedules: Array.isArray(nextState.previousSchedules) && nextState.previousSchedules.length
      ? nextState.previousSchedules
      : defaultPreviousSchedules(),
    weekArchive: normalizeWeekArchive(nextState.weekArchive),
    cellHtml: nextState.cellHtml || {},
    cellHighlight: nextState.cellHighlight || {},
    cellColor: nextState.cellColor || {},
    cellAlign: nextState.cellAlign || {},
    blockAlign: nextState.blockAlign || {},
    noticeHighlight: Boolean(nextState.noticeHighlight),
    scheduleLineHeight: Number(nextState.scheduleLineHeight) || 0,
    noticeLineHeight: Number(nextState.noticeLineHeight) || 0,
    noticeBrGap: Number(nextState.noticeBrGap) || 0,
    specialRoomSlots: normalizeSpecialRoomSlots(nextState.specialRoomSlots) || defaultSpecialRoomSlots(),
    rows: migrateRows(rows).map((row, index) => ({
      key: row.key || `row-${index}`,
      label: row.label || String(index + 1),
      className: row.className || "",
      cells: Array.from({ length: 6 }, (_, dayIndex) => row.cells?.[dayIndex] || ""),
    })),
  };
}

function migrateRows(rows) {
  const nextRows = rows.map((row) => ({ ...row }));
  nextRows.forEach((row) => {
    if (row.label === "天き") row.label = "よてい";
    if (row.label === "読みﾀｲﾑ" || row.label === "読みタイム") row.label = "きたっこたいむ";
    if (row.label === "昼休み") row.label = "ひるやすみ";
    if (row.label === "下校\nじこく" || row.label === "下校じこく" || row.label === "げこうじこく") row.label = "げこう\nじこく";
    if (row.key === "kitakko" || row.label === "きたっこたいむ") {
      const oldDefaults = ["6年生との交流", "6年生との交流", "", "6年生との交流", "あさのかい\n全校朝会", ""];
      const newDefaults = ["さんすう", "どくしょ", "さんすう", "どくしょ", "ひらがな", ""];
      row.cells = Array.from({ length: 6 }, (_, index) => {
        const value = row.cells?.[index] || "";
        return value === oldDefaults[index] ? newDefaults[index] : value;
      });
    }
  });

  const hasBreak = nextRows.some((row) => row.label === "なかやすみ");
  const secondPeriodIndex = nextRows.findIndex((row) => row.label === "2");
  if (!hasBreak && secondPeriodIndex !== -1) {
    nextRows.splice(secondPeriodIndex + 1, 0, {
      key: "break",
      label: "なかやすみ",
      className: "mini-row",
      cells: Array(6).fill(""),
    });
  }

  return nextRows;
}

function saveState(options = {}) {
  const immediate = options.immediate === true;
  const now = Date.now();
  if (!isRestoringHistory && (!lastUndoSnapshotAt || now - lastUndoSnapshotAt > 1500)) {
    const nextStateJson = JSON.stringify(state);
    if (lastSavedStateJson && nextStateJson !== lastSavedStateJson) {
      undoStack.push(lastSavedStateJson);
      if (undoStack.length > 25) undoStack.shift();
      redoStack = [];
    }
    lastSavedStateJson = nextStateJson;
    lastUndoSnapshotAt = now;
  }
  schedulePersistState(immediate);
  updateCurrentStateDump();
  schedulePrintFitUpdate();
}

function schedulePersistState() {
  // 安全な試験掲載版では端末へ保存しない。
}

function persistStateNow() {
  // 安全な試験掲載版では端末へ保存しない。
}

function stateForStorage(source) {
  const compact = JSON.parse(JSON.stringify(source));
  compact.weekArchive = compactWeekArchiveForStorage(compact.weekArchive, compact);
  return compact;
}

function compactWeekArchiveForStorage(archive, current) {
  const normalizedArchive = normalizeWeekArchive(archive);
  return Object.fromEntries(Object.entries(normalizedArchive).map(([key, week]) => {
    return [key, archiveSnapshotForStorage(week, current)];
  }));
}

function archiveSnapshotForStorage(week, current = state) {
  const snapshot = JSON.parse(JSON.stringify(week));
  delete snapshot.weekArchive;
  delete snapshot.previousSchedules;
  delete snapshot.annualEvents;
  delete snapshot.curriculumUnits;
  delete snapshot.specialRoomSlots;
  // 裏面は週をまたいで共通（前の週の内容をベースに手直しする使い方）
  delete snapshot.backPageHtml;
  delete snapshot.showBackPage;
  if (snapshot.titleImage && snapshot.titleImage === current.titleImage) delete snapshot.titleImage;
  if (snapshot.badgeImage && snapshot.badgeImage === current.badgeImage) delete snapshot.badgeImage;
  return snapshot;
}

function normalizeWeekArchive(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([key, week]) => {
    return /^\d{4}-\d{2}-\d{2}$/.test(key) && week && typeof week === "object";
  }));
}

function currentWeekSnapshot() {
  const snapshot = JSON.parse(JSON.stringify(state));
  delete snapshot.weekArchive;
  delete snapshot.previousSchedules;
  return snapshot;
}

function archiveCurrentWeek() {
  state.weekArchive ||= {};
  state.weekArchive[state.weekStart] = currentWeekSnapshot();
  return state.weekStart;
}

function savedWeekLabel(key, snapshot) {
  const first = new Date(`${key}T00:00:00`);
  const count = Number(snapshot?.dayCount || 5);
  const last = new Date(first);
  last.setDate(last.getDate() + count - 1);
  return `${first.getMonth() + 1}/${first.getDate()}〜${last.getMonth() + 1}/${last.getDate()}`;
}

function renderWeekArchiveList() {
  if (!elements.weekArchiveSelect) return;
  const merged = { ...defaultWeekArchive(), ...normalizeWeekArchive(state.weekArchive) };
  const entries = Object.entries(merged).sort(([a], [b]) => a.localeCompare(b));
  elements.weekArchiveSelect.innerHTML = entries.length
    ? entries.map(([key, snapshot]) => `<option value="${key}">${savedWeekLabel(key, snapshot)}</option>`).join("")
    : `<option value="">\u4fdd\u5b58\u3055\u308c\u305f\u9031\u306f\u307e\u3060\u3042\u308a\u307e\u305b\u3093</option>`;
  if (merged[state.weekStart]) {
    elements.weekArchiveSelect.value = state.weekStart;
  }
}

function openWeekFromArchive(key) {
  // 端末に保存した週が優先、無ければ持ち運びHTMLに埋め込まれた既定の週を使う
  const snapshot = state.weekArchive?.[key] || defaultWeekArchive()[key];
  if (!snapshot) return false;
  const archive = state.weekArchive || {};
  const globals = {
    annualEvents: state.annualEvents,
    curriculumUnits: state.curriculumUnits,
    previousSchedules: state.previousSchedules,
    specialRoomSlots: state.specialRoomSlots,
    backPageHtml: state.backPageHtml,
    showBackPage: state.showBackPage,
    weekArchive: archive,
    titleImage: state.titleImage,
    badgeImage: state.badgeImage,
  };
  state = normalizeState({ ...snapshot, ...globals });
  saveState();
  render();
  return true;
}

function moveToWeek(key) {
  archiveCurrentWeek();
  if (state.weekArchive?.[key] || defaultWeekArchive()[key]) {
    openWeekFromArchive(key);
    return;
  }
  state.weekStart = key;
  updateDateLabels();
  updateIssueDateFromWeekStart();
  applyAnnualEventsToVisibleWeek(true);
  saveState();
  render();
}

function updateCurrentStateDump() {
  if (elements.currentStateDump) {
    elements.currentStateDump.textContent = "";
  }
}

function showTemporaryStatus(message) {
  if (!elements.exportStatus) return;
  elements.exportStatus.textContent = message;
  setTimeout(() => {
    if (elements.exportStatus?.textContent === message) elements.exportStatus.textContent = "";
  }, 5000);
}

function toDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dayDate(offset) {
  // 6日間表示のとき、6日目だけ別の日付にできる。
  if (offset === 5 && state.dayCount === 6 && state.sixthDayDate) {
    return new Date(`${state.sixthDayDate}T00:00:00`);
  }
  const date = new Date(`${state.weekStart}T00:00:00`);
  date.setDate(date.getDate() + offset);
  return date;
}


function scheduleFileBaseName() {
  const first = dayDate(0);
  const last = dayDate(state.dayCount - 1);
  const issue = parseIssueDateForFileName() || defaultIssueDateForFileName();
  const range = `${first.getMonth() + 1}\u6708${first.getDate()}\u65e5~${last.getMonth() + 1}\u6708${last.getDate()}\u65e5`;
  const issueLabel = `${issue.year}.${issue.month}.${issue.day}\u767a\u884c`;
  return `時間割_${range}_${issueLabel}`;
}

function updateDocumentTitle() {
  document.title = scheduleFileBaseName();
}

function parseIssueDateForFileName() {
  const text = normalizeFileNameDigits(elements.issueDate?.innerText || htmlToPlainText(state.issueDate || ""));
  const match = text.match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
  if (!match) return null;
  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  };
}

function defaultIssueDateForFileName() {
  const issue = dayDate(0);
  const daysBackToPreviousFriday = (issue.getDay() - 5 + 7) % 7 || 7;
  issue.setDate(issue.getDate() - daysBackToPreviousFriday);
  return {
    year: issue.getFullYear(),
    month: issue.getMonth() + 1,
    day: issue.getDate(),
  };
}

function normalizeFileNameDigits(value) {
  return String(value).replace(/[０-９]/g, (char) => String(char.charCodeAt(0) - 0xff10));
}

function dateLabel(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日(${weekdays[date.getDay()]})`;
}

function weekdayHeaderLabel(date) {
  const readings = ["にち", "げつ", "か", "すい", "もく", "きん", "ど"];
  const index = date.getDay();
  return `<span class="weekday-kanji">${weekdays[index]}</span><span class="weekday-reading">(${readings[index]})</span>`;
}

function toFullWidthNumber(value) {
  return String(value).replace(/\d/g, (digit) => "０１２３４５６７８９"[Number(digit)]);
}

function fullWidthMonthLabel(value) {
  return toFullWidthNumber(value || "");
}

function updateDateLabels() {
  const first = dayDate(0);
  const last = dayDate(state.dayCount - 1);
  const firstMonth = first.getMonth() + 1;
  const lastMonth = last.getMonth() + 1;
  state.monthLabel = firstMonth === lastMonth
    ? `${toFullWidthNumber(firstMonth)}月`
    : `${toFullWidthNumber(firstMonth)}・${toFullWidthNumber(lastMonth)}月`;
  state.periodBadge = `${dateLabel(first)}<br />〜${dateLabel(last)}<br />のじかんわり`;
}

function dateLabel(date) {
  return `${date.getMonth() + 1}月${date.getDate()}日(${weekdays[date.getDay()]})`;
}

function weekdayHeaderLabel(date) {
  const readings = ["にち", "げつ", "か", "すい", "もく", "きん", "ど"];
  const index = date.getDay();
  return `<span class="weekday-kanji">${weekdays[index]}</span><span class="weekday-reading">(${readings[index]})</span>`;
}

function toFullWidthNumber(value) {
  return String(value).replace(/\d/g, (digit) => "０１２３４５６７８９"[Number(digit)]);
}

function updateDateLabels() {
  const first = dayDate(0);
  const last = dayDate(state.dayCount - 1);
  const firstMonth = first.getMonth() + 1;
  const lastMonth = last.getMonth() + 1;
  state.monthLabel = firstMonth === lastMonth
    ? `${toFullWidthNumber(firstMonth)}月`
    : `${toFullWidthNumber(firstMonth)}・${toFullWidthNumber(lastMonth)}月`;
  state.periodBadge = `${dateLabel(first)}<br />〜${dateLabel(last)}<br />のじかんわり`;
}

function updateIssueDateFromWeekStart() {
  const issue = dayDate(0);
  const daysBackToPreviousFriday = (issue.getDay() - 5 + 7) % 7 || 7;
  issue.setDate(issue.getDate() - daysBackToPreviousFriday);
  state.issueDate = `${issue.getFullYear()}年${issue.getMonth() + 1}月${issue.getDate()}日発行`;
}

function planRowIndex() {
  return state.rows.findIndex((row) => row.key === "plan" || row.label === "よてい");
}

function isPeriodRow(row) {
  return /^p\d/.test(row.key || "");
}

function applyAnnualEventsToVisibleWeek(overwrite = true) {
  const rowIndex = planRowIndex();
  if (rowIndex === -1 || !state.annualEvents) return 0;
  let applied = 0;
  for (let dayIndex = 0; dayIndex < state.dayCount; dayIndex += 1) {
    const key = toDateInput(dayDate(dayIndex));
    const text = state.annualEvents[key] || "";
    if (!overwrite && state.rows[rowIndex].cells[dayIndex]) continue;
    state.rows[rowIndex].cells[dayIndex] = text;
    if (state.cellHtml?.[rowIndex]) delete state.cellHtml[rowIndex][dayIndex];
    applied += text ? 1 : 0;
  }
  return applied;
}

// 旧サンプルデータ（読込済みか判定する比較用に残している）
function legacyDefaultCurriculumUnits() {
  return [];
}

// 安全な試験掲載版では、教材名や教育課程データを初期値として持たない。
function normalizeStoredCurriculumUnits(value) {
  const normalized = normalizeCurriculumUnits(value || []);
  if (!normalized.length) return normalizeCurriculumUnits(defaultCurriculumUnits());
  const legacy = JSON.stringify(normalizeCurriculumUnits(legacyDefaultCurriculumUnits()));
  if (JSON.stringify(normalized) === legacy) return normalizeCurriculumUnits(defaultCurriculumUnits());
  return normalized;
}

function normalizeCurriculumUnits(value) {
  const source = Array.isArray(value) ? value : [];
  return source
    .map((entry) => ({
      subject: normalizeSubjectName(entry.subject || entry.kyoka || entry.name || ""),
      month: Number(entry.month || entry.gatsu || 0),
      units: Array.isArray(entry.units) ? entry.units.map(String).filter(Boolean) : [entry.unit || entry.tangen || ""].map(String).filter(Boolean),
    }))
    .filter((entry) => entry.subject && entry.month >= 1 && entry.month <= 12 && entry.units.length);
}

function normalizeSubjectName(value) {
  return String(value || "")
    .replace(/\s/g, "")
    .replace(/[国國]/g, "\u3053\u304f")
    .replace(/\u8a9e/g, "\u3054")
    .replace(/\u7b97/g, "\u3055\u3093")
    .replace(/\u6570/g, "\u3059\u3046")
    .replace(/\u751f/g, "\u305b\u3044")
    .replace(/\u6d3b/g, "\u304b\u3064")
    .replace(/\u4f53/g, "\u305f\u3044")
    .replace(/\u80b2/g, "\u3044\u304f")
    .replace(/\u97f3/g, "\u304a\u3093")
    .replace(/\u697d/g, "\u304c\u304f")
    .replace(/\u56f3/g, "\u305a")
    .replace(/\u5de5/g, "\u3053\u3046")
    .replace(/\u9053/g, "\u3069\u3046")
    .replace(/\u5fb3/g, "\u3068\u304f")
    .replace(/\u7b2c?\d+\u6642\u9593?/g, "")
    .toLowerCase();
}

function findCurriculumCandidate(subjectText, date = dayDate(0)) {
  const subject = normalizeSubjectName(subjectText);
  if (!subject) return "";
  const month = date.getMonth() + 1;
  const units = normalizeCurriculumUnits(state.curriculumUnits || defaultCurriculumUnits());
  const candidates = units
    .filter((entry) => subject.includes(entry.subject) || entry.subject.includes(subject))
    .map((entry) => ({ entry, distance: Math.abs(entry.month - month) }))
    .sort((a, b) => a.distance - b.distance || a.entry.month - b.entry.month);
  const best = candidates[0]?.entry;
  if (!best) return "";
  const offset = Math.max(0, Math.min(best.units.length - 1, Math.floor((date.getDate() - 1) / 7)));
  return best.units[offset] || best.units[0] || "";
}

function applyUnitCandidateToSelectedCell() {
  const cell = lastEditableTarget?.closest?.(".subject-cell");
  if (!cell) {
    alert("\u5358\u5143\u3092\u5165\u308c\u305f\u3044\u6559\u79d1\u306e\u30bb\u30eb\u3092\u5148\u306b\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002");
    return false;
  }
  const rowIndex = Number(cell.dataset.row);
  const dayIndex = Number(cell.dataset.day);
  const lines = multilineText(cell).split("\n").map((line) => line.trim()).filter(Boolean);
  const subject = lines[0] || "";
  const candidate = findCurriculumCandidate(subject, dayDate(dayIndex));
  if (!candidate) {
    alert("\u3053\u306e\u6559\u79d1\u3068\u6642\u671f\u306b\u5408\u3046\u5358\u5143\u5019\u88dc\u304c\u307e\u3060\u3042\u308a\u307e\u305b\u3093\u3002");
    return false;
  }
  const nextText = [subject, candidate].filter(Boolean).join("\n");
  state.rows[rowIndex].cells[dayIndex] = nextText;
  if (state.cellHtml?.[rowIndex]) delete state.cellHtml[rowIndex][dayIndex];
  saveState();
  renderTable();
  return true;
}

async function parseCurriculumFile(file) {
  if (file.name.toLowerCase().endsWith(".pdf") || file.type === "application/pdf") {
    throw new Error("PDF curriculum import is not supported in this offline HTML app.");
  }
  const text = await file.text();
  if (file.name.toLowerCase().endsWith(".json") || file.type.includes("json")) {
    const json = JSON.parse(text);
    return normalizeCurriculumUnits(json.curriculumUnits || json.units || json);
  }
  return parseCurriculumText(text);
}

function parseCurriculumText(text) {
  const units = [];
  String(text).split(/\r?\n/).forEach((line) => {
    const cleaned = line.trim();
    if (!cleaned || cleaned.startsWith("#")) return;
    const parts = cleaned.split(/[,\t]/).map((part) => part.trim()).filter(Boolean);
    if (parts.length >= 3) {
      const month = Number((parts[0].match(/\d{1,2}/) || [0])[0]);
      units.push({ month, subject: parts[1], units: [parts.slice(2).join(" ")] });
    }
  });
  return normalizeCurriculumUnits(units);
}

async function readPreviousScheduleFile(file) {
  const json = JSON.parse(await file.text());
  const source = normalizeState(json);
  return {
    name: file.name.replace(/\.json$/i, "") || source.weekStart,
    weekStart: source.weekStart,
    dayCount: source.dayCount,
    dayEvents: Array.from({ length: 6 }, (_, index) => source.dayEvents?.[index] || ""),
    rows: source.rows.map(copyRow),
    cellHtml: source.cellHtml || {},
    cellColor: source.cellColor || {},
    cellHighlight: source.cellHighlight || {},
    cellAlign: source.cellAlign || {},
  };
}

function applyClosestPreviousSchedule() {
  const templates = state.previousSchedules || [];
  if (!templates.length) return null;
  const current = dayDate(0);
  const closest = templates
    .filter((template) => template.weekStart && Array.isArray(template.rows))
    .map((template) => ({ template, score: weekSimilarityScore(current, new Date(`${template.weekStart}T00:00:00`)) }))
    .sort((a, b) => a.score - b.score)[0]?.template;
  if (!closest) return null;
  applyPreviousScheduleTemplate(closest);
  return closest;
}

function weekSimilarityScore(currentDate, sourceDate) {
  const currentDay = dayOfYear(currentDate);
  const sourceDay = dayOfYear(sourceDate);
  const direct = Math.abs(currentDay - sourceDay);
  const aroundYear = 366 - direct;
  const monthPenalty = Math.abs(currentDate.getMonth() - sourceDate.getMonth()) * 2;
  return Math.min(direct, aroundYear) + monthPenalty;
}

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.floor((date - start) / 86400000) + 1;
}

function applyPreviousScheduleTemplate(template) {
  const oldRows = template.rows || [];
  state.dayEvents = Array.from({ length: 6 }, (_, index) => template.dayEvents?.[index] || "");
  state.rows = state.rows.map((row, rowIndex) => {
    const source = findMatchingTemplateRow(row, rowIndex, oldRows);
    if (!source) return row;
    return {
      ...row,
      cells: Array.from({ length: 6 }, (_, dayIndex) => source.cells?.[dayIndex] || ""),
    };
  });
  state.cellHtml = remapCellMapFromTemplate(template.cellHtml || {}, oldRows);
  state.cellColor = remapCellMapFromTemplate(template.cellColor || {}, oldRows);
  state.cellHighlight = remapCellMapFromTemplate(template.cellHighlight || {}, oldRows);
  state.cellAlign = remapCellMapFromTemplate(template.cellAlign || {}, oldRows);
}

function findMatchingTemplateRow(row, rowIndex, sourceRows) {
  return sourceRows.find((source) => source.key && source.key === row.key)
    || sourceRows.find((source) => normalizeRowLabel(source.label) === normalizeRowLabel(row.label))
    || sourceRows[rowIndex];
}

function normalizeRowLabel(label) {
  return String(label || "").replace(/\s/g, "");
}

function remapCellMapFromTemplate(sourceMap, sourceRows) {
  const remapped = {};
  state.rows.forEach((row, rowIndex) => {
    const sourceIndex = sourceRows.findIndex((source) => source.key && source.key === row.key);
    const fallbackIndex = sourceIndex === -1
      ? sourceRows.findIndex((source) => normalizeRowLabel(source.label) === normalizeRowLabel(row.label))
      : sourceIndex;
    if (fallbackIndex !== -1 && sourceMap?.[fallbackIndex]) {
      remapped[rowIndex] = { ...sourceMap[fallbackIndex] };
    }
  });
  return remapped;
}

function decodeSavedHtml(value) {
  const text = String(value || "");
  if (!text.includes("&lt;") && !text.includes("&gt;")) return text;
  const parser = document.createElement("textarea");
  parser.innerHTML = text;
  return parser.value;
}

function needsPeriodBadgeRefresh(value) {
  const text = String(value || "").replace(/<[^>]*>/g, "");
  return !text.trim() || !text.includes("月") || !text.includes("日") || !text.includes("じかんわり");
}

function renderPeriodBadge() {
  const imageSrc = state.badgeImage || "chiilabo-timetable-badge.png";
  const badgeHtml = cleanBadgeHtml(state.periodBadge);
  elements.periodBadge.style.backgroundImage = "";
  elements.periodBadge.innerHTML = `<img id="badgeImageElement" class="badge-image" src="${escapeHtml(imageSrc)}" alt="" aria-hidden="true" /><span class="badge-text">${badgeHtml}</span>`;
  elements.badgeImageElement = elements.periodBadge.querySelector("#badgeImageElement");
}

function cleanBadgeHtml(value) {
  const holder = document.createElement("div");
  holder.innerHTML = decodeSavedHtml(value || "");
  holder.querySelectorAll(".badge-image").forEach((image) => image.remove());
  const textLayer = holder.querySelector(".badge-text");
  return (textLayer ? textLayer.innerHTML : holder.innerHTML).trim();
}

function needsPeriodBadgeRefresh(value) {
  const text = cleanBadgeHtml(value).replace(/<[^>]*>/g, "");
  return !text.trim() || !text.includes("月") || !text.includes("日") || !text.includes("じかんわり");
}

function render() {
  if (needsPeriodBadgeRefresh(state.periodBadge)) updateDateLabels();
  updateCurrentStateDump();
  updateDocumentTitle();
  elements.weekStart.value = state.weekStart;
  elements.dayCount.value = String(state.dayCount);
  if (elements.sixthDayLabel) {
    elements.sixthDayLabel.hidden = state.dayCount !== 6;
    elements.sixthDayDate.value = state.sixthDayDate || "";
  }
  if (elements.backPage) {
    elements.backPage.hidden = !state.showBackPage;
    elements.backPageText.innerHTML = decodeSavedHtml(state.backPageHtml);
    elements.toggleBackPage.textContent = state.showBackPage ? "▤ 裏面を閉じる" : "▤ 裏面を開く";
  }
  elements.schoolName.innerHTML = decodeSavedHtml(state.schoolName);
  elements.schoolName.style.textAlign = state.blockAlign?.schoolName || "";
  elements.schoolName.style.textAlignLast = state.blockAlign?.schoolName === "justify" ? "justify" : "";
  elements.issueDate.innerHTML = decodeSavedHtml(state.issueDate);
  elements.issueDate.style.textAlign = state.blockAlign?.issueDate || "";
  elements.issueDate.style.textAlignLast = state.blockAlign?.issueDate === "justify" ? "justify" : "";
  elements.titleImage.src = state.titleImage || "timetable-title-v2.png";
  renderPeriodBadge();
  elements.periodBadge.style.textAlign = state.blockAlign?.periodBadge || "";
  elements.periodBadge.style.textAlignLast = state.blockAlign?.periodBadge === "justify" ? "justify" : "";
  fitBadgeText();
  elements.reverseNotice.innerHTML = decodeSavedHtml(state.reverseNotice).replace("らんしゅう", "らいしゅう");
  elements.reverseNotice.style.textAlign = state.blockAlign?.reverseNotice || "";
  elements.reverseNotice.style.textAlignLast = state.blockAlign?.reverseNotice === "justify" ? "justify" : "";
  elements.reverseNotice.hidden = state.showReverseNotice === false;
  elements.toggleReverseNotice.textContent = state.showReverseNotice === false ? "青帯を出す" : "青帯を消す";
  elements.noticeText.innerHTML = state.noticeText;
  elements.noticeText.style.textAlign = state.blockAlign?.noticeText || "";
  elements.noticeText.style.textAlignLast = state.blockAlign?.noticeText === "justify" ? "justify" : "";
  elements.noticeText.classList.toggle("highlight-cell", state.noticeHighlight);
  elements.scheduleFont.value = state.scheduleFont || "hg-gothic";
  elements.labelFont.value = state.labelFont || "pop";
  elements.noticeFont.value = state.noticeFont || "gothic";
  elements.selectionFont.value = state.selectionFont || "gothic";
  elements.selectionSize.value = state.selectionSize || "normal";
  elements.selectionColor.value = state.selectionColor || "black";
  elements.highlightColor.value = state.highlightColor || "yellow";
  renderWeekArchiveList();
  document.querySelector(".schedule").dataset.font = state.scheduleFont || "hg-gothic";
  document.querySelector(".schedule").dataset.labelFont = state.labelFont || "pop";
  elements.noticeText.dataset.font = state.noticeFont || "gothic";
  renderEventOptions();
  renderTable();
  applySpacingSettings();
  positionImageResizeHandle();
  schedulePrintFitUpdate();
}

function renderEventOptions() {
  const selected = elements.eventDay.value;
  elements.eventDay.innerHTML = Array.from({ length: state.dayCount }, (_, index) => {
    const date = dayDate(index);
    return `<option value="${index}">${date.getMonth() + 1}/${date.getDate()} ${weekdays[date.getDay()]}</option>`;
  }).join("");
  elements.eventDay.value = selected && Number(selected) < state.dayCount ? selected : "0";
  elements.eventText.value = state.dayEvents[Number(elements.eventDay.value)] || "";
}

function fitBadgeText() {
  const textLength = elements.periodBadge.innerText.replace(/\s/g, "").length;
  elements.periodBadge.classList.toggle("badge-long", textLength >= 21);
  elements.periodBadge.classList.toggle("badge-very-long", textLength >= 26);
}

function renderTable() {
  const firstDate = dayDate(0);
  document.querySelector(".schedule").dataset.font = state.scheduleFont || "hg-gothic";
  document.querySelector(".schedule").dataset.labelFont = state.labelFont || "pop";
  const headerCells = [`
    <th class="month-cell" scope="col">
      <span class="month-label" contenteditable="true" spellcheck="false">${escapeHtml(fullWidthMonthLabel(state.monthLabel) || `${toFullWidthNumber(firstDate.getMonth() + 1)}・${toFullWidthNumber(dayDate(state.dayCount - 1).getMonth() + 1)}月`)}</span>
      <span class="month-weekday">よう日</span>
    </th>
  `];

  for (let index = 0; index < state.dayCount; index += 1) {
    const date = dayDate(index);
    headerCells.push(`
      <th class="day-head" scope="col">
        <span class="date-number">${toFullWidthNumber(date.getDate())}日</span>
        <span class="weekday">${weekdayHeaderLabel(date)}</span>
      </th>
    `);
  }
  elements.head.innerHTML = `<tr>${headerCells.join("")}</tr>`;

  elements.body.innerHTML = state.rows
    .map((row, rowIndex) => {
      const isSubjectRow = isPeriodRow(row);
      const labelClass = isSubjectRow ? "row-label period-label" : row.label.length >= 4 ? "row-label vertical" : "row-label";
      const cellClass = isSubjectRow ? "subject-cell" : "schedule-cell";
      const cells = [`<td class="${labelClass}" contenteditable="true" data-row="${rowIndex}" data-kind="label">${formatLabel(row.label, row.className === "mini-row")}</td>`];
      for (let dayIndex = 0; dayIndex < state.dayCount; dayIndex += 1) {
        const eventText = state.dayEvents[dayIndex];
        if (eventText && rowIndex > eventStartIndex() && rowIndex <= eventEndIndex()) {
          continue;
        }
        if (eventText && rowIndex === eventStartIndex()) {
          cells.push(`<td class="day-event-cell" rowspan="${eventRowSpan()}" contenteditable="true" data-event-day="${dayIndex}">${formatCell(eventText)}</td>`);
          continue;
        }
        const value = row.cells[dayIndex] || "";
        const fitStyle = isSubjectRow ? subjectFitStyle(value) : "";
        const savedHtml = state.cellHtml?.[rowIndex]?.[dayIndex];
        const highlightClass = state.cellHighlight?.[rowIndex]?.[dayIndex] ? " highlight-cell" : "";
        const colorClass = state.cellColor?.[rowIndex]?.[dayIndex] ? ` cell-color-${state.cellColor[rowIndex][dayIndex]}` : "";
        const alignClass = state.cellAlign?.[rowIndex]?.[dayIndex] ? ` text-align-${state.cellAlign[rowIndex][dayIndex]}` : "";
        cells.push(
          `<td class="${cellClass}${highlightClass}${colorClass}${alignClass}" ${fitStyle} contenteditable="true" data-row="${rowIndex}" data-day="${dayIndex}">${savedHtml || (isSubjectRow ? formatSubjectCell(value) : formatCell(value))}</td>`,
        );
      }
      return `<tr class="${[row.className || "", `row-${row.key || rowIndex}`].join(" ").trim()}">${cells.join("")}</tr>`;
    })
    .join("");
}

function eventStartIndex() {
  const index = state.rows.findIndex((row) => isPeriodRow(row));
  return index === -1 ? 0 : index;
}

function eventEndIndex() {
  const lastSubjectIndex = state.rows.map((row, index) => isPeriodRow(row) ? index : -1).filter((index) => index !== -1).pop();
  return lastSubjectIndex ?? eventStartIndex();
}

function eventRowSpan() {
  return eventEndIndex() - eventStartIndex() + 1;
}

function formatCell(value) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function formatLabel(value, isMiniRow = false) {
  const text = String(value);
  if (!isMiniRow) return formatCell(text);
  const miniLabels = {
    きたっこたいむ: "きたっこ<br />たいむ",
    なかやすみ: "なか<br />やすみ",
    ひるやすみ: "ひる<br />やすみ",
    げこうじこく: "げこう<br />じこく",
  };
  return miniLabels[text.replace(/\s/g, "")] || formatCell(text);
}

function formatSubjectCell(value) {
  const lines = String(value).split("\n");
  const subject = lines.shift() || "";
  const detail = lines.join("\n");
  if (!subject && !detail) return "";
  return [
    subject ? `<span class="subject-name">${escapeHtml(subject)}</span>` : "",
    detail ? `<span class="subject-detail">${formatCell(detail)}</span>` : "",
  ].join("");
}

function subjectFitStyle(value) {
  const lines = String(value).split("\n");
  const subjectLength = (lines.shift() || "").replace(/\s/g, "").length;
  const detailLength = lines.join("").replace(/\s/g, "").length;
  const totalLength = subjectLength + detailLength;

  let subjectSize = 22;
  let detailSize = 12;
  if (subjectLength >= 6 || totalLength >= 22) {
    subjectSize = 20;
    detailSize = 11;
  }
  if (subjectLength >= 8 || totalLength >= 32) {
    subjectSize = 18;
    detailSize = 10;
  }
  if (subjectLength >= 10 || totalLength >= 44) {
    subjectSize = 16;
    detailSize = 9;
  }

  return `style="--subject-size: ${subjectSize}px; --detail-size: ${detailSize}px;"`;
}

function applySubjectFit(cell) {
  if (!cell.classList.contains("subject-cell")) return;
  const style = subjectFitStyle(multilineText(cell));
  const subjectMatch = style.match(/--subject-size: (\d+)px/);
  const detailMatch = style.match(/--detail-size: (\d+)px/);
  if (subjectMatch) cell.style.setProperty("--subject-size", `${subjectMatch[1]}px`);
  if (detailMatch) cell.style.setProperty("--detail-size", `${detailMatch[1]}px`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function multilineText(element) {
  return element.innerText.replace(/\n{3,}/g, "\n\n").trim();
}

function syncEditableCell(target) {
  const rowIndex = Number(target.dataset.row);
  if (target.dataset.kind === "label") {
    state.rows[rowIndex].label = multilineText(target);
  } else {
    const dayIndex = Number(target.dataset.day);
    state.rows[rowIndex].cells[dayIndex] = multilineText(target);
    state.cellHtml[rowIndex] ||= {};
    state.cellHtml[rowIndex][dayIndex] = target.innerHTML;
  }
  saveState();
}

function insertLineBreak(target) {
  target.focus();
  const selection = window.getSelection();
  if (selection && (!selection.rangeCount || !target.contains(selection.anchorNode))) {
    const range = document.createRange();
    range.selectNodeContents(target);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  const range = selection?.rangeCount ? selection.getRangeAt(0) : document.createRange();
  range.deleteContents();
  const br = document.createElement("br");
  range.insertNode(br);
  range.setStartAfter(br);
  range.collapse(true);
  selection?.removeAllRanges();
  selection?.addRange(range);
}

function syncLineBreakTarget(target) {
  if (target.matches(".day-event-cell")) {
    state.dayEvents[Number(target.dataset.eventDay)] = multilineText(target);
    saveState();
    return;
  }
  syncEditableCell(target);
  applySubjectFit(target);
}

function bindEditable(element, key, html = false) {
  element.addEventListener("input", () => {
    state[key] = key === "periodBadge"
      ? badgeTextHtml()
      : html ? element.innerHTML.trim() : element.textContent.trim();
    saveState();
  });
}

function badgeTextHtml() {
  return cleanBadgeHtml(elements.periodBadge.innerHTML);
}

function setWorkflowPanel(panelId) {
  document.querySelectorAll("[data-workflow-panel]").forEach((panel) => {
    panel.hidden = panel.id !== panelId;
  });
  document.querySelectorAll("[data-workflow-target]").forEach((tab) => {
    const active = tab.dataset.workflowTarget === panelId;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function appendWorkflowItem(panelId, item) {
  const panel = document.getElementById(panelId);
  if (panel && item) panel.appendChild(item);
}

function appendWorkflowPair(panelId, ids) {
  const pair = document.createElement("span");
  pair.className = "workflow-pair";
  ids.forEach((id) => {
    const item = document.getElementById(id);
    if (item) pair.appendChild(item);
  });
  if (pair.childElementCount) appendWorkflowItem(panelId, pair);
}

function organizeWorkflowControls() {
  const weekArchiveLabel = document.getElementById("weekArchiveSelect")?.closest("label");
  appendWorkflowItem("workflowWeekPanel", document.getElementById("saveWeek"));
  appendWorkflowItem("workflowWeekPanel", weekArchiveLabel);
  ["openSavedWeek", "autoBuildWeek"].forEach((id) => appendWorkflowItem("workflowWeekPanel", document.getElementById(id)));

  appendWorkflowPair("workflowSourcesPanel", ["importAnnualSchedule", "applyAnnualSchedule"]);
  appendWorkflowPair("workflowSourcesPanel", ["importCurriculum", "applyUnitCandidate"]);
  appendWorkflowPair("workflowSourcesPanel", ["importPreviousSchedule", "applyPreviousSchedule"]);
  appendWorkflowItem("workflowSourcesPanel", document.getElementById("importSpecialRooms"));

  ["exportData", "importData"].forEach((id) => appendWorkflowItem("workflowBackupPanel", document.getElementById(id)));
  ["importBackPageDocx", "exportWord", "exportPdf", "printPage"].forEach((id) => {
    appendWorkflowItem("workflowPrintPanel", document.getElementById(id));
  });

  const labels = {
    saveWeek: "この週を保存",
    openSavedWeek: "保存した週を開く",
    autoBuildWeek: "⚡ おまかせ週作成",
    importAnnualSchedule: "行事予定を登録",
    applyAnnualSchedule: "この週へ予定を反映",
    importCurriculum: "教育課程を登録",
    applyUnitCandidate: "単元候補をこの週へ反映",
    importPreviousSchedule: "前年度時間割を登録",
    applyPreviousSchedule: "候補をこの週へ反映",
    importSpecialRooms: "特別教室割りを登録",
    exportData: "全データを書き出す",
    importData: "全データを復元する",
    importBackPageDocx: "裏面にWordを取り込む",
    exportWord: "Word出力",
    exportPdf: "PDF出力",
    printPage: "印刷"
  };
  Object.entries(labels).forEach(([id, label]) => {
    const button = document.getElementById(id);
    if (button) button.textContent = label;
  });

  document.querySelectorAll("[data-workflow-target]").forEach((tab) => {
    tab.addEventListener("click", () => setWorkflowPanel(tab.dataset.workflowTarget));
  });
  setWorkflowPanel("workflowWeekPanel");
}

organizeWorkflowControls();

elements.weekStart.addEventListener("change", (event) => {
  moveToWeek(event.target.value || defaultWeekStart());
});

elements.toggleTools.addEventListener("click", () => {
  const controls = document.querySelector(".controls");
  const compact = controls.classList.toggle("compact");
  elements.toggleTools.textContent = compact ? "すべての操作を表示" : "よく使う操作だけ表示";
});

elements.undoAction.addEventListener("mousedown", (event) => event.preventDefault());
elements.redoAction.addEventListener("mousedown", (event) => event.preventDefault());

elements.undoAction.addEventListener("click", () => {
  restoreHistoryStep(undoStack, redoStack);
});

elements.redoAction.addEventListener("click", () => {
  restoreHistoryStep(redoStack, undoStack);
});

elements.dayCount.addEventListener("change", (event) => {
  state.dayCount = Number(event.target.value);
  updateDateLabels();
  applyAnnualEventsToVisibleWeek(true);
  saveState();
  render();
});

elements.eventDay.addEventListener("change", () => {
  elements.eventText.value = state.dayEvents[Number(elements.eventDay.value)] || "";
});

elements.scheduleFont.addEventListener("change", () => {
  state.scheduleFont = elements.scheduleFont.value;
  saveState();
  renderTable();
});

elements.labelFont.addEventListener("change", () => {
  state.labelFont = elements.labelFont.value;
  saveState();
  renderTable();
});

elements.noticeFont.addEventListener("change", () => {
  state.noticeFont = elements.noticeFont.value;
  elements.noticeText.dataset.font = state.noticeFont;
  saveState();
});

elements.selectionFont.addEventListener("change", () => {
  state.selectionFont = elements.selectionFont.value;
  saveState();
});

elements.selectionSize.addEventListener("change", () => {
  state.selectionSize = elements.selectionSize.value;
  saveState();
});

elements.selectionColor.addEventListener("change", () => {
  state.selectionColor = elements.selectionColor.value;
  saveState();
});

elements.applySelectionFont.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.applySelectionFont.addEventListener("click", () => {
  applyFontToSelection(elements.selectionFont.value);
});

elements.applySelectionSize.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.applySelectionSize.addEventListener("click", () => {
  applyStyleToSelection({ fontSize: selectionSizeValue(elements.selectionSize.value) });
});

elements.applySelectionColor.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.applySelectionColor.addEventListener("click", () => {
  applyStyleToSelection({ color: selectionTextColorValue(elements.selectionColor.value) });
});

elements.applySelectionBold?.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.applySelectionBold?.addEventListener("click", () => {
  applyStyleToSelection({ fontWeight: "900" });
});

elements.applyRuby.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.applyRuby.addEventListener("click", () => {
  applyRubyToSelectionFixed();
});

elements.clearRuby.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.clearRuby.addEventListener("click", () => {
  clearRubyInSelection();
});

elements.highlightText.addEventListener("click", () => {
  state.highlightColor = elements.highlightColor.value;
  saveState();
  applyHighlight(highlightColorValue(state.highlightColor));
});

elements.clearHighlight.addEventListener("click", () => {
  clearSelectedHighlight();
});

elements.textAlign.addEventListener("change", () => {
  saveState();
});

elements.applyTextAlign.addEventListener("click", () => {
  applyTextAlignToLastTarget();
});

elements.applyTextAlign.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.applyCellColor.addEventListener("click", () => {
  applyCellColorToLastTarget();
});

elements.insertCellImage.addEventListener("click", () => {
  elements.cellImageInput.click();
});

elements.insertNoticeImage?.addEventListener("click", () => {
  lastEditableTarget = elements.noticeText;
  elements.noticeImageInput?.click();
});

elements.insertPresetImage.addEventListener("click", () => {
  const preset = presetIllustrations[elements.presetImage.value];
  if (!preset) return;
  insertImageIntoLastTarget(svgToDataUri(preset.svg), preset.label);
});

elements.resizeCellImage.addEventListener("click", () => {
  resizeSelectedCellImage();
});

elements.deleteCellImage.addEventListener("click", () => {
  deleteSelectedCellImage();
});

elements.cellImageInput.addEventListener("change", () => {
  readNoticeImageFile(elements.cellImageInput.files?.[0], (imageData) => {
    insertImageIntoLastTarget(imageData);
    elements.cellImageInput.value = "";
  });
});

elements.noticeImageInput?.addEventListener("change", () => {
  readNoticeImageFile(elements.noticeImageInput.files?.[0], (imageData) => {
    insertImageIntoNotice(imageData, "連絡欄画像");
    elements.noticeImageInput.value = "";
  });
});

elements.highlightText.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.clearHighlight.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

elements.highlightColor.addEventListener("change", () => {
  state.highlightColor = elements.highlightColor.value;
  saveState();
});

elements.applyEvent.addEventListener("click", () => {
  const dayIndex = Number(elements.eventDay.value);
  state.dayEvents[dayIndex] = elements.eventText.value.trim() || "休日";
  saveState();
  render();
});

elements.clearEvent.addEventListener("click", () => {
  const dayIndex = Number(elements.eventDay.value);
  state.dayEvents[dayIndex] = "";
  saveState();
  render();
});

elements.prevWeek.addEventListener("click", () => {
  shiftWeek(-7);
});

elements.nextWeek.addEventListener("click", () => {
  shiftWeek(7);
});

elements.addPeriod.addEventListener("click", () => {
  const next = state.rows.filter((row) => isPeriodRow(row)).length + 1;
  state.rows.splice(-1, 0, { key: `p${Date.now()}`, label: String(next), className: "", cells: Array(6).fill("") });
  saveState();
  renderTable();
});

elements.resetSample.addEventListener("click", () => {
  state = createDefaultState();
  saveState();
  render();
});

elements.printPage.addEventListener("click", async () => {
  persistStateNow();
  updateDocumentTitle();
  // 最新の内容で「行の途中で切れない位置」を計算してから印刷する
  try { await updatePrintFitNow(); } catch (error) {}
  window.print();
});

window.addEventListener("beforeprint", preparePrintLayout);
window.addEventListener("afterprint", clearPrintLayout);
window.addEventListener("beforeunload", () => {
  persistStateNow();
});

elements.exportData.addEventListener("click", () => {
  persistStateNow();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `timetable-${state.weekStart}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

elements.importData.addEventListener("click", () => {
  elements.importDataInput.click();
});

elements.importAnnualSchedule.addEventListener("click", () => {
  elements.annualScheduleInput.click();
});

elements.applyAnnualSchedule.addEventListener("click", () => {
  const count = applyAnnualEventsToVisibleWeek(true);
  saveState();
  render();
  alert(count ? `表示中の週に${count}件の予定を反映しました。` : "表示中の週に入る予定はありませんでした。");
});

elements.saveWeek?.addEventListener("click", () => {
  const key = archiveCurrentWeek();
  saveState();
  renderWeekArchiveList();
  alert(`\u8868\u793a\u4e2d\u306e\u9031\u3092\u4fdd\u5b58\u3057\u307e\u3057\u305f\u3002\n${savedWeekLabel(key, state.weekArchive[key])}`);
});

elements.openSavedWeek?.addEventListener("click", () => {
  const key = elements.weekArchiveSelect?.value;
  if (!key) {
    alert("\u958b\u304f\u9031\u304c\u307e\u3060\u3042\u308a\u307e\u305b\u3093\u3002");
    return;
  }
  archiveCurrentWeek();
  openWeekFromArchive(key);
});

elements.importCurriculum?.addEventListener("click", () => {
  elements.curriculumInput.click();
});

elements.applyUnitCandidate?.addEventListener("click", () => {
  applyUnitCandidateToSelectedCell();
});

elements.curriculumInput?.addEventListener("change", async () => {
  const file = elements.curriculumInput.files?.[0];
  if (!file) return;
  try {
    const imported = await parseCurriculumFile(file);
    state.curriculumUnits = normalizeCurriculumUnits([...(state.curriculumUnits || []), ...imported]);
    saveState();
    alert(`\u5358\u5143\u5019\u88dc\u3092${imported.length}\u4ef6\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f\u3002\u6559\u79d1\u30bb\u30eb\u3092\u9078\u3093\u3067\u300c\u5358\u5143\u5019\u88dc\u300d\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002`);
  } catch (error) {
    console.error(error);
    alert("\u6559\u80b2\u8ab2\u7a0b\u306ePDF\u306f\u9078\u3079\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u304c\u3001\u6821\u52d9\u6a5fEdge\u3067\u30aa\u30d5\u30e9\u30a4\u30f3\u306e\u307e\u307ePDF\u672c\u6587\u3092\u81ea\u52d5\u89e3\u6790\u3059\u308b\u306e\u306f\u96e3\u3057\u3044\u3067\u3059\u3002\u5358\u5143\u5019\u88dc\u3092\u8ffd\u52a0\u3059\u308b\u5834\u5408\u306f\u3001JSON\u307e\u305f\u306fCSV/TXT\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044\u3002");
  } finally {
    elements.curriculumInput.value = "";
  }
});

elements.importPreviousSchedule.addEventListener("click", () => {
  elements.previousScheduleInput.click();
});

elements.applyPreviousSchedule.addEventListener("click", () => {
  const result = applyClosestPreviousSchedule();
  if (!result) {
    alert("昨年度の時間割候補がありません。先に「昨年度時間割読込」で保存JSONを読み込んでください。");
    return;
  }
  saveState();
  render();
  alert(`「${result.name}」を候補として反映しました。必要なところを手直ししてください。`);
});

elements.previousScheduleInput.addEventListener("change", async () => {
  const files = Array.from(elements.previousScheduleInput.files || []);
  if (!files.length) return;
  try {
    const templates = await Promise.all(files.map(readPreviousScheduleFile));
    state.previousSchedules = [...(state.previousSchedules || []), ...templates.filter(Boolean)];
    const result = applyClosestPreviousSchedule();
    saveState();
    render();
    alert(result
      ? `${templates.length}件読み込みました。「${result.name}」を候補として反映しました。`
      : `${templates.length}件読み込みました。表示中の週に近い候補はあとで「昨年度候補を反映」から使えます。`);
  } catch (error) {
    console.error(error);
    alert("昨年度の時間割を読み込めませんでした。このアプリで保存したJSONを選んでください。");
  } finally {
    elements.previousScheduleInput.value = "";
  }
});

elements.annualScheduleInput.addEventListener("change", async () => {
  const file = elements.annualScheduleInput.files?.[0];
  if (!file) return;
  try {
    const parsed = await parseAnnualScheduleFile(file);
    const parsedCount = Object.keys(parsed || {}).length;
    if (!parsedCount) {
      alert("このファイルからは行事が見つかりませんでした（今までの行事予定はそのまま残しています）。\n「5月」のような月の見出しと、日にち・行事の列がある表か確認してください。\nうまくいかない場合は、そのExcelファイルをClaudeに見せてもらえれば対応します。");
      return;
    }
    // 置き換えではなく統合。同じ日付は新しく読み込んだ方を優先し、別の年の行事は共存する。
    state.annualEvents = { ...(state.annualEvents || {}), ...parsed };
    const count = applyAnnualEventsToVisibleWeek(true);
    saveState();
    render();
    alert(`行事予定を${parsedCount}件読み込み、今までの分と合わせて${Object.keys(state.annualEvents).length}件になりました。\n表示中の週には${count}件反映しました。`);
  } catch (error) {
    console.error(error);
    alert(`行事予定を読み込めませんでした。（理由: ${error?.message || error}）\n年間予定や月予定のExcel（.xlsx）、または保存したJSONを選んでください。\n古い形式（.xls）の場合は、Excelで開いて「名前を付けて保存」で .xlsx にしてから読み込んでください。`);
  } finally {
    elements.annualScheduleInput.value = "";
  }
});

elements.importDataInput.addEventListener("change", () => {
  const file = elements.importDataInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state = loadImportedSchedule(JSON.parse(reader.result));
      saveState();
      render();
      alert(`読み込みました。${savedWeekLabel(state.weekStart, state)}の週として保存一覧にも入れました。`);
    } catch (error) {
      console.error(error);
      alert("読み込めないファイルです。前のアプリで「保存」したJSONを選んでください。");
    }
  });
  reader.readAsText(file);
  elements.importDataInput.value = "";
});

elements.exportWord.addEventListener("click", () => {
  exportCurrentPageToWord();
});

elements.exportPdf.addEventListener("click", () => {
  exportCurrentPageToPdf();
});

elements.changeTitleImage.addEventListener("click", () => {
  elements.titleImageInput.click();
});

elements.changeBadgeImage.addEventListener("click", () => {
  elements.badgeImageInput.click();
});

elements.titleImageInput.addEventListener("change", () => {
  readImageFile(elements.titleImageInput.files?.[0], (imageData) => {
    state.titleImage = imageData;
    saveState();
    render();
  });
});

elements.badgeImageInput.addEventListener("change", () => {
  readImageFile(elements.badgeImageInput.files?.[0], (imageData) => {
    state.badgeImage = imageData;
    saveState();
    render();
  });
});

elements.restoreImages.addEventListener("click", () => {
  state.titleImage = "timetable-title-v2.png";
  state.badgeImage = "chiilabo-timetable-badge.png";
  updateDateLabels();
  saveState();
  render();
});

elements.toggleReverseNotice.addEventListener("click", () => {
  state.showReverseNotice = state.showReverseNotice === false;
  saveState();
  render();
});

bindEditable(elements.schoolName, "schoolName", true);
bindEditable(elements.issueDate, "issueDate", true);
bindEditable(elements.periodBadge, "periodBadge", true);
elements.periodBadge.addEventListener("input", fitBadgeText);
bindEditable(elements.reverseNotice, "reverseNotice", true);
bindEditable(elements.noticeText, "noticeText", true);

elements.body.addEventListener("keydown", (event) => {
  const target = event.target.closest?.("td[contenteditable='true']");
  if (!target || event.key !== "Enter") return;
  event.preventDefault();
  insertLineBreak(target);
  syncLineBreakTarget(target);
});

elements.body.addEventListener("beforeinput", (event) => {
  const target = event.target.closest?.("td[contenteditable='true']");
  if (!target || !["insertParagraph", "insertLineBreak"].includes(event.inputType)) return;
  event.preventDefault();
  insertLineBreak(target);
  syncLineBreakTarget(target);
});

elements.body.addEventListener("input", (event) => {
  if (event.target.matches(".day-event-cell")) {
    state.dayEvents[Number(event.target.dataset.eventDay)] = multilineText(event.target);
    saveState();
    return;
  }
  if (event.target.matches("[contenteditable='true']")) {
    syncEditableCell(event.target);
    applySubjectFit(event.target);
  }
});

elements.body.addEventListener("paste", (event) => {
  const cell = event.target.closest?.("td[contenteditable='true']");
  if (!cell?.dataset.row || !cell?.dataset.day) return;
  lastEditableTarget = cell;

  const imageFile = Array.from(event.clipboardData?.items || [])
    .find((item) => item.type.startsWith("image/"))
    ?.getAsFile();
  if (imageFile) {
    event.preventDefault();
    readNoticeImageFile(imageFile, (imageData) => insertImageIntoCell(cell, imageData, "貼り付け画像"));
    return;
  }

  setTimeout(() => {
    const hasExternalImage = normalizeCellImages(cell);
    syncHighlightedTarget(cell);
    if (hasExternalImage) {
      alert("画像は入りますが、Webページからの貼り付け画像は校務機でオフライン表示できない場合があります。画像の上で右クリックして「画像をコピー」してから貼り付けると安心です。");
    }
  }, 0);
});

elements.noticeText.addEventListener("paste", (event) => {
  lastEditableTarget = elements.noticeText;
  const imageFile = Array.from(event.clipboardData?.items || [])
    .find((item) => item.type.startsWith("image/"))
    ?.getAsFile();
  if (imageFile) {
    event.preventDefault();
    readNoticeImageFile(imageFile, (imageData) => insertImageIntoNotice(imageData, "貼り付け画像"));
    return;
  }

  setTimeout(() => {
    const hasExternalImage = normalizeNoticeImages(elements.noticeText);
    syncHighlightedTarget(elements.noticeText);
    if (hasExternalImage) {
      alert("画像は入りますが、Webページからの貼り付け画像は校務機でオフライン表示できない場合があります。画像の上で右クリックして「画像をコピー」してから貼り付けると安心です。");
    }
  }, 0);
});

elements.head.addEventListener("input", (event) => {
  if (event.target.matches(".month-label")) {
    state.monthLabel = event.target.textContent.trim();
    saveState();
  }
});

elements.body.addEventListener("blur", (event) => {
  if (event.target.matches(".subject-cell")) {
    renderTable();
  }
}, true);

document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;
  const target = selection.anchorNode?.parentElement?.closest("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (target) {
    lastEditableTarget = target;
    savedSelectionRange = selection.getRangeAt(0).cloneRange();
  }
});

document.addEventListener("focusin", (event) => {
  const target = event.target.closest?.("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (target) lastEditableTarget = target;
});

document.addEventListener("click", (event) => {
  const image = event.target.closest?.("td img, .notice-text img, .back-page-text img");
  if (image) {
    const cell = image.closest("td");
    if (cell) normalizeCellImages(cell);
    const notice = image.closest(".notice-text, .back-page-text");
    if (notice) normalizeNoticeImages(notice);
    selectedCellImage?.classList.remove("selected-illustration");
    selectedCellImage = image;
    selectedCellImage.classList.add("selected-illustration");
    const size = Array.from(selectedCellImage.classList).find((name) => name.startsWith("image-"))?.replace("image-", "");
    if (size) elements.cellImageSize.value = size;
    updateImageScaleControls(selectedCellImage.getBoundingClientRect().width);
  }
  positionImageResizeHandle();
  const target = event.target.closest?.("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (target) lastEditableTarget = target;
});

setupToolVisibility();
render();

var activeToolCategory;

function setupToolVisibility() {
  const controls = document.querySelector(".controls");
  const alwaysVisibleIds = new Set([
    "toggleTools",
    "undoAction",
    "redoAction",
    "weekStart",
    "dayCount",
    "sixthDayDate",
    "prevWeek",
    "nextWeek",
    "toggleBackPage",
    "exportWord",
    "exportStatus",
    "exportPdf",
    "printPage",
    "resetSample",
  ]);
  // 展開時はタブで分類表示にして、画面を埋めないようにする
  const categories = [
    { key: "text", label: "A 文字" },
    { key: "style", label: "■ 色・行間" },
    { key: "image", label: "▣ 画像" },
    { key: "event", label: "＋ 行事・その他" },
  ];
  const categoryById = {
    autoBuildWeek: "auto", importBackPageDocx: "auto", importCurriculum: "auto", applyUnitCandidate: "auto",
    importAnnualSchedule: "auto", applyAnnualSchedule: "auto",
    importPreviousSchedule: "auto", applyPreviousSchedule: "auto", importSpecialRooms: "auto",
    saveWeek: "auto", weekArchiveSelect: "auto", openSavedWeek: "auto",
    exportData: "auto", importData: "auto", resetSample: "auto",
    scheduleFont: "text", labelFont: "text", noticeFont: "text",
    selectionFont: "text", applySelectionFont: "text", selectionSize: "text", applySelectionSize: "text",
    selectionColor: "text", applySelectionColor: "text", applySelectionBold: "text",
    rubyText: "text", applyRuby: "text", clearRuby: "text",
    highlightColor: "style", highlightText: "style", clearHighlight: "style",
    textAlign: "style", applyTextAlign: "style", cellColor: "style", applyCellColor: "style",
    scheduleLineHeight: "style", noticeLineHeight: "style", noticeBrGap: "style", resetSpacing: "style",
    bubbleColor: "style", insertBubble: "style",
    cellImageSize: "image", presetImage: "image", insertPresetImage: "image",
    insertCellImage: "image", insertNoticeImage: "image", insertBackPageImage: "image", resizeCellImage: "image",
    imageScaleSlider: "image", deleteCellImage: "image",
    changeTitleImage: "image", changeBadgeImage: "image", restoreImages: "image",
    eventDay: "event", eventText: "event", applyEvent: "event", clearEvent: "event",
    addPeriod: "event", toggleReverseNotice: "event", toggleBackPage: "event",
  };
  if (!activeToolCategory) activeToolCategory = "text";
  Array.from(controls.children).forEach((child) => {
    if (child.classList.contains("file-input")) return;
    const ids = [child.id, ...Array.from(child.querySelectorAll?.("[id]") || []).map((element) => element.id)];
    if (ids.some((id) => alwaysVisibleIds.has(id))) return;
    child.classList.add("optional-tool");
    child.dataset.toolCategory = ids.map((id) => categoryById[id]).find(Boolean) || "event";
  });
  const tabs = document.createElement("div");
  tabs.id = "toolCategoryTabs";
  tabs.className = "tool-tabs";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.category = category.key;
    button.textContent = category.label;
    button.addEventListener("click", () => {
      activeToolCategory = category.key;
      applyToolCategoryFilter();
    });
    tabs.appendChild(button);
  });
  controls.appendChild(tabs);
  applyToolCategoryFilter();
}

function applyToolCategoryFilter() {
  document.querySelectorAll(".controls .optional-tool").forEach((element) => {
    element.classList.toggle("tool-active", (element.dataset.toolCategory || "event") === activeToolCategory);
  });
  document.querySelectorAll("#toolCategoryTabs button[data-category]").forEach((button) => {
    button.classList.toggle("tab-active", button.dataset.category === activeToolCategory);
  });
}

function shiftWeek(days) {
  const date = dayDate(0);
  date.setDate(date.getDate() + days);
  moveToWeek(toDateInput(date));
}

function restoreHistoryStep(fromStack, toStack) {
  const previousJson = fromStack.pop();
  if (!previousJson) return;
  toStack.push(lastSavedStateJson || JSON.stringify(state));
  isRestoringHistory = true;
  state = normalizeState(JSON.parse(previousJson));
  persistStateNow();
  lastSavedStateJson = previousJson;
  isRestoringHistory = false;
  savedSelectionRange = null;
  selectedCellImage = null;
  render();
}

function readImageFile(file, onLoad) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => onLoad(reader.result));
  reader.readAsDataURL(file);
}

function readNoticeImageFile(file, onLoad) {
  readImageFile(file, (imageData) => {
    const image = new Image();
    image.addEventListener("load", () => {
      const maxDimension = 720;
      const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext("2d");
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      onLoad(canvas.toDataURL("image/jpeg", 0.82));
    });
    image.src = imageData;
  });
}

async function parseAnnualScheduleFile(file) {
  if (file.name.toLowerCase().endsWith(".json") || file.type.includes("json")) {
    const json = JSON.parse(await file.text());
    return json.annualEvents || json;
  }
  const buffer = await file.arrayBuffer();
  const head = new Uint8Array(buffer.slice(0, 4));
  if (head[0] === 0xd0 && head[1] === 0xcf && head[2] === 0x11 && head[3] === 0xe0) {
    throw new Error("古い形式のExcel（.xls）です。.xlsxで保存し直してください");
  }
  const entries = await unzipXlsx(buffer);
  return extractAnnualEventsFromWorkbook(entries);
}

async function unzipEntriesRaw(buffer) {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  let eocd = -1;
  for (let index = bytes.length - 22; index >= 0; index -= 1) {
    if (view.getUint32(index, true) === 0x06054b50) {
      eocd = index;
      break;
    }
  }
  if (eocd === -1) throw new Error("ZIP end not found");
  const entryCount = view.getUint16(eocd + 10, true);
  const centralOffset = view.getUint32(eocd + 16, true);
  const decoder = new TextDecoder("utf-8");
  const entries = {};
  let offset = centralOffset;
  for (let entryIndex = 0; entryIndex < entryCount; entryIndex += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const name = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));
    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataStart, dataStart + compressedSize);
    entries[name] = await inflateZipEntry(compressed, method);
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

async function unzipXlsx(buffer) {
  const raw = await unzipEntriesRaw(buffer);
  const decoder = new TextDecoder("utf-8");
  return Object.fromEntries(Object.entries(raw).map(([name, bytes]) => [name, decoder.decode(bytes)]));
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

async function inflateZipEntry(bytes, method) {
  if (method === 0) return bytes;
  if (method !== 8) throw new Error(`Unsupported ZIP method: ${method}`);
  for (const format of ["deflate-raw", "deflate"]) {
    try {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream(format));
      return new Uint8Array(await new Response(stream).arrayBuffer());
    } catch {
      // Try the next browser-supported deflate wrapper.
    }
  }
  throw new Error("Cannot inflate XLSX entry");
}

function extractAnnualEventsFromWorkbook(entries) {
  const parser = new DOMParser();
  const workbookXml = parser.parseFromString(entries["xl/workbook.xml"], "application/xml");
  const relsXml = parser.parseFromString(entries["xl/_rels/workbook.xml.rels"], "application/xml");
  const sharedStrings = readSharedStrings(entries["xl/sharedStrings.xml"]);
  const relTargets = {};
  relsXml.querySelectorAll("Relationship").forEach((rel) => {
    relTargets[rel.getAttribute("Id")] = `xl/${rel.getAttribute("Target").replace(/^\/?xl\//, "")}`;
  });

  let events = {};
  workbookXml.querySelectorAll("sheet").forEach((sheet) => {
    const relId = sheet.getAttribute("r:id");
    const target = relTargets[relId];
    if (!target || !entries[target]) return;
    events = { ...events, ...extractAnnualEventsFromSheet(entries[target], sharedStrings) };
  });
  return events;
}

function readSharedStrings(xmlText) {
  if (!xmlText) return [];
  const xml = new DOMParser().parseFromString(xmlText, "application/xml");
  return Array.from(xml.querySelectorAll("si")).map((item) => Array.from(item.querySelectorAll("t")).map((text) => text.textContent || "").join(""));
}

function normalizeCellText(value) {
  return String(value ?? "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/\s+/g, "")
    .trim();
}

function excelSerialToDate(serial) {
  // Excelの日付シリアル値（1900年基準）をDateへ変換
  return new Date(Date.UTC(1899, 11, 30) + Math.round(Number(serial)) * 86400000);
}

function cellDateValue(value) {
  const normalized = normalizeCellText(value);
  // 日付セル（シリアル値）: 2009年〜2064年ごろの範囲だけ日付とみなす
  if (/^\d{5}(\.\d+)?$/.test(normalized)) {
    const serial = Number(normalized);
    if (serial >= 40000 && serial <= 60000) {
      const date = excelSerialToDate(serial);
      return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
    }
  }
  // 「2026/5/12」「2026-5-12」「2026年5月12日」形式
  const full = normalized.match(/^(20\d{2})[\/\-年](\d{1,2})[\/\-月](\d{1,2})日?/);
  if (full) return { year: Number(full[1]), month: Number(full[2]), day: Number(full[3]) };
  // 「5/12」「5月12日」形式（年は月から推定）
  const short = normalized.match(/^(\d{1,2})[\/月](\d{1,2})日?$/);
  if (short) return { year: null, month: Number(short[1]), day: Number(short[2]) };
  return null;
}

function extractAnnualEventsFromSheet(sheetXml, sharedStrings) {
  const xml = new DOMParser().parseFromString(sheetXml, "application/xml");
  const grid = [];
  let baseYear = new Date().getFullYear();
  xml.querySelectorAll("row").forEach((row) => {
    const rowIndex = Number(row.getAttribute("r")) - 1;
    grid[rowIndex] ||= [];
    row.querySelectorAll("c").forEach((cell) => {
      const ref = cell.getAttribute("r") || "";
      const colIndex = columnNameToIndex(ref.replace(/\d/g, ""));
      const value = readCellValue(cell, sharedStrings);
      grid[rowIndex][colIndex] = value;
      const yearMatch = normalizeCellText(value).match(/(20\d{2})/);
      if (yearMatch) baseYear = Number(yearMatch[1]);
    });
  });

  const events = {};
  const addEvent = (year, month, day, text) => {
    if (!month || !day || !text) return;
    const calendarYear = year || (month < 4 ? baseYear + 1 : baseYear);
    events[`${calendarYear}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`] = text;
  };

  grid.forEach((row, rowIndex) => {
    (row || []).forEach((value, colIndex) => {
      // 「5月」「５月」「2026年5月」などの月見出しを探す
      const monthMatch = normalizeCellText(value).match(/(\d{1,2})月$/);
      if (!monthMatch) return;
      const month = Number(monthMatch[1]);
      if (month < 1 || month > 12) return;
      const eventCol = findEventColumn(grid[rowIndex + 1] || [], colIndex);
      if (eventCol === -1) return;
      for (let scanRow = rowIndex + 2; scanRow < grid.length; scanRow += 1) {
        const dayCell = grid[scanRow]?.[colIndex];
        const text = cleanScheduleText(grid[scanRow]?.[eventCol]);
        if (!text) continue;
        // 日付セル・「5/12」などの完全な日付が入っている場合はそれを優先
        const fullDate = cellDateValue(dayCell);
        if (fullDate) {
          addEvent(fullDate.year, fullDate.month || month, fullDate.day, text);
          continue;
        }
        const day = parseDayNumber(dayCell);
        if (day) addEvent(null, month, day, text);
      }
    });
  });
  return events;
}

function findEventColumn(headerRow, monthCol) {
  for (let col = monthCol; col <= monthCol + 4; col += 1) {
    const text = String(headerRow[col] || "");
    if (text.includes("行事") || text.includes("予定") || text.includes("内容")) return col;
  }
  return monthCol + 2;
}

function readCellValue(cell, sharedStrings) {
  const type = cell.getAttribute("t");
  if (type === "inlineStr") return Array.from(cell.querySelectorAll("t")).map((text) => text.textContent || "").join("");
  const raw = cell.querySelector("v")?.textContent ?? "";
  if (type === "s") return sharedStrings[Number(raw)] || "";
  return raw;
}

function columnNameToIndex(name) {
  return Array.from(name).reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0) - 1;
}

function parseDayNumber(value) {
  const match = normalizeCellText(value).match(/\d{1,2}/);
  if (!match) return null;
  const day = Number(match[0]);
  return day >= 1 && day <= 31 ? day : null;
}

function cleanScheduleText(value) {
  return String(value ?? "")
    .replace(/\r/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function exportCurrentPageToWord() {
  const tableHtml = buildWordEditTableHtml();
  const badgeText = escapeHtml(elements.periodBadge.innerText.trim()).replace(/\n/g, "<br>");
  const noticeHtml = escapeHtml(elements.noticeText.innerText.trim()).replace(/\n/g, "<br>");
  const html = [
    "<!doctype html>",
    "<html>",
    "<head>",
    "  <meta charset=\"utf-8\">",
    "  <title>timetable edit document</title>",
    "  <style>",
    "    body { font-family: \"Yu Gothic\", \"Meiryo\", sans-serif; color:#111; }",
    "    h1 { font-size: 18pt; margin: 0 0 8pt; }",
    "    .meta { font-size: 12pt; margin: 0 0 8pt; }",
    "    .badge-text { border: 1px solid #111; padding: 6pt; margin: 0 0 10pt; font-weight: 700; }",
    "    table { width: 100%; border-collapse: collapse; table-layout: fixed; }",
    "    th, td { border: 1px solid #111; padding: 5pt; text-align: left; vertical-align: top; font-size: 10.5pt; line-height: 1.35; }",
    "    th { text-align: center; font-weight: 700; background: #f2f2f2; }",
    "    .notice { margin-top: 10pt; border: 1px solid #111; padding: 8pt; font-size: 11pt; line-height: 1.45; }",
    "  </style>",
    "</head>",
    "<body>",
    "  <h1>時間割</h1>",
    "  <p class=\"meta\"><strong>" + escapeHtml(elements.schoolName.innerText) + "</strong>\u3000" + escapeHtml(elements.issueDate.innerText) + "</p>",
    "  <div class=\"badge-text\">" + badgeText + "</div>",
    "  " + tableHtml,
    "  <div class=\"notice\">" + noticeHtml + "</div>",
    "</body>",
    "</html>"
  ].join("\n");

  downloadWordHtml(html);
}

function buildWordEditTableHtml() {
  const table = document.querySelector("#scheduleTable");
  const rows = Array.from(table.rows).map((row) => {
    const cells = Array.from(row.cells).map((cell) => {
      const tag = cell.tagName.toLowerCase() === "th" ? "th" : "td";
      const attrs = [];
      if (cell.colSpan > 1) attrs.push("colspan=\"" + cell.colSpan + "\"");
      if (cell.rowSpan > 1) attrs.push("rowspan=\"" + cell.rowSpan + "\"");
      const prefix = attrs.length ? " " + attrs.join(" ") : "";
      return "<" + tag + prefix + ">" + wordCellHtml(cell) + "</" + tag + ">";
    }).join("");
    return "<tr>" + cells + "</tr>";
  }).join("");
  return "<table>" + rows + "</table>";
}

function wordCellHtml(cell) {
  const clone = cell.cloneNode(true);
  clone.querySelectorAll("img").forEach((image) => {
    const label = image.getAttribute("alt") || image.getAttribute("title") || "\u753b\u50cf";
    image.replaceWith(document.createTextNode("\u3010\u753b\u50cf:" + label + "\u3011"));
  });
  clone.querySelectorAll("mark").forEach((mark) => {
    const span = document.createElement("span");
    span.textContent = mark.innerText;
    mark.replaceWith(span);
  });
  return escapeHtml(clone.innerText.trim()).replace(/\n/g, "<br>");
}

async function downloadWordHtml(html) {
  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  const filename = `${scheduleFileBaseName()}.doc`;
  if (elements.exportStatus) elements.exportStatus.textContent = "";
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: "Word document",
            accept: { "application/msword": [".doc"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      if (elements.exportStatus) {
        elements.exportStatus.textContent = "Word\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u307e\u3057\u305f";
      }
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        if (elements.exportStatus) {
          elements.exportStatus.textContent = "\u4fdd\u5b58\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f";
        }
        return;
      }
      console.warn("Save picker failed. Falling back to download link.", error);
    }
  }
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  if (elements.exportStatus) {
    const manualLink = link.cloneNode(false);
    manualLink.textContent = "Word\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58";
    manualLink.className = "manual-download-link";
    manualLink.style.display = "inline-block";
    elements.exportStatus.textContent = "";
    elements.exportStatus.appendChild(manualLink);
  }
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);

}

async function exportCurrentPageToPdf() {
  persistStateNow();
  // 最新の内容で「行の途中で切れない位置」を計算してから印刷ドキュメントを作る
  try { await updatePrintFitNow(); } catch (error) {}
  const filename = scheduleFileBaseName();
  document.title = filename;
  showPdfFileName(filename);
  const copied = await copyTextToClipboard(filename);
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("\u5370\u5237\u7528\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u958b\u3051\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u4fdd\u5b58\u540d\u306f\u30b3\u30d4\u30fc\u3057\u3066\u3042\u308a\u307e\u3059\u3002");
    window.print();
    return;
  }
  preparePrintLayout();
  const printHtml = buildPdfPrintDocument(filename);
  clearPrintLayout();
  printWindow.document.open();
  printWindow.document.write(printHtml);
  printWindow.document.close();
  await waitForPrintImages(printWindow);
  if (!copied) showPdfFileName(filename);
  printWindow.focus();
  printWindow.print();
}

function collectStyleText() {
  return Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules || []).map((rule) => rule.cssText).join("\n");
      } catch (error) {
        return "";
      }
    })
    .join("\n");
}

function buildPdfPrintDocument(filename) {
  const styles = collectStyleText();
  // 裏面（backPage）も忘れずに含める（hidden属性は印刷CSSの has-back-page ルールが上書きする）
  const backPageHtml = elements.backPage ? elements.backPage.outerHTML : "";
  // 編集画面専用の赤い点線（printFitLine）は印刷ドキュメントから外す
  const pageClone = document.querySelector(".page").cloneNode(true);
  pageClone.querySelector("#printFitLine")?.remove();
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(filename)}</title><script>document.title=${JSON.stringify(filename)};</script><style>${styles}</style></head><body class="${document.body.className}">${pageClone.outerHTML}${backPageHtml}<script>document.title=${JSON.stringify(filename)};</script></body></html>`;
}

function waitForPrintImages(printWindow) {
  const images = Array.from(printWindow.document.images || []);
  if (!images.length) return Promise.resolve();
  return Promise.all(images.map((image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
      setTimeout(resolve, 1200);
    });
  }));
}

async function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    console.warn("Could not copy with navigator.clipboard.", error);
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.left = "-9999px";
  input.style.top = "0";
  document.body.appendChild(input);
  input.select();
  try {
    return document.execCommand("copy");
  } catch (error) {
    console.warn("Could not copy with execCommand.", error);
    return false;
  } finally {
    input.remove();
  }
}

function showPdfFileName(filename) {
  if (!elements.exportStatus) return;
  elements.exportStatus.textContent = "";
  const label = document.createElement("span");
  label.className = "pdf-file-name-hint";
  label.textContent = `PDF\u4fdd\u5b58\u540d\u306f\u81ea\u52d5\u53cd\u6620\u3067\u304d\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u4fdd\u5b58\u753b\u9762\u3067\u3053\u308c\u3092\u8cbc\u308a\u4ed8\u3051: ${filename}`;
  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "copy-pdf-name-button";
  copyButton.textContent = "\u4fdd\u5b58\u540d\u3092\u30b3\u30d4\u30fc";
  copyButton.addEventListener("click", async () => {
    const copied = await copyTextToClipboard(filename);
    copyButton.textContent = copied ? "\u30b3\u30d4\u30fc\u6e08\u307f" : "\u30b3\u30d4\u30fc\u3067\u304d\u307e\u305b\u3093";
    setTimeout(() => {
      copyButton.textContent = "\u4fdd\u5b58\u540d\u3092\u30b3\u30d4\u30fc";
    }, 1800);
  });
  elements.exportStatus.appendChild(label);
  elements.exportStatus.appendChild(copyButton);
}
function preparePrintLayout() {
  updateDocumentTitle();
  document.querySelectorAll(".selected-illustration").forEach((element) => {
    element.classList.remove("selected-illustration");
  });
  selectedCellImage = null;
  positionImageResizeHandle();
  // 裏面は「開いていて、中身があるとき」だけ2ページ目として印刷する
  // ※innerTextは非表示要素だと空になるので、必ずtextContentで判定する
  const hasBackContent = Boolean(elements.backPageText && (elements.backPageText.textContent.trim() || elements.backPageText.querySelector("img")));
  document.body.classList.toggle("has-back-page", state.showBackPage && hasBackContent);
  splitNoticeForPrint();
  // 連絡が長いほど文字を小さくして、表（1ページ目）に収める
  const textLength = elements.noticeText.innerText.replace(/\s/g, "").length;
  document.body.classList.remove("notice-long", "notice-very-long", "notice-extra-long");
  if (textLength > 900) {
    document.body.classList.add("notice-extra-long");
  } else if (textLength > 620) {
    document.body.classList.add("notice-very-long");
  } else if (textLength > 380) {
    document.body.classList.add("notice-long");
  }
}

function clearPrintLayout() {
  if (printNoticeOriginalHtml !== null) {
    elements.noticeText.innerHTML = printNoticeOriginalHtml;
    printNoticeOriginalHtml = null;
  }
  document.body.classList.remove("notice-long", "notice-very-long", "notice-extra-long", "has-print-continuation", "has-back-page");
  if (elements.printNoticeContinuation) {
    elements.printNoticeContinuation.innerHTML = "";
  }
}

function splitNoticeForPrint() {
  // \u300c\u9023\u7d61\u306e\u3064\u3065\u304d\u300d\u30da\u30fc\u30b8\u306f\u5ec3\u6b62\uff08\u8868\uff1d\u6642\u9593\u5272\uff0b\u9023\u7d61\u6b04\u3067A4\u306b\u53ce\u3081\u308b\u3002\u88cf\uff1d\u88cf\u9762\u30da\u30fc\u30b8\u3067A4\uff09\u3002
  // \u9023\u7d61\u304c\u9577\u3044\u3068\u304d\u306f preparePrintLayout \u306e notice-long \u7cfb\u30af\u30e9\u30b9\u3067\u6587\u5b57\u3092\u81ea\u52d5\u3067\u5c0f\u3055\u304f\u3057\u3066\u53ce\u3081\u308b\u3002
  if (elements.printNoticeContinuation) elements.printNoticeContinuation.innerHTML = "";
  document.body.classList.remove("has-print-continuation");
}

function normalizeContinuationHtml(html) {
  return formatContinuationNotice(html);
}

function flattenContinuationLineHtml(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  let block = container.querySelector("div, p");
  while (block) {
    block.insertAdjacentText("beforebegin", " ");
    block.insertAdjacentText("afterend", " ");
    block.replaceWith(...Array.from(block.childNodes));
    block = container.querySelector("div, p");
  }
  collapseTextNodes(container);
  return container.innerHTML.replace(/\s{2,}/g, " ").trim();
}

function collapseTextNodes(node) {
  Array.from(node.childNodes).forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      child.textContent = child.textContent.replace(/\s+/g, " ");
    } else {
      collapseTextNodes(child);
    }
  });
}

function splitNoticeHtml(html) {
  const units = noticeHtmlUnits(html);
  const firstUnits = [];
  const restUnits = [];
  let length = 0;
  const firstLimit = 45;
  units.forEach((unit, index) => {
    const nextLength = length + noticeHtmlTextLength(unit);
    if ((nextLength <= firstLimit || firstUnits.length === 0) && index < units.length - 1) {
      firstUnits.push(unit);
      length = nextLength;
    } else {
      restUnits.push(unit);
    }
  });
  if (!restUnits.length) return { first: html, rest: "" };
  return {
    first: firstUnits.join("<br><br>"),
    rest: restUnits.join("<br><br>"),
  };
}

function noticeHtmlUnits(html) {
  const lines = noticePrintLines(html);
  const units = [];
  let current = "";
  const flush = () => {
    if (hasNoticeVisibleContent(current)) units.push(current.trim());
    current = "";
  };

  lines.forEach((line) => {
    if (line.blank) {
      flush();
      return;
    }

    if (isNoticeParagraphStart(line.text)) {
      flush();
      current = line.html;
      return;
    }

    current += `${current ? "<br>" : ""}${line.html}`;
  });
  flush();
  return units.length ? units : [html];
}

function formatContinuationNotice(html) {
  const units = noticeHtmlUnits(html)
    .map((unit) => unit.trim())
    .filter(hasNoticeVisibleContent);
  const hasNoticeTitle = units.some((unit) => htmlToPlainText(unit).includes("\u3010\u9023\u7d61\u3068\u304a\u9858\u3044\u3011"));
  let itemNumber = 1;
  const formatted = units.map((unit) => {
    const text = htmlToPlainText(unit).trim();
    if (text.includes("\u3010\u9023\u7d61\u3068\u304a\u9858\u3044\u3011")) return "<div class=\"continuation-heading\">\u3010\u9023\u7d61\u3068\u304a\u9858\u3044\u3011</div>";
    if (noticeHtmlHasImage(unit) && !text) return `<div class=\"continuation-line continuation-image-line\">${unit}</div>`;
    const lineHtml = flattenContinuationLineHtml(unit);
    const existingNumber = text.match(/^[\u2460-\u2473]/)?.[0];
    if (existingNumber) return formatContinuationItem(lineHtml, existingNumber);
    if (/^\u30fb/.test(text)) return `<div class=\"continuation-line continuation-subitem\">${lineHtml}</div>`;
    if (/^[\u3007\u25cb]/.test(text)) {
      const withoutCircle = lineHtml.replace(/^\s*[\u3007\u25cb]\s*/, "");
      const bodyText = htmlToPlainText(withoutCircle).trim();
      const existingMark = bodyText.match(/^[\u2460-\u2473]/)?.[0];
      const mark = existingMark || circledNumber(itemNumber);
      itemNumber += 1;
      return formatContinuationItem(existingMark ? withoutCircle : `${mark} ${withoutCircle}`, mark);
    }
    return `<div class=\"continuation-line\">${lineHtml}</div>`;
  });
  if (!hasNoticeTitle) {
    formatted.unshift("<div class=\"continuation-heading\">\u3010\u9023\u7d61\u3068\u304a\u9858\u3044\uff08\u3064\u3065\u304d\uff09\u3011</div>");
  }
  return formatted.join("");
}

function formatContinuationItem(html, marker) {
  const body = stripLeadingBreakHtml(stripLeadingVisibleMarker(html, marker));
  const itemWithBullets = formatContinuationItemWithBullets(marker, body);
  if (itemWithBullets) return itemWithBullets;
  return `<div class=\"continuation-item\"><span class=\"continuation-marker\">${marker}</span><span class=\"continuation-body\">${body}</span></div>`;
}

function formatContinuationItemWithBullets(marker, bodyHtml) {
  if (!/<br\s*\/?>/i.test(bodyHtml) || !htmlToPlainText(bodyHtml).includes("・")) return "";
  const lines = bodyHtml
    .split(/<br\s*\/?>/i)
    .map((line) => line.trim())
    .filter((line) => htmlToPlainText(line).trim());
  const mainLines = [];
  const bulletLines = [];
  lines.forEach((line) => {
    const text = htmlToPlainText(line).trim();
    if (/^\u30fb/.test(text)) {
      bulletLines.push(line);
      return;
    }
    if (bulletLines.length) {
      bulletLines[bulletLines.length - 1] += ` ${line}`;
    } else {
      mainLines.push(line);
    }
  });
  if (!bulletLines.length) return "";
  const mainBody = mainLines.join(" ");
  const item = `<div class=\"continuation-item\"><span class=\"continuation-marker\">${marker}</span><span class=\"continuation-body\">${mainBody}</span></div>`;
  const bullets = bulletLines.map((line) => `<div class=\"continuation-line continuation-subitem\">${line}</div>`).join("");
  return item + bullets;
}

function stripLeadingBreakHtml(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  removeLeadingEmptyNodes(container);
  return container.innerHTML;
}

function circledNumber(number) {
  const marks = ["\u2460", "\u2461", "\u2462", "\u2463", "\u2464", "\u2465", "\u2466", "\u2467", "\u2468", "\u2469"];
  return marks[number - 1] || `${number}.`;
}

function stripLeadingVisibleMarker(html, marker) {
  const container = document.createElement("div");
  container.innerHTML = html;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    const value = node.textContent || "";
    if (value.trim()) {
      const pattern = new RegExp(`^(\\s*)${escapeRegExp(marker)}\\s*`);
      node.textContent = value.replace(pattern, "$1");
      break;
    }
    node = walker.nextNode();
  }
  removeLeadingEmptyNodes(container);
  return container.innerHTML;
}

function removeLeadingEmptyNodes(container) {
  while (container.firstChild) {
    const node = container.firstChild;
    if (node.nodeName === "BR") {
      node.remove();
      continue;
    }
    if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) {
      node.remove();
      continue;
    }
    if (node.nodeType === Node.ELEMENT_NODE && !hasNoticeVisibleContent(node.outerHTML)) {
      node.remove();
      continue;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      removeLeadingEmptyNodes(node);
      if (!hasNoticeVisibleContent(node.outerHTML)) {
        node.remove();
        continue;
      }
    }
    break;
  }
}

function escapeRegExp(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


function noticePrintLines(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  const lines = [];
  Array.from(container.childNodes).forEach((node) => {
    appendNoticePrintLine(node, lines);
  });
  return lines;
}

function appendNoticePrintLine(node, lines) {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent || "";
    if (text.trim()) {
      lines.push({ html: escapeHtml(text), text });
    }
    return;
  }

  if (node.nodeName === "BR") {
    lines.push({ blank: true });
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) return;

  const element = node;
  const tag = element.tagName.toLowerCase();
  if (tag === "img") {
    lines.push({ html: element.outerHTML, text: "", image: true });
    return;
  }
  if (["div", "p", "li"].includes(tag)) {
    const hasBlockChildren = Array.from(element.children).some((child) => ["DIV", "P", "LI"].includes(child.tagName));
    if (hasBlockChildren) {
      Array.from(element.childNodes).forEach((child) => {
        appendNoticePrintLine(child, lines);
      });
      return;
    }
    if (!hasNoticeVisibleContent(element.innerHTML)) {
      lines.push({ blank: true });
      return;
    }
    appendInlineNoticePrintLines(element, lines);
    return;
  }

  const text = element.innerText || element.textContent || "";
  if (text.trim()) {
    lines.push({ html: element.outerHTML, text });
  }
}

function appendInlineNoticePrintLines(element, lines) {
  let currentHtml = "";
  let currentText = "";
  const flush = () => {
    if (currentText.trim() || noticeHtmlHasImage(currentHtml)) {
      lines.push({ html: currentHtml.trim(), text: currentText.trim() });
    }
    currentHtml = "";
    currentText = "";
  };

  Array.from(element.childNodes).forEach((child) => {
    if (child.nodeName === "BR") {
      flush();
      lines.push({ blank: true });
      return;
    }
    if (child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() === "img") {
      flush();
      lines.push({ html: child.outerHTML, text: "", image: true });
      return;
    }
    const html = inlineNoticeHtml(child);
    currentHtml += html;
    currentText += htmlToPlainText(html);
  });
  flush();
}

function inlineNoticeHtml(node) {
  if (node.nodeType === Node.TEXT_NODE) return escapeHtml(node.textContent || "");
  if (node.nodeName === "BR") return " ";
  if (node.nodeType !== Node.ELEMENT_NODE) return "";

  const element = node;
  const tag = element.tagName.toLowerCase();
  if (["div", "p", "li"].includes(tag)) {
    return Array.from(element.childNodes).map(inlineNoticeHtml).join("").trim();
  }
  return element.outerHTML;
}

function isNoticeParagraphStart(text) {
  return /^[\u3010\u3007\u25cb\u30fb\u2460-\u2473]/.test(text.trim());
}

function noticeHtmlTextLength(html) {
  return htmlToPlainText(html).replace(/\s/g, "").length;
}

function noticeHtmlHasImage(html) {
  const container = document.createElement("div");
  container.innerHTML = html || "";
  return Boolean(container.querySelector("img"));
}

function hasNoticeVisibleContent(html) {
  return htmlToPlainText(html).trim() || noticeHtmlHasImage(html);
}

function htmlToPlainText(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container.innerText || container.textContent || "";
}

function applyHighlight(color) {
  const selection = window.getSelection();
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text");
  if (!target) {
    target = document.activeElement?.closest?.("td, .notice-text");
  }
  if (!target) target = lastEditableTarget;
  if (!target) return;
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed || !selection.toString().trim()) {
    return;
  }
  const range = selection.getRangeAt(0);
  if (!target.contains(range.commonAncestorContainer)) return;
  const marker = document.createElement("mark");
  marker.className = "highlight-mark";
  marker.style.backgroundColor = color;
  marker.appendChild(range.extractContents());
  range.insertNode(marker);
  selection.removeAllRanges();
  selection.addRange(range);
  syncHighlightedTarget(target);
}

function highlightColorValue(colorName) {
  return {
    yellow: "#fff59a",
    pink: "#ffd9e8",
    blue: "#d8f1ff",
    green: "#dcf5d4",
  }[colorName] || "#fff59a";
}

function clearSelectedHighlight() {
  const selection = window.getSelection();
  const currentMark = selection?.anchorNode?.parentElement?.closest(".highlight-mark");
  if (currentMark) {
    const currentTarget = currentMark.closest("td, .notice-text");
    if (currentTarget) {
      unwrapHighlights(currentTarget, (mark) => mark === currentMark);
      syncHighlightedTarget(currentTarget);
      return;
    }
  }
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text");
  if (!target) {
    target = document.activeElement?.closest?.("td, .notice-text");
  }
  if (!target) target = lastEditableTarget;
  if (!target) return;
  const activeMark = selection?.anchorNode?.parentElement?.closest(".highlight-mark");
  if (activeMark && target.contains(activeMark)) {
    unwrapHighlights(target, (mark) => mark === activeMark);
    syncHighlightedTarget(target);
    return;
  }
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    unwrapHighlights(target, () => true);
    syncHighlightedTarget(target);
    return;
  }
  const range = selection.getRangeAt(0);
  if (!target.contains(range.commonAncestorContainer)) return;
  unwrapHighlights(target, (mark) => range.intersectsNode(mark));
  syncHighlightedTarget(target);
}

function unwrapHighlights(target, shouldUnwrap) {
  target.querySelectorAll(".highlight-mark").forEach((mark) => {
    if (!shouldUnwrap(mark)) return;
    const parent = mark.parentNode;
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark);
    parent.removeChild(mark);
    parent.normalize();
  });
}

function syncHighlightedTarget(target) {
  if (target === elements.noticeText || target.closest(".notice-text")) {
    state.noticeText = elements.noticeText.innerHTML.trim();
    state.noticeHighlight = target.classList.contains("highlight-cell") || elements.noticeText.classList.contains("highlight-cell");
  }
  if (target === elements.backPageText || target.closest?.(".back-page-text")) {
    state.backPageHtml = elements.backPageText.innerHTML.trim();
  }
  const cell = target.matches("td") ? target : target.closest("td");
  if (cell?.dataset.row && cell?.dataset.day) {
    const rowIndex = Number(cell.dataset.row);
    const dayIndex = Number(cell.dataset.day);
    state.rows[rowIndex].cells[dayIndex] = multilineText(cell);
    state.cellHtml[rowIndex] ||= {};
    state.cellHtml[rowIndex][dayIndex] = cell.innerHTML;
    state.cellHighlight[rowIndex] ||= {};
    state.cellHighlight[rowIndex][dayIndex] = cell.classList.contains("highlight-cell");
    state.cellColor[rowIndex] ||= {};
    state.cellColor[rowIndex][dayIndex] = elements.cellColor.value;
  }
  saveState();
}

function applyFontToSelection(fontKey) {
  const selection = window.getSelection();
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (!target) target = lastEditableTarget;
  if (!target) return;
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed || !selection.toString().trim()) {
    applyFontToWholeTarget(target, fontKey);
    return;
  }
  const range = selection.getRangeAt(0);
  if (!target.contains(range.commonAncestorContainer)) {
    applyFontToWholeTarget(target, fontKey);
    return;
  }
  const span = document.createElement("span");
  span.style.fontFamily = fontFamilyValue(fontKey);
  span.style.fontWeight = fontKey === "pop" ? "700" : "";
  span.appendChild(range.extractContents());
  range.insertNode(span);
  selection.removeAllRanges();
  selection.addRange(range);
  syncEditableTarget(target);
}

function applyFontToWholeTarget(target, fontKey) {
  const span = document.createElement("span");
  span.style.fontFamily = fontFamilyValue(fontKey);
  span.style.fontWeight = fontKey === "pop" ? "700" : "";
  while (target.firstChild) span.appendChild(target.firstChild);
  target.appendChild(span);
  syncEditableTarget(target);
}

function applyStyleToSelection(style) {
  const selection = window.getSelection();
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (!target) target = lastEditableTarget;
  if (!target) return;
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed || !selection.toString().trim()) {
    applyStyleToWholeTarget(target, style);
    return;
  }
  const range = selection.getRangeAt(0);
  if (!target.contains(range.commonAncestorContainer)) {
    applyStyleToWholeTarget(target, style);
    return;
  }
  const span = document.createElement("span");
  Object.assign(span.style, style);
  span.appendChild(range.extractContents());
  range.insertNode(span);
  selection.removeAllRanges();
  selection.addRange(range);
  syncEditableTarget(target);
}

function applyStyleToWholeTarget(target, style) {
  const span = document.createElement("span");
  Object.assign(span.style, style);
  while (target.firstChild) span.appendChild(target.firstChild);
  target.appendChild(span);
  syncEditableTarget(target);
}

function applyRubyToSelection() {
  const selection = window.getSelection();
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (!target) target = lastEditableTarget;
  if (!target || !selection || selection.rangeCount === 0 || selection.isCollapsed || !selection.toString().trim()) return;
  const selectedText = selection.toString().trim();
  const reading = prompt(`「${selectedText}」のふりがなを入力してください。`, "");
  if (!reading) return;
  const range = selection.getRangeAt(0);
  if (!target.contains(range.commonAncestorContainer)) return;
  const ruby = document.createElement("ruby");
  ruby.className = "ruby-text";
  ruby.textContent = selectedText;
  const rt = document.createElement("rt");
  rt.textContent = reading.trim();
  ruby.appendChild(rt);
  range.deleteContents();
  range.insertNode(ruby);
  selection.removeAllRanges();
  syncEditableTarget(target);
}

function clearRubyInSelection() {
  const selection = window.getSelection();
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (!target) target = lastEditableTarget;
  if (!target) return;
  const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
  const rubies = Array.from(target.querySelectorAll("ruby"));
  rubies.forEach((ruby) => {
    if (range && !range.intersectsNode(ruby)) return;
    const text = Array.from(ruby.childNodes)
      .filter((node) => node.nodeName.toLowerCase() !== "rt")
      .map((node) => node.textContent || "")
      .join("");
    ruby.replaceWith(document.createTextNode(text));
  });
  syncEditableTarget(target);
}

function applyRubyToSelectionFixed() {
  const selection = window.getSelection();
  if (savedSelectionRange) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let target = selection?.anchorNode?.parentElement?.closest("td, .notice-text, .back-page-text, #periodBadge, #schoolName, #issueDate, #reverseNotice");
  if (!target) target = lastEditableTarget;
  if (!target || !selection || selection.rangeCount === 0 || selection.isCollapsed || !selection.toString().trim()) return;

  const selectedText = selection.toString().trim();
  const range = selection.getRangeAt(0).cloneRange();
  let reading = elements.rubyText.value.trim();
  if (!reading) reading = prompt(`「${selectedText}」のふりがなを入力してください。`, "");
  if (!reading) return;
  if (!target.contains(range.commonAncestorContainer)) return;

  const ruby = document.createElement("ruby");
  ruby.className = "ruby-text";
  ruby.textContent = selectedText;
  const rt = document.createElement("rt");
  rt.textContent = reading.trim();
  ruby.appendChild(rt);
  range.deleteContents();
  range.insertNode(ruby);
  selection.removeAllRanges();
  savedSelectionRange = null;
  elements.rubyText.value = "";
  syncEditableTarget(target);
}

function selectionSizeValue(sizeKey) {
  return {
    small: "0.85em",
    normal: "1em",
    large: "1.25em",
    xlarge: "1.5em",
  }[sizeKey] || "1em";
}

function selectionTextColorValue(colorKey) {
  return {
    black: "#111111",
    red: "#d71920",
    blue: "#1769d1",
    green: "#18843c",
    pink: "#d43f8d",
    orange: "#d96c00",
  }[colorKey] || "#111111";
}

function fontFamilyValue(fontKey) {
  return {
    gothic: '"Yu Gothic", "Meiryo", sans-serif',
    "hg-gothic": '"HGゴシックE", "HGPゴシックE", "HGSゴシックE", "HGP創英角ゴシックUB", "Yu Gothic", "Meiryo", sans-serif',
    pop: '"HG創英角ﾎﾟｯﾌﾟ体", "HGP創英角ﾎﾟｯﾌﾟ体", "HGS創英角ﾎﾟｯﾌﾟ体", "HG創英角ポップ体", "HGP創英角ポップ体", "HGS創英角ポップ体", "Yu Gothic", "Meiryo", sans-serif',
    rounded: '"HG丸ゴシックM-PRO", "HGP丸ゴシックM-PRO", "HGS丸ゴシックM-PRO", "Yu Gothic", "Meiryo", sans-serif',
    mincho: '"Yu Mincho", "MS Mincho", serif',
    hand: '"UD Digi Kyokasho N-R", "Yu Gothic", "Meiryo", sans-serif',
  }[fontKey] || '"Yu Gothic", "Meiryo", sans-serif';
}

function syncEditableTarget(target) {
  if (target.closest("td, .notice-text, .back-page-text")) {
    syncHighlightedTarget(target);
    return;
  }
  if (target === elements.periodBadge) {
    state.periodBadge = badgeTextHtml();
    fitBadgeText();
  } else if (target === elements.schoolName) {
    state.schoolName = elements.schoolName.innerHTML.trim();
  } else if (target === elements.issueDate) {
    state.issueDate = elements.issueDate.innerHTML.trim();
  } else if (target === elements.reverseNotice) {
    state.reverseNotice = elements.reverseNotice.innerHTML.trim();
  }
  saveState();
}

function applyCellColorToLastTarget() {
  const cell = lastEditableTarget?.closest?.("td");
  if (!cell?.dataset.row || !cell?.dataset.day) return;
  const rowIndex = Number(cell.dataset.row);
  const dayIndex = Number(cell.dataset.day);
  cell.classList.remove("cell-color-blue", "cell-color-yellow", "cell-color-pink", "cell-color-green");
  const color = elements.cellColor.value;
  if (color) cell.classList.add(`cell-color-${color}`);
  state.cellColor[rowIndex] ||= {};
  state.cellColor[rowIndex][dayIndex] = color;
  saveState();
}

function applyTextAlignToLastTarget() {
  const target = lastEditableTarget;
  if (!target) return;
  const align = elements.textAlign.value || "center";
  const cell = target.closest?.("td");
  if (cell?.dataset.row && cell?.dataset.day) {
    const rowIndex = Number(cell.dataset.row);
    const dayIndex = Number(cell.dataset.day);
    cell.classList.remove("text-align-left", "text-align-center", "text-align-right", "text-align-justify");
    cell.classList.add(`text-align-${align}`);
    state.cellAlign[rowIndex] ||= {};
    state.cellAlign[rowIndex][dayIndex] = align;
    saveState();
    return;
  }
  if (target.matches?.(".notice-text, #periodBadge, #schoolName, #issueDate, #reverseNotice")) {
    target.style.textAlign = align;
    target.style.textAlignLast = align === "justify" ? "justify" : "";
    const key = target === elements.noticeText ? "noticeText"
      : target === elements.periodBadge ? "periodBadge"
        : target === elements.schoolName ? "schoolName"
          : target === elements.issueDate ? "issueDate"
            : target === elements.reverseNotice ? "reverseNotice"
              : "";
    if (key) {
      state.blockAlign ||= {};
      state.blockAlign[key] = align;
    }
    syncEditableTarget(target);
  }
}

function insertImageIntoLastTarget(imageData, altText = "") {
  const cell = lastEditableTarget?.closest?.("td");
  if (!cell?.dataset.row || !cell?.dataset.day) return;
  insertImageIntoCell(cell, imageData, altText);
}

function insertImageIntoCell(cell, imageData, altText = "") {
  const image = document.createElement("img");
  image.src = imageData;
  image.alt = altText;
  image.title = altText;
  image.className = `cell-illustration image-${elements.cellImageSize.value || "medium"}`;

  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0 && cell.contains(selection.anchorNode)) {
    const range = selection.getRangeAt(0);
    range.collapse(false);
    range.insertNode(image);
  } else {
    cell.appendChild(document.createElement("br"));
    cell.appendChild(image);
  }
  selectedCellImage?.classList.remove("selected-illustration");
  selectedCellImage = image;
  selectedCellImage.classList.add("selected-illustration");
  syncHighlightedTarget(cell);
}

function insertImageIntoNotice(imageData, altText = "", container = null) {
  const notice = container || elements.noticeText;
  const image = document.createElement("img");
  image.src = imageData;
  image.alt = altText;
  image.title = altText;
  image.className = `notice-illustration image-${elements.cellImageSize.value || "medium"}`;

  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0 && notice.contains(selection.anchorNode)) {
    const range = selection.getRangeAt(0);
    range.collapse(false);
    range.insertNode(image);
  } else {
    if (notice.innerHTML.trim()) notice.appendChild(document.createElement("br"));
    notice.appendChild(image);
  }
  selectedCellImage?.classList.remove("selected-illustration");
  selectedCellImage = image;
  selectedCellImage.classList.add("selected-illustration");
  syncHighlightedTarget(notice);
}

function normalizeCellImages(cell) {
  let hasExternalImage = false;
  cell.querySelectorAll("img").forEach((image) => {
    if (!image.classList.contains("cell-illustration")) {
      image.classList.add("cell-illustration", `image-${elements.cellImageSize.value || "medium"}`);
    }
    image.removeAttribute("width");
    image.removeAttribute("height");
    image.style.width = "";
    image.style.height = "";
    if (/^https?:\/\//i.test(image.getAttribute("src") || "")) hasExternalImage = true;
    selectedCellImage?.classList.remove("selected-illustration");
    selectedCellImage = image;
    selectedCellImage.classList.add("selected-illustration");
  });
  return hasExternalImage;
}

function normalizeNoticeImages(notice) {
  let hasExternalImage = false;
  notice.querySelectorAll("img").forEach((image) => {
    if (!image.classList.contains("notice-illustration")) {
      image.classList.add("notice-illustration", `image-${elements.cellImageSize.value || "medium"}`);
    }
    image.classList.remove("cell-illustration");
    image.removeAttribute("width");
    image.removeAttribute("height");
    image.style.width = "";
    image.style.height = "";
    if (/^https?:\/\//i.test(image.getAttribute("src") || "")) hasExternalImage = true;
    selectedCellImage?.classList.remove("selected-illustration");
    selectedCellImage = image;
    selectedCellImage.classList.add("selected-illustration");
  });
  return hasExternalImage;
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function resizeSelectedCellImage() {
  const image = selectedCellImage || lastEditableTarget?.querySelector?.(".cell-illustration:last-of-type, .notice-illustration:last-of-type");
  if (!image) return;
  const size = elements.cellImageSize.value || "medium";
  const notice = image.closest(".notice-text, .back-page-text");
  const pixels = notice
    ? ({ small: 80, medium: 140, large: 220 }[size] || 140)
    : ({ small: 24, medium: 38, large: 58 }[size] || 38);
  image.removeAttribute("width");
  image.removeAttribute("height");
  image.style.setProperty("width", `${pixels}px`, "important");
  image.style.setProperty("height", "auto", "important");
  image.style.setProperty("max-width", `${pixels}px`, "important");
  image.style.setProperty("max-height", notice ? "none" : `${pixels}px`, "important");
  image.classList.add(notice ? "notice-illustration" : "cell-illustration");
  image.classList.remove(notice ? "cell-illustration" : "notice-illustration");
  image.classList.remove("image-small", "image-medium", "image-large");
  image.classList.add(`image-${size}`);
  selectedCellImage?.classList.remove("selected-illustration");
  selectedCellImage = image;
  selectedCellImage.classList.add("selected-illustration");
  const cell = image.closest("td");
  if (cell) syncHighlightedTarget(cell);
  if (notice) syncHighlightedTarget(notice);
  updateImageScaleControls(pixels);
  positionImageResizeHandle();
}

function deleteSelectedCellImage() {
  const image = selectedCellImage || lastEditableTarget?.querySelector?.(".cell-illustration:last-of-type, .notice-illustration:last-of-type");
  if (!image) return;
  const cell = image.closest("td");
  const notice = image.closest(".notice-text, .back-page-text");
  image.remove();
  selectedCellImage = null;
  positionImageResizeHandle();
  if (cell) syncHighlightedTarget(cell);
  if (notice) syncHighlightedTarget(notice);
}

// ===== 画像サイズ自由変更（スライダー＋ドラッグハンドル） =====
// この2つは初回render()の時点で参照されるため、初期化子を付けない
// （付けると作成済みのハンドルが上書きされて二重生成される）
var imageResizeHandle;
var imageHandleDrag;

function ensureImageResizeHandle() {
  if (imageResizeHandle) return imageResizeHandle;
  imageResizeHandle = document.createElement("div");
  imageResizeHandle.id = "imageResizeHandle";
  imageResizeHandle.hidden = true;
  imageResizeHandle.title = "ドラッグで画像の大きさを変えられます";
  imageResizeHandle.addEventListener("pointerdown", startImageHandleDrag);
  imageResizeHandle.addEventListener("pointermove", moveImageHandleDrag);
  imageResizeHandle.addEventListener("pointerup", endImageHandleDrag);
  imageResizeHandle.addEventListener("pointercancel", endImageHandleDrag);
  document.body.appendChild(imageResizeHandle);
  return imageResizeHandle;
}

function positionImageResizeHandle() {
  const handle = ensureImageResizeHandle();
  if (!selectedCellImage || !document.contains(selectedCellImage)) {
    handle.hidden = true;
    return;
  }
  const rect = selectedCellImage.getBoundingClientRect();
  handle.hidden = false;
  handle.style.left = `${Math.round(rect.right - 7)}px`;
  handle.style.top = `${Math.round(rect.bottom - 7)}px`;
}

function setImageFreeWidth(image, width) {
  const notice = image.closest(".notice-text, .back-page-text");
  image.classList.remove("image-small", "image-medium", "image-large");
  image.removeAttribute("width");
  image.removeAttribute("height");
  image.style.setProperty("width", `${width}px`, "important");
  image.style.setProperty("height", "auto", "important");
  image.style.setProperty("max-width", `${width}px`, "important");
  image.style.setProperty("max-height", "none", "important");
  image.classList.add(notice ? "notice-illustration" : "cell-illustration");
  image.classList.remove(notice ? "cell-illustration" : "notice-illustration");
}

function updateImageScaleControls(width) {
  if (!elements.imageScaleSlider) return;
  const rounded = Math.round(width);
  elements.imageScaleSlider.value = String(Math.max(16, Math.min(400, rounded)));
  if (elements.imageScaleValue) elements.imageScaleValue.textContent = `${rounded}px`;
}

function targetImageForResize() {
  return selectedCellImage || lastEditableTarget?.querySelector?.(".cell-illustration:last-of-type, .notice-illustration:last-of-type");
}

function selectImageForResize(image) {
  if (!image) return null;
  if (image !== selectedCellImage) {
    selectedCellImage?.classList.remove("selected-illustration");
    selectedCellImage = image;
    selectedCellImage.classList.add("selected-illustration");
  }
  return image;
}

function commitSelectedImageSize() {
  const image = selectedCellImage;
  if (!image) return;
  image.classList.remove("selected-illustration");
  const container = image.closest("td") || image.closest(".back-page-text") || image.closest(".notice-text");
  if (container) syncImageContainer(container);
  image.classList.add("selected-illustration");
}

function syncImageContainer(container) {
  if (container.matches?.(".back-page-text") || container.closest?.(".back-page-text")) {
    state.backPageHtml = elements.backPageText.innerHTML.trim();
    saveState();
    return;
  }
  if (container.matches?.(".notice-text") || container.closest?.(".notice-text")) {
    state.noticeText = elements.noticeText.innerHTML.trim();
    saveState();
    return;
  }
  const cell = container.matches("td") ? container : container.closest("td");
  if (cell?.dataset.row && cell?.dataset.day) {
    const rowIndex = Number(cell.dataset.row);
    const dayIndex = Number(cell.dataset.day);
    state.rows[rowIndex].cells[dayIndex] = multilineText(cell);
    state.cellHtml[rowIndex] ||= {};
    state.cellHtml[rowIndex][dayIndex] = cell.innerHTML;
    saveState();
  }
}

function startImageHandleDrag(event) {
  if (!selectedCellImage || !document.contains(selectedCellImage)) return;
  event.preventDefault();
  imageResizeHandle.setPointerCapture?.(event.pointerId);
  imageHandleDrag = {
    startX: event.clientX,
    startY: event.clientY,
    startWidth: selectedCellImage.getBoundingClientRect().width,
  };
}

function moveImageHandleDrag(event) {
  if (!imageHandleDrag || !selectedCellImage) return;
  const delta = Math.max(event.clientX - imageHandleDrag.startX, event.clientY - imageHandleDrag.startY);
  const width = Math.max(12, Math.min(500, Math.round(imageHandleDrag.startWidth + delta)));
  setImageFreeWidth(selectedCellImage, width);
  updateImageScaleControls(width);
  positionImageResizeHandle();
}

function endImageHandleDrag(event) {
  if (!imageHandleDrag) return;
  imageHandleDrag = null;
  imageResizeHandle.releasePointerCapture?.(event.pointerId);
  commitSelectedImageSize();
}

elements.imageScaleSlider?.addEventListener("input", () => {
  const image = selectImageForResize(targetImageForResize());
  if (!image) {
    showTemporaryStatus("先に大きさを変えたい画像をクリックしてください。");
    return;
  }
  const width = Number(elements.imageScaleSlider.value);
  setImageFreeWidth(image, width);
  if (elements.imageScaleValue) elements.imageScaleValue.textContent = `${width}px`;
  positionImageResizeHandle();
});

elements.imageScaleSlider?.addEventListener("change", commitSelectedImageSize);

window.addEventListener("resize", positionImageResizeHandle);
document.addEventListener("scroll", positionImageResizeHandle, true);

// ===== 行間・改行のあき =====
function applySpacingSettings() {
  const table = document.querySelector(".schedule");
  const scheduleLh = Number(state.scheduleLineHeight) || 0;
  if (table) {
    table.classList.toggle("custom-line-height", scheduleLh > 0);
    if (scheduleLh > 0) table.style.setProperty("--schedule-line-height", String(scheduleLh));
    else table.style.removeProperty("--schedule-line-height");
  }
  const noticeLh = Number(state.noticeLineHeight) || 0;
  elements.noticeText.style.lineHeight = noticeLh > 0 ? String(noticeLh) : "";
  const brGap = Number(state.noticeBrGap) || 0;
  [elements.noticeText, elements.printNoticeContinuation].forEach((target) => {
    if (!target) return;
    target.classList.toggle("custom-br-gap", brGap > 0);
    if (brGap > 0) target.style.setProperty("--notice-br-gap", `${brGap}px`);
    else target.style.removeProperty("--notice-br-gap");
  });
  if (elements.scheduleLineHeight) {
    elements.scheduleLineHeight.value = String(scheduleLh > 0 ? scheduleLh : 1.15);
    if (elements.scheduleLineHeightValue) elements.scheduleLineHeightValue.textContent = scheduleLh > 0 ? scheduleLh.toFixed(2) : "標準";
  }
  if (elements.noticeLineHeight) {
    elements.noticeLineHeight.value = String(noticeLh > 0 ? noticeLh : 1.55);
    if (elements.noticeLineHeightValue) elements.noticeLineHeightValue.textContent = noticeLh > 0 ? noticeLh.toFixed(2) : "標準";
  }
  if (elements.noticeBrGap) {
    elements.noticeBrGap.value = String(brGap);
    if (elements.noticeBrGapValue) elements.noticeBrGapValue.textContent = `${brGap}px`;
  }
}

elements.scheduleLineHeight?.addEventListener("input", () => {
  state.scheduleLineHeight = Number(elements.scheduleLineHeight.value) || 0;
  applySpacingSettings();
  saveState();
});

elements.noticeLineHeight?.addEventListener("input", () => {
  state.noticeLineHeight = Number(elements.noticeLineHeight.value) || 0;
  applySpacingSettings();
  saveState();
});

elements.noticeBrGap?.addEventListener("input", () => {
  state.noticeBrGap = Number(elements.noticeBrGap.value) || 0;
  applySpacingSettings();
  saveState();
});

elements.resetSpacing?.addEventListener("click", () => {
  state.scheduleLineHeight = 0;
  state.noticeLineHeight = 0;
  state.noticeBrGap = 0;
  applySpacingSettings();
  saveState();
  showTemporaryStatus("行間・改行のあきを標準に戻しました。");
});

// ===== おまかせ週作成 =====
function hasImportedCurriculum() {
  // 空の初期状態のときだけ false
  const current = JSON.stringify(normalizeCurriculumUnits(state.curriculumUnits || []));
  const legacy = JSON.stringify(normalizeCurriculumUnits(legacyDefaultCurriculumUnits()));
  return current !== legacy;
}

function fillAllUnitCandidates(overwriteExisting = false) {
  let filled = 0;
  state.rows.forEach((row, rowIndex) => {
    if (!isPeriodRow(row)) return;
    for (let dayIndex = 0; dayIndex < state.dayCount; dayIndex += 1) {
      if (state.dayEvents[dayIndex]) continue;
      const value = row.cells[dayIndex] || "";
      const lines = value.split("\n").map((line) => line.trim());
      const subject = lines[0] || "";
      const detail = lines.slice(1).join("\n").trim();
      if (!subject) continue;
      if (detail && !overwriteExisting) continue;
      const candidate = findCurriculumCandidate(subject, dayDate(dayIndex));
      if (!candidate || candidate === detail) continue;
      state.rows[rowIndex].cells[dayIndex] = `${subject}\n${candidate}`;
      if (state.cellHtml?.[rowIndex]) delete state.cellHtml[rowIndex][dayIndex];
      filled += 1;
    }
  });
  return filled;
}

elements.autoBuildWeek?.addEventListener("click", () => {
  const hasTemplates = (state.previousSchedules || []).length > 0;
  const hasEvents = Object.keys(state.annualEvents || {}).length > 0;
  const message = "読み込み済みのデータ（昨年度時間割・行事予定・教育課程）から、この週の時間割を自動で作ります。\n今の内容は書き換わりますが、「元に戻す」ボタンで戻せます。\nよろしいですか？";
  if (!confirm(message)) return;
  const results = [];
  if (hasTemplates) {
    const template = applyClosestPreviousSchedule();
    if (template) results.push(`昨年度の近い週「${template.name}」をたたき台にしました`);
  }
  if (hasEvents) {
    const applied = applyAnnualEventsToVisibleWeek(true);
    if (applied) results.push(`行事予定を${applied}件入れました`);
  }
  const filled = fillAllUnitCandidates(hasImportedCurriculum());
  if (filled) results.push(`単元候補を${filled}こま分入れました`);
  if (state.specialRoomSlots) {
    const roomResult = applySpecialRoomConstraints();
    if (roomResult.moved) results.push(`特別教室割りに合わせて${roomResult.moved}こま入れ替えました`);
    if (roomResult.unresolved.length) results.push(`⚠ 置き場所が見つからなかったこま: ${roomResult.unresolved.join("、")}（手動で調整してください）`);
  }
  if (!results.length) {
    alert("自動で入れられるデータが見つかりませんでした。\n「昨年度時間割読込」「行事予定読込」「教育課程読込」で先にデータを読み込むと、おまかせ作成の精度が上がります。");
    return;
  }
  saveState();
  render();
  alert(`おまかせ週作成が終わりました。\n・${results.join("\n・")}\n\n内容を確認して、必要なところだけ手直ししてください。`);
});

// ===== 特別教室割り =====
function normalizeSpecialRoomSlots(value) {
  const source = value && typeof value === "object" ? (value.slots || value) : null;
  if (!source || typeof source !== "object" || Array.isArray(source)) return null;
  const dayNames = ["月", "火", "水", "木", "金", "土"];
  const result = {};
  Object.entries(source).forEach(([subject, list]) => {
    if (!Array.isArray(list)) return;
    const slots = list
      .map((slot) => {
        const dayIndex = typeof slot.day === "number" ? slot.day : dayNames.indexOf(String(slot.day || "").trim());
        return { day: dayIndex, period: Number(slot.period) };
      })
      .filter((slot) => slot.day >= 0 && slot.day <= 5 && Number.isFinite(slot.period) && slot.period >= 1);
    if (slots.length) result[String(subject).trim()] = slots;
  });
  return Object.keys(result).length ? result : null;
}

function subjectSpecialKey(cellValue) {
  const slots = state.specialRoomSlots;
  if (!slots) return "";
  const subject = normalizeSubjectName(String(cellValue || "").split("\n")[0] || "");
  if (!subject) return "";
  return Object.keys(slots).find((key) => subject.includes(normalizeSubjectName(key))) || "";
}

function specialSlotAllowed(key, dayIndex, period) {
  const list = state.specialRoomSlots?.[key];
  if (!Array.isArray(list)) return true;
  return list.some((slot) => slot.day === dayIndex && slot.period === period);
}

function applySpecialRoomConstraints() {
  const slots = state.specialRoomSlots;
  if (!slots) return { moved: 0, unresolved: [] };
  const periodRows = state.rows
    .map((row, index) => ({ row, index, period: Number(String(row.label).trim()) }))
    .filter((entry) => isPeriodRow(entry.row) && Number.isFinite(entry.period));
  let moved = 0;
  const unresolved = [];
  for (let day = 0; day < state.dayCount; day += 1) {
    if (state.dayEvents[day]) continue;
    const dayLabel = weekdays[dayDate(day).getDay()];
    periodRows.forEach((entry) => {
      const value = entry.row.cells[day] || "";
      const key = subjectSpecialKey(value);
      if (!key || specialSlotAllowed(key, day, entry.period)) return;
      // 同じ日の中で、教科を丸ごと入れ替えられる時間を探す
      const partner = periodRows.find((other) => {
        if (other === entry) return false;
        if (!specialSlotAllowed(key, day, other.period)) return false;
        const otherKey = subjectSpecialKey(other.row.cells[day] || "");
        if (otherKey && !specialSlotAllowed(otherKey, day, entry.period)) return false;
        return true;
      });
      if (!partner) {
        unresolved.push(`${dayLabel}曜${entry.period}時間目の${key}`);
        return;
      }
      const temp = entry.row.cells[day] || "";
      entry.row.cells[day] = partner.row.cells[day] || "";
      partner.row.cells[day] = temp;
      [entry.index, partner.index].forEach((rowIndex) => {
        if (state.cellHtml?.[rowIndex]) delete state.cellHtml[rowIndex][day];
      });
      moved += 1;
    });
  }
  return { moved, unresolved };
}

elements.importSpecialRooms?.addEventListener("click", () => {
  elements.specialRoomsInput?.click();
});

elements.specialRoomsInput?.addEventListener("change", async () => {
  const file = elements.specialRoomsInput.files?.[0];
  elements.specialRoomsInput.value = "";
  if (!file) return;
  try {
    const json = JSON.parse(await file.text());
    const normalized = normalizeSpecialRoomSlots(json);
    if (!normalized) {
      alert("特別教室割りのデータが見つかりませんでした。\n{ \"slots\": { \"たいいく\": [{\"day\":\"月\",\"period\":3}] } } の形のJSONを読み込んでください。");
      return;
    }
    state.specialRoomSlots = normalized;
    saveState();
    const summary = Object.entries(normalized)
      .map(([subject, list]) => `${subject}: ${list.map((slot) => `${["月", "火", "水", "木", "金", "土"][slot.day]}${slot.period}`).join("・")}`)
      .join("\n");
    alert(`特別教室割りを読み込みました。\n${summary}\n\n「⚡ おまかせ週作成」を押すと、この時間に合わせて教科を自動で入れ替えます。`);
  } catch (error) {
    alert("特別教室割りの読み込みに失敗しました。JSONファイルか確認してください。");
  }
});

// ===== 吹き出し・裏面ページ・6日目日付 =====
function insertBubbleIntoTarget() {
  let target = lastEditableTarget?.closest?.(".notice-text, .back-page-text, td");
  if (!target || !document.contains(target)) {
    target = state.showBackPage ? elements.backPageText : elements.noticeText;
  }
  target.focus();
  const selection = window.getSelection();
  if (savedSelectionRange && target.contains(savedSelectionRange.commonAncestorContainer)) {
    selection.removeAllRanges();
    selection.addRange(savedSelectionRange);
  }
  let range = selection?.rangeCount && target.contains(selection.getRangeAt(0).commonAncestorContainer)
    ? selection.getRangeAt(0)
    : null;
  if (!range) {
    range = document.createRange();
    range.selectNodeContents(target);
    range.collapse(false);
  }
  const bubble = document.createElement("span");
  bubble.className = `notice-bubble bubble-${elements.bubbleColor?.value || "white"}`;
  bubble.textContent = "ここに かく";
  range.collapse(false);
  range.insertNode(bubble);
  bubble.insertAdjacentText("afterend", " ");
  // 中の文字をすぐ書き換えられるように全選択しておく
  const innerRange = document.createRange();
  innerRange.selectNodeContents(bubble);
  selection.removeAllRanges();
  selection.addRange(innerRange);
  syncEditableTarget(target);
}

elements.insertBubble?.addEventListener("mousedown", (event) => event.preventDefault());
elements.insertBubble?.addEventListener("click", () => {
  insertBubbleIntoTarget();
});

elements.toggleBackPage?.addEventListener("click", () => {
  state.showBackPage = !state.showBackPage;
  saveState();
  render();
  if (state.showBackPage) {
    elements.backPage.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

elements.insertBackPageImage?.addEventListener("click", () => {
  if (!state.showBackPage) {
    state.showBackPage = true;
    saveState();
    render();
  }
  elements.backPageImageInput?.click();
});

elements.backPageImageInput?.addEventListener("change", () => {
  const file = elements.backPageImageInput.files?.[0];
  elements.backPageImageInput.value = "";
  readNoticeImageFile(file, (imageData) => insertImageIntoNotice(imageData, "裏面の画像", elements.backPageText));
});

elements.backPageText?.addEventListener("paste", (event) => {
  lastEditableTarget = elements.backPageText;
  const imageFile = Array.from(event.clipboardData?.items || [])
    .find((item) => item.type.startsWith("image/"))
    ?.getAsFile();
  if (imageFile) {
    event.preventDefault();
    readNoticeImageFile(imageFile, (imageData) => insertImageIntoNotice(imageData, "貼り付け画像", elements.backPageText));
    return;
  }
  setTimeout(() => {
    const hasExternalImage = normalizeNoticeImages(elements.backPageText);
    syncHighlightedTarget(elements.backPageText);
    if (hasExternalImage) {
      alert("画像は入りますが、Webページからの貼り付け画像は校務機でオフライン表示できない場合があります。画像の上で右クリックして「画像をコピー」してから貼り付けると安心です。");
    }
  }, 0);
});

if (elements.backPageText) bindEditable(elements.backPageText, "backPageHtml", true);

elements.sixthDayDate?.addEventListener("change", () => {
  state.sixthDayDate = elements.sixthDayDate.value || "";
  // 6日目の日付に行事予定があれば「よてい」行へ自動で入れる
  const rowIndex = planRowIndex();
  if (rowIndex !== -1 && state.dayCount === 6 && state.sixthDayDate) {
    const text = state.annualEvents?.[toDateInput(dayDate(5))] || "";
    if (text) {
      state.rows[rowIndex].cells[5] = text;
      if (state.cellHtml?.[rowIndex]) delete state.cellHtml[rowIndex][5];
    }
  }
  saveState();
  render();
});

// ===== 既定の週一覧・裏面初期文面・Word読込 =====
// 持ち運びHTMLに埋め込まれたシード状態から、保存済みの週一覧を「既定」として見せる。
// 安全な試験掲載版では週一覧を保持しない。
function defaultWeekArchive() {
  return {};
}

function defaultBackPageHtml() {
  return "";
}

// Word（.docx）の文字と画像を裏面に取り込む
async function importDocxIntoBackPage(buffer) {
  const raw = await unzipEntriesRaw(buffer);
  const decoder = new TextDecoder("utf-8");
  if (!raw["word/document.xml"]) throw new Error("Wordの本文が見つかりません（.docx形式か確認してください）");
  const docXml = decoder.decode(raw["word/document.xml"]);
  const relsXml = raw["word/_rels/document.xml.rels"] ? decoder.decode(raw["word/_rels/document.xml.rels"]) : "";
  const relTargets = {};
  (relsXml.match(/<Relationship [^>]*\/>/g) || []).forEach((rel) => {
    const id = (rel.match(/Id="([^"]+)"/) || [])[1];
    const target = (rel.match(/Target="([^"]+)"/) || [])[1];
    if (id && target) relTargets[id] = target;
  });
  const mimeByExt = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", bmp: "image/bmp" };
  const imageDataByRel = {};
  Object.entries(relTargets).forEach(([id, target]) => {
    const path = `word/${String(target).replace(/^\/?(word\/)?/, "")}`;
    const bytes = raw[path];
    if (!bytes) return;
    const mime = mimeByExt[path.split(".").pop().toLowerCase()];
    if (mime) imageDataByRel[id] = `data:${mime};base64,${bytesToBase64(bytes)}`;
  });

  const unescapeXml = (text) => text
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");
  const paragraphs = docXml.match(/<w:p[ >][\s\S]*?<\/w:p>|<w:p\/>/g) || [];
  let imageCount = 0;
  let textLength = 0;
  const lines = paragraphs.map((paragraph) => {
    const text = (paragraph.match(/<w:t[^>]*>[\s\S]*?<\/w:t>/g) || [])
      .map((t) => unescapeXml(t.replace(/<[^>]+>/g, "")))
      .join("");
    textLength += text.trim().length;
    const images = (paragraph.match(/r:embed="([^"]+)"/g) || [])
      .map((m) => imageDataByRel[m.slice(9, -1)])
      .filter(Boolean)
      .map((src) => {
        imageCount += 1;
        return `<img class="notice-illustration" src="${src}" alt="Word画像${imageCount}" style="max-width:100%;height:auto;" />`;
      });
    return `${escapeHtml(text)}${images.join("")}`;
  });
  // 空の段落が続く部分は詰める
  const html = lines.join("<br />").replace(/(<br \/>){3,}/g, "<br /><br />");
  return { html, imageCount, textLength };
}

elements.importBackPageDocx?.addEventListener("click", () => {
  elements.backPageDocxInput?.click();
});

elements.backPageDocxInput?.addEventListener("change", async () => {
  const file = elements.backPageDocxInput.files?.[0];
  elements.backPageDocxInput.value = "";
  if (!file) return;
  try {
    const result = await importDocxIntoBackPage(await file.arrayBuffer());
    if (!result.textLength && !result.imageCount) {
      alert("このWordファイルから取り込める文字や画像が見つかりませんでした。");
      return;
    }
    state.showBackPage = true;
    const current = decodeSavedHtml(state.backPageHtml || "").trim();
    state.backPageHtml = current ? `${current}<br /><br />${result.html}` : result.html;
    saveState();
    render();
    elements.backPage?.scrollIntoView({ behavior: "smooth", block: "start" });
    alert(`Wordの内容を裏面に取り込みました（文字${result.textLength}字・画像${result.imageCount}枚）。\nそのまま裏面で自由に編集できます。`);
  } catch (error) {
    console.error(error);
    alert(`Wordを読み込めませんでした。（理由: ${error?.message || error}）\n.docx形式のファイルか確認してください。古い.doc形式の場合は、Wordで開いて.docxで保存し直してください。`);
  }
});

// ===== 印刷で表に入る範囲の表示（赤い点線） =====
// 印刷CSS（@media print）を @media all に置き換えた非表示iframeで実際の印刷レイアウトを再現し、
// 連絡欄のどこまでが1ページ目に入るかを測って、編集画面の連絡欄に赤い点線で示す。
var printFitFrame = null;
var printFitLine = null;
var printFitTimer = null;

function ensurePrintFitElements() {
  if (!printFitFrame) {
    printFitFrame = document.createElement("iframe");
    printFitFrame.id = "printFitFrame";
    printFitFrame.setAttribute("aria-hidden", "true");
    // caretRangeFromPoint での文字位置判定が効くよう、visibility:hidden にはせず画面外に置く
    printFitFrame.style.cssText = "position:fixed;left:-2000px;top:0;width:850px;height:1250px;border:0;";
    document.body.appendChild(printFitFrame);
  }
  if (!printFitLine || !document.contains(printFitLine)) {
    printFitLine = document.createElement("div");
    printFitLine.id = "printFitLine";
    printFitLine.hidden = true;
    document.querySelector(".notice-box")?.appendChild(printFitLine);
  }
}

function schedulePrintFitUpdate() {
  if (printFitTimer) clearTimeout(printFitTimer);
  printFitTimer = setTimeout(updatePrintFitIndicator, 900);
}

// root内のテキストを順にたどって、(container, offset)が全体の何文字目かを返す
function textOffsetWithin(root, container, offset) {
  const range = root.ownerDocument.createRange();
  range.selectNodeContents(root);
  try {
    range.setEnd(container, offset);
  } catch (error) {
    return 0;
  }
  return range.toString().length;
}

// root内で全体n文字目にあたる(text node, offset)を返す
function findTextPositionByOffset(root, charIndex) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let remaining = charIndex;
  let node = walker.nextNode();
  let last = null;
  while (node) {
    if (remaining <= node.length) return { node, offset: remaining };
    remaining -= node.length;
    last = node;
    node = walker.nextNode();
  }
  return last ? { node: last, offset: last.length } : null;
}

function updatePrintFitIndicator() {
  try {
    ensurePrintFitElements();
    const styles = collectStyleText().replace(/@media print/g, "@media all");
    const textLength = elements.noticeText.innerText.replace(/\s/g, "").length;
    const tier = textLength > 900 ? "notice-extra-long" : textLength > 620 ? "notice-very-long" : textLength > 380 ? "notice-long" : "";
    const pageClone = document.querySelector(".page").cloneNode(true);
    pageClone.querySelector("#printFitLine")?.remove();
    // 前回計算した切り詰め高さはシミュレーションに持ち込まない（測定が汚れるため）
    pageClone.style.removeProperty("--print-notice-max");
    const simHtml = `<!doctype html><html><head><meta charset="utf-8"><style>${styles}</style></head><body class="${tier}">${pageClone.outerHTML}</body></html>`;
    printFitFrame.onload = () => {
      try {
        const simDoc = printFitFrame.contentDocument;
        const simNotice = simDoc.querySelector(".notice-text");
        const simBox = simDoc.querySelector(".notice-box");
        if (!simNotice || !simBox) { printFitLine.hidden = true; return; }
        const boxStyle = simDoc.defaultView.getComputedStyle(simBox);
        const clipBottom = simBox.getBoundingClientRect().bottom - parseFloat(boxStyle.paddingBottom || "0");
        const noticeRect = simNotice.getBoundingClientRect();
        const pageElement = document.querySelector(".page");
        if (simNotice.scrollHeight <= (clipBottom - noticeRect.top) + 3) {
          printFitLine.hidden = true;
          pageElement?.style.removeProperty("--print-notice-max");
          return;
        }
        // クリップ境界ぎりぎりの文字を探す（横方向に数か所サンプリング）
        let cutIndex = -1;
        let cutRange = null;
        const sampleY = clipBottom - 4;
        for (const fraction of [0.12, 0.3, 0.5, 0.7, 0.88]) {
          const x = noticeRect.left + noticeRect.width * fraction;
          const range = simDoc.caretRangeFromPoint?.(x, sampleY);
          if (!range || !simNotice.contains(range.startContainer)) continue;
          const index = textOffsetWithin(simNotice, range.startContainer, range.startOffset);
          if (index > cutIndex) {
            cutIndex = index;
            cutRange = range;
          }
        }
        // 印刷で行が途中で切れないよう、最後に全部入る行の下端までの高さを計算して渡す
        if (cutRange) {
          const lineRect = cutRange.getClientRects()[0] || cutRange.getBoundingClientRect();
          if (lineRect && lineRect.height > 0) {
            const snapBottom = lineRect.bottom <= clipBottom + 0.5 ? lineRect.bottom : lineRect.top;
            const snapHeight = Math.max(20, Math.floor(snapBottom - noticeRect.top));
            pageElement?.style.setProperty("--print-notice-max", `${snapHeight}px`);
          }
        }
        const screenNotice = elements.noticeText;
        const boxRect = document.querySelector(".notice-box").getBoundingClientRect();
        let top = null;
        if (cutIndex >= 0) {
          // 編集画面の同じ文字の位置（その行の上端）に線を引く
          const position = findTextPositionByOffset(screenNotice, cutIndex);
          if (position) {
            const range = document.createRange();
            range.setStart(position.node, position.offset);
            range.collapse(true);
            const rects = range.getClientRects();
            if (rects.length) top = rects[0].bottom - boxRect.top;
          }
        }
        if (top === null) {
          // 予備: 高さの割合で換算
          const ratio = (clipBottom - noticeRect.top) / simNotice.scrollHeight;
          top = screenNotice.offsetTop + Math.max(12, ratio * screenNotice.scrollHeight);
        }
        printFitLine.style.top = `${Math.round(top)}px`;
        printFitLine.hidden = false;
      } catch (error) {
        printFitLine.hidden = true;
      } finally {
        resolvePrintFitWaiters();
      }
    };
    printFitFrame.srcdoc = simHtml;
  } catch (error) {
    if (printFitLine) printFitLine.hidden = true;
    resolvePrintFitWaiters();
  }
}

var printFitWaiters = [];

function resolvePrintFitWaiters() {
  const waiters = printFitWaiters;
  printFitWaiters = [];
  waiters.forEach((resolve) => resolve());
}

// 印刷直前に、最新内容で切り詰め高さを計算し終えるのを待つ
function updatePrintFitNow() {
  return new Promise((resolve) => {
    printFitWaiters.push(resolve);
    if (printFitTimer) clearTimeout(printFitTimer);
    updatePrintFitIndicator();
    setTimeout(resolve, 2500);
  });
}

// ===== SAFE-EMPTY-DATA =====
function defaultCurriculumUnits() {
  return [];
}

function defaultSpecialRoomSlots() {
  return {};
}

function defaultPreviousSchedules() {
  return [];
}

function defaultAnnualEvents() {
  return {};
}
// ===== /SAFE-EMPTY-DATA =====
