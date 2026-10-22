# Docker Guide - Suha Academy

This guide details how to build, run and manage **Suha Academy** using Docker and Docker Compose.

---

## 🚀 Quick Start (Production)

The quickest way to get Suha Academy running in a production-ready containerized environment:

```bash
# From the project root
docker compose up -d --build
```

Once running, access the application in your browser at:
👉 **[http://localhost:8080](http://localhost:8080)**

To view container logs:
```bash
docker compose logs -f
```

To stop the container:
```bash
docker compose down
```

---

## 🛠️ Configuration Options

You can customize port bindings by creating a `.env` file in the root directory (or copying from `.env.example`):

```bash
cp .env.example .env
```

Available variables:
| Variable | Default | Description |
|---|---|---|
| `PORT` | `8080` | Host port mapped to Nginx (`http://localhost:8080`) |

---

## 📦 Building and Running Directly with Docker CLI

If you prefer using pure `docker` commands without compose:

### 1. Build the production image:
```bash
cd src
docker build -t suha-academy -f Dockerfile .
```

### 2. Run the container:
```bash
docker run -d --name suha-academy-app -p 8080:80 suha-academy
```

### 3. Check health and status:
```bash
docker ps
curl http://localhost:8080/healthz
```

### 4. Stop and remove container:
```bash
docker stop suha-academy-app
docker rm suha-academy-app
```

---

## ⚡ Architecture & Optimization Highlights

1. **Multi-Stage Build**:
   - **Builder Stage (`node:20-alpine`)**: Installs dependencies cleanly with `npm ci` and compiles static assets with Vite.
   - **Runner Stage (`nginx:1.27-alpine`)**: Minimal attack surface, ultralight image (~30-40 MB total).
2. **SPA Routing Support**:
   - Custom `nginx.conf` handles React Router URLs (`/courses`, `/faculty`, `/events`, etc.) cleanly with `try_files $uri $uri/ /index.html;`.
3. **Performance & Caching**:
   - Brotli/Gzip compression enabled for all static assets.
   - Long-term caching headers (`immutable`, 1 year) for hashed assets in `/assets/`.
   - `no-cache` for `index.html` to guarantee instant delivery of updates upon deployment.
4. **Security & Healthcheck**:
   - HTTP security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
   - Integrated healthcheck endpoint at `/healthz` compatible with Docker health monitoring, AWS ECS, GCP Cloud Run and Kubernetes.
