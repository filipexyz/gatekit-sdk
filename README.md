# @gatekit/sdk

TypeScript SDK for GateKit - Universal messaging gateway API.

## Installation

```bash
npm install @gatekit/sdk
```

## Quick Start

```typescript
import { GateKit } from '@gatekit/sdk';

const gk = new GateKit({
  apiUrl: 'https://api.gatekit.dev',
  apiKey: 'gk_live_your_api_key_here',
});

// Send a message
const result = await gk.messages.send({
  project: 'my-project',  // optional if defaultProject is set
  targets: [{ platformId: 'platform-id', type: 'user', id: '123' }],
  content: { text: 'Hello from GateKit!' }
});

console.log('Message sent:', result.jobId);
```

## Configuration

```typescript
const gk = new GateKit({
  apiUrl: 'https://api.gatekit.dev',     // API endpoint
  apiKey: 'gk_live_your_key',           // API key authentication
  // OR
  jwtToken: 'your_jwt_token',           // JWT authentication
  defaultProject: 'my-project',         // Default project (optional)
  timeout: 30000,                       // Request timeout (ms)
  retries: 3,                           // Retry attempts
});

// With default project set, you can omit the project field:
await gk.messages.send({
  targets: [...],
  content: {...}
});

// Or specify project in the options:
await gk.messages.send({
  targets: [...],
  content: {...},
  project: 'other-project'
});
```

## API Reference

## Webhooks

### Create a new webhook for event notifications
```typescript
// Create webhook for all message events
await gk.webhooks.create(data);
```

### List all webhooks for a project
```typescript
// List all webhooks
await gk.webhooks.list();
```

## Members

### List all members of a project
```typescript
// List all project members
await gk.members.list();
```

### Add a member to a project
```typescript
// Add a member with admin role
await gk.members.add(data);
```

## Projects

### Create a new project
```typescript
// Create a simple project
await gk.projects.create(data);
```

### List all projects
```typescript
// List all projects
await gk.projects.list();
```

## Platforms

### Configure a new platform integration
```typescript
// Add Discord bot
await gk.platforms.create(data);
```

### List configured platforms for project
```typescript
// List all platforms
await gk.platforms.list();
```

## Messages

### List received messages for a project
```typescript
// Get latest 50 messages
await gk.messages.list(data);
```

### Get message statistics for a project
```typescript
// Get message statistics
await gk.messages.stats();
```

## Identities

### Create a new identity with platform aliases
```typescript
// Create identity with Discord and Telegram aliases
await gk.identities.create(data);
```

### List all identities for a project
```typescript
// List all identities
await gk.identities.list();
```

## Auth

### Get current authentication context and permissions
```typescript
// Usage example
await gk.auth.whoami();
```

## ApiKeys

### Generate a new API key
```typescript
// Create messaging API key
await gk.apikeys.create(data);
```

### List all API keys for project
```typescript
// List all API keys
await gk.apikeys.list();
```

## Platform Logs

### List platform processing logs for a project
```typescript
// List recent platform logs
await gk.platformLogs.list();
```

### List logs for a specific platform configuration
```typescript
// List logs for specific platform
await gk.platformLogs.get('platformId');
```

## Error Handling

```typescript
try {
  const result = await gk.messages.send({ project: 'my-project', ...messageData });
} catch (error) {
  if (error.code === 'INSUFFICIENT_PERMISSIONS') {
    console.error('Permission denied:', error.message);
  } else if (error.code === 'VALIDATION_ERROR') {
    console.error('Invalid data:', error.details);
  } else {
    console.error('API error:', error.message);
  }
}
```

## Links

[![View on GitHub](https://img.shields.io/badge/View%20on-GitHub-blue?logo=github)](https://github.com/filipexyz/gatekit-sdk)
[![View on npm](https://img.shields.io/badge/View%20on-npm-red?logo=npm)](https://www.npmjs.com/package/@gatekit/sdk)

- **📦 Repository**: [github.com/filipexyz/gatekit-sdk](https://github.com/filipexyz/gatekit-sdk)
- **📥 npm Package**: [@gatekit/sdk](https://www.npmjs.com/package/@gatekit/sdk)
- **🖥️ CLI Package**: [@gatekit/cli](https://www.npmjs.com/package/@gatekit/cli)
- **📚 Documentation**: [docs.gatekit.dev](https://docs.gatekit.dev)
- **🎛️ Dashboard**: [app.gatekit.dev](https://app.gatekit.dev)

