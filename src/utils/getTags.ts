import type { Project } from '@/data/projects';
import { TAG_PRIORITY } from '@/data/filters';

function getRank(tag: string) {
  const index = TAG_PRIORITY.indexOf(tag);
  return index === -1 ? TAG_PRIORITY.length : index;
}

export function getTags(projects: Project[]): string[] {
  return Array.from(new Set(projects.flatMap((project) => project.tags))).sort(
    (a, b) => getRank(a) - getRank(b) || a.localeCompare(b)
  );
}
