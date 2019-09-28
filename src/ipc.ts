import { ipcRenderer } from 'electron';
import { ControllerCommand } from './controller/command';

export function publish(channel: string, command: ControllerCommand) {
  ipcRenderer.send(channel, command);
}

export function subscribe(channel: string, handler: SubscriptionHandler) {
  ipcRenderer.on(channel, (_, data) => handler(data));
}

export type SubscriptionHandler = (command: ControllerCommand) => void;