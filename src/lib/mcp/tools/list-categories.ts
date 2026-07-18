import { defineTool } from "@lovable.dev/mcp-js";
import { CATEGORIES, PROJECTS } from "../data";

export default defineTool({
  name: "list_categories",
  title: "List portfolio categories",
  description: "List the categories used to group portfolio projects, with the number of projects in each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const counts = CATEGORIES.map((c) => ({
      category: c,
      count: PROJECTS.filter((p) => p.filterGroup === c).length,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(counts, null, 2) }],
      structuredContent: { categories: counts },
    };
  },
});
