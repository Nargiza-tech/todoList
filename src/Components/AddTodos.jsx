import React, {useEffect, useState} from 'react';
import Todos from "./Todos";
import {BASE_URL} from "./Api";
import {toast} from "react-toastify";
import '../Components/style.css'
import Alerts from "./Alerts";


const AddTodos = () => {
    const [input, setInput] = useState('');

    const [state, setState] = useState("");


    let container = document.getElementById('container')


    const signUpButton = () => {
        container.classList.add('h5');
    };


    const submitHandler = (event) => {
        event.preventDefault()

        const newPost = {
            input, id: Date.now().toString()
        }


        if (!input.trim()) {
            return setState(state === "" ? <Alerts/> : "");
        }


        const url = BASE_URL + "todos"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        }

        fetch(url, options)
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Спасибо большое за ваш отзыв")
                } else {
                    toast.error("Что-то пошло не так. Обновите страницу")
                }
            })
            .then((data) => getData())
        setInput("")


    }

    setTimeout(() => {
        setState(state === <Alerts/> ? <Alerts/> : "")
    }, 4000)


    const [todos, setTodos] = useState([]);
    const getData = () => {
        const url = BASE_URL + "todos"

        fetch(url)
            .then((response) => response.json())
            .then((data) => setTodos(data))

    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            {state}
            <form onSubmit={submitHandler} className="flex">
                <div className="col-sm-7 p-2">
                    <label htmlFor="title" className="title">Название задач:</label>

                    <input name="title" onChange={e => setInput(e.target.value)} value={input} type="text"
                           className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary mt-4" onClick={() => {
                    getData()
                }}>Создать
                </button>
            </form>

            {todos.map((item) => {
                return <Todos item={item} key={item.id}/>
            })}

        </div>
    );
};

export default AddTodos;