// Generated API client for GateKit SDK
// DO NOT EDIT - This file is auto-generated from backend contracts

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  AddMemberDto,
  ApiKeyListResponse,
  ApiKeyResponse,
  ApiKeyRollResponse,
  CreateApiKeyDto,
  CreatePlatformDto,
  CreateProjectDto,
  GateKitConfig,
  MessageListResponse,
  MessageResponse,
  MessageRetryResponse,
  MessageSendResponse,
  MessageStatsResponse,
  MessageStatusResponse,
  PlatformLogStatsResponse,
  PlatformLogsResponse,
  PlatformResponse,
  Project,
  ProjectMember,
  QueryMessagesDto,
  ReceivedMessage,
  SendMessageDto,
  SentMessage,
  UpdateMemberRoleDto,
  UpdatePlatformDto,
  UpdateProjectDto
} from './types';
import { GateKitError, AuthenticationError, RateLimitError } from './errors';

class MembersAPI {
  constructor(private client: AxiosInstance) {}

  async list(slug: string): Promise<ProjectMember[]> {
    const response = await this.client.get<ProjectMember[]>(`/api/v1/projects/${slug}/members`);
    return response.data;
  }

  async add(slug: string, data: AddMemberDto): Promise<ProjectMember> {
    const response = await this.client.post<ProjectMember>(`/api/v1/projects/${slug}/members`, data);
    return response.data;
  }

  async update(slug: string, userId: string, data: UpdateMemberRoleDto): Promise<ProjectMember> {
    const response = await this.client.patch<ProjectMember>(`/api/v1/projects/${slug}/members/${userId}`, data);
    return response.data;
  }

  async remove(slug: string, userId: string): Promise<MessageResponse> {
    const response = await this.client.delete<MessageResponse>(`/api/v1/projects/${slug}/members/${userId}`);
    return response.data;
  }
}

class ProjectsAPI {
  constructor(private client: AxiosInstance) {}

  async create(data: CreateProjectDto): Promise<Project> {
    const response = await this.client.post<Project>(`/api/v1/projects`, data);
    return response.data;
  }

  async list(): Promise<Project[]> {
    const response = await this.client.get<Project[]>(`/api/v1/projects`);
    return response.data;
  }

  async update(slug: string, data: UpdateProjectDto): Promise<Project> {
    const response = await this.client.get<Project>(`/api/v1/projects/${slug}`, { params: data });
    return response.data;
  }
}

class PlatformsAPI {
  constructor(private client: AxiosInstance) {}

  async create(projectSlug: string, data: CreatePlatformDto): Promise<PlatformResponse> {
    const response = await this.client.post<PlatformResponse>(`/api/v1/projects/${projectSlug}/platforms`, data);
    return response.data;
  }

  async list(projectSlug: string): Promise<PlatformResponse[]> {
    const response = await this.client.get<PlatformResponse[]>(`/api/v1/projects/${projectSlug}/platforms`);
    return response.data;
  }

  async get(projectSlug: string, id: string): Promise<PlatformResponse> {
    const response = await this.client.get<PlatformResponse>(`/api/v1/projects/${projectSlug}/platforms/${id}`);
    return response.data;
  }

  async update(projectSlug: string, id: string, data: UpdatePlatformDto): Promise<PlatformResponse> {
    const response = await this.client.patch<PlatformResponse>(`/api/v1/projects/${projectSlug}/platforms/${id}`, data);
    return response.data;
  }

  async delete(projectSlug: string, id: string): Promise<MessageResponse> {
    const response = await this.client.delete<MessageResponse>(`/api/v1/projects/${projectSlug}/platforms/${id}`);
    return response.data;
  }

  async registerWebhook(projectSlug: string, id: string): Promise<MessageResponse> {
    const response = await this.client.post<MessageResponse>(`/api/v1/projects/${projectSlug}/platforms/${id}/register-webhook`);
    return response.data;
  }
}

class MessagesAPI {
  constructor(private client: AxiosInstance) {}

  async list(projectSlug: string, data: QueryMessagesDto): Promise<MessageListResponse> {
    const response = await this.client.get<MessageListResponse>(`/api/v1/projects/${projectSlug}/messages`, { params: data });
    return response.data;
  }

  async stats(projectSlug: string): Promise<MessageStatsResponse> {
    const response = await this.client.get<MessageStatsResponse>(`/api/v1/projects/${projectSlug}/messages/stats`);
    return response.data;
  }

  async get(projectSlug: string, messageId: string): Promise<ReceivedMessage> {
    const response = await this.client.get<ReceivedMessage>(`/api/v1/projects/${projectSlug}/messages/${messageId}`);
    return response.data;
  }

