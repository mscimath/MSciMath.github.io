import {Routes, Route} from 'react-router-dom';
import SubjectsMenu from '../components/SubjectsMenu';

export default function Home(){
    return (
        <>
            <section id ="subjects" className="simple">
            <Routes>
              <Route index element={<SubjectsMenu />}/>
            </Routes>
            </section>
        </>
    )
}