import { useCallback, useState } from 'react';

export type Screen = 'onboarding' | 'home' | 'detail' | 'order' | 'delivery';

const PARENT: Partial<Record<Screen, Screen>> = { detail: 'home', order: 'detail', delivery: 'home' };

export function useFlow() {
  const [screen, go] = useState<Screen>('onboarding');
  // returns true if there was a previous screen (used for the Android back button)
  const back = useCallback(() => {
    const prev = PARENT[screen];
    if (prev) go(prev);
    return !!prev;
  }, [screen]);
  return { screen, go, back };
}
