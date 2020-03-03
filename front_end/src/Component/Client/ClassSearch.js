import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5%;
`;

const SearchBars = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const SearchResults = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Card = styled.div`
    background: #dec0f1;
    width: 20%;
    border: solid 6px #957fef;
    margin: 1%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;

    & h2 {
        margin-top: 2%;
        margin-bottom: 2%;
    }
    & h3 {
        margin-top: 2%;
        margin-bottom: 1%;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    font-size: 14px;
    padding: 10px;
    border-radius: 3px;
    border: none;
    box-shadow: inset 0 0 0 3px #b79ced;
    width: 100%;
    outline: none;
    transition: all 200ms;
`;

export default function SearchForm() {
    const [data, setData] = useState([]);

    const [nameQuery, setNameQuery] = useState("");
    const [dateQuery, setDateQuery] = useState("");
    const [timeQuery, setTimeQuery] = useState("");
    const [durationQuery, setDurationQuery] = useState("");
    const [classQuery, setClassQuery] = useState("");
    const [intensityQuery, setIntensityQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(response => {
                console.log(response.data.results);
                setData(response.data.results);
            });
    }, [
        nameQuery,
        timeQuery,
        dateQuery,
        durationQuery,
        classQuery,
        intensityQuery,
        locationQuery
    ]);
    const HandleChange = props => {
        return event => {
            props(event.target.value);
        };
    };

    return (
        <section className="search-form">
            <SearchBars>
                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setNameQuery)}
                        value={nameQuery}
                        name="name"
                        tabIndex="0"
                        className="prompt search-name"
                        placeholder="Search By Name"
                        autoComplete="off"
                    />
                </Search>

                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setDateQuery)}
                        value={dateQuery}
                        name="date"
                        tabIndex="0"
                        className="prompt search-date"
                        placeholder="Search By Date"
                        autoComplete="off"
                    />
                </Search>
                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setTimeQuery)}
                        value={timeQuery}
                        name="status"
                        tabIndex="0"
                        className="prompt search-time"
                        placeholder="Search By Time"
                        autoComplete="off"
                    />
                </Search>
                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setDurationQuery)}
                        value={durationQuery}
                        name="duration"
                        tabIndex="0"
                        className="prompt search-duration"
                        placeholder="Search By Duration"
                        autoComplete="off"
                    />
                </Search>
                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setClassQuery)}
                        value={classQuery}
                        name="type"
                        tabIndex="0"
                        className="prompt search-type"
                        placeholder="Search By Type"
                        autoComplete="off"
                    />
                </Search>
                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setIntensityQuery)}
                        value={intensityQuery}
                        name="intensityLevel"
                        tabIndex="0"
                        className="prompt search-intensityLevel"
                        placeholder="Search By Intensity Level"
                        autoComplete="off"
                    />
                </Search>
                <Search>
                    <Input
                        type="text"
                        onChange={HandleChange(setLocationQuery)}
                        value={locationQuery}
                        name="location"
                        tabIndex="0"
                        className="prompt search-location"
                        placeholder="Search By Location"
                        autoComplete="off"
                    />
                </Search>
            </SearchBars>
            <SearchResults>
                {nameQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.name
                                  .toLowerCase()
                                  .includes(nameQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>

            <SearchResults>
                {dateQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.species
                                  .toLowerCase()
                                  .includes(dateQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <SearchResults>
                {timeQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.status
                                  .toLowerCase()
                                  .includes(timeQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <SearchResults>
                {durationQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.gender
                                  .toLowerCase()
                                  .includes(durationQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <SearchResults>
                {classQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.name
                                  .toLowerCase()
                                  .includes(classQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <SearchResults>
                {intensityQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.name
                                  .toLowerCase()
                                  .includes(intensityQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
            <SearchResults>
                {locationQuery.length
                    ? data
                          .filter(fitnessClass =>
                              fitnessClass.name
                                  .toLowerCase()
                                  .includes(locationQuery.toLowerCase())
                          )
                          .map(data => {
                              return (
                                  <Card key={data.index}>
                                      <h2>{data.name}</h2>
                                      <h3>Date: {data.status}</h3>
                                      <h3>Time: {data.species}</h3>
                                      <h3>Duration: {data.gender}</h3>
                                      <h3>Class Type: {data.status}</h3>
                                      <h3>Intensity: {data.species}</h3>
                                      <h3>Location: {data.gender}</h3>
                                  </Card>
                              );
                          })
                    : null}
            </SearchResults>
        </section>
    );
}
