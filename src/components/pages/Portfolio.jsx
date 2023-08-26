export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section id="work" className="container">
            {/* <h2>Work</h2> */}
            <section className="tiles">
                <article className="projects" id="plutus">
                    <a href="https://cryptic-coast-09384-0756af69f6b6.herokuapp.com/" target="_blank">
                        <img src="./images/plutus.jpg" alt="plutus"/></a>
                        <span className="project-title">
                            <h4>Plutus - Personal Finance App</h4>
                        </span>
                </article>
                <article className="projects" id="gamebox">
                <a href="https://shbunch.github.io/GameBox/" target="_blank">
                        <img src="./images/gamebox.avif" alt="gamebox"/></a>
                        <span className="project-title">
                            <h4>Gamebox</h4>
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
