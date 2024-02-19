const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "done",
      checkbox: {
        equals: false,
      },
    },
  });
  return Response.json(response.results);
}
