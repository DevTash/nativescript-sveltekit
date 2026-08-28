export enum ViewFlags {
  NONE = 0,
  LAYOUT = 1 << 0,
  CONTENT_VIEW = 1 << 1,
  TEXT_BASED = 1 << 2,
  NAVIGATION = 1 << 3,
}

export interface ViewMeta {
  name: string;
  normalizedName: string;
  flags: ViewFlags;
  model?: string;
}

type ViewResolver = () => unknown;

const classRegistry = new Map<string, ViewResolver>();
const metaRegistry = new Map<string, ViewMeta>();

function normalizeElementName(name: string): string {
  return name.trim().toLowerCase().replace(/[-_]/g, '');
}

export function registerElement(name: string, resolver: ViewResolver, meta: Partial<ViewMeta> = {}): void {
  const normalizedName = normalizeElementName(name);
  classRegistry.set(normalizedName, resolver);
  metaRegistry.set(normalizedName, {
    name,
    normalizedName,
    flags: meta.flags ?? ViewFlags.NONE,
    model: meta.model,
  });
}

export function getViewClass(name: string): unknown {
  const normalizedName = normalizeElementName(name);
  return classRegistry.get(normalizedName)?.();
}

export function getViewMeta(name: string): ViewMeta | undefined {
  return metaRegistry.get(normalizeElementName(name));
}

export function hasView(name: string): boolean {
  return classRegistry.has(normalizeElementName(name));
}
