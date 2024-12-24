import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20",
        className
      )}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;