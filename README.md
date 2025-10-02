# @gatekit/sdk

TypeScript SDK for GateKit - Universal messaging gateway API.

> **Auto-generated from backend contracts** - Do not edit manually

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
  targets: [{ platformId: 'platform-id', type: 'user', id: '123' }],
  content: { text: 'Hello from GateKit!' },
});
```

## Features

- ✅ **Full type safety** - TypeScript types auto-generated from backend
- ✅ **Perfect sync** - Always matches backend API contracts
- ✅ **Zero duplication** - Single source of truth from contracts
- ✅ **Error handling** - Built-in error types and authentication handling
- ✅ **Rate limiting** - Automatic rate limit detection

## API Reference

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

## Auth

### Get current authentication context and permissions
```typescript
// Usage example
await gk.auth.whoami();
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

## Authentication

### API Key (Recommended)

```typescript
const gk = new GateKit({
  apiUrl: 'https://api.gatekit.dev',
  apiKey: 'gk_live_your_api_key_here',
  defaultProject: 'my-project', // optional
});
```

### JWT Token

```typescript
const gk = new GateKit({
  apiUrl: 'https://api.gatekit.dev',
  jwtToken: 'your-jwt-token',
});
```

## Error Handling

```typescript
import { GateKitError, AuthenticationError, RateLimitError } from '@gatekit/sdk';

try {
  await gk.messages.send({ ... });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid credentials');
  } else if (error instanceof RateLimitError) {
    console.error('Rate limit exceeded');
  } else if (error instanceof GateKitError) {
    console.error(`API error: ${error.message}`);
  }
}
```

## Links

- [Documentation](https://docs.gatekit.dev)
- [GitHub](https://github.com/filipexyz/gatekit-sdk)
- [npm](https://www.npmjs.com/package/@gatekit/sdk)
- [Discord Community](https://discord.gg/bQPsvycW)

## License

MIT
