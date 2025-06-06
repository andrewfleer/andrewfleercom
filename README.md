# Andrew Fleer's Personal Website

A modern personal website built with Next.js and Tailwind CSS, featuring a blog, resume, and portfolio sections.

## Features

- 🎨 Modern design with neobrutalism style
- 📝 Blog with markdown support
- 📄 Professional resume page
- 🎯 Responsive layout
- 🚀 Fast performance with Next.js
- 💅 Styled with Tailwind CSS

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Markdown (gray-matter, remark)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/andrewfleercom.git
cd andrewfleercom
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
andrewfleercom/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── blog/        # Blog pages
│   │   ├── resume/      # Resume page
│   │   └── page.tsx     # Home page
│   ├── content/         # Blog content
│   └── lib/             # Utility functions
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Adding Blog Posts

1. Create a new markdown file in `src/content/blog/`
2. Add frontmatter with title, date, tags, and optional image:
```markdown
---
title: "Your Post Title"
date: "2024-03-21"
tags: ["tag1", "tag2"]
image: "/images/blog/your-image.jpg"
---

Your post content here...
```

3. Add any images to `public/images/blog/`

## Building for Production

```bash
npm run build
npm start
```

## License

MIT
