import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyber-accent" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search cyber attacks..."
        className="pl-10 bg-cyber-light border-cyber-accent/20 text-cyber-text placeholder:text-cyber-text/50 focus:border-cyber-accent/50"
      />
    </div>
  );
};

export default SearchBar;