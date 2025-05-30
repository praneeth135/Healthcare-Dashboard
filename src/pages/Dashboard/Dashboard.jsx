import React,{Fragment} from "react";
import { FaHome,FaFileAlt } from "react-icons/fa";

import { Breadcrumb, Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";


import dataTo from '../../data/survey-data.json';
import vaccinate from '../../data/vaccinated-data.json';

import VaccinatePatientList from '../../components/VaccinatePatientListComponents/VaccinatePatientListComponents'
import DoctorList from "../../components/DoctorListComponents/DoctorListComponents";

import './Dashboard.scss';
import RecentActivityComponents from "../../components/RecentActivityComponents/RecentActivityComponents";
import NoticeBoardComponents from "../../components/NoticeBoardComponents/NoticeBoardComponents";




const Dashboard = () => {
  return (
  <Fragment>
    <div id="content-dashboard">
      <div className="container-fluid">
          <section className="block-header">
            <div className="row">
              <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <Breadcrumb className="breadcrumb-style">
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item><FaHome></FaHome></Breadcrumb.Item>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active href="#">Dashboard</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </section>
          <section className="section--daily-statistics">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon shadow-primary bg-purple float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>Appoinments</h6>
                        <h4 className="float-right">650</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(103, 119, 239,.8)" fillOpacity="1" d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon bg-shadowGreen float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>CaseSolve</h6>
                        <h4 className="float-right">450</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0, 203, 169,.8)" fillOpacity="1" d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon bg-orange float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>Release</h6>
                        <h4 className="float-right">350</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(253, 126, 20,.8)" fillOpacity="1" d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon bg-blue float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>NewPatients</h6>
                        <h4 className="float-right">150</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0, 11, 118,.8)" fillOpacity="1" d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          <section className="section--daily-status">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <Card className="card-style">
                  <Card.Header>Daily recocovery/effected</Card.Header>
                  <Card.Body className="card-content box-shadow">
                    <div id="chart">   
                      <ReactApexChart options={dataTo.options} series={dataTo.series} type="area" height={350} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <Card className="card-style">
                  <Card.Header>Daily vaccinated</Card.Header>
                  <Card.Body className="card-content box-shadow">
                    <div id="chart">   
                      <ReactApexChart options={vaccinate.options} series={vaccinate.series} type="bar" height={350} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </section>

          <section className="section--vaccinate-patient">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
               <Card className="card-style">
                 <Card.Header>
                   Vaccinate Patient List
                 </Card.Header>
                 <Card.Body>
                   <VaccinatePatientList></VaccinatePatientList>
                 </Card.Body>
               </Card>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
               <Card className="card-style">
                 <Card.Header>
                   Doctor List
                 </Card.Header>
                 <Card.Body>
                    <DoctorList></DoctorList>
                 </Card.Body>
               </Card>
              </div>
            </div>
          </section> 

          <section className="section--activity-board">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <Card className="card-style">
                    <Card.Header>
                      Recent Activity
                    </Card.Header>
                    <Card.Body>
                      <RecentActivityComponents></RecentActivityComponents>
                    </Card.Body>
                  </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                  <Card className="card-style">
                    <Card.Header>
                      Notice
                    </Card.Header>
                    <Card.Body>
                      <NoticeBoardComponents></NoticeBoardComponents>
                    </Card.Body>
                  </Card>
              </div>
            </div>
          </section>

      </div>
    </div>
  </Fragment>
  )
};

export default Dashboard;
