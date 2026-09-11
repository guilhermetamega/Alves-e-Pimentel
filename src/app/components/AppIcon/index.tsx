import { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  label?: string;
  className?: string;
};

export function AppIcon({
  icon: Icon,
  size = 88,
  strokeWidth = 1.25,
  label,
  className = "",
}: IconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={`text-secondary ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
