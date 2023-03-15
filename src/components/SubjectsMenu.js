
export default function SubjectsMenu(){
    return(
        <>
            <h1>Science & Maths Site</h1>
            <p>lorem lorem</p>
            <table className="theory-subjects" id="subjects-table">
                <tbody>
                    <tr><th rowSpan="2">Physics</th><td><a href="/physics">School Physics</a></td></tr>
                    <tr><td><a href="/relativity">Relativity</a></td></tr>
                    <tr><th>Mathematics</th><td><a href="menuItems/mathematics/schoolmathematics.html">School Mathematics</a></td> </tr>
                    <tr><th rowSpan="3">Computer Science & Programming</th><td><a href="menuItems/javascript.html">JavaScript</a></td></tr>
                    <tr><td><a href="menuItems/python.html">Python</a></td></tr>
                    <tr><td><a href="menuItems/datascience.html">Data Science</a></td></tr>
                </tbody>
            </table>
            <div className="section-footer"></div>
        </>
    )
}