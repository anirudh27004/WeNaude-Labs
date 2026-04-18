'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, UserButton, useClerk, useUser } from "@clerk/nextjs";

import {
    type LucideIcon,
    Home,
    LayoutGrid,
    AudioLines,
    Volume2,
    Settings,
    Headphones,
} from 'lucide-react';
import Link from "next/link";

interface MenuItem {
    title: string;
    url? : string;
    icon: LucideIcon;
    onClick?: () => void;
};

interface NavSectionProps {
    label?: string;
    items: MenuItem[];
    pathName: string;
};

function NavSection({ label, items, pathName }: NavSectionProps) {
    return (
        <SidebarGroup>
            {label && (
                <SidebarGroupLabel className = "text-[13px] uppercase text-muted-foreground">
                    {label}
                    </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild = {!!item.url}
                                isActive = {
                                    item.url
                                    ?  item.url == '/'
                                    ? pathName == '/'
                                    : pathName.startsWith(item.url)
                                    : false
                                }
                                onClick = {item.onClick}
                                tooltip = {item.title}
                                className="h-9 px-3 py-2 text-[13px] tracking-tight font-medium border border-transparent data-[active=true]:border-border data-[active=true]:shadow-[0px_1px_1px_0px_rgba(44,54,53,0.03),inset_0px_0px_0px_2px_white]"
                            >                                
                                {item.url ?(
                                    <Link href={item.url}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </Link>
                                ):(
                                    <>
                                    <item.icon/>
                                    <span>{item.title}</span>
                                    </>
                                )}
                                </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}

export function DashboardSidebar() {
    const pathName = usePathname();
    const clerk = useClerk();
    const { toggleSidebar, state } = useSidebar();
    const isCollapsed = state === "collapsed";
    const { user } = useUser();

    const mainMenuItems: MenuItem[] = [
        {
            title: "Dashboard",
            url: "/",
            icon: Home,
        },
        {
            title: "Explore voices",
            url: "/voices",
            icon: LayoutGrid,
        },
        {
            title: "Text to speech",
            url: "/text-to-speech",
            icon: AudioLines,
        },
        {
            title: "Voice cloning",
            icon: Volume2,
        },
    ];

        const othersMenuItems: MenuItem[] = [
            {
                title: "Settings",
                icon: Settings,
                onClick: () => clerk.openOrganizationProfile(),
            },
            {
                title: "Help and support",
                icon: Headphones,
                url:"mailto:anirudh27004@gmail.com"
            }
        ];
    
        return (
            <Sidebar collapsible="icon">
                <SidebarHeader className = "flex flex-col gap-4 pt-4">
                    <div className = "flex items-center gap-2 pl-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
                        <button
                            type="button"
                            onClick={toggleSidebar}
                            aria-label="Toggle sidebar"
                            className="flex items-center gap-2 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <Image
                                src="/logo.png"
                                alt = "Wenaude Labs"
                                width={24}
                                height={24}
                                className="rounded-sm shrink-0"
                            />
                            <span className = "group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground whitespace-nowrap">
                                Wenaude Labs
                            </span>
                        </button>
                    </div>
                    <SidebarMenu>
                        <SidebarMenuItem className={isCollapsed ? "w-8 overflow-hidden" : "w-full"}>
                            <OrganizationSwitcher
                            key={isCollapsed ? "collapsed" : "expanded"}
                            hidePersonal
                            fallback={
                             <Skeleton className={isCollapsed ? "size-8 rounded-md border bg-white" : "h-8.5 w-full rounded-md border bg-white"}/>
                            }
                             appearance={{
                               elements: {
                                    rootBox: isCollapsed
                                        ? "w-auto! flex! justify-center!"
                                        : "w-full!",
                                    organizationSwitcherTrigger: isCollapsed
                                        ? "w-auto! p-1! bg-white! border! border-border! rounded-md! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]!"
                                        : "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3! shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]!",
                                    organizationPreview: "gap-2!",
                                    organizationPreviewAvatarBox: "size-6! rounded-sm!",
                                    organizationPreviewTextContainer: isCollapsed
                                        ? "hidden!"
                                        : "text-xs! tracking-tight! font-medium! text-foreground!",
                                    organizationPreviewMainIdentifier: "text-[13px]!",
                                    organizationSwitcherTriggerIcon: isCollapsed
                                        ? "hidden!"
                                        : "size-4! text-sidebar-foreground!",
                               },
                             }}
                            />
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <div className="border-b border-dashed border-border"/>
                <SidebarContent>
                    <NavSection items={mainMenuItems} pathName={pathName}/>
                    <NavSection
                    label="others"
                    items={othersMenuItems}
                    pathName={pathName}
                    />
                </SidebarContent>
                <SidebarFooter className="gap-3 y-3">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            {isCollapsed ? (
                                <div className="flex justify-center">
                                    <UserButton
                                        fallback={
                                            <Skeleton className="size-7 rounded-full" />
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 w-full bg-white border border-border rounded-md pl-1 pr-2 py-1 shadow-[0px_1px_1.5px_0px_rgba(44,54,53,0.03)]">
                                    <UserButton
                                        fallback={
                                            <Skeleton className="size-6 rounded-full" />
                                        }
                                    />
                                    <span className="text-[13px] tracking-tight font-medium text-foreground truncate">
                                        {user?.fullName ?? user?.primaryEmailAddress?.emailAddress}
                                    </span>
                                </div>
                            )}
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
        );
    }
