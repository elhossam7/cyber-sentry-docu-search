import { CyberAttack } from "@/lib/data";
import CategoryBadge from "./CategoryBadge";
import { Progress } from "@/components/ui/progress";

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
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <p className="mb-4 text-cyber-text/80">{attack.description}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-cyber-accent mb-2">Attack Steps</h4>
            <ol className="list-decimal list-inside space-y-2">
              {attack.steps.map((step, index) => (
                <li key={index} className="text-sm text-cyber-text/70">{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-cyber-accent mb-2">Impact Analysis</h4>
            {attack.statistics.map((stat, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-cyber-text/70">{stat.label}</span>
                  <span className="text-cyber-accent">{stat.value}%</span>
                </div>
                <Progress value={stat.value} className="h-1 bg-cyber-accent/10" />
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyber-accent mb-2">Mitigation Strategies</h4>
            <p className="text-sm text-cyber-text/70">{attack.mitigation}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <img 
          src={`https://images.unsplash.com/${attack.diagram}?auto=format&fit=crop&w=800`}
          alt={`${attack.name} diagram`}
          className="w-full h-48 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
  );
};

export default AttackCard;