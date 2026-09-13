export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'preprint';
  doi?: string;
  pdf?: string;
  project?: string;
  code?: string;
  scholar?: string;
  thumbnail?: string;
  abstract?: string;
}

// 赖俊祚教授近年重要学术成果
// 注：由于网络限制，部分论文信息需要手动从谷歌学术或DBLP更新
export const publications: Publication[] = [
  {
    id: 'pub-2025-1',
    title: 'Highly Efficient Actively Secure Two-Party Computation with One-Bit Advantage Bound',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C'],
    venue: 'IACR ePrint',
    year: 2025,
    type: 'preprint',
    abstract: 'Focuses on secure two-party computation protocols that maintain input privacy while improving efficiency between actively secure and passively secure protocols.',
    doi: 'https://eprint.iacr.org/2025/614',
  },
  {
    id: 'pub-2025-2',
    title: 'Striking the Balance between Security and Efficiency',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C'],
    venue: 'IACR ePrint',
    year: 2025,
    type: 'preprint',
    abstract: 'Explores zero-knowledge protocols for proving possession of witnesses for NP-statements, with applications in secure computation and blockchain.',
    doi: 'https://eprint.iacr.org/2025/2146',
  },
  {
    id: 'pub-2024-1',
    title: 'Lattice-Based Timed Cryptography',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C', 'Collaborator D'],
    venue: 'IACR ePrint',
    year: 2024,
    type: 'preprint',
    abstract: 'Introduces a new sequentiality assumption for timed cryptography based on lattice techniques.',
    doi: 'https://eprint.iacr.org/2024/540',
  },
  {
    id: 'pub-2024-2',
    title: 'User-Friendly Privacy-Preserving Blockchain-based Data Trading',
    authors: ['J. Cao', 'J. Ye', 'Junzuo Lai'],
    venue: 'International Journal of Advanced Computer Science and Applications',
    year: 2024,
    type: 'journal',
    abstract: 'Proposes a user-friendly privacy-preserving framework for blockchain-based data trading.',
    doi: 'https://thesai.org/Publications/ViewPaper?Code=IJACSA&Issue=5&SerialNo=138&Volume=15',
  },
  {
    id: 'pub-2024-3',
    title: 'Linkable and Traceable Anonymous Authentication with Fine-Grained Access Control',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C'],
    venue: 'Frontiers of Computer Science',
    year: 2024,
    type: 'journal',
    abstract: 'Presents anonymous authentication supporting access control, anonymity, public linkability and public traceability.',
    scholar: 'https://techxplore.com/news/2024-04-linkable-traceable-anonymous-authentication-fine.html',
  },
  {
    id: 'pub-2023-1',
    title: 'Conditional Attribute-Based Proxy Re-Encryption',
    authors: ['Lisha Yao', 'Jian Weng', 'Yi Liu', 'Junzuo Lai'],
    venue: 'PKC 2022',
    year: 2023,
    type: 'conference',
    abstract: 'Introduces conditional attribute-based proxy re-encryption (CAB-PRE) scheme based on LWE assumption.',
    doi: 'https://doi.org/10.1007/978-3-032-08124-7_7',
  },
  {
    id: 'pub-2023-2',
    title: 'Asymmetric Group Message Franking',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C'],
    venue: 'IACR ePrint',
    year: 2023,
    type: 'preprint',
    abstract: 'Introduces the notion of asymmetric group message franking (AGMF) for group communication scenarios with cryptographic mechanisms for content moderation.',
    doi: 'https://eprint.iacr.org/2023/332',
  },
  {
    id: 'pub-2022-1',
    title: 'Anonymous Public Key Encryption under Corruptions',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C'],
    venue: 'IACR ePrint',
    year: 2022,
    type: 'preprint',
    abstract: 'Introduces ANON-RSO$_k&$C security and SIM-RSO$_k&$C security notions for PKE that capture anonymity and confidentiality under corruptions.',
    doi: 'https://eprint.iacr.org/2022/1176',
  },
  {
    id: 'pub-2022-2',
    title: 'Lattice Codes for Lattice-Based PKE',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C'],
    venue: 'IACR ePrint',
    year: 2022,
    type: 'preprint',
    abstract: 'Demonstrates how lattice coding can improve error correction performance in lattice-based public key encryption.',
    doi: 'https://eprint.iacr.org/2022/874',
  },
  {
    id: 'pub-2021-1',
    title: 'Making Any Attribute-Based Encryption Accountable, Efficiently',
    authors: ['Junzuo Lai', 'Collaborator A', 'Collaborator B', 'Collaborator C', 'Collaborator D'],
    venue: 'ESORICS 2018',
    year: 2021,
    type: 'conference',
    abstract: 'Proposes efficient mechanisms for making attribute-based encryption accountable.',
    doi: 'https://doi.org/10.1007/978-3-319-98989-1_26',
  },
];
