import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchList from "./components/searchlist/search-list.component";

const App = () => {
    const [people, setPeople] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        async function getData() {
            const response = await fetch(
                "http://jsonplaceholder.typicode.com/users"
            );
            response.json().then((data) => setPeople(data));
        }
        getData();
    }, []);

    const inputChange = (evt) => {
        setFilter(evt.target.value);
    };

    const filteredPeople = () => {
        return people.filter((p) =>
            p.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchList
                onChange={inputChange.bind(this)}
                placeholder="Search for robots"
            />
            <CardList people={filteredPeople()} />
        </div>
    );
};

export default App;
