import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const calculate = useSelector(state => state.calculate);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col className='d-flex justify-content-center mt-5'>
            <Card style={{ width: '16rem', backgroundColor: 'rgb(184, 184, 184)' }}>
              <Card.Body>
                <Card.Title>Simple Calculator</Card.Title>
                <div id="result">{calculate}</div>
                <Row className='buttons'>
                  <button className='btn' id='1' onClick={e =>this.props.insertValue(e)}>1</button>
                  <button className='btn' id='2' onClick={e =>this.props.insertValue(e)}>2</button>
                  <button className='btn' id='3' >3</button>
                  <button className='btn' id='<' >&#60;</button>
                  <button className='btn' id='4' >4</button>
                  <button className='btn' id='5' >5</button>
                  <button className='btn' id='6' >6</button>
                  <button className='btn' id='/' >&#247;</button>
                  <button className='btn' id='7' >7</button>
                  <button className='btn' id='8' >8</button>
                  <button className='btn' id='9' >9</button>
                  <button className='btn' id='*' >&#215;</button>
                  <button className='btn' id='-' >-</button>
                  <button className='btn' id='0' >0</button>
                  <button className='btn' id='+' onClick={e =>this.props.insertValue(e)}>+</button>
                  <button className='btn' id='=' onClick={e =>this.props.insertValue(e)}>=</button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ctr: state.calculate,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    insertValue: (e)=>dispatch({type: 'GET_VALUE', value: e.currentTarget.id}),
    calculate: ()=>dispatch({type: 'CALCULATE'}),
    deleteLastOne: ()=>dispatch({type: 'DELETE_LAST'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
