# 🐳 Docker Deployment

## Quick Start with Docker

### Using Docker Compose (Recommended)

1. **Setup environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

2. **Start the bot**
```bash
docker-compose up -d
```

3. **View logs**
```bash
docker-compose logs -f
```

4. **Stop the bot**
```bash
docker-compose down
```

### Using Docker directly

1. **Build the image**
```bash
docker build -t 5ive-discord-bot .
```

2. **Run the container**
```bash
docker run -d \
  --name 5ive-bot \
  --env-file .env \
  --restart unless-stopped \
  5ive-discord-bot
```

## Commands

### Deploy slash commands
```bash
docker-compose run --rm discord-bot node src/deploy-commands.js
```

### View logs
```bash
docker-compose logs -f discord-bot
```

### Restart bot
```bash
docker-compose restart discord-bot
```

### Update bot
```bash
git pull
docker-compose up -d --build
```

## Production Tips

- Use Docker secrets for sensitive data
- Set up log rotation
- Monitor resource usage
- Use health checks
- Configure auto-restart policies
