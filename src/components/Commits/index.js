import React, { useEffect, useState } from 'react';
import axios from 'axios';


//  you have a error 409 conflict if a repo has 0 commits, a try and catch could prevent this
export const Commits = ({ url }) => {
    const [commits, setCommits] = useState()

    useEffect(async () => {

       
        const { data } = await axios.get(url.replace(/{\/sha}$/, ''));
       
        setCommits(data.length);
    }, [url])


    //maybe add a button here so you can click on it instead of just showing the data
    //e.g <Button onClick={() => onButtonClick(repo)}>info</Button>
    //     <p>{commits}</p>
    return (
        <>
            {commits}
        </>
    )
}
