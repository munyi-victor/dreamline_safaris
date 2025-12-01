import * as Icons from "lucide-react";
import { ComponentType } from "react";

interface LucideIconProps {
  name: keyof typeof Icons;
  size?: number;
}

const LucideIcon = ({ name, size = 24 }: LucideIconProps) => {
  const IconComponent = Icons[name] as ComponentType<{ size?: number }>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found inlucide-react`);

    return null;
  }

  return <IconComponent size={size} />;
};

export default LucideIcon;
