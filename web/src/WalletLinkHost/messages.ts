export interface WalletLinkMessage {
  type: string
  id?: number
}

export interface ServerMessage extends WalletLinkMessage {}

export interface ServerMessageOK extends ServerMessage {
  type: "OK"
  id: number
  sessionId: string
}

export interface ServerMessageFail extends ServerMessage {
  type: "Fail"
  id: number
  sessionId: string
  error: string
}

export interface ServerMessageGetMetadataOK extends ServerMessage {
  type: "GetMetadataOK"
  id: number
  sessionId: string
  key: string
  value: string
}

export interface ServerMessagePublishEventOK extends ServerMessage {
  type: "PublishEventOK"
  id: number
  sessionId: string
  eventId: string
}

export interface ServerMessageEvent extends ServerMessage {
  type: "Event"
  sessionId: string
  eventId: string
  event: string
  data: { [field: string]: string }
}

export interface ClientMessage extends WalletLinkMessage {
  id: number
}

export interface ClientMessageHostSession extends ClientMessage {
  type: "HostSession"
  sessionId: string
  sessionKey: string
}

export function ClientMessageHostSession(
  id: number,
  sessionId: string,
  sessionKey: string
): ClientMessageHostSession {
  return { type: "HostSession", id, sessionId, sessionKey }
}

export interface ClientMessageJoinSession extends ClientMessage {
  type: "JoinSession"
  sessionId: string
  sessionKey: string
}

export interface ClientMessageSetPushID extends ClientMessage {
  type: "SetPushID"
  sessionId: string
  pushId: string
}

export interface ClientMessageSetMetadata extends ClientMessage {
  type: "SetMetadata"
  sessionId: string
  key: string
  value: string
}

export interface ClientMessageGetMetadata extends ClientMessage {
  type: "GetMetadata"
  sessionId: string
  key: string
}

export interface ClientMessagePublishEvent extends ClientMessage {
  type: "PublishEvent"
  sessionId: string
  event: string
  data: { [field: string]: string }
}