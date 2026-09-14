import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Download, Github, Linkedin, Mail, Menu, MapPin, Phone, Terminal, X } from "lucide-react";

const profile = {
  name: "Henrique Eduardo",
  role: "Analista de TI",
  subtitle: "Suporte N2 · Operações · Automação",
  city: "São José dos Pinhais, PR",
  email: "henrique.eduardo04@gmail.com",
  phone: "Disponível para contato",
  linkedin: "https://www.linkedin.com/in/henriqueduardo04/",
  github: "https://github.com/Henriquedu",
};

const skills = [
  ["Python", 90], ["PowerShell", 85], ["SQL", 82], ["ITIL / ITSM", 88], ["Infraestrutura", 80], ["Power BI", 78],
];

const experience = [
  { period: "Experiência recente", role: "Analista de Suporte Técnico / Operações", company: "Tecnologia da Informação", text: "Sustentação de serviços corporativos, atendimento N2, diagnóstico avançado de hardware e software, suporte de infraestrutura e aplicação de boas práticas ITIL." },
  { period: "Formação prática", role: "Projetos de Automação e Dados", company: "Projetos independentes", text: "Desenvolvimento de scripts em Python, PowerShell e SQL para reduzir tarefas repetitivas, estruturar diagnósticos e criar visibilidade sobre indicadores operacionais." },
];

const education = [
  { period: "Graduação", title: "Tecnologia da Informação", school: "PUCPR", text: "Formação orientada a infraestrutura, desenvolvimento, arquitetura de dados e governança de tecnologia." },
  { period: "Estudos contínuos", title: "ITIL, Cloud e Automação", school: "Cursos e prática aplicada", text: "Aperfeiçoamento contínuo em gestão de serviços, Azure, scripting, análise de dados e desenvolvimento web." },
];

const projects = [
  { category: "Automação", title: "Diagnóstico de rede & coleta de logs", text: "Rotina para validar conectividade, medir latência e coletar evidências técnicas antes da escalada de incidentes.", tech: "Python · PowerShell" },
  { category: "Dados", title: "Painel de gestão de incidentes", text: "Dashboard operacional para acompanhar SLA, MTTR, FCR e recorrência de chamados em uma visão única.", tech: "Power BI · SQL" },
  { category: "Documentação", title: "Base de conhecimento operacional", text: "Procedimentos técnicos, scripts utilitários e rotinas de suporte para reduzir dependência de conhecimento tácito.", tech: "Markdown · Git" },
];

