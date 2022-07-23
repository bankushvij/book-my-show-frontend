import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import axios from "axios";
import { useEffect } from "react";
import { useState} from "react";


function AllMoviesFetch() {
    const [data,setdata]=useState([]);
    useEffect(async ()=>
    {
        try {
            const response = await axios.get('http://localhost:5000/movies');
            console.log(response);

            setdata(response.data);
          } catch (error) {
            console.error(error);
          }


    },[])
    return (

        <div>
            <Container fluid style={{ padding: "5%", background: "pink" }}>
                <Row>
                    {data.map((movi) => (

                        <Col onClick={() => window.location.href = "/movies/" + movi.id} id={movi.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                            <Card>
                                <Card.Img variant="top" src={movi.imageurl} />
                                <Card.Body>
                                    <Card.Title>{movi.title}</Card.Title>
                                    <Card.Text>
                                        {movi.actor}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                    ))
                    };
                </Row>
            </Container>

        </div>

    );
}

export default AllMoviesFetch;
