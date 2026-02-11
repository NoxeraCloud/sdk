export function createContext(userId: string) {
  return {
    userId,
    timestamp: Date.now()
  };
}
