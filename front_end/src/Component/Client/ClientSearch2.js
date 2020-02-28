import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;
`;

const SearchResults = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Card = styled.div`
    background: #c7493a;
    width: 30%;
    border: solid 4px #5b8466;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 1%;
`;

export default function SearchForm() {
    const [one, two] = useState([]);

    const [three, four] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassName = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.name
                            .toLowerCase()
                            .includes(three.toLowerCase())
                );
                two(fitnessClassName);
            });
    }, [three]);
    const handleChangeName = event => {
        four(event.target.value);
    };

    const [five, six] = useState([]);

    const [seven, eight] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassStatus = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.status
                            .toLowerCase()
                            .includes(seven.toLowerCase())
                );
                six(fitnessClassStatus);
            });
    }, [seven]);
    const handleChangeStatus = event => {
        eight(event.target.value);
    };
    const [nine, ten] = useState([]);

    const [eleven, twelve] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassSpecies = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.species
                            .toLowerCase()
                            .includes(eleven.toLowerCase())
                );
                ten(fitnessClassSpecies);
            });
    }, [eleven]);
    const handleChangeSpecies = event => {
        twelve(event.target.value);
    };
    const [thirteen, fourteen] = useState([]);

    const [fifteen, sixteen] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassGender = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.gender
                            .toLowerCase()
                            .includes(fifteen.toLowerCase())
                );
                fourteen(fitnessClassGender);
            });
    }, [fifteen]);
    const handleChangeGender = event => {
        sixteen(event.target.value);
    };

    const [seventeen, eightteen] = useState([]);

    const [nineteen, twenty] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassNameName = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.name
                            .toLowerCase()
                            .includes(nineteen.toLowerCase())
                );
                eightteen(fitnessClassNameName);
            });
    }, [nineteen]);
    const handleChangeNameName = event => {
        twenty(event.target.value);
    };
    const [twentyone, twentytwo] = useState([]);

    const [twentythree, twentyfour] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassStatusStatus = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.status
                            .toLowerCase()
                            .includes(twentythree.toLowerCase())
                );
                twentytwo(fitnessClassStatusStatus);
            });
    }, [twentythree]);
    const handleChangeStatusStatus = event => {
        twentyfour(event.target.value);
    };
    const [data, setData] = useState([]);

    const [query, setQuery] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response);
                const fitnessClassSpeciesSpecies = response.data.results.filter(
                    fitnessClass =>
                        fitnessClass.species
                            .toLowerCase()
                            .includes(query.toLowerCase())
                );
                if (query.length > 0) {
                    setData(fitnessClassSpeciesSpecies);
                }
            });
    }, [query]);
    const handleChangeSpeciesSpecies = event => {
        setQuery(event.target.value);
    };

    return (
        <section className="search-form">
            <Search>
                <input
                    type="text"
                    onChange={handleChangeName}
                    value={three}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="Search By Name"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {one.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChangeStatus}
                    value={seven}
                    name="status"
                    tabIndex="0"
                    className="prompt search-status"
                    placeholder="Search By Status"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {five.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChangeSpecies}
                    value={eleven}
                    name="species"
                    tabIndex="0"
                    className="prompt search-species"
                    placeholder="Search By Species"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {nine.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChangeGender}
                    value={fifteen}
                    name="gender"
                    tabIndex="0"
                    className="prompt search-Gender"
                    placeholder="Search By Gender"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {thirteen.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChangeNameName}
                    value={nineteen}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name-name"
                    placeholder="Search By Name Name"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {seventeen.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChangeStatusStatus}
                    value={twentythree}
                    name="status"
                    tabIndex="0"
                    className="prompt search-status-status"
                    placeholder="Search By Status Status"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {twentyone.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChangeSpeciesSpecies}
                    value={query}
                    name="species"
                    tabIndex="0"
                    className="prompt search-species-species"
                    placeholder="Search By Species Species"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {data.map(data => {
                    return (
                        <Card key={data.index}>
                            <h2>{data.name}</h2>
                            <h3>Status:{data.status}</h3>
                            <h3>Species:{data.species}</h3>
                            <h3>Gender:{data.gender}</h3>
                        </Card>
                    );
                })}
            </SearchResults>
        </section>
    );
}
