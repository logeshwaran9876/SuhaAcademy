# Suha Academy

Official web portal and platform for **Suha Academy** — an institute empowering students in music, dance, arts, and competitive education.

---

## 🚀 Running with Docker (Recommended)

Suha Academy is containerized with a multi-stage Alpine build serving an optimized Vite React SPA via high-performance Nginx.

### Start Production Container
```bash
docker compose up -d --build
```
Access the website at **[http://localhost:8080](http://localhost:8080)**.

### Stop Container
```bash
docker compose down
```

For full details, container development mode, and custom port configuration, see [DOCKER.md](file:///d:/SuhaAcademy/DOCKER.md).

---

## 💻 Running Locally (Node.js)

If you prefer running without Docker:

```bash
# Navigate to src
cd src

# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build
```
