// بيانات ما تنترجم (أسماء شركات، مشاريع، تقنيات، روابط). النصوص المترجمة في src/locales

export const photo = null // مثال: '/profile.jpg' (حطي الصورة داخل مجلد public)

export const links = {
  email: 'sheariyasara@gmail.com',
  linkedin: 'https://linkedin.com/in/sara-sheariya-623b39221',
  github: 'https://github.com/sarasheariya',
}

// الترتيب هنا لازم يطابق ترتيب items في ملفات locales
export const experience = [
  { company: 'SeedLab' },
  { company: 'STC' },
  { company: 'Ithraa Alkhair', extra: true },
]

export const projects = [
  {
    name: 'Ryflows',
    tech: ['Team Leadership', 'Project Management', 'React.js', 'Git'],
    live: null,
    repo: null
  },
  {
    name: 'CXM',
    tech: ['React.js', 'TypeScript', 'Django', 'REST APIs', 'Docker'],
    live: null,
    repo: null
  },
]

export const courses = [
  ['Advanced Web Attacks', 'cyberhub'],
  ['Network Support and Security', 'CISCO Networking Academy'],
  ['Networking Basics', 'CISCO Networking Academy'],
  ['Introduction to Cybersecurity', 'CISCO Networking Academy'],
  ['Learn ethical hacking from scratch', 'Udemy'],
  ['Cyber security bootcamp', 'Google Developer Student Club'],
]

export const skills = {
  frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Django', 'REST APIs', 'Python', 'Java', 'Dart', 'PHP', 'MySQL', 'Microsoft Access'],
  tools: ['Git', 'GitLab', 'Docker', 'Linux', 'Figma'],
}

export const langs = [['ar', 10], ['en', 9], ['tr', 5]] // المستوى من 10
