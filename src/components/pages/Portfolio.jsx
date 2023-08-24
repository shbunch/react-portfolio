export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <section id="work" className="container">
            <h2>Work</h2>
            <section className="tiles">
                <article className="projects" id="horiseon">
                    <a href="https://github.com/shbunch/horiseon-accessibility-refactor" target="_blank">
                        <img src="./images/horiseon.png" alt="horiseon accessibility refactor"/></a>
                        <span className="project-title">
                            <h4>Horiseon Accessibility Refactor</h4>
                        </span>
                </article>
                <article className="projects" id="ledwall">
                <a href="https://github.com/shbunch/horiseon-accessibility-refactor" target="_blank">
                        <img src="./images/ledwall.avif" alt="LED wall"/></a>
                        <span className="project-title">
                            <h4>LED Wall</h4>
                        </span>
                </article>
                <article className="projects" id="calculator">
                <a href="https://github.com/shbunch/horiseon-accessibility-refactor" target="_blank">
                        <img src="./images/calculator.avif" alt="calculator"/></a>
                        <span className="project-title">
                            <h4>Calculator</h4>
                        </span>
                </article>
                <article className="projects" id="pastelpuzzles">
                <a href="https://github.com/shbunch/horiseon-accessibility-refactor" target="_blank">
                        <img src="./images/puzzle.avif" alt="pastel puzzles"/></a>
                        <span className="project-title">
                            <h4>Pastel Puzzles</h4>
                        </span>
                </article>
                <article className="projects" id="runbuddy">
                <a href="https://github.com/shbunch/horiseon-accessibility-refactor" target="_blank">
                        <img src="./images/runbuddy.avif" alt="run buddy"/></a>
                        <span className="project-title">
                            <h4>Run Buddy</h4>
                        </span>
                </article >
            </section >
        </section >
    </div >
  );
}
