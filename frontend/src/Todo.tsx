import { useState } from "react"
import Card from "./Card"
import { ITodo } from "./editTodosPage/EditTodosPage"

interface TodoProps {
    todo: ITodo
}

class Color {
    r: number
    g: number
    b: number

    constructor(r: number, g: number, b: number) {
        this.r = r
        this.g = g
        this.b = b
    }
}

function hexToColor(hex: string) : Color {
    const bigint = parseInt(hex.substring(1), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return new Color(r, g, b)
}

// https://gist.github.com/renancouto/4675192
// Copyright (c) 2013 renancouto
function lightenColor(color: string, percent: number) {
    const num = parseInt(color.substring(1), 16)
    const amt = Math.round(2.55 * percent)
    const R = (num >> 16) + amt
    const G = (num & 0x0000FF) + amt
    const B = (num >> 8 & 0x00FF) + amt

    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000
            + (B<255?B<1?0:B:255)*0x100
            + (G<255?G<1?0:G:255))
            .toString(16).slice(1)
}

function Todo({ todo } : TodoProps) {

    const color = todo.category != undefined ? hexToColor(todo.category?.color) : new Color(255, 255, 255)
    let textColor = "";


    if (todo.category) {
        textColor = color.r + color.g + color.b > 450 ? lightenColor(todo.category?.color, -60) : lightenColor(todo.category?.color, 60)
    }

    const [backgroundColor, setBackgroundColor] = useState<string>(todo.category?.color)

    const onMouseEnter = () => {
        if (todo.category) {
            setBackgroundColor(lightenColor(todo.category?.color, 20))
        }
    }

    const onMouseLeave = () => {
        if (todo.category) {
            setBackgroundColor(todo.category?.color)
        }
    }

    const style = () => todo.category && {
        "color": textColor,
        "backgroundColor": backgroundColor
    }

    return (
        <Card title={todo.name} content={todo.description ?? ""} style={style()}
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    )
}

export default Todo
