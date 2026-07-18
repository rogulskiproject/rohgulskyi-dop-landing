import { defineMcp } from "@lovable.dev/mcp-js";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listCategories from "./tools/list-categories";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "bohdan-rohulskyi-mcp",
  title: "Bohdan Rohulskyi — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Bohdan Rohulskyi's cinematography portfolio. Use `list_categories` to see groupings, `list_projects` (optionally filtered by category) to browse work, `get_project` for details on one project by slug, and `get_contact_info` for role, location and contact.",
  tools: [listProjects, getProject, listCategories, getContactInfo],
});
