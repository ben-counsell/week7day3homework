import React from 'react';
import ListItem from './ListItem'

const ChartList = ({songs}) => {

    const entries = songs.map((song) => {
        return <ListItem song={song.feed.entry}/>
    })

    return (
        <>
            <ul>
                {entries}
            </ul>
        </>
    )
}

export default ChartList