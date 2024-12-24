import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import AttackCard from "@/components/AttackCard";
import { cyberAttacks } from "@/lib/data";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const filteredAttacks = cyberAttacks.filter((attack) =>
    attack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attack.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attack.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attack.steps.some(step => step.toLowerCase().includes(searchQuery.toLowerCase())) ||
    attack.mitigation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.length > 0) {
      setHasSearched(true);
    }
  };

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-cyber-accent">
            Cyber Attack Database
          </h1>
          <p className="text-lg text-cyber-text/80 mb-8">
            Search and explore detailed documentation about various cyber security threats
          </p>
          <SearchBar value={searchQuery} onChange={handleSearch} />
        </div>
        
        {!hasSearched && searchQuery === "" ? (
          <div className="text-center mt-16">
            <p className="text-cyber-text/60 text-lg">
              Start typing to search for cyber attacks...
            </p>
          </div>
        ) : (
          <>
            {searchQuery && (
              <div className="text-center mb-8">
                <p className="text-cyber-text/80 text-lg">
                  Showing results for: <span className="text-cyber-accent font-semibold">"{searchQuery}"</span>
                </p>
              </div>
            )}
            
            {filteredAttacks.length > 0 ? (
              <div className="grid gap-8 max-w-7xl mx-auto">
                {filteredAttacks.map((attack) => (
                  <AttackCard key={attack.id} attack={attack} />
                ))}
              </div>
            ) : (
              <div className="text-center mt-12">
                <p className="text-cyber-text/60">No attacks found matching "{searchQuery}"</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Index;