import type { Project } from '@/data/projects';

export function getTags(projects: Project[]): string[] {
  return Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();
}
