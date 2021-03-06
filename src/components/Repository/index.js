import { faCodeBranch, faHistory } from '@fortawesome/free-solid-svg-icons';
import { faFileCode, faEye, faDotCircle, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Commits } from '..';


export const Repository = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { name, commits_url, forks  } = data
  

    const toggleExpand = () => setIsExpanded(prevState => !prevState)
    //the onclick dont work sometime you have to a call back to stop it from being called instantly "()=>onClick"
    return (
        <div className={`repo-container${isExpanded ? ' expanded' : ''}`}>
            <h1 onClick={toggleExpand}>{name}</h1>
            <ul className={`repodata-container ${isExpanded ? "show" : "hide"}`}>
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faHistory} />
                    <Commits url={commits_url} />
                    <span className="tooltip-text">commits</span>
                </li>
                <li className="tooltip">
                    <FontAwesomeIcon className="icon" icon={faCodeBranch} />
                    {forks}
                    <span className="tooltip-text">forks</span>
                 </li>
               
            </ul>
        </div>
    )
}