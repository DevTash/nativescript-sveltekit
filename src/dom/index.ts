export const enum NodeTypes {
  ROOT = 0,
  ELEMENT = 1,
  TEXT = 3,
  COMMENT = 8,
}

export class NSVNode {
  public parentNode: NSVNode | null = null;
  public childNodes: NSVNode[] = [];

  constructor(public readonly nodeType: NodeTypes) {}

  appendChild(child: NSVNode): void {
    child.parentNode = this;
    this.childNodes.push(child);
  }

  insertBefore(child: NSVNode, anchor: NSVNode | null): void {
    child.parentNode = this;
    if (!anchor) {
      this.childNodes.push(child);
      return;
    }

    const index = this.childNodes.indexOf(anchor);
    if (index === -1) {
      this.childNodes.push(child);
      return;
    }

    this.childNodes.splice(index, 0, child);
  }

  removeChild(child: NSVNode): void {
    const index = this.childNodes.indexOf(child);
    if (index > -1) {
      this.childNodes.splice(index, 1);
      child.parentNode = null;
    }
  }

  nextSibling(child: NSVNode): NSVNode | null {
    const index = this.childNodes.indexOf(child);
    if (index < 0 || index + 1 >= this.childNodes.length) {
      return null;
    }

    return this.childNodes[index + 1] ?? null;
  }
}

export class NSVText extends NSVNode {
  constructor(public text: string) {
    super(NodeTypes.TEXT);
  }
}

export class NSVComment extends NSVNode {
  constructor(public text: string) {
    super(NodeTypes.COMMENT);
  }
}

type NativeViewLike = {
  addChild?(child: unknown): void;
  insertChild?(child: unknown, index: number): void;
  removeChild?(child: unknown): void;
  on?(name: string, handler: (event?: unknown) => void): void;
  off?(name: string, handler?: (event?: unknown) => void): void;
  [key: string]: unknown;
};

export class NSVElement extends NSVNode {
  public readonly attrs = new Map<string, unknown>();
  public readonly styles = new Map<string, unknown>();
  public className = '';

  constructor(public readonly tagName: string, public readonly nativeView: NativeViewLike = {}) {
    super(NodeTypes.ELEMENT);
  }

  setAttr(key: string, value: unknown): void {
    this.attrs.set(key, value);
    this.nativeView[key] = value;
  }

  removeAttr(key: string): void {
    this.attrs.delete(key);
    delete this.nativeView[key];
  }

  setStyle(key: string, value: unknown): void {
    this.styles.set(key, value);
    this.nativeView[key] = value;
  }

  setClassName(value: string): void {
    this.className = value;
    this.nativeView.className = value;
  }

  on(name: string, handler: (event?: unknown) => void): void {
    this.nativeView.on?.(name, handler);
  }

  off(name: string, handler?: (event?: unknown) => void): void {
    this.nativeView.off?.(name, handler);
  }

  override appendChild(child: NSVNode): void {
    super.appendChild(child);
    if (child instanceof NSVElement) {
      this.nativeView.addChild?.(child.nativeView);
    }
  }

  override insertBefore(child: NSVNode, anchor: NSVNode | null): void {
    super.insertBefore(child, anchor);

    if (!(child instanceof NSVElement)) {
      return;
    }

    if (!anchor || !(anchor instanceof NSVElement)) {
      this.nativeView.addChild?.(child.nativeView);
      return;
    }

    const index = this.childNodes.indexOf(anchor);
    this.nativeView.insertChild?.(child.nativeView, Math.max(index, 0));
  }

  override removeChild(child: NSVNode): void {
    super.removeChild(child);
    if (child instanceof NSVElement) {
      this.nativeView.removeChild?.(child.nativeView);
    }
  }
}

export class NSVRoot extends NSVElement {
  constructor() {
    super('Root', { addChild() {}, insertChild() {}, removeChild() {} });
  }
}
