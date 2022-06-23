
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  
  const Skills = () => {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">My Skills</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Technology</th>
                      <th scope="col"></th>
                      <th scope="col" >Proficiency</th>
                      <th scope="col"></th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>ReactJS</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">6/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.6"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>NodeJS</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">8/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.8"
                              barClassName="bg-primary"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>HTML</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">6/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.6"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>CSS</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">5/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.5"
                              barClassName="bg-warning"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>JavaScript</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">7/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.7"
                              barClassName="bg-info"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>Redux</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">5/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.5"
                              barClassName="bg-yellow"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>

                    
                   
                  </tbody>
                </Table>
               
              </Card>
            </div>
          </Row>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">My Skills</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                    <th scope="col"></th>
                      <th scope="col">Technology</th>
                      <th scope="col"></th>
                      <th scope="col" >Proficiency</th>
                      <th scope="col"></th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>ReactJS</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">6/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.6"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>NodeJS</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">8/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.8"
                              barClassName="bg-primary"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>HTML</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">6/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.6"
                              barClassName="bg-danger"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>CSS</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">5/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.5"
                              barClassName="bg-warning"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>JavaScript</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">7/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.7"
                              barClassName="bg-info"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td></td>
                      <td>Redux</td>
                      
                      <td></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">5/10</span> &nbsp; &nbsp;
                          <div>
                            <Progress
                              max="1"
                              value="0.5"
                              barClassName="bg-yellow"
                            />
                          </div>
                        </div>
                      </td>
                      
                    </tr>

                    
                   
                  </tbody>
                </Table>
                
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Skills;
  