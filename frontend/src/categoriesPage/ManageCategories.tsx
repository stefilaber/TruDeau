import axios from "axios";
import { useEffect, useState } from "react";

export interface ICategory {
    id: number
    name: string
    color: string
}

function ManageCategories() {

    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        axios.get<ICategory[]>("http://localhost:8080/categories").then(response => {
            setCategories(response.data)
            console.log(response.data)
        })
    })

    return (
        <div>
            <h1>Manage Categories</h1>
            <ul>
                {categories.map(category => <li key={category.id}>{category.name}</li>)}
            </ul>
        </div>
    );
}

export default ManageCategories;
