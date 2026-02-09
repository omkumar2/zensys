import { AnyBlock, InlineNode } from "@/types/editor";

function blockToComparableString(block: AnyBlock): string {
  switch (block.type) {
    case "code":
      return block.content.text;

    case "equation":
      return block.content.latex;

    default:
      // inline-capable blocks
      return extractInlineText(block.content as InlineNode[]);
  }
}

function extractInlineText(nodes: InlineNode[]): string {
  return nodes
    .map(node => {
      switch (node.type) {
        case "text":
          return node.text;
        case "inline-code":
          return node.text;
        case "inline-equation":
          return node.latex;
        case "link":
          return extractInlineText(node.children);
        default:
          return "";
      }
    })
    .join("");
}


////////////

export function areBlocksSemanticallyEqual(
  a: AnyBlock[],
  b: AnyBlock[]
): boolean {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i].type !== b[i].type) return false;

    if (
      blockToComparableString(a[i]) !==
      blockToComparableString(b[i])
    ) {
      return false;
    }
  }

  return true;
}
