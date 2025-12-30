import { useState } from 'react';
import placeholder from '../assets/images/Placeholder.png';
import '../styles/Card.css'

export default function Card() {
    const [imageUrl, setImageUrl] = useState(placeholder);
    const [descText, setDescText] = useState("Placeholder");

    return (
        <button type="button">
            <img src={imageUrl} alt={descText} />
            <span>{descText}</span>
        </button>
    )
}