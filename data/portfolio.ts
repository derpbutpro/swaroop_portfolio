export type Skill = { name: string; level: number; detail?: string };
export type Project = { title: string; description: string; url: string; technologies: string[]; image?: string };
export const profile = {
  name: 'Swaroop Bevinal',
  intro: "I'm an innovator and creator who turns ideas into things you can try.",
  bio: "I'm an omnivert who enjoys meeting new people and getting lost in a good project. Outside of coding, I'm usually watching anime or listening to music.",
  email: 'swaroopbevinal@gmail.com',
  github: 'https://github.com/derpbutpro',
  linkedin: 'https://www.linkedin.com/in/swaroop-bevinal-07646724a',
  instagram: 'https://www.instagram.com/s.4.s_n_t/',
  spotify: 'https://open.spotify.com/user/31wuldc7f2yry2gnwjcwu53srxkm?si=1872fe30421b491a',
  phone: '+919482138416',
};
export const skills: Skill[] = [
  { name: 'HTML', level: 20 }, { name: 'CSS', level: 30 },
  { name: 'JavaScript', level: 30 }, { name: 'Python', level: 45 },
  { name: 'C', level: 40 },
];
export const projects: Project[] = [
  { title: 'Student Support System', description: 'A project focused on student support. Explore its repository for the current implementation and details.', url: 'https://github.com/derpbutpro/student-support', technologies: [] },
  { title: 'Tic-Tac-Toe', description: 'A take on the familiar Tic-Tac-Toe game. Explore the repository for the current implementation and details.', url: 'https://github.com/derpbutpro/Tic-tac-toe_', technologies: [] },
];
export const pages = [
  { label: 'Home', href: '/', icon: '⌂' }, { label: 'About', href: '/about', icon: '◉' },
  { label: 'Hobbies', href: '/hobbies', icon: '✦' }, { label: 'Skills', href: '/skills', icon: '✳' },
  { label: 'Projects', href: '/projects', icon: '▦' }, { label: 'Contact', href: '/contact', icon: '✉' },
];
