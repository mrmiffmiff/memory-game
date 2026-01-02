import { useEffect, useState } from 'react';
import placeholder from '../assets/images/Placeholder.png';
import '../styles/Card.css'

export default function Card({ obj, reaction }) {
    const [imageUrl, setImageUrl] = useState(placeholder);
    const [descText, setDescText] = useState('Placeholder Image');
    const apiKey = 'AIzaSyBmLdIvQ6mPAcZdtUorTyGJc2fedR8hz_Q'; // I'm aware this is insecure but this is for a free API used in an app that nobody is going to use
    const clientKey = 'memory_card'

    useEffect(() => {
        let cancelled = false;

        async function fetchImage() {
            try {
                const response = await fetch(`https://tenor.googleapis.com/v2/posts?key=${apiKey}&client_key=${clientKey}&ids=${obj.id}`, { mode: "cors" });
                if (!response.ok) throw new Error('Failed to fetch');
                const json = await response.json();
                const array = await json['results'];
                const data = await array[0];
                const image_formats = await data.media_formats;
                const mediumGifObj = await image_formats.mediumgif;
                const url = await mediumGifObj.url;

                if (!cancelled) {
                    setImageUrl(url);
                    setDescText(obj.name);
                }
            } catch (err) {
                if (!cancelled) {
                    setDescText('Failed to Load gif');
                    console.log(err.message)
                }
            }
        }

        fetchImage();

        return () => {
            cancelled = true;
        }
    }, [obj.id, obj.name]);

    return (
        <button type="button" onClick={() => reaction(obj)}>
            <img src={imageUrl} alt={descText} />
            <span>{descText}</span>
        </button>
    )
}