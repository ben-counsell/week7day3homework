import React, {useState, useEffect} from 'react';
import ChartList from '../components/ChartList'

const ChartsContainer = () => {

    const [songs, setSongs] = useState()

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs))
    }

    return (
        <>
            <ChartList songs={songs}/>
        </>
    );
}
 
export default ChartsContainer;