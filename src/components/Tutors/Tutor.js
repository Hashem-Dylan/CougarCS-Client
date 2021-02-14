import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Tutor.css";
import LinkedIn from "../../assets/LinkedIn.svg";

const Tutor = ({ tutors }) => {
    return (
        <>
            <Row>
                <Col>
                    <div className='tutors'>
                        <div className="tutorName">
                            <img src={LinkedIn}></img>
                            {tutors.prioritize ? <p style={{ color: '#ECD00A' }}>{tutors.name}</p> : <p>{tutors.name}</p>}
                        </div>
                        <div className="tutorCourse">
                            {tutors.courses.map((course, index) => (
                                <div class="cardSubjects">{course}</div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Tutor;
