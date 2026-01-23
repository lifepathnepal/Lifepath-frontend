"use client";

import { Icon } from "@iconify/react";

interface IconProps {
  icon: string;
  className?: string;
  width?: number;
  height?: number;
}

export function IconifyIcon({
  icon,
  className = "",
  width = 24,
  height = 24,
}: IconProps) {
  return (
    <Icon icon={icon} width={width} height={height} className={className} />
  );
}
