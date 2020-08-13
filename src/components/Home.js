import React , { Component } from 'react';
import * as actions from "../store/actions/index";
import { SATTELITES_URL } from "../config";
import { getData, postData } from "../lib";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import {Row , Col, Card } from 'react-bootstrap';
import Filter from './Filter';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchSattelites();
  }

  render () {
    const { satellites } = this.props;
    return (
        <div id="home">
            <h4 class="page-heading">SpacEx Launch Programs</h4>
            <Row className="show-grid">
                <Col md={3}>
                    <Filter/>
                </Col>
                <Col md={9}>
                    <Row>
                    {
                        satellites.map((satellite, index) => {
                            const successful_launch = satellite.launch_success;
                            console.log("successful_launch",successful_launch);
                            return (
                                <Card>
                                <div class="satellite-image" style={{  backgroundColor: "rgb(177 172 213)"}}> 
                                    <Card.Img variant="top" src={ satellite.links.mission_patch_small} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{ satellite.mission_name} &#35; { satellite.flight_number}</Card.Title>
                                    <Card.Text>
                                        <div class="card-content-div">
                                            <span class="card-content-heading">Mission Ids :</span>
                                            {
                                                satellite.mission_id.map((mission_id,index) => {
                                                    return (
                                                    <li> {mission_id} </li>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div class="card-content-div">
                                            <span class="card-content-heading">Launch Year : </span>
                                            <span>{ satellite.launch_year }</span>
                                        </div>
                                        <div class="card-content-div">
                                            <span class="card-content-heading">Successful Launch : </span>
                                            <span>{ satellite.launch_success ? "true" : "false" }</span>
                                        </div>
                                        <div>
                                            <span class="card-content-heading">Successful Landing : </span>
                                            <span>{ satellite.rocket.first_stage.cores[0].land_success ? "true" : "false" }</span>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            );
                        })
                    }
                    </Row>
                </Col>
            </Row>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    satellites: state.satellites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSattelites: actions.fetchSattelites(dispatch),
  };
};

export default(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
