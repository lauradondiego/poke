import React from "react";
import { Card, Image } from "semantic-ui-react";

import cardImage from "../assets/cardImage.jpg"

export const CardExampleCard = ({ char }) => (
    <Card>
        <Image src={cardImage} style={{ width: "100px" }} />{" "}
        <div className="name">
            <h2>poke Name: {char.name}</h2>
        </div>
        <div className="birth">
            <p>Birth Year: {char.birth_year}</p>
        </div>
        <div className="eyecolor">
            <p>Eye Color: {char.eye_color}</p>
        </div>
        <div className="mass">
            <p>Mass: {char.mass}</p>
        </div>
    </Card>
);
