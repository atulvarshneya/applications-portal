# Applications Portal

A web portal built with NestJS that displays applications in a grid layout. Applications are configured via a `config.json` file.

## Features

- Grid layout displaying applications
- Click on any application to open it in a new browser tab
- Responsive design that works on desktop and mobile devices
- Easy configuration via `config.json`

## Installation

1. Install dependencies:
```bash
npm install
```

## Configuration

Edit `config.json` to add, remove, or modify applications. Each application should have:
- `name`: The display name of the application
- `url`: The URL to open when clicked
- `description`: A brief description of the application

Example:
```json
{
  "applications": [
    {
      "name": "GitHub",
      "url": "https://github.com",
      "description": "Code hosting platform for version control and collaboration"
    }
  ]
}
```

## Running the Application

### Development Mode
```bash
npm run start:dev
```

The application will be available at `http://localhost:3000`

### Production Mode
```bash
npm run build
npm run start:prod
```

## Project Structure

```
webapp-apps-portal/
├── config.json          # Application configuration
├── src/
│   ├── main.ts         # Application entry point
│   ├── app.module.ts   # Root module
│   ├── app.controller.ts # API controller
│   └── app.service.ts  # Service to read config.json
├── public/
│   └── index.html      # Frontend HTML/CSS/JS
└── package.json        # Dependencies and scripts
```

## API Endpoints

- `GET /api/applications` - Returns the list of applications from config.json
