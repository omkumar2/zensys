import { Block } from "@/types/editor"

export const convertToMD = (
  block: Block,
  index = 0
): string => {
  const { type, content } = block;

  switch (type) {
    case "text":
      return content;

    case "heading1":
      return `# ${content}`;

    case "heading2":
      return `## ${content}`;

    case "heading3":
      return `### ${content}`;

    case "bullet-list":
      return `- ${content}`;

    case "number-list":
      return `${index + 1}. ${content}`;

    case "todo":
      // no checked state yet → default unchecked
      return `- [ ] ${content}`;

    case "quote":
      return `> ${content}`;

    case "toggle":
      // markdown has no toggle — graceful degradation
      return `> ▶ ${content}`;

    case "code":
      return `\`\`\`\n${content}\n\`\`\``;

    case "callout":
      return `> ℹ️ ${content}`;

    case "page":
      // markdown has no "page" — best approximation
      return `# ${content}`;

    case "page-in":
      return `→ ${content}`;

    case "equation":
      return `$$\n${content}\n$$`;

    default:
      return content;
  }
};
