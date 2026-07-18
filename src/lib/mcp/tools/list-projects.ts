import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PROJECTS, SITE_URL, CATEGORIES } from "../data";

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description:
    "List projects from Bohdan Rohulskyi's cinematography portfolio. Optionally filter by category (Fashion, Commercial, Documentary, Music Video).",
  inputSchema: {
    category: z
      .enum(CATEGORIES)
      .optional()
      .describe("Optional category filter: Fashion, Commercial, Documentary, or Music Video."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = PROJECTS.filter((p) => !category || p.filterGroup === category).map((p) => ({
      title: p.title,
      client: p.client,
      category: p.category,
      filterGroup: p.filterGroup,
      url: SITE_URL + p.url,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, projects: items },
    };
  },
});
