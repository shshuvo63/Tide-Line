# Tideline Travel

Full-stack travel agency website.

| Layer    | Stack                                  |
|----------|----------------------------------------|
| Frontend | React 18, Vite, ES6 modules, plain CSS |
| Backend  | Node.js (ESM), Express, Helmet, CORS   |
| Storage  | JSON files (swap for a real database)  |

## Structure

```
tideline-travel/
├── package.json            # root scripts (run both apps together)
├── backend/
│   ├── .env.example
│   └── src/
│       ├── server.js       # starts the HTTP server
│       ├── app.js          # middleware + routes
│       ├── config/         # environment config
│       ├── routes/         # URL -> controller mapping
│       ├── controllers/    # HTTP in/out only
│       ├── services/       # business logic + storage
│       ├── validators/     # request validation
│       ├── middleware/     # validate, errors, 404
│       ├── utils/          # HttpError
│       └── data/           # trips.json (+ bookings/messages at runtime)
└── frontend/
    ├── index.html
    ├── vite.config.js      # dev proxy: /api -> :5000
    └── src/
        ├── main.jsx, App.jsx
        ├── api/            # fetch client
        ├── hooks/          # useTrips, useSavedTrips, useTheme
        ├── components/     # Navbar, Hero, TripList, Services, HowItWorks, Offers, Faq, Newsletter, ...
        └── styles/global.css
```

## Run locally

Requires Node 18.11 or newer.

```bash
npm run install:all
npm run dev
```

- Web: http://localhost:5173
- API: http://localhost:5000/api/health

## API

| Method | Endpoint          | Description                                              |
|--------|-------------------|----------------------------------------------------------|
| GET    | /api/health       | Health check                                             |
| GET    | /api/trips        | List trips. Query: `region`, `q`, `maxPrice`, `maxDays`  |
| GET    | /api/trips/:id    | One trip                                                 |
| POST   | /api/bookings     | `{ tripId, name, email, travelers }`                     |
| POST   | /api/contact      | `{ name, email, message }`                               |
| POST   | /api/newsletter   | `{ email }` (duplicate emails are ignored)               |

Errors return `{ "error": "message", "details": { field: "message" } }`.

## Production

```bash
npm run build          # outputs frontend/dist
NODE_ENV=production npm start
```

Serve `frontend/dist` from a static host or reverse proxy, and set `CLIENT_ORIGIN` in `backend/.env` to that site's URL. Set `VITE_API_URL` at build time if the API lives on a different domain.

## Next steps

Replace `storage.service.js` with PostgreSQL or MongoDB, add authentication and an admin view for bookings, and add payments.