const resumeUrl = `${import.meta.env.BASE_URL}curriculo-henrique-eduardo.pdf`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const filters = ["Todos", "Automação", "Dados", "Documentação"];
  const visibleProjects = filter === "Todos" ? projects : projects.filter((project) => project.category === filter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <aside className={menuOpen ? "sidebar open" : "sidebar"}>
        <button className="mobile-close" onClick={closeMenu} aria-label="Fechar menu"><X size={20} /></button>
        <a href="#inicio" className="profile-card" onClick={closeMenu}>
          <div className="avatar">HE</div><strong>{profile.name}</strong><span>{profile.role}</span>
        </a>
        <nav className="side-nav">{[["inicio", "Início"], ["sobre", "Sobre"], ["habilidades", "Habilidades"], ["experiencia", "Experiência"], ["ensino", "Ensino"], ["portfolio", "Portfólio"], ["contato", "Contato"]].map(([id, label]) => <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}</nav>
        <div className="sidebar-footer"><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href={`mailto:${profile.email}`} aria-label="E-mail"><Mail size={16} /></a></div><small>© 2026 Henrique Eduardo</small></div>
      </aside>
      {menuOpen && <button className="mobile-overlay" onClick={closeMenu} aria-label="Fechar menu" />}
      <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu size={21} /></button>

      <div className="content">
        <section className="intro section-anchor" id="inicio"><div className="intro-inner"><span className="overline"><span className="green-dot" /> disponível para novos desafios</span><h1>Olá! Eu sou<br /><span>Henrique Eduardo.</span></h1><h2>Analista de TI · São José dos Pinhais, PR</h2><p>Transformo incidentes em sistemas melhores. Atuo com suporte N2, operações, infraestrutura e automação para entregar estabilidade, clareza e valor ao negócio.</p><a className="primary-button" href="#contato">Entre em contato <ArrowUpRight size={16} /></a></div><div className="intro-code"><Terminal size={15} /><span>profile_status</span><strong>online</strong><code>focus: [ support_n2,<br />&nbsp;&nbsp;automation, infrastructure ]</code></div></section>

        <section className="section section-anchor" id="sobre"><div className="section-label">01 / minha história</div><div className="two-column"><div><h2>Resolver bem é<br /><span>entender primeiro.</span></h2><div className="accent-line" /></div><div className="body-copy"><p>Meu trabalho começa onde o problema aparece e termina quando a solução fica melhor do que estava antes.</p><p>Atuo na interseção entre pessoas, processos e tecnologia: investigo a causa raiz, crio automações para eliminar o trabalho repetitivo e documento o conhecimento para que o time evolua junto.</p></div></div><div className="info-grid"><div><span>Nome</span><strong>{profile.name}</strong></div><div><span>Atuação</span><strong>{profile.subtitle}</strong></div><div><span>Localização</span><strong>{profile.city}</strong></div><div><span>Contato</span><strong>{profile.phone}</strong></div></div></section>

        <section className="section soft section-anchor" id="habilidades"><div className="section-label">02 / habilidades</div><div className="two-column heading-row"><h2>O que venho<br /><span>construindo.</span></h2><p className="section-description">Ferramentas e práticas aplicadas para diagnosticar, automatizar e dar visibilidade.</p></div><div className="skills-list">{skills.map(([name, level]) => <div className="skill-row" key={name}><div className="skill-name"><span>{name}</span><b>{level}%</b></div><div className="progress"><i style={{ width: `${level}%` }} /></div></div>)}</div></section>

        <section className="section section-anchor" id="experiencia"><div className="section-label">03 / experiência</div><div className="two-column heading-row"><h2>Experiência<br /><span>em ação.</span></h2><p className="section-description">Lugares onde pude contribuir com conhecimento técnico e pensamento analítico.</p></div><div className="entries">{experience.map((item) => <article className="entry" key={item.role}><div className="entry-period">{item.period}</div><div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p></div><CheckCircle2 className="entry-check" size={18} /></article>)}</div></section>

        <section className="section soft section-anchor" id="ensino"><div className="section-label">04 / ensino</div><div className="two-column heading-row"><h2>Aprendizado<br /><span>contínuo.</span></h2><p className="section-description">Qualificações e estudos que sustentam minha prática profissional.</p></div><div className="entries">{education.map((item) => <article className="entry" key={item.title}><div className="entry-period">{item.period}</div><div><h3>{item.title}</h3><h4>{item.school}</h4><p>{item.text}</p></div></article>)}</div></section>

        <section className="section section-anchor" id="portfolio"><div className="section-label">05 / portfólio</div><div className="two-column heading-row"><h2>Projetos que<br /><span>geram impacto.</span></h2><div className="filter-tabs">{filters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div></div><div className="project-grid">{visibleProjects.map((project) => <article className="project" key={project.title}><div className="project-icon">{project.category === "Automação" ? "01" : project.category === "Dados" ? "02" : "03"}</div><span>{project.category}</span><h3>{project.title}</h3><p>{project.text}</p><b>{project.tech}</b><a href={profile.github} target="_blank" rel="noreferrer">Ver projeto <ArrowUpRight size={14} /></a></article>)}</div></section>

        <section className="contact section-anchor" id="contato"><div className="section-label">06 / contato</div><h2>Vamos construir<br /><span>algo melhor.</span></h2><p>Tem um desafio de suporte, operação ou automação? Estou aberto para conversar.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div><a className="download-link" href={resumeUrl} download><Download size={15} /> baixar currículo em PDF</a></section>
        <footer className="footer">Henrique Eduardo · Analista de TI <span>feito com método e código limpo</span></footer>
      </div>
    </div>
  );
}

export default App;
