import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function NavBar(){
    
    return(
        <header>
    <nav className="container">
        <div className="ltmovie-nav-content">
            <h1>LiteMovie</h1>
            <a href="https://www.skydev.digital/" target="_blank" rel="noreferrer">
                <div className="ltmovie-contact-container">
                    <GithubIcon />
                    <p className="ltmovie-contact-link">/litemovie</p>
                </div>
            </a>
        </div>
    </nav>
</header>
    );
}

export default NavBar;
