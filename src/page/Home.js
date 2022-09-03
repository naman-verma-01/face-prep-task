import React, { useContext, useEffect, useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { useNavigate } from 'react-router-dom'
import { SET_AUTH_STATUS } from '../Reducers/types';
import { useDispatch, useSelector } from 'react-redux'
import { Image, Shimmer } from 'react-shimmer'
import CallIcon from '@mui/icons-material/Call';
function Home() {
    const [userData, setUserData] = useState([])
    const nav = useNavigate();
    const dispatch = useDispatch()
    const getUsers = async () => {
        
            const response = await fetch('https://randomuser.me/api/?results=10', {
                method: 'GET',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
    
                },
    
            })
            const data = await response.json();
            console.log("data", data)
            setUserData([...userData, ...data.results])
        
        
    }

    const handleLogout = async()=>{
        dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: false } });
        nav("/login");
    }

    useEffect(() => {
        getUsers()
    }, [])

    
    return (
        <>

            <div className='contactList' style={{}}>
            <h1 style={{ zIndex:"10",color: "white",background:"rgba(8, 8, 7,0.8)",paddingBottom:"10px",position:"sticky", textAlign: "center",top:"0",paddingTop:"20px"  }}>My Contacts</h1><hr />

                <InfiniteScroll
                    pageStart={0}
                    loadMore={getUsers}
                    hasMore={true || false}
                    loader={/*<div className="loader" key={0}>Loading ...</div>*/
                    <></>}
                >

                    {userData.map((element,index) => {
                        return <>
                            <div  className='singleContact'  >

                                <img className='avatar' src={element.picture.medium} alt="Girl in a jacket" ></img>
                                {element.name.first} {element.name.last}  <CallIcon style={{float:"right", marginTop:"20px", color:"green"}}/>

                            </div>
                        </>
                    })
                    }
                    <Shimmer  width={"100%"} height={72} /> 
                    <Shimmer   width={"100%"} height={72} />
            <button type="submit" onClick={handleLogout} style={{zIndex:"10" ,width:"100%",height:"50px", position:"sticky",bottom:"0px", textAlign:"center",borderRadius:"0 0 0 0 "}} class="btn btn-dark" >Logout</button>

                </InfiniteScroll>

            </div>
                
        </>
    )
}

export default Home