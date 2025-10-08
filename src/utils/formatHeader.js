const HEADER_OVERRIDES = {
  watchdog: "Watchdog Timer",
  watchdog_timer: "Watchdog Timer",
  screen_size: "Screen Size",
  cpu: "CPU",
  ram: "RAM",
  storage: "Storage",
  internal:" Internal Connector",
  power:'Power Requirements'
  
};


function titleCase(str = "") {
  return String(str)
    .replace(/[_-]+/g, " ")               
    .replace(/\s+/g, " ")                
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function normalizeKey(str = "") {
  return String(str).trim().toLowerCase().replace(/\s+/g, "_").replace(/-+/g, "_");
}


export function formatHeader(rawHeader) {
  if (!rawHeader && rawHeader !== 0) return "";
  const key = normalizeKey(rawHeader);
  if (HEADER_OVERRIDES[key]) return HEADER_OVERRIDES[key];
  return titleCase(String(rawHeader));
}
const HEADER_ORDER = [
  "Processor",
  "Memory",
  "Expansion Slots",
  "Ethernet",
  "Graphics",
  "Storage",
  "Power Requirements",
];

export function sortSectionsByHeader(sections = []) {
  const orderMap = new Map(HEADER_ORDER.map((h, i) => [h.toLowerCase(), i]));
  return sections.sort((a, b) => {
    const aOrder = orderMap.get(a.header.toLowerCase()) ?? 999;
    const bOrder = orderMap.get(b.header.toLowerCase()) ?? 999;
    return aOrder - bOrder;
  });
}
export default formatHeader;
