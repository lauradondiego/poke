import React from "react";
import { Card, Image } from "semantic-ui-react";
import cardImage from "../assets/cardImage.jpg"

import 'semantic-ui-less/semantic.less'


export const CardExampleCard = ({ char }) => (
    <Card>
        <Image src={cardImage} style={{ width: "100px" }} />
        <div className="name">
            <h2>poke Name: {char.name}</h2>
        </div>
        <div className="url">
            <p>Birth Year: {char.url}</p>
        </div>

    </Card>
);
