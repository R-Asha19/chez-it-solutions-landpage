# Chez IT Solutions — MERN Website

Full multi-page marketing site for Chez IT Solutions, built on the MERN stack
(MongoDB, Express, React, Node).

- **Frontend**: React 18 + Vite + React Router + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Working backend feature**: every "Get Free Growth Audit", "Book a Strategy
  Call", and the Contact page form POSTs to `/api/leads` and is saved in
  MongoDB. Everything else (Services, Industries, About, Case Studies, Blog)
  is static React content — no database round trip needed for those pages.

## Project structure

```
chez-it-solutions/
├── server/          # Express API
│   ├── config/db.js
│   ├── models/Lead.js
│   ├── controllers/leadController.js
│   ├── routes/leadRoutes.js
│   └── server.js
└── client/          # React app
    └── src/
        ├── pages/        Home, Services, Industries, About, CaseStudies, Blog, BlogPost, Contact
        ├── components/   Navbar, Footer, LeadModal, PageHero, UI atoms
        ├── context/       LeadModalContext (opens the lead form from any page)
        ├── data/          static content: services, industries, case studies, blog posts
        └── api/leads.js  axios client for the leads API
```

## 1. Backend setup

```bash
cd server
cp .env.example .env
# edit .env if your MongoDB URI is different (Atlas or local)
npm install
npm run dev        # starts on http://localhost:5000
```

You need a MongoDB instance. Either:
- Install MongoDB locally and leave `MONGO_URI` as the default
  `mongodb://127.0.0.1:27017/chez_it_solutions`, or
- Create a free cluster on MongoDB Atlas and paste its connection string into
  `MONGO_URI`.

Health check: `GET http://localhost:5000/api/health` → `{ "status": "ok" }`

## 2. Frontend setup

```bash
cd client
npm install
npm run dev         # starts on http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:5000`
(see `vite.config.js`), so the frontend and backend talk to each other
automatically in development — no CORS issues, no extra config.

## 3. Try it end to end

1. Start the backend (`npm run dev` in `server/`).
2. Start the frontend (`npm run dev` in `client/`).
3. Open `http://localhost:5173`.
4. Click **Get Free Growth Audit**, **Book a Strategy Call**, or fill out the
   **Contact** page form.
5. Check MongoDB — a new document appears in the `leads` collection with the
   name, email, phone, company, message, and a `source` field telling you
   which CTA it came from (`growth_audit`, `strategy_call`, or
   `contact_page`).
6. `GET http://localhost:5000/api/leads` returns all captured leads as JSON
   (useful while you don't yet have an admin panel).

## 4. Production build

```bash
cd client
npm run build        # outputs static files to client/dist
```

Serve `client/dist` from any static host (Vercel, Netlify, Nginx) and deploy
`server/` to any Node host (Render, Railway, EC2). Set `CLIENT_ORIGIN` in the
server's `.env` to your deployed frontend URL so CORS allows it.

## Notes / next steps

- **Leads endpoint has no auth yet.** `GET /api/leads` is open — fine for
  local development, but add an admin login (JWT) before deploying publicly,
  or remove the GET route and query MongoDB directly instead.
- **Rate limiting** is already in place on `/api/leads` (20 requests per 15
  minutes per IP) to cut down on spam submissions.
- Blog posts and case studies are static data in `client/src/data/content.js`.
  If you want these editable without a code deploy, the natural next step is
  a `posts` collection in MongoDB with a small admin CRUD screen — happy to
  build that next if you want it.
