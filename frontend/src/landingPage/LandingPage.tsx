import { useEffect, useState } from "react"
import { ITodo } from "../editTodosPage/EditTodosPage"
import axios from "axios"
import Todo from "../editTodosPage/Todo"
import DateSwitcher from "./DateSwitcher"

function LandingPage() {

    const [date, setDate] = useState<Date>(new Date())
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const url = "http://localhost:8080/simpleTodos/" + date.toISOString().split("T")[0];
        axios.get<ITodo[]>(url).then(res => setTodos(res.data))
    }, [date])

    return (
        <>
            <DateSwitcher date={date} setDate={setDate} />
            {
                todos.map(todo => <Todo key={todo.id} todo={todo} />)
            }
        </>
    )
}

export default LandingPage
