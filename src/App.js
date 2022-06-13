import logo from './logo.svg';
import './App.css';
import AddTodos from "./Components/AddTodos";


function App() {
    return (
        <div className="container p-5">
            <div className="row">
                <h2 className="float-start">Список задач:</h2>
                <div className="col">
                    <AddTodos/>
                </div>

            </div>
        </div>
    );
}

export default App;
