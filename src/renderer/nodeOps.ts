import { NSVComment, NSVElement, NSVRoot, NSVText, NSVNode } from '../dom';
import { getViewClass } from '../registry';

function createNativeView(tag: string): Record<string, unknown> {
  const ViewClass = getViewClass(tag) as (new () => unknown) | undefined;
  if (!ViewClass) {
    return {};
  }

  return new ViewClass() as Record<string, unknown>;
}

export const nodeOps = {
  createElement(tag: string): NSVElement {
    return new NSVElement(tag, createNativeView(tag));
  },
  createText(text: string): NSVText {
    return new NSVText(text);
  },
  createComment(text: string): NSVComment {
    return new NSVComment(text);
  },
  insert(child: NSVNode, parent: NSVElement | NSVRoot, anchor: NSVNode | null = null): void {
    parent.insertBefore(child, anchor);
  },
  remove(child: NSVNode): void {
    child.parentNode?.removeChild(child);
  },
  parentNode(node: NSVNode): NSVNode | null {
    return node.parentNode;
  },
  nextSibling(node: NSVNode): NSVNode | null {
    return node.parentNode?.nextSibling(node) ?? null;
  },
  setText(node: NSVText | NSVComment, text: string): void {
    node.text = text;
  },
  setElementText(node: NSVElement, text: string): void {
    node.setAttr('text', text);
  },
};
