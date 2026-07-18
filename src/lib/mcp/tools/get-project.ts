import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { PROJECTS, SITE_URL } from "../data";

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description:
    "Get details for one portfolio project by its slug (the last segment of its /work/ URL, e.g. 'valentin-day').",
  inputSchema: {
    slug: z.string().min(1).describe("Project slug, e.g. 'valentin-day' or 'kotex-arts-missing-period'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const normalized = slug.trim().replace(/^\/?work\//, "").replace(/^\/+|\/+$/g, "");
    const project = PROJECTS.find((p) => p.url === `/work/${normalized}`);
    if (!project) {
      return {
        content: [{ type: "text", text: `No project found for slug "${normalized}".` }],
        isError: true,
      };
    }
    const result = {
      title: project.title,
      client: project.client,
      category: project.category,
      filterGroup: project.filterGroup,
      url: SITE_URL + project.url,
      vimeoUrl: project.vimeoId ? `https://vimeo.com/${project.vimeoId}` : undefined,
      youtubeUrl: project.youtubeId ? `https://www.youtube.com/watch?v=${project.youtubeId}` : undefined,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
    };
  },
});
