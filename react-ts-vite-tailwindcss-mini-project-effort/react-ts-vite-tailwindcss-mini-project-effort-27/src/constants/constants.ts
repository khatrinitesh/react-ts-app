export const ALERT_TYPES = {
    SUCCESS:'success',
    ERROR:'error',
    INFO:'info'
}
// constants.ts
export const SEARCH_STATE = {
    OPEN: 'open',
    CLOSED: 'closed',
  } as const;
  
  export type SearchState = keyof typeof SEARCH_STATE;
  