import { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  alt?: string;
  className?: string;
};

export function AppIcon({
  icon: Icon,
  size = 88,
  strokeWidth = 2,
  alt,
  className,
}: IconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={`${className} text-secondary`}
      aria-label={`Ícone-${alt}`}
      role="img"
    />
  );
}
