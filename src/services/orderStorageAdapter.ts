import { OrderStorageService } from '../application/ports';
import { useStore } from './useStore';

export function useOrderStorage(): OrderStorageService {
  return useStore();
}
