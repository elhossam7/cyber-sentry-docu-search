import { CyberAttack } from "@/lib/data";
import CategoryBadge from "./CategoryBadge";

interface AttackCardProps {
  attack: CyberAttack;
}

const AttackCard = ({ attack }: AttackCardProps) => {
  return (
    <div className="p-6 rounded-lg bg-cyber-light border border-cyber-accent/20 hover:border-cyber-accent/40 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-cyber-accent">{attack.name}</h3>
        <CategoryBadge category={attack.category} />
      </div>
      <p className="mb-4 text-cyber-text/80">{attack.description}</p>
      <div className="space-y-2">
        <div>
          <h4 className="text-sm font-semibold text-cyber-accent mb-1">Impact</h4>
          <p className="text-sm text-cyber-text/70">{attack.impact}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-cyber-accent mb-1">Mitigation</h4>
          <p className="text-sm text-cyber-text/70">{attack.mitigation}</p>
        </div>
      </div>
    </div>
  );
};

export default AttackCard;