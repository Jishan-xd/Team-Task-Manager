# TeamTask - SaaS Team Task Manager

> ## 🚀 Live Demo
>
> ### **Frontend Application**
> ## **https://devoted-spirit-production-c065.up.railway.app**
>
> Open the deployed application directly from the link above.

TeamTask is a production-style full-stack task management platform with project workspaces, admin/member RBAC, Kanban task flow, analytics, comments, attachments, JWT auth, Docker, and Railway-ready deployment config.

---

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Zustand, TanStack Query, Recharts, dnd-kit
- **Backend:** Django 5, Django REST Framework, SimpleJWT, PostgreSQL
- **Deployment:** Docker, Railway, Supabase PostgreSQL

---

## Features

- JWT Authentication with access & refresh tokens
- Role-based access control (Admin/Member)
- Project and task management
- Drag-and-drop Kanban board
- Dashboard analytics and charts
- Task comments and file attachments
- Activity logs and tracking
- Protected routes and responsive SaaS UI
- Swagger/OpenAPI documentation
- Dockerized frontend and backend
- Railway deployment ready

---

## Architecture

```text
frontend/
  app/
  components/
  lib/api/
  lib/stores/
  lib/validations/

backend/
  config/
  apps/users/
  apps/projects/
  apps/tasks/
  apps/analytics/
  apps/common/
```

---

## Environment Setup

### Backend

```bash
cp backend/.env.example backend/.env
```

### Frontend

```bash
cp frontend/.env.example frontend/.env.local
```

---

## Local Docker Setup

```bash
docker-compose up --build
```

### Services

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000/api`
- Swagger Docs: `http://localhost:8000/api/docs/`

---

## Manual Backend Setup

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo
python manage.py runserver
```

---

## Manual Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Documentation

- Swagger UI: `/api/docs/`
- OpenAPI Schema: `/api/schema/`
- Postman Collection: `docs/team-task-manager.postman_collection.json`

---

## Railway Deployment

Create two Railway services from this repo:

1. Backend service with root directory `backend`
2. Frontend service with root directory `frontend`

Both services include Dockerfiles and `railway.json` configuration.

---

## Future Improvements

- Email invitation flow
- WebSocket live activity stream
- Notification system
- S3/Supabase media storage
- Audit log export
- Custom project roles
