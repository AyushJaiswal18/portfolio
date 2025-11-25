```markdown
# React/Vite Frontend Auto-Deploy Template

Template for deploying React/Vite apps with auto-deployment via GitHub Actions + Traefik.

## Quick Start

### 1. Use This Template
Click "Use this template" button on GitHub to create your project.

### 2. Setup on Server (First Time Only)

```bash
# SSH into your server
ssh deploy@your_server_ip

# Clone your new project
cd ~/projects
git clone https://github.com/yourusername/your-frontend-project.git
cd your-frontend-project

# Setup environment variables (optional for frontend)
cp .env.example .env
nano .env  # Add your actual values if needed
```

### 3. Add GitHub Secrets

Go to your repo: Settings → Secrets and variables → Actions → New repository secret

Add these 5 secrets:

| Secret Name | Description | How to Get | Example |
|------------|-------------|------------|---------|
| `SERVER_IP` | Your VPS IP address | DigitalOcean dashboard | `123.45.67.89` |
| `SSH_PRIVATE_KEY` | SSH private key for server access | Run on LOCAL: `cat ~/.ssh/id_rsa` and copy entire output | Starts with `-----BEGIN...` |
| `PROJECT_NAME` | Unique name for this project (container & folder name) | Choose any name (lowercase, no spaces) | `my-app` or `dashboard` |
| `DOMAIN` | Domain/subdomain where app will be accessible | Your domain with subdomain | `app.builtwithayush.tech` |
| `APP_PORT` | Nginx port (always 80 for React) | Always use `80` | `80` |

**Important Notes:**
- `PROJECT_NAME` must match your folder name in `~/projects/` on server
- `DOMAIN` must have DNS A record pointing to your `SERVER_IP`
- `APP_PORT` is always `80` for React/Vite apps (Nginx serves on port 80)
- Frontend env variables must start with `VITE_` to be included in build

### 4. Deploy

```bash
# Push to trigger auto-deployment
git add .
git commit -m "initial setup"
git push origin main
```

GitHub Actions will automatically build and deploy to your server!

## Environment Variables

**For Vite apps:**
- Env variables must be prefixed with `VITE_`
- They are baked into the build at compile time
- Access in code: `import.meta.env.VITE_API_URL`
- To update: change locally, commit, push (triggers rebuild)

## Build Output

- Vite builds to `/dist` folder
- Dockerfile copies build to Nginx
- Nginx serves static files on port 80

## Manual Deploy

If needed, SSH to server:

```bash
cd ~/projects/your-project
git pull
docker build -t your-project .
docker stop your-project || true
docker rm your-project || true
docker run -d \
  --name your-project \
  --restart unless-stopped \
  --network web \
  --label "traefik.enable=true" \
  --label "traefik.http.routers.your-project.rule=Host(\`your-domain.com\`)" \
  --label "traefik.http.routers.your-project.entrypoints=websecure" \
  --label "traefik.http.routers.your-project.tls.certresolver=letsencrypt" \
  --label "traefik.http.services.your-project.loadbalancer.server.port=80" \
  your-project
```

## Troubleshooting

**View logs:**
```bash
docker logs your-project-name
```

**Check if running:**
```bash
docker ps
```

**Restart:**
```bash
docker restart your-project-name
```

**Check Traefik dashboard:**
```
http://your_server_ip:8080
```

## API Integration

To connect frontend to backend API, update `nginx.conf`:

```nginx
location /api {
    proxy_pass http://api.yourdomain.com;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Or use full URL in your frontend: `VITE_API_URL=https://api.yourdomain.com`
```