  async cleanup(projectSlug: string): Promise<MessageResponse> {
    const response = await this.client.delete<MessageResponse>(`/api/v1/projects/${projectSlug}/messages/cleanup`);
    return response.data;
  }

  async send(projectSlug: string, data: SendMessageDto): Promise<MessageSendResponse> {
    const response = await this.client.post<MessageSendResponse>(`/api/v1/projects/${projectSlug}/messages/send`, data);
    return response.data;
  }

  async status(projectSlug: string, jobId: string): Promise<MessageStatusResponse> {
    const response = await this.client.get<MessageStatusResponse>(`/api/v1/projects/${projectSlug}/messages/status/${jobId}`);
    return response.data;
  }

  async retry(projectSlug: string, jobId: string): Promise<MessageRetryResponse> {
    const response = await this.client.post<MessageRetryResponse>(`/api/v1/projects/${projectSlug}/messages/retry/${jobId}`);
    return response.data;
  }

  async sent(projectSlug: string): Promise<SentMessage[]> {
    const response = await this.client.get<SentMessage[]>(`/api/v1/projects/${projectSlug}/messages/sent`);
    return response.data;
  }
}

class ApikeysAPI {
  constructor(private client: AxiosInstance) {}

  async create(projectSlug: string, data: CreateApiKeyDto): Promise<ApiKeyResponse> {
    const response = await this.client.post<ApiKeyResponse>(`/api/v1/projects/${projectSlug}/keys`, data);
    return response.data;
  }

  async list(projectSlug: string): Promise<ApiKeyListResponse[]> {
    const response = await this.client.get<ApiKeyListResponse[]>(`/api/v1/projects/${projectSlug}/keys`);
    return response.data;
  }

  async revoke(projectSlug: string, keyId: string): Promise<MessageResponse> {
    const response = await this.client.delete<MessageResponse>(`/api/v1/projects/${projectSlug}/keys/${keyId}`);
    return response.data;
  }

  async roll(projectSlug: string, keyId: string): Promise<ApiKeyRollResponse> {
    const response = await this.client.post<ApiKeyRollResponse>(`/api/v1/projects/${projectSlug}/keys/${keyId}/roll`);
    return response.data;
  }
}

class PlatformLogsAPI {
  constructor(private client: AxiosInstance) {}

  async list(slug: string): Promise<PlatformLogsResponse> {
    const response = await this.client.get<PlatformLogsResponse>(`/api/v1/projects/${slug}/platforms/logs`);
    return response.data;
  }

  async get(slug: string, platformId: string): Promise<PlatformLogsResponse> {
    const response = await this.client.get<PlatformLogsResponse>(`/api/v1/projects/${slug}/platforms/${platformId}/logs`);
    return response.data;
  }

  async stats(slug: string): Promise<PlatformLogStatsResponse> {
    const response = await this.client.get<PlatformLogStatsResponse>(`/api/v1/projects/${slug}/platforms/logs/stats`);
    return response.data;
  }
}

export class GateKit {
  private client: AxiosInstance;

  // API group instances
  readonly members: MembersAPI;
  readonly projects: ProjectsAPI;
  readonly platforms: PlatformsAPI;
  readonly messages: MessagesAPI;
  readonly apikeys: ApikeysAPI;
  readonly platformLogs: PlatformLogsAPI;

  constructor(config: GateKitConfig) {
    this.client = axios.create({
      baseURL: config.apiUrl,
      timeout: config.timeout || 30000,
      headers: { 'Content-Type': 'application/json' }
    });

    this.setupAuthentication(config);
    this.setupErrorHandling();

    // Initialize API groups after client is ready
    this.members = new MembersAPI(this.client);
    this.projects = new ProjectsAPI(this.client);
    this.platforms = new PlatformsAPI(this.client);
    this.messages = new MessagesAPI(this.client);
    this.apikeys = new ApikeysAPI(this.client);
    this.platformLogs = new PlatformLogsAPI(this.client);
  }

  private setupAuthentication(config: GateKitConfig): void {
    if (config.apiKey) {
      this.client.defaults.headers['X-API-Key'] = config.apiKey;
    } else if (config.jwtToken) {
      this.client.defaults.headers['Authorization'] = `Bearer ${config.jwtToken}`;
    }
  }

  private setupErrorHandling(): void {
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          throw new AuthenticationError('Invalid credentials');
        }
        if (error.response?.status === 429) {
          throw new RateLimitError('Rate limit exceeded');
        }
        if (error.response?.status === 403) {
          throw new GateKitError(
            `Insufficient permissions: ${error.response.data?.message || 'Access denied'}`,
            403,
            'INSUFFICIENT_PERMISSIONS'
          );
        }
        throw new GateKitError(
          error.response?.data?.message || error.message,
          error.response?.status
        );
      }
    );
  }
}
