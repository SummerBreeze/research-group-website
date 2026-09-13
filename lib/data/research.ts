export interface ResearchArea {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  keywords: {
    zh: string[];
    en: string[];
  };
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'llm-security',
    title: {
      zh: '大模型与智能体安全',
      en: 'LLM and Agent Security',
    },
    description: {
      zh: '研究大模型越狱与提示注入、投毒与后门、幻觉与安全对齐、安全评测、多模态与智能体安全等关键问题。',
      en: 'Research on LLM jailbreaking and prompt injection, poisoning and backdoors, hallucination and safety alignment, security evaluation, multimodal and agent security.',
    },
    keywords: {
      zh: ['越狱攻击', '提示注入', '后门攻击', '安全对齐', '多模态安全'],
      en: ['Jailbreak Attack', 'Prompt Injection', 'Backdoor Attack', 'Safety Alignment', 'Multimodal Security'],
    },
  },
  {
    id: 'cognitive-security',
    title: {
      zh: '认知安全',
      en: 'Cognitive Security',
    },
    description: {
      zh: '聚焦虚假信息与深度伪造检测、内容真实性与溯源、社交媒体信息操纵、大模型驱动的认知安全攻防等前沿课题。',
      en: 'Focus on misinformation and deepfake detection, content authenticity and traceability, social media information manipulation, and LLM-driven cognitive security attacks and defenses.',
    },
    keywords: {
      zh: ['虚假信息检测', '深度伪造', '内容溯源', '信息操纵'],
      en: ['Misinformation Detection', 'Deepfake', 'Content Traceability', 'Information Manipulation'],
    },
  },
  {
    id: 'post-quantum',
    title: {
      zh: '后量子密码',
      en: 'Post-Quantum Cryptography',
    },
    description: {
      zh: '开展各类后量子公钥密码与数字签名、后量子密码协议及其安全分析与高效实现等方面的研究工作。',
      en: 'Research on various post-quantum public-key cryptography and digital signatures, post-quantum cryptographic protocols, their security analysis and efficient implementation.',
    },
    keywords: {
      zh: ['格密码', '后量子签名', '密码协议', '安全分析'],
      en: ['Lattice Cryptography', 'Post-Quantum Signature', 'Cryptographic Protocol', 'Security Analysis'],
    },
  },
];
