import { Hook } from '@/types/hook';
import hooksData from '@/data/hooks.json';

export function getAllHooks(): Hook[] {
  return hooksData.hooks.map(hook => ({
    ...hook,
    lastUpdated: hook.lastUpdated ? new Date(hook.lastUpdated) : undefined,
  })) as Hook[];
}

export function getFeaturedHooks(): Hook[] {
  return getAllHooks().filter(hook => hook.featured);
}

export function getHooksByCategory(category: string): Hook[] {
  return getAllHooks().filter(hook => hook.category === category);
}

export function searchHooks(query: string): Hook[] {
  const lowerQuery = query.toLowerCase();
  return getAllHooks().filter(hook => 
    hook.name.toLowerCase().includes(lowerQuery) ||
    hook.description.toLowerCase().includes(lowerQuery) ||
    hook.author.toLowerCase().includes(lowerQuery) ||
    hook.hookTypes.some(type => type.toLowerCase().includes(lowerQuery))
  );
}