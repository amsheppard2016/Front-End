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
    const [data, setData] = useState([]);

    const [query, setQuery] = useState("");
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response.data.results);
                setData(response.data.results);
            });
    }, [query]);
    const handleChange = event => {
        setQuery(event.target.value);
    };
    return (
        <section className="search-form">
            <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="Search By Name"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.name
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="status"
                    tabIndex="0"
                    className="prompt search-status"
                    placeholder="Search By Status"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.status
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            {/* <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="date"
                    tabIndex="0"
                    className="prompt search-date"
                    placeholder="Search By Date"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.date
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="duration"
                    tabIndex="0"
                    className="prompt search-duration"
                    placeholder="Search By Duration"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.duration
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="type"
                    tabIndex="0"
                    className="prompt search-type"
                    placeholder="Search By Type"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.type
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="intensityLevel"
                    tabIndex="0"
                    className="prompt search-intensityLevel"
                    placeholder="Search By Intensity Level"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.intensityLevel
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <Search>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    name="location"
                    tabIndex="0"
                    className="prompt search-location"
                    placeholder="Search By Location"
                    autoComplete="off"
                />
            </Search>

            <SearchResults>
                {query.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.location
                                  .toLowerCase()
                                  .includes(query.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Status:{data.status}</h3>
                                      <h3>Species:{data.species}</h3>
                                      <h3>Gender:{data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults> */}
        </section>
    );
}
