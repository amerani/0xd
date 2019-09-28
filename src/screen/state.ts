export interface ScreenState {
  color: string;
}

export interface ScreenProps {
  data: ScreenState;
}

export const initialState: ScreenState = {
  color: 'blue'
}