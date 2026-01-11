import { type SidebarMulti } from 'vitepress-sidebar/types';

/// Retrieve the initial link from the sidebar configuration for a given path
export function retrieveInitialLink(
  sidebar: SidebarMulti,
  path: string
): string {
  const root = sidebar[path];
  if (!root) return path;
  let item = root.items.at(0);

  if (!item) console.warn('No items found in sidebar for path:', path);

  while (item !== undefined) {
    const deeperItem = item.items?.at(0);
    if (!deeperItem) break;
    item = deeperItem;
  }
  const result = `${root.base}${item?.link ?? ''}`;
  return result;
}
