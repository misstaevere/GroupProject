import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class OpeningTimes extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    
                    <Col sm>
                    <h1>Opening Times:</h1>
                <p>
                    <h5>Monday
                    <br />11am-10pm
                    </h5>
                    <br /><h5>Tuesday
                    <br />11am-10pm
                    </h5>
                    <br /><h5>Wednesday
                    <br />11am-10pm
                    </h5>
                    <br /><h5>Thursday
                    <br />11am-11pm
                    </h5>
                    <br /><h5>Friday
                    <br />11am-midnight
                    </h5>
                    <br /><h5>Saturday
                    <br />11am-midnight
                    </h5>
                    <br /><h5>Sunday
                    <br />11am-10pm
                    </h5>
                </p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default OpeningTimes;