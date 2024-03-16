import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Blog from './BlogPage/Blog'
import Header from './BlogPage/Header';


const sections = [
    { title: 'Technology', url: './frontend', disable: false },
    { title: 'Citations', url: './citations', disable: false },
    { title: 'Opinion', url: '#', disable: true },
    { title: 'Science', url: '#', disable: true },
    { title: 'Health', url: '#', disable: true },
    { title: 'Style', url: '#', disable: true },
    { title: 'Travel', url: '#', disable: true },
    { title: 'Design', url: '#', disable: true },
    { title: 'Culture', url: '#', disable: true },
    { title: 'Business', url: '#', disable: true },
];
    
const App = () => (
    <Router>
        <div>
        <Header title="Demut" sections={sections} />
        </div>
        <Switch>
            <Route exact path="/">
                <Blog />
            </Route>
        </Switch>
    </Router>
)



export default App;