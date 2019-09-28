import { ScreenState } from "../screen/state";

export interface ControllerCommand {
  type: string;
  payload: Partial<ScreenState>;
}