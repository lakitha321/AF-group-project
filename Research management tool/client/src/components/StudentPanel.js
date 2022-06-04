import React,{useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

import { UserContext } from "../App";

export default function StudentPanels(){

    const {state1, dispatch} = useContext(UserContext);
    dispatch({type:"USER", payload:1})

    const [panelArr, setPanel] = useState([]);

    useEffect(() => {
        function getPanel(){
            axios.get("http://localhost:8070/panel/").then((res) => {
                setPanel(res.data);
            }).catch((err) => {
                alert(err);
            })
        }
        getPanel();
    }, []);

    return(
        <div className="container my-5" align='center'>
            <br/><br/><br/>
           <div className="row">
                {
                    panelArr.map((val, key) => {
                        return(
                            <div className="col-12" align="center" key={val._id}>
                                <Card style={{ width: '60rem', backgroundColor: 'transparent', borderColor: 'white' }}>
                                <Card.Body>
                                    <Card.Title align="center" style={{ color: 'white'}}>{val.name}</Card.Title>
                                    <Card.Text align="center" style={{ color: 'white'}}>{val.member1}</Card.Text>
                                    <Card.Text align="center" style={{ color: 'white'}}>{val.member2}</Card.Text>
                                    <Card.Text align="center" style={{ color: 'white'}}>{val.member3}</Card.Text>
                                    <Card.Text align="center" style={{ color: 'white'}}>{val.member4}</Card.Text>
                                    
                                </Card.Body>
                                </Card><br/><br/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}