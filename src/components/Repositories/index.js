import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Repository } from '..';

//should add try and catch to deal with 404 username not found error
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


// an example of how to cleanup in axios should prevent bad requests and ifinite requests.

// const GetSong = ({artist,title}) =>{ 
//     const [lyrics, setLyrics] = useState();
//     useEffect(()=>{
      
//       const source = axios.CancelToken.source()
      
//       async function getSong(){
  
//         try{
//         let {data} =await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`,{
//           cancelToken: source.token,
//         });
        
//       console.log (data);
//       setLyrics(data.lyrics)
//       } catch (error){
//         if (axios.isCancel(error)) {
//         } else {
//             throw error
//         }
//     }
//       } 
//       getSong()
//       return () => {
//         source.cancel()
//     }
//     }, [artist,title]);
  
//     return <p>{lyrics}</p>
//   };
  
