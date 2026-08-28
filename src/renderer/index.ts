import { NSVRoot, type NSVNode } from '../dom';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';

export interface RenderTreeNode {
  type: string;
  props?: Record<string, unknown>;
  children?: Array<RenderTreeNode | string>;
}

export interface NativeRenderer {
  createElement: typeof nodeOps.createElement;
  renderTree: (tree: RenderTreeNode, root: NSVRoot) => NSVNode;
}

function renderNode(node: RenderTreeNode | string): NSVNode {
  if (typeof node === 'string') {
    return nodeOps.createText(node);
  }

  const element = nodeOps.createElement(node.type);
  for (const [key, value] of Object.entries(node.props ?? {})) {
    patchProp(element, key, undefined, value);
  }

  for (const child of node.children ?? []) {
    const childNode = renderNode(child);
    nodeOps.insert(childNode, element);
  }

  return element;
}

export function createRenderer(): NativeRenderer {
  return {
    createElement: nodeOps.createElement,
    renderTree(tree: RenderTreeNode, root: NSVRoot): NSVNode {
      const node = renderNode(tree);
      nodeOps.insert(node, root);
      return node;
    },
  };
}
