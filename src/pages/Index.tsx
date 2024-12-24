import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import AttackCard from "@/components/AttackCard";
import { cyberAttacks } from "@/lib/data";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAttacks = cyberAttacks.filter((attack) =>
    attack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attack.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attack.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attack.steps.some(step => step.toLowerCase().includes(searchQuery.toLowerCase())) ||
    attack.mitigation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyber-accent">
            Cyber Attack Database
          </h1>
          <p className="text-lg text-cyber-text/80 mb-8">
            Explore detailed documentation about various cyber security threats and attacks
          </p>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        <div className="grid gap-8 max-w-7xl mx-auto">
          {filteredAttacks.map((attack) => (
            <AttackCard key={attack.id} attack={attack} />
          ))}
        </div>
        
        {filteredAttacks.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-cyber-text/60">No attacks found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;