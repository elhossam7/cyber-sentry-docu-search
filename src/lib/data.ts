export interface CyberAttack {
  id: string;
  name: string;
  category: string;
  description: string;
  impact: string;
  mitigation: string;
}

export const cyberAttacks: CyberAttack[] = [
  {
    id: "1",
    name: "SQL Injection",
    category: "Web Attack",
    description: "A code injection technique used to attack data-driven applications by inserting malicious SQL statements into entry fields.",
    impact: "Data breach, unauthorized access, data manipulation",
    mitigation: "Use prepared statements, input validation, and proper error handling",
  },
  {
    id: "2",
    name: "Phishing",
    category: "Social Engineering",
    description: "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.",
    impact: "Credential theft, financial loss, identity theft",
    mitigation: "User education, email filtering, multi-factor authentication",
  },
  {
    id: "3",
    name: "Ransomware",
    category: "Malware",
    description: "Malicious software that encrypts files and demands payment for decryption.",
    impact: "Data loss, business disruption, financial damage",
    mitigation: "Regular backups, security patches, user training",
  },
];