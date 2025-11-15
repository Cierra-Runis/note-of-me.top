'use client';

import Link from 'next/link';
import { useMemo, useRef } from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Heading } from '@/utils/heading';

// paddingLeftByLevel was used for plain list; SidebarMenu handles hierarchy now.

export function TocSidebar({ headings }: { headings: Heading[] }) {
  const tocRef = useRef<HTMLDivElement>(null);

  type TocItem = { children: Heading[]; id: string; text: string };
  const items: TocItem[] = useMemo(() => {
    const list: TocItem[] = [];
    let current: null | TocItem = null;
    const filtered = headings.filter((h) => h.level > 1);
    for (const h of filtered) {
      if (h.level <= 2) {
        if (current) list.push(current);
        current = { children: [], id: h.id, text: h.text };
      } else if (current) {
        current.children.push(h);
      } else {
        // Edge case: no preceding h2, treat as top-level without children
        list.push({ children: [], id: h.id, text: h.text });
      }
    }
    if (current) list.push(current);
    return list;
  }, [headings]);

  return (
    <Sidebar ref={tocRef} side='right'>
      <SidebarRail />
      <SidebarHeader>
        <h2 className='text-lg font-medium'>您将看到</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Link href={`#${item.id}`}>
                      <span>{item.text}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.children.length > 0 && (
                    <SidebarMenuSub>
                      {item.children.map((child) => (
                        <SidebarMenuSubItem key={child.id}>
                          <SidebarMenuSubButton asChild>
                            <Link href={`#${child.id}`}>{child.text}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
