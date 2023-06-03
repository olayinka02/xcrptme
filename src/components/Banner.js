import React from 'react';



import { Container, Row, Col } from 'react-bootstrap';






function Banner() {


  return (
  
     
    
        <Container fluid >
          <Row >
            <Col md={8} lg={8} sm={12}>
            <p style={{color:'white'}}>a:hello will you be my friend. Note that the development build is not optimized.
                To create a production build, use npm run build.  Note that the development build is not optimized.
                To create a production build, use npm run build.
              </p>
            </Col>
            <Col md={4} lg={4} sm={12}>
             <p style={{color:'white'}}>b:hello will you be my friend. Note that the development build is not optimized.
                To create a production build, use npm run build.  Note that the development build is not optimized.
                To create a production build, use npm run build.
              </p> 
            </Col>
            </Row>
          


        

        </Container>

 
  );

}

export default Banner;
