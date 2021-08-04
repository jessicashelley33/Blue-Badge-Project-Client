import React, { useState } from "react";
import "./openmap.css";

import { Row, Col, Button, Input, FormGroup, Container } from "reactstrap";

const OpenMap = (props) => {
  const apiKey = "5ae2e3f221c38a28845f05b6184e4c35ed4f223cddb9932ee91a216c";
  const [display, setDisplay] = useState("");
  const [resultName, setResultName] = useState("");
  const [resultCon, setResultCon] = useState("");
  const [resultPop, setResultPop] = useState("");
  const [resultRadius, setResultRadius] = useState(0);
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [offset1, setOffset] = useState(0);

  /////////////
  /////////////
  /////////////
  /////////////
  let lat;
  let lon;
  let limit = 3;
  let array = [];
  //////////////////////
  //////////////////////
  //////////////////////
  let searchCountry = (e) => {
    e.preventDefault();
    var otmAPI =
      "https://api.opentripmap.com/0.1/en/places/geoname?name=" +
      display +
      "&apikey=" +
      apiKey;

    fetch(otmAPI)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setResultName(data.name);
        lat = data.lat;
        lon = data.lon;
        setResultCon(data.country);
        setResultPop(data.population);
        Count();
      })

      .catch(function (err) {
        console.log("Fetch Error", err);
      });
  };

  let Count = async () => {
    await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?apikey=${apiKey}&radius=500&lon=${lon}&lat=${lat}&format=count&limit=${limit}&rate=2`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultRadius(data.count);
        loadList(data);
      });
  };

  const loadList = () => {
    fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?apikey=${apiKey}&radius=500&offset=${offset1}&lon=${lon}&lat=${lat}&format=json&limit=${limit}&rate=2`
    )
      .then((res) => res.json())
      .then((data) => {
        // setList(
        //   data.map((item, index) => {
        //     return <h4>{item.name}</h4>;
        //   })
        // );
        setDesc1(
          data.map((item, index) => {
            return loadDesc(item.xid);
          })
        );
      });
  };
  const loadDesc = (idx) => {
    let id = idx;
    fetch(
      `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data1) => {
        array.push(data1.name);
        array.push(data1.preview.source);
        array.push(data1.wikipedia_extracts.text);
        const [first, second, third] = array;
        const [, , , four, five, six] = array;
        const [, , , , , , seven, eight, nine] = array;
        setDesc1(
          <>
            <h4>{first}</h4>
            <img alt="" src={second}></img>
            <li>{third}</li>
          </>
          // array.map((item, index) => {
          //   if (index % 2 == 0) {
          //     return <img key={index} src={item}></img>;
          //   } else if (index % 1 == 0) {
          //     return(
          //     <>
          //       <h4>{list[0]}</h4>
          //       <h4>{item}</h4>;
          //     </>)
          //   } //else if (index %2==0) {
          //   //return <li key={index}>{item}</li>;
          //   //}
          // })
        );
        setDesc2(
          <>
            <h4>{four}</h4>
            <img alt="" src={five}></img>
            <li>{six}</li>
          </>
        );
        setDesc3(
          <>
            <h4>{seven}</h4>
            <img alt="" src={eight}></img>
            <li>{nine}</li>
          </>
        );
      });
  };
  const buttonNext = (e) => {
    searchCountry(e);
    if (offset1 <= resultRadius) {
      setOffset(offset1 + 3);
    } else {
      setOffset(0);
    }
  };
  const buttonBack = (e) => {
    searchCountry(e);
    if (offset1 < resultRadius && offset1 > 0) {
      setOffset(offset1 - 3);
    } else {
      setOffset(0);
    }
  };
  ///////////
  ///////////
  ///////////
  return (
    <Container
    
    >
      <FormGroup onSubmit={searchCountry}
      style={{
        marginTop: '3rem',
        
      }}
      >
        <Row>
          <Col md="4">
            <form
             
              // onSubmit={searchCountry}
            >
              <h4 className="text-light"
              style={{
                padding: '0.1em',
                margin: '0.3rem'
              }}
              >Add to saved Locations.</h4>

              <h2 className="text-light"
              style={{
                padding: '0.1em',
                margin: '0.3rem',
                fontSize: '24px'
              }}
              >City: {resultName}</h2>
              <h2 className="text-light"
              style={{
                padding: '0.1em',
                margin: '0.3rem',
                fontSize: '24px'
              }}
              >Country: {resultCon}</h2>
              <h2 className="text-light"
              style={{
                padding: '0.1em',
                fontSize: '24px'
              }}
              >Population: {resultPop}</h2>
              <h2 className="text-light"
              style={{
                padding: '0.1em',
                fontSize: '24px'
              }}
              >
                {resultRadius} nearby attractions within 500m radius.
              </h2>
              <Input
              style={{
                margin: '0.5em',
                fontSize: '24px'
                
              }}
                type="text"
                name="description"
                placeholder="Description"
                value={display}
                onChange={(e) => setDisplay(e.target.value)}
              />
              <Button
              style={{
                marginTop: '1.9em',
                padding: '10px 50px',
                fontSize:'18px',
                backgroundColor: '#7fbfbf',
                color: '#e7ecee',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '700'
              }}
              
              type="Submit" >
                Search
              </Button>
            </form>
          </Col>
          {/* <Col md="6">
            <form class="border border-primary rounded nasa">
              <h4 className="text-info">Add to saved Locations.</h4>
              <label className="text-info">Name:</label>
              <input
                type="text"
                name="description"
                value={resultName}
                placeholder={resultName}
              />
              <label className="text-info">Country:</label>
              <input
                type="text"
                name="description"
                value={resultCon}
                placeholder={resultCon}
              />
              <label className="text-info">Description:</label>
              <input type="text" name="description" />
              <label className="text-info">Attractions:</label>
              <input type="text" name="description" />
              <Button type="Submit" outline color="info">
                search
              </Button>
            </form>
          </Col> */}
        </Row>

        <hr />
        <Container fluid>
          <Row style={{
            marginBottom: '2rem'
          }}>
            <Col>
            <Button
              style={{
                marginTop: '1.9em',
                padding: '10px 50px',
                fontSize:'18px',
                backgroundColor: '#7fbfbf',
                color: '#e7ecee',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '700'
              }}
              id="next"
              type="submit"
              onClick={buttonBack}
              onChange={(e) => setDisplay(e.target.value)}
            >
              ({offset1}) Back 3 ({resultRadius})
            </Button>
            </Col>
            <Col>
            <Button
              style={{
                marginTop: '1.9em',
                padding: '10px 50px',
                fontSize:'18px',
                backgroundColor: '#7fbfbf',
                color: '#e7ecee',
                border: 'none',
                borderRadius: '20px',
                fontWeight: '700'
              }}
              id="next"
              type="submit"
              onClick={buttonNext}
              onChange={(e) => setDisplay(e.target.value)}
            >
              ({offset1}) Next 3 ({resultRadius})
            </Button>
            </Col>
          </Row>
        <Row>
          <Col>
            <ul>
            <li>{desc1}</li>
            </ul>
          </Col>
          <Col >
            <ul>
             <li>{desc2}</li>
            </ul>
          </Col>
          <Col>
          <ul>
           <li>{desc3}</li>
            </ul>
          </Col>
        </Row>
        </Container>
      </FormGroup>
    
    </Container>
  );
};

export default OpenMap;
