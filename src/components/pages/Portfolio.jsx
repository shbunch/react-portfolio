export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <section id="work" className="container">
                {/* <h2>Work</h2> */}
                <section className="tiles">
                    <article className="projects" id="plutus">
                        <a href="https://cryptic-coast-09384-0756af69f6b6.herokuapp.com/" target="_blank">
                            <img src="./images/plutus.jpg" alt="plutus" /></a>
                        <span className="project-title">
                            <h4>Plutus - Personal Finance App</h4>
                        </span>
                    </article>
                    <article className="projects" id="gamebox">
                        <a href="https://shbunch.github.io/GameBox/" target="_blank">
                            <img src="./images/gamebox.avif" alt="gamebox" /></a>
                        <span className="project-title">
                            <h4>Gamebox - Game Search Catalog</h4>
                        </span>
                    </article>
                    <article className="projects" id="passwordgenerator">
                        <a href="https://shbunch.github.io/password-generator/" target="_blank">
                            <img src="./images/password.avif" alt="passwordgenerator" /></a>
                        <span className="project-title">
                            <h4>Password Generator</h4>
                        </span>
                    </article>
                    <article className="projects" id="notetaker">
                        <a href="https://note-taker-sb-49a4f5ea30c6.herokuapp.com/" target="_blank">
                            <img src="./images/notebook.avif" alt="note taker" /></a>
                        <span className="project-title">
                            <h4>Note Taker</h4>
                        </span>
                    </article>
                    <article className="projects" id="employeetracker">
                        <a href="https://github.com/shbunch/employee-tracker" target="_blank">
                            <img src="./images/employees.avif" alt="employee" /></a>
                        <span className="project-title">
                            <h4>Employee Tracker</h4>
                        </span>
                    </article >
                </section >
            </section >
        </div >
    );
}
