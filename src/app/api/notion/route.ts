import { format } from "date-fns";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function GET() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "Date",
          date: {
            equals: format(new Date(), "yyyy-MM-dd"),
          },
        },
        {
          property: "done",
          checkbox: {
            equals: false,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "ascending",
      },
    ],
  });
  return Response.json(response.results);
}
