import { defineTool } from "@lovable.dev/mcp-js";
import { BIO, CONTACT } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Get Bohdan Rohulskyi's public contact information, role, location and short bio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { ...CONTACT, bio: BIO };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
