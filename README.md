# Tauri Tray Application (Next.js + Tauri + Tailwind)

The aim of this study project is to retrieve data from Notion (such as your tasks) and easily display them through a tray application.

![Screenshot 2024-02-19 at 19 33 45](https://github.com/cassiorsfreitas/view-notion/assets/8185819/8ffddac9-5ccd-4fef-9b7c-b4ea7ec5b6bc)

The developed code draws inspiration from the application crafted by [Diego Fernandes](https://github.com/diego3g) from [Rocketseat](https://youtu.be/lhkCa_v1buk?si=dSC1VQKfowLG54xp) YouTube Channel. It's vital to emphasize that all within this repository serves as a launching point for the community aspiring to shape a comparable application. Feel free to perform a clone/fork and evolve from this juncture.


## Getting Started

This is a Tauri project template using Next.js and Tailwind CSS, bootstrapped by combining `create-next-app` and `create tauri-app`.

### Prerequisites

Make sure you have the following installed on your system:

- [Rust](https://www.rust-lang.org/)
- [Tauri CLI](https://tauri.app/v1/api/cli/)
- [pnpm (optional but recommended)](https://pnpm.io/installation)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/cassiorsfreitas/view-notion.git
```

2. Install all NextJs dependencies 
```bash
cd view-notion
pnpm install
```
3. Create an .env.local file and set these variables
```.md
NOTION_SECRET="secret_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
NOTION_DATABASE_ID="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

## Usefull links
- [window-vibrancy](https://github.com/tauri-apps/window-vibrancy)
- [tauri-plugin-positioner](https://github.com/tauri-apps/tauri-plugin-positioner)
- [Query a database](https://developers.notion.com/reference/post-database-query)
- [@tauri-apss/api](https://tauri.app/v1/api/js/)

## Roadmap
- [x] Fetch data from Notion API
- [ ] Emit event from Tauri in order to refetch the data when the window is opened
- [ ] Add dynamic height behavior according to the requested content
- [ ] Implement loading/fetching indicator
