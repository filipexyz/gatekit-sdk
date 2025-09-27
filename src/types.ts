// Generated TypeScript types for GateKit SDK
// DO NOT EDIT - This file is auto-generated from backend contracts

export interface ProjectMember {
  id: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

export interface AddMemberDto {
  email: string;
  role: ProjectRole;
}

export interface UpdateMemberRoleDto {
  role: ProjectRole;
}

export interface MessageResponse {
  message: string;
}

export interface CreateProjectDto {
name: string;
slug?: string;
environment?: ProjectEnvironment;
isDefault?: boolean;
settings?: any;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  environment: 'development' | 'staging' | 'production';
  isDefault: boolean;
  settings?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  _count?: {
    apiKeys: number;
  };
}

export interface CreatePlatformDto {
platform: PlatformType;
credentials: Record<string, any>;
isActive?: boolean;
testMode?: boolean;
}

export interface PlatformResponse {
  id: string;
  platform: string;
  isActive: boolean;
  testMode: boolean;
  webhookUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UpdatePlatformDto {
  isActive?: boolean;
  testMode?: boolean;
  credentials?: Record<string, unknown>;
}

export interface QueryMessagesDto {
  platform?: string;
  platformId?: string;
  chatId?: string;
  userId?: string;
  startDate?: string;
  endDate?: string;
  limit?: number;
  offset?: number;
  order?: 'asc' | 'desc';
}

export interface MessageListResponse {
  messages: ReceivedMessage[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

export interface MessageStatsResponse {
  received: {
    totalMessages: number;
    recentMessages: number;
    uniqueUsers: number;
    uniqueChats: number;
    byPlatform: Array<{
      platform: string;
      count: number;
    }>;
  };
  sent: {
    totalMessages: number;
    byPlatformAndStatus: Array<{
      platform: string;
      status: string;
      count: number;
    }>;
  };
}

export interface ReceivedMessage {
  id: string;
  platform: string;
  providerMessageId: string;
  providerChatId: string;
  providerUserId: string;
  userDisplay: string | null;
  messageText: string | null;
  messageType: string;
  receivedAt: Date;
  rawData: any;
  platformConfig?: {
    id: string;
    platform: string;
    isActive: boolean;
    testMode: boolean;
  };
}

export interface SendMessageDto {
  targets: TargetDto[];
  content: ContentDto;
  options?: OptionsDto;
  metadata?: MetadataDto;
}

export interface MessageSendResponse {
  success: boolean;
  jobId: string;
  status: string;
  targets: Array<{
    platformId: string;
    type: string;
    id: string;
  }>;
  platformIds: string[];
  timestamp: string;
  message: string;
}

export interface MessageStatusResponse {
  jobId: string;
  status: string;
  progress?: number;
  result?: any;
  error?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface MessageRetryResponse {
  success: boolean;
  jobId: string;
  message: string;
}

export interface SentMessage {
  id: string;
  platform: string;
  jobId: string | null;
  providerMessageId: string | null;
  targetChatId: string;
  targetUserId: string | null;
  targetType: string;
  messageText: string | null;
  messageContent: any | null;
  status: string;
  errorMessage: string | null;
  sentAt: Date | null;
  createdAt: Date;
}

export interface CreateApiKeyDto {
name: string;
scopes: string[];
expiresInDays?: number;
}

export interface ApiKeyResponse {
  id: string;
  key: string;
  name: string;
  prefix: string;
  scopes: string[];
  expiresAt: Date | null;
  createdAt: Date;
}

export interface ApiKeyListResponse {
  id: string;
  name: string;
  maskedKey: string;
  scopes: string[];
  lastUsedAt: Date | null;
  expiresAt: Date | null;
  createdAt: Date;
}

export interface ApiKeyRollResponse {
  id: string;
  key: string;
  name: string;
  prefix: string;
  scopes: string[];
  expiresAt: Date | null;
  createdAt: Date;
  oldKeyRevokedAt: Date;
}

export type ProjectRole = 'owner' | 'admin' | 'member' | 'viewer';

export type ProjectEnvironment = 'development' | 'staging' | 'production';

export type PlatformType = 'discord' | 'telegram';

export interface TargetDto {
  platformId: string;
  type: 'user' | 'channel' | 'group';
  id: string;
}

export interface ContentDto {
  text?: string;
  attachments?: any[];
  buttons?: any[];
  embeds?: any[];
}

export interface OptionsDto {
  replyTo?: string;
  silent?: boolean;
  scheduled?: string;
}

export interface MetadataDto {
  trackingId?: string;
  tags?: string[];
  priority?: 'low' | 'normal' | 'high';
}

// SDK configuration
export interface GateKitConfig {
  apiUrl: string;
  apiKey?: string;
  jwtToken?: string;
  timeout?: number;
  retries?: number;
}
