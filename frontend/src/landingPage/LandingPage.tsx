import { useEffect, useState } from "react"
import { ITodo } from "../editTodosPage/EditTodosPage"
import axios from "axios"
import Todo from "../editTodosPage/Todo"
import DateSwitcher from "./DateSwitcher"
import { Container } from "react-bootstrap"

async function fetchTodos(date: Date) {
    const url = "http://localhost:8080/simpleTodos/" + date.toISOString().split("T")[0]
    return axios.get<ITodo[]>(url)
}

function LandingPage() {

    const [date, setDate] = useState<Date>(new Date())
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos(date).then(res => setTodos(res.data))
    }, [date])

    const classForTodoWrapper = (done: boolean) => {
        let className = "todo-wrapper"

        if (done) {
            className += " done"
        }

        return className
    }

    const toggleTodoDoneStatus = async (id: number) => {
        const url = "http://localhost:8080/simpleTodos/" + id + "/toggle"
        try {
            await axios.put<boolean>(url)
            const res = await fetchTodos(date)
            setTodos(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <DateSwitcher date={date} setDate={setDate} />
            <Container>
                {
                    todos.map(todo => <div key={todo.id} className={classForTodoWrapper(todo.done)} onClick={() => toggleTodoDoneStatus(todo.id)}><Todo todo={todo} /></div>)
                }
            </Container>
        </>
    )
}

export default LandingPage
