import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Repository } from '..';


export const Repositories = ({ username }) => {
    const [repoData, setRepoData] = useState([]);

    useEffect(() => {
      
        const getRepos = async () => {
            
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);            
           
            setRepoData(data);
        }

        getRepos();

     
    }, [username])

    const renderRepo = () => repoData.map((r, i) => <Repository key={i} data={r} />)

    return (
        <div className="repositories-container">
            {renderRepo()}
        </div>
    )
}
