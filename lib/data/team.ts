export interface TeamMember {
  id: string;
  name: string;
  nameEn?: string;
  role: 'PI' | 'postdoc' | 'phd' | 'master' | 'undergrad';
  title?: string;
  email?: string;
  photo?: string;
  bio?: string;
  homepage?: string;
  googleScholar?: string;
}

export const teamData: TeamMember[] = [
  {
    id: 'lai-junzuo',
    name: '赖俊祚',
    nameEn: 'Junzuo Lai',
    role: 'PI',
    title: '教授',
    email: 'laijunzuo@jnu.edu.cn',
    bio: '暨南大学网络空间安全学院教授，博士生导师。主要研究方向包括大模型安全、认知安全、后量子密码等。',
    homepage: 'https://faculty.jnu.edu.cn/wlkjaqxy/ljz4/list.psp',
  },
  {
    id: 'liu-yi',
    name: '刘逸',
    nameEn: 'Yi Liu',
    role: 'PI',
    title: '讲师',
    email: 'liuyi@jnu.edu.cn',
    bio: '暨南大学网络空间安全学院讲师，硕士生导师。研究方向集中在密码学中的安全多方计算，同时也涉及零知识证明、各类公钥密码学方案、定时密码学及区块链相关应用。',
    homepage: 'https://liuyi.pro/#/',
  },
  {
    id: 'zhang-wei',
    name: '张伟',
    nameEn: 'Wei Zhang',
    role: 'postdoc',
    title: '博士后',
    email: 'zhangwei_pd@jnu.edu.cn',
    bio: '研究方向为大模型安全与对抗样本生成，博士毕业于清华大学计算机系。',
  },
  {
    id: 'wang-xiaoming',
    name: '王小明',
    nameEn: 'Xiaoming Wang',
    role: 'postdoc',
    title: '博士后',
    email: 'wangxm_pd@jnu.edu.cn',
    bio: '研究方向为后量子密码与格密码，博士毕业于中国科学院大学。',
  },
  {
    id: 'li-jing',
    name: '李静',
    nameEn: 'Jing Li',
    role: 'phd',
    title: '博士研究生',
    email: 'lijing_phd@jnu.edu.cn',
    bio: '研究方向为认知安全与虚假信息检测，2022年入学。',
  },
  {
    id: 'chen-hao',
    name: '陈浩',
    nameEn: 'Hao Chen',
    role: 'phd',
    title: '博士研究生',
    email: 'chenhao_phd@jnu.edu.cn',
    bio: '研究方向为零知识证明与区块链隐私保护，2023年入学。',
  },
  {
    id: 'zhao-min',
    name: '赵敏',
    nameEn: 'Min Zhao',
    role: 'phd',
    title: '博士研究生',
    email: 'zhaomin_phd@jnu.edu.cn',
    bio: '研究方向为大模型安全评测与红蓝对抗，2023年入学。',
  },
  {
    id: 'liu-yang',
    name: '刘洋',
    nameEn: 'Yang Liu',
    role: 'phd',
    title: '博士研究生',
    email: 'liuyang_phd@jnu.edu.cn',
    bio: '研究方向为同态加密与安全多方计算，2024年入学。',
  },
];
