
import "./App.css";
import aboutImage from "./assets/about-image.png";

function App() {
  const telefone = "5582996159197";
  const telefoneExibicao = "(82) 99615-9197";
  const email = "kellyanemachado15@gmail.com";

  const projetos = [
    {
      nome: "Dust",
      categoria: "UI/UX Design",
      descricao:
        "Um museu virtual do inusitado, criado para transformar objetos considerados inúteis em histórias, memórias e experiências.",
      imagem: "/projetos/ex1.png",
    },
    {
      nome: "Piggy",
      categoria: "UI/UX Design",
      descricao:
        "Um aplicativo de educação financeira infantil que incentiva crianças a economizar através de tarefas, estrelas e moedas.",
      imagem: "/projetos/ex2.png",
    },
  ];

  const habilidades = [
    {
      numero: "01",
      titulo: "UI Design",
      descricao:
        "Criação de interfaces modernas, organizadas e visualmente atrativas.",
    },
    {
      numero: "02",
      titulo: "UX Design",
      descricao:
        "Criação de experiências digitais simples e intuitivas.",
    },
    {
      numero: "03",
      titulo: "Figma",
      descricao:
        "Wireframes, protótipos, componentes e criação de interfaces.",
    },
    {
      numero: "04",
      titulo: "React",
      descricao:
        "Desenvolvimento web em aprendizado com React e JavaScript.",
    },
  ];

  return (
    <div className="portfolio">
      {/* NAVEGAÇÃO */}
      <header className="navbar">
        <a href="#inicio" className="logo" aria-label="Início">
          K<span>.</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="nav-button">
          Vamos conversar
        </a>
      </header>

      <main>
        {/* INÍCIO */}
        <section className="hero" id="inicio">
          <div className="hero-text">
            <p className="small-title">
              OLÁ, EU SOU KELLYANE 👋
            </p>

            <h1>
              Designer em
              <span> formação.</span>
            </h1>

            <p className="hero-description">
              Crio interfaces digitais modernas, intuitivas e
              visualmente atrativas, transformando ideias em
              experiências digitais com identidade.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="primary-button">
                Ver meus projetos →
              </a>

              <a href="#sobre" className="secondary-button">
                Sobre mim
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="UI e UX Design">
            <div className="hero-circle"></div>

            <div className="hero-content">
              <span>UI/UX</span>
              <strong>DESIGN</strong>
              <p>criatividade + tecnologia</p>
            </div>
          </div>
        </section>

        {/* SOBRE MIM */}
        <section className="section about" id="sobre">
          <div className="section-title">
            <p>01 — SOBRE</p>
            <h2>Quem sou eu?</h2>
          </div>

          <div className="about-content">
            <div className="about-image">
              <img
                src={aboutImage}
                alt="Foto profissional de Kellyane"
              />
            </div>

            <div className="about-text">
              <h3>
                Criatividade que se transforma em{" "}
                <span>experiências digitais.</span>
              </h3>

              <p>
                Sou uma designer em formação, apaixonada por UI
                Design e pela criação de experiências digitais.
              </p>

              <p>
                Gosto de transformar ideias em interfaces
                organizadas, funcionais e visualmente atrativas,
                buscando unir criatividade, estética e tecnologia.
              </p>

              <p>
                Atualmente também estou aprendendo desenvolvimento
                web com JavaScript e React.
              </p>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section projects" id="projetos">
          <div className="section-title">
            <p>02 — PROJETOS</p>
            <h2>Projetos selecionados</h2>
          </div>

          <div className="projects-grid">
            {projetos.map((projeto, index) => (
              <article
                className="project-card"
                key={projeto.nome}
              >
                <div className="project-image">
                  <img
                    src={projeto.imagem}
                    alt={`Imagem do projeto ${projeto.nome}`}
                    loading="lazy"
                  />

                  <span className="project-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-info">
                  <p className="project-category">
                    {projeto.categoria}
                  </p>

                  <h3>{projeto.nome}</h3>

                  <span className="project-line"></span>

                  <p className="project-description">
                    {projeto.descricao}
                  </p>

                  <a
                    className="project-button"
                    href={projeto.imagem}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver imagem do projeto →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HABILIDADES */}
        <section className="section skills" id="habilidades">
          <div className="section-title">
            <p>03 — HABILIDADES</p>
            <h2>O que eu faço</h2>
          </div>

          <div className="skills-grid">
            {habilidades.map((habilidade) => (
              <article
                className="skill-card"
                key={habilidade.numero}
              >
                <span>{habilidade.numero}</span>
                <h3>{habilidade.titulo}</h3>
                <p>{habilidade.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section className="contact" id="contato">
          <div className="contact-content">
            <div>
              <p className="contact-number">
                04 — CONTATO
              </p>

              <h2>
                Vamos criar algo
                <span> juntos?</span>
              </h2>
            </div>

            <div className="contact-right">
              <p className="contact-description">
                Estou aberta a novas oportunidades, projetos e
                experiências. Entre em contato comigo!
              </p>

              <a
                href={`https://wa.me/${telefone}`}
                className="contact-button"
                target="_blank"
                rel="noreferrer"
              >
                Conversar pelo WhatsApp →
              </a>
            </div>
          </div>

          {/* TELEFONE E E-MAIL */}
          <div className="contact-details">
            <a href={`tel:+${telefone}`}>
              <span className="contact-icon" aria-hidden="true">
                ☎
              </span>

              <span className="contact-label">
                Telefone
              </span>

              <strong>{telefoneExibicao}</strong>
            </a>

            <a href={`mailto:${email}`}>
              <span className="contact-icon" aria-hidden="true">
                ✉
              </span>

              <span className="contact-label">
                E-mail
              </span>

              <strong>{email}</strong>
            </a>
          </div>

          {/* LINKS DE CONTATO */}
          <div className="social-links">
            <a href={`mailto:${email}`}>
              Enviar e-mail ↗
            </a>

            <a
              href={`https://wa.me/${telefone}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer>
        <div className="footer-left">
          <a href="#inicio" className="footer-logo">
            K<span>.</span>
          </a>

          <p>
            © 2026 Kellyane. Todos os direitos reservados.
          </p>
        </div>

        <div className="footer-links">
          <a href="#inicio">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </footer>
    </div>
  );
}

export default App;