export interface CyberAttack {
  id: string;
  name: string;
  category: string;
  description: string;
  impact: string;
  mitigation: string;
  diagram: string;
  steps: string[];
  statistics: {
    label: string;
    value: number;
  }[];
}

export const cyberAttacks: CyberAttack[] = [
  {
    id: "1",
    name: "SQL Injection",
    category: "Web Attack",
    description: "A code injection technique used to attack data-driven applications by inserting malicious SQL statements into entry fields. Attackers can manipulate database queries to access, modify, or delete data.",
    impact: "Data breach, unauthorized access, data manipulation, potential system compromise",
    mitigation: "Use prepared statements, input validation, proper error handling, and implement WAF (Web Application Firewall)",
    diagram: "photo-1518770660439-4636190af475",
    steps: [
      "Attacker identifies vulnerable input field",
      "Malicious SQL code is injected",
      "Database executes malicious query",
      "Sensitive data is exposed"
    ],
    statistics: [
      { label: "Frequency", value: 65 },
      { label: "Success Rate", value: 30 },
      { label: "Average Cost", value: 80 }
    ]
  },
  {
    id: "2",
    name: "Phishing",
    category: "Social Engineering",
    description: "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity. Attackers often use email or malicious websites to steal credentials or financial information.",
    impact: "Credential theft, financial loss, identity theft, malware infection",
    mitigation: "User education, email filtering, multi-factor authentication, anti-phishing tools",
    diagram: "photo-1487058792275-0ad4aaf24ca7",
    steps: [
      "Attacker creates fake email/website",
      "Mass distribution of phishing content",
      "User receives and interacts with content",
      "Credentials/data are compromised"
    ],
    statistics: [
      { label: "Frequency", value: 85 },
      { label: "Success Rate", value: 45 },
      { label: "Average Cost", value: 70 }
    ]
  },
  {
    id: "3",
    name: "Ransomware",
    category: "Malware",
    description: "Malicious software that encrypts files and demands payment for decryption. Modern ransomware often threatens to leak sensitive data if payment isn't made.",
    impact: "Data loss, business disruption, financial damage, reputation harm",
    mitigation: "Regular backups, security patches, user training, endpoint protection",
    diagram: "photo-1526374965328-7f61d4dc18c5",
    steps: [
      "Initial system compromise",
      "Malware spreads through network",
      "Files are encrypted",
      "Ransom demand is made"
    ],
    statistics: [
      { label: "Frequency", value: 75 },
      { label: "Success Rate", value: 55 },
      { label: "Average Cost", value: 95 }
    ]
  },
  {
    id: "4",
    name: "DDoS Attack",
    category: "Network Attack",
    description: "Distributed Denial of Service attacks overwhelm systems with traffic from multiple sources, making services unavailable to legitimate users.",
    impact: "Service disruption, revenue loss, reputation damage",
    mitigation: "DDoS protection services, traffic filtering, network redundancy",
    diagram: "photo-1485827404703-89b55fcc595e",
    steps: [
      "Botnet coordination",
      "Traffic flood initiation",
      "Network/service overwhelm",
      "System becomes unavailable"
    ],
    statistics: [
      { label: "Frequency", value: 70 },
      { label: "Success Rate", value: 40 },
      { label: "Average Cost", value: 85 }
    ]
  },
  {
    id: "5",
    name: "NMAP Network Scanning",
    category: "Reconnaissance",
    description: "NMAP (Network Mapper) is a powerful network scanning tool used to discover hosts and services on computer networks. While legitimate for network administration, it's often used by attackers for network discovery and security auditing.",
    impact: "Network mapping, port scanning, service enumeration, vulnerability assessment",
    mitigation: "Implement firewalls, IDS/IPS systems, restrict unnecessary open ports, and monitor for suspicious scanning activity",
    diagram: "photo-1558494949-ef010cbdcc31",
    steps: [
      "Initial network range identification",
      "Host discovery scan execution",
      "Port scanning and service detection",
      "Operating system fingerprinting",
      "Vulnerability identification"
    ],
    statistics: [
      { label: "Detection Rate", value: 75 },
      { label: "Prevention Success", value: 65 },
      { label: "Network Impact", value: 40 }
    ]
  },
  {
    id: "6",
    name: "Man-in-the-Middle (MITM)",
    category: "Network Attack",
    description: "A Man-in-the-Middle attack occurs when an attacker secretly intercepts and relays messages between two parties who believe they are directly communicating with each other. This allows the attacker to eavesdrop and potentially modify the communication.",
    impact: "Data theft, communication interception, credential stealing, session hijacking",
    mitigation: "Use strong encryption (HTTPS, SSL/TLS), certificate pinning, VPNs, and secure authentication protocols",
    diagram: "photo-1563089145-599997674d42",
    steps: [
      "Network traffic interception setup",
      "ARP spoofing or DNS poisoning",
      "SSL/TLS certificate spoofing",
      "Traffic monitoring and data capture",
      "Optional: Active traffic manipulation"
    ],
    statistics: [
      { label: "Success Rate", value: 55 },
      { label: "Data Exposure Risk", value: 85 },
      { label: "Detection Difficulty", value: 70 }
    ]
  }
];
