export type Skill = { name: string; level?: number; detail: string };
export type Project = {
  title: string;
  description: string;
  url: string;
  technologies: string[];
  demo?: "tic-tac-toe";
  image?: { src: string; alt: string };
};
export const profile = {
  name: "Swaroop Bevinal",
  intro:
    "I'm an innovator and creator who turns ideas into things you can try.",
  quote: "I love a conversation that sends me home with something I want to build.",
  bio: "I'm an omnivert who enjoys meeting new people and getting lost in a good project. Outside of coding, I'm usually watching anime or listening to music.",
  email: "swaroopbevinal@gmail.com",
  github: "https://github.com/derpbutpro",
  linkedin: "https://www.linkedin.com/in/swaroop-bevinal-07646724a",
  instagram: "https://www.instagram.com/s.4.s_n_t/",
  spotify:
    "https://open.spotify.com/user/31wuldc7f2yry2gnwjcwu53srxkm?si=1872fe30421b491a",
  phone: "+919482138416",
};
export const contacts = [
  { label: "Email", detail: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", detail: "@derpbutpro", href: profile.github },
  { label: "LinkedIn", detail: profile.name, href: profile.linkedin },
  { label: "Instagram", detail: "@s.4.s_n_t", href: profile.instagram },
  { label: "Spotify", detail: new URL(profile.spotify).pathname.split("/").pop(), href: profile.spotify },
  { label: "Phone", detail: "+91 94821 38416", href: `tel:${profile.phone}` },
];

export const skills: Skill[] = [
  { name: "HTML", level: 20, detail: "HTML gives a page its structure, from headings and links to forms and buttons." },
  { name: "CSS", level: 30, detail: "CSS controls a page’s layout, typography and color, and adapts the design to different screens." },
  { name: "JavaScript", level: 30, detail: "JavaScript makes pages interactive. In Tic-Tac-Toe, it tracks turns and checks the board for a winner." },
  { name: "Python", level: 45, detail: "Python is a programming language for writing scripts, automating tasks and working with data." },
  { name: "C", level: 40, detail: "C gives programmers direct control over memory and how data is represented." },
  { name: "Antigravity", detail: "Google Antigravity is a development environment for working with AI coding agents." },
  { name: "ChatGPT", detail: "OpenAI’s conversational assistant can explain concepts, explore ideas and help reason through code." },
  { name: "Claude", detail: "Anthropic’s AI assistant can analyze text, discuss code and help break down complex tasks." },
];
export const projects: Project[] = [
  {
    title: "Student Support System",
    image: {
      src: "/images/student-support.webp",
      alt: "Two students working together on a laptop in a library",
    },
    description: "A project exploring how software can support students.",
    url: "https://github.com/derpbutpro/student-support",
    technologies: [],
  },
  {
    title: "Tic-Tac-Toe",
    demo: "tic-tac-toe",
    image: {
      src: "/images/tic-tac-toe.webp",
      alt: "Wooden tic-tac-toe board with X and O pieces",
    },
    description:
      "Take turns placing Xs and Os on a three-by-three board. Complete a row, column, or diagonal to win, then reset for another round.",
    url: "https://github.com/derpbutpro/Tic-tac-toe",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
export const pages = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "About", href: "/about", icon: "◉" },
  { label: "Hobbies", href: "/hobbies", icon: "✦" },
  { label: "Skills", href: "/skills", icon: "✳" },
  { label: "Projects", href: "/projects", icon: "▦" },
  { label: "Contact", href: "/contact", icon: "✉" },
];

export const films = [
  { name: "One Piece", slug: "one-piece" },
  { name: "Naruto", slug: "naruto" },
];
export const track = {
  title: "PSL – Slowed",
  artist: "2KE",
  spotifyId: "5bpwGBZi2wquJ8UHwfKev2",
};
