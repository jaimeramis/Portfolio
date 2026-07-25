export interface Project {
  title: string
  type: string
  role: string
  stack: string
  live: string
  documentation: string
  image: string
  trigger: string
}

export interface Tech {
  title: string
  image: string
}

export interface Client {
  title: string
  image: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  alt: string
  url: string
  icon: string
}

export interface HeaderContent {
  brand: string
  menuAriaLabel: string
  navAriaLabel: string
}

export interface HeroContent {
  greetingLine1: string
  greetingName: string
  subtitle: string
  textLine1: string
  textPrefix: string
  textHighlight: string
}

export interface AboutContent {
  sectionTitle: string
  title: string
  text: string
  socialLinks: SocialLink[]
}

export interface ProjectsContent {
  sectionTitle: string
  sectionSubtitle: string
  btnLive: string
  btnDocumentation: string
}

export interface TechnologiesContent {
  sectionTitle: string
  sectionSubtitle: string
}

export interface ClientsContent {
  sectionTitle: string
  sectionSubtitle: string
}

export interface FooterContent {
  copyright: string
  navAriaLabel: string
}

export interface AppContent {
  skipLink: string
}

export interface Content {
  nav: NavItem[]
  app: AppContent
  header: HeaderContent
  hero: HeroContent
  about: AboutContent
  projects: ProjectsContent
  technologies: TechnologiesContent
  clients: ClientsContent
  footer: FooterContent
}
