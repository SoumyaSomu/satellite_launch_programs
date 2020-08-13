import React , { Component } from 'react';
import * as actions from "../store/actions/index";
import { SATTELITES_URL } from "../config";
import { getData, postData } from "../lib";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import {Row , Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        launch_year: '',
        launch_success: '',
        land_success: '',
        ...this.props.filters
    };
  }

  yearSetter = (key) => {
    this.setState({ launch_year: key },()=>{
        this.props.updateFilter({...this.state});
        this.props.clearSattelites();
        this.props.fetchSattelites();
    });
   }

   launchSetter = (key) => {
    this.setState({ launch_success: key },()=>{
        this.props.updateFilter({...this.state});
        this.props.clearSattelites();
        this.props.fetchSattelites();
    });
   }
   
   landSetter = (key) => {
    this.setState({ land_success: key },()=>{
        this.props.updateFilter({...this.state});
        this.props.clearSattelites();
        this.props.fetchSattelites();
    });
   }

  render () {
    return (
        <div id="filter">
            <Card>
                <h6 class="filter-heading">Filters</h6>
                <div>
                    <h6 class="sub-filter">Launch Year</h6>
                    <hr class="sub-filter-hr"/>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2006')}>2006</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2007')}>2007</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2008')}>2008</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2009')}>2009</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2010')}>2010</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2011')}>2011</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2012')}>2012</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2013')}>2013</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2014')}>2014</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2015')}>2015</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2016')}>2016</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2006')}>2017</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2018')}>2018</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.yearSetter('2019')}>2019</Button>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.yearSetter('2020')}>2020</Button>
                </div>
                <div>
                    <h6 class="sub-filter">Successfull Launch</h6>
                    <hr class="sub-filter-hr"/>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.launchSetter('true')}>True</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.launchSetter('false')}>False</Button>
                </div>
                <div>
                    <h6 class="sub-filter">Successfull Landing</h6>
                    <hr class="sub-filter-hr"/>
                </div>
                <div class="filter-sub-div">
                    <Button id="sub-filter-first-button" size="sm" onClick={() => this.landSetter('true')}>True</Button>
                    <Button id="sub-filter-second-button" size="sm" onClick={() => this.landSetter('false')}>False</Button>
                </div>
            </Card>
        </div>
    );
  }
}

function mapStateToProps(state) {
    const { filters } = state;
    return {
      filters
    };
  }
  
function mapDispatchToProps(dispatch) {
    return {
        updateFilter: actions.updateFilter(dispatch),
        fetchSattelites: actions.fetchSattelites(dispatch),
        clearSattelites: actions.clearSattelites(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);