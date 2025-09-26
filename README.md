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
const result = await gk.messages.send('project-slug', {
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
  timeout: 30000,                       // Request timeout (ms)
  retries: 3,                           // Retry attempts
});
```

## API Reference

## Projects

### Create a new project
```typescript
// Create a development project
await gk.projects.create(, data);
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
await gk.platforms.create('project-slug', data);
```

### List configured platforms for project
```typescript
// List all platforms
await gk.platforms.list('project-slug');
```

## Messages

### List received messages for a project
```typescript
// Get latest 50 messages
await gk.messages.list('project-slug', data);
```

### Get message statistics for a project
```typescript
// Get message statistics
await gk.messages.stats('project-slug');
```

## ApiKeys

### Generate a new API key
```typescript
// Create messaging API key
await gk.apikeys.create('project-slug', data);
```

### List all API keys for project
```typescript
// List all API keys
await gk.apikeys.list('project-slug');
```

## Error Handling

```typescript
try {
  const result = await gk.messages.send('project', messageData);
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

- **Documentation**: [docs.gatekit.dev](https://docs.gatekit.dev)
- **Dashboard**: [app.gatekit.dev](https://app.gatekit.dev)
- **CLI Package**: [@gatekit/cli](https://www.npmjs.com/package/@gatekit/cli)
- **GitHub**: [github.com/gatekit](https://github.com/gatekit)

