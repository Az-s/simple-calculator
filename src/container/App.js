import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const calculate = useSelector(state => state.calculate);
  
  const insertValue = (e) => dispatch({type: 'GET_VALUE', value: e.currentTarget.id});
  const calculateAll = () => dispatch({type: 'CALCULATE'});
  const deleteLast = () => dispatch({type: 'DELETE_LAST'});

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
                  <button className='btn' id='1' onClick={(e) => insertValue(e)}>1</button>
                  <button className='btn' id='2' onClick={(e) => insertValue(e)}>2</button>
                  <button className='btn' id='3' onClick={(e) => insertValue(e)}>3</button>
                  <button className='btn' id='<' onClick={deleteLast}>&#60;</button>
                  <button className='btn' id='4' onClick={(e) => insertValue(e)}>4</button>
                  <button className='btn' id='5' onClick={(e) => insertValue(e)}>5</button>
                  <button className='btn' id='6' onClick={(e) => insertValue(e)}>6</button>
                  <button className='btn' id='/' onClick={(e) => insertValue(e)}>&#247;</button>
                  <button className='btn' id='7' onClick={(e) => insertValue(e)}>7</button>
                  <button className='btn' id='8' onClick={(e) => insertValue(e)}>8</button>
                  <button className='btn' id='9' onClick={(e) => insertValue(e)}>9</button>
                  <button className='btn' id='*' onClick={(e) => insertValue(e)}>&#215;</button>
                  <button className='btn' id='-' onClick={(e) => insertValue(e)}>-</button>
                  <button className='btn' id='0' onClick={(e) => insertValue(e)}>0</button>
                  <button className='btn' id='+' onClick={(e) => insertValue(e)}>+</button>
                  <button className='btn' id='=' onClick={calculateAll}>=</button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
