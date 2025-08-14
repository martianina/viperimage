/* eslint-disable */
import React, { useState } from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/link/NavLink';
import DashIcon from '@/components/icons/DashIcon';
import type { RoutesType } from '@/types/navigation';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  const pathname = usePathname();
  const { routes } = props;
  const [expandedDropdowns, setExpandedDropdowns] = useState<string[]>([]);

  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname],
  );

  const toggleDropdown = (routePath: string) => {
    setExpandedDropdowns(prev => 
      prev.includes(routePath) 
        ? prev.filter(path => path !== routePath)
        : [...prev, routePath]
    );
  };

  const isDropdownExpanded = (routePath: string) => {
    return expandedDropdowns.includes(routePath);
  };

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl'
      ) {
        // Check if this is a dropdown route
        if (route.isDropdown && route.children) {
          const isExpanded = isDropdownExpanded(route.path);
          const hasActiveChild = route.children.some(child => 
            activeRoute(child.path) || (child.customPath && pathname?.includes(child.customPath))
          );

          return (
            <div key={index} className="mb-3">
              {/* Dropdown Header */}
              <div 
                className="relative flex hover:cursor-pointer"
                onClick={() => toggleDropdown(route.path)}
              >
                <li className="my-[3px] flex cursor-pointer items-center px-8 w-full">
                  <span
                    className={`${
                      hasActiveChild
                        ? 'font-bold text-brand-500'
                        : 'font-medium text-gray-700'
                    }`}
                  >
                    {route.icon ? route.icon : <DashIcon />}
                  </span>
                  <p
                    className={`leading-1 ml-4 flex flex-1 ${
                      hasActiveChild
                        ? 'font-bold text-gray-700'
                        : 'font-medium text-gray-700'
                    }`}
                  >
                    {route.name}
                  </p>
                  <span className="text-gray-500">
                    {isExpanded ? <FaChevronDown className="h-4 w-4" /> : <FaChevronRight className="h-4 w-4" />}
                  </span>
                </li>
                {hasActiveChild ? (
                  <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500" />
                ) : null}
              </div>

              {/* Dropdown Children */}
              {isExpanded && (
                <div className="ml-8">
                  {route.children.map((child, childIndex) => {
                    const href = child.customPath || child.layout + '/' + child.path;
                    const isActive = activeRoute(child.path) || (child.customPath && pathname?.includes(child.customPath));
                    
                    return (
                      <NavLink key={childIndex} href={href}>
                        <div className="relative mb-2 flex hover:cursor-pointer">
                          <li className="my-[2px] flex cursor-pointer items-center px-4 py-1">
                            <span
                              className={`${
                                isActive
                                  ? 'font-bold text-brand-500'
                                  : 'font-medium text-gray-600'
                              }`}
                            >
                              {child.icon ? child.icon : <DashIcon />}
                            </span>
                            <p
                              className={`leading-1 ml-3 flex text-sm ${
                                isActive
                                  ? 'font-bold text-gray-700'
                                  : 'font-medium text-gray-600'
                              }`}
                            >
                              {child.name}
                            </p>
                          </li>
                          {isActive ? (
                            <div className="absolute right-0 top-px h-7 w-1 rounded-lg bg-brand-500" />
                          ) : null}
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        // Regular route (non-dropdown)
        const href = route.customPath || route.layout + '/' + route.path;
        
        return (
          <NavLink key={index} href={href}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path)
                      ? 'font-bold text-brand-500'
                      : 'font-medium text-gray-700'
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path)
                      ? 'font-bold text-gray-700'
                      : 'font-medium text-gray-700'
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500" />
              ) : null}
            </div>
          </NavLink>
        );
      }
    });
  };

  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
