import { Github, Linkedin, Mail, Phone, Code2, Trophy } from "lucide-react";

export const socialLinks = {
  github: "https://github.com/manveerkaur302006-spec",
  githubUsername: "manveerkaur302006-spec",
  linkedin: "https://linkedin.com",
  linkedinUsername: "manveerkaur302006",
  codeforces: "https://codeforces.com/profile/Manveer_Kaur",
  codeforcesHandle: "Manveer_Kaur",
  codechef: "https://www.codechef.com/users/manveer_kaur",
  codechefHandle: "manveer_kaur",
  email: "manveerkaur30052006@gmail.com",
  phone: "+91-9915675487",
};

export const socialIconList = [
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { label: "Codeforces", href: socialLinks.codeforces, icon: Code2 },
  { label: "CodeChef", href: socialLinks.codechef, icon: Trophy },
  { label: "Email", href: `mailto:${socialLinks.email}`, icon: Mail },
  { label: "Phone", href: `tel:${socialLinks.phone}`, icon: Phone },
];
