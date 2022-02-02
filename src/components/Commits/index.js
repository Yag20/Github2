import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Commits = ({ url }) => {
    const [commits, setCommits] = useState()

    useEffect(async () => {

       
        const { data } = await axios.get(url.replace(/{\/sha}$/, ''));
       
        setCommits(data.length);
    }, [url])

    return (
        <>
            {commits}
        </>
    )
}
