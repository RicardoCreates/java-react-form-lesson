import './App.css';
import styled from "styled-components";
import { useState } from "react";

function App() {
    const [nameInput, setNameInput] = useState<string>('');
    const [ageInput, setAgeInput] = useState<number | undefined>();
    const [emailInput, setEmailInput] = useState<string>('');
    const [submittedData, setSubmittedData] = useState<
        { name: string; age?: number; email: string }[]
    >([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Füge neue Daten zum bestehenden Array hinzu
        setSubmittedData(prevData => [
            ...prevData,
            { name: nameInput, age: ageInput, email: emailInput }
        ]);
        // Leere das Formular nach dem Absenden
        setNameInput('');
        setAgeInput(undefined);
        setEmailInput('');
    };

    return (
        <>
            <h1>My Form</h1>
            <form onSubmit={handleSubmit}>
                <StyledDiv>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                    />
                    <label htmlFor="age">Age:</label>
                    <input
                        id="age"
                        type="number"
                        name="age"
                        value={ageInput ?? ''}
                        onChange={(e) => setAgeInput(Number(e.target.value))}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </StyledDiv>
            </form>

            {/* Zeige jede übermittelte Datenkarte an */}
            {submittedData.map((data, index) => (
                <Card key={index}>
                    <h2>User Info</h2>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Age:</strong> {data.age}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                </Card>
            ))}
        </>
    );
}

export default App;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

const Card = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    background-color: #f9f9f9;
    color: black;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
`;
