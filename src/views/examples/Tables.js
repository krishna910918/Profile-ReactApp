
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

const Tables = () => {
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
                <h3 className="mb-0">Projects</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Front-End</th>
                    <th scope="col">Backend-End</th>
                    <th scope="col">Link</th>
                    <th scope="col">Progress</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Memories Project</td>
                    <td>ReactJS</td>
                    <td>
                      NodeJS
                    </td>
                    <td>
                      
                        <a href = 'https://simple-social-media-site2.netlify.app/'>

                          Go to the Website
                         
                        </a>
                        
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>Task Manager</td>
                    <td>ReactJS</td>
                    <td>
                      NodeJS
                    </td>
                    <td>
                      
                        <a href = 'https://task-manager-web-frontend.herokuapp.com/'>

                          Go to the Website
                         
                        </a>
                        
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-red"
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
                <h3 className="text-white mb-0">Projects</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Front-End</th>
                    <th scope="col">Back-End</th>
                    <th scope="col">Link</th>
                    <th scope="col">Progress</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Memories Project</td>
                    <td>ReactJS</td>
                    <td>
                      NodeJS
                    </td>
                    <td>
                      
                        <a href = 'https://simple-social-media-site2.netlify.app/'>

                          Go to the Website
                         
                        </a>
                        
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td>Task Manager</td>
                    <td>ReactJS</td>
                    <td>
                      NodeJS
                    </td>
                    <td>
                      
                        <a href = 'https://task-manager-web-frontend.herokuapp.com/'>

                          Go to the Website
                         
                        </a>
                        
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-red"
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

export default Tables;
