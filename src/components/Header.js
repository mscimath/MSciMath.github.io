import logo from '../img/MSlogoXSDF.png';

export default function Header(){
    return (
        <header className="main-header" id ="main-header">
            <div className="top-header" id="top-header">
                <div className="logo">
                    <a href="/home"><img src={logo} alt="home"/></a>
                </div>
                <div className='menu nav_list'>
                    <div className='menu-item smooth-link'>
                        <a href="#subjects">Subjects</a>
                        <table className="nav_list_drop" id="subjects-drop">
                            <tbody>
                            <tr><th rowSpan="2">Physics</th><td><a href="/physics">School Physics</a></td></tr>
                            <tr><td><a href="/relativity">Relativity</a></td></tr>
                            <tr><th>Mathematics</th><td><a href="/mathematics">School Mathematics</a></td> </tr>
                            <tr><th rowSpan="3">Computer Science & Programming</th><td><a href="/javascript">JavaScript</a></td></tr>
                            <tr><td><a href="/python">Python</a></td></tr>
                            <tr><td><a href="/datascience">Data Science</a></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="menu-item smooth-link"><a href="#about">About</a></div>
                    <div className="menu-item"><a href="https://mscimath.github.io/JsQuiz/" target="_blank" rel="noreferrer">Quiz</a></div>
                    <div className="menu-item smooth-link"><a href="#blog">Blog</a></div>
                </div>
            </div>
        </header>
    )
    
}

<nav className="nav">
            <a href="/">Left</a>
            <ul>
                <li>
                    <a href="/javascript">JavaScript</a>
                </li>
            </ul>
        </nav>