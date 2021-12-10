import React from 'react';
import {Modal, Button, Col, Row, Container, Card} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import {translate} from 'react-switch-lang';



function GaleriaDialog(props) {
  //const [{t}] = React.useState(props);
  const {openDialog, setOpenDialog, project} = props

  let images = [];
  let notename = {};
  

  try{
  project.images.map((item, key) =>  
    images.push({
      original:item,
      thumbnail:item
    })
  )}
  catch (error) {
    console.log(error)
    images = [];
  }

  try{

    notename = project.notename.map((item, key)=>(
          <div key={key} style={{padding:"0", margin:0}}>
          <hr style={{padding:"0", margin:0}} />

          <h7 style={{padding:"0", margin:0}}>{Boolean(item.name) ? `${item.name}`:null}</h7>
          <div>{Boolean(item.PUM) ? `PUM: ${item.PUM}`:null}</div>
          <div>{Boolean(item.PC) ? `PC: ${item.PC}`:null}</div>
          <div>{Boolean(item.url) ? <a target="_blank" rel="noopener noreferrer" style={{color:'blue'}} href={item.url}>{item.url}</a>:null}</div>
        </div>  
       
    ))
  }
    catch (error){
      console.log(error)
      notename = {};
    }
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Modal
        className='dialogGalery'
        show={openDialog}
        onHide={handleClose}
        //backdrop="static"
        keyboard={true}
        animation={true}
        size="xl"

        aria-labelledby="contained-modal-title-vcenter"
        centered={true}
      >
       <Modal.Header closeButton>
          <Modal.Title style={{height: '20px'}}>
            {project.title}
        </Modal.Title> 

        </Modal.Header>
        <Modal.Body className="modal-content" style={{margin:'0px', padding:'0px'}}>
        <Container>
          <Row style={{margin:0, padding:0 }}>
            <Col sm={12} lg={3}  style={{margin:'0px', padding:'0px'}}>
              <Card bg='white' className='imageCard' style={{ left:'0px'}} >
                <Card.Header>INWESTOR: {project.investor}</Card.Header>
                <Card.Body>
                <Card.Title>{project.firma}</Card.Title>
                  <Card.Text
                    style={{textAlign: 'left', fontFamily:'Roboto Condensed', fontSize:'1em'}}>
                      {Boolean(project.investor === 'HK Group sp. z o.o. sp.k.')
                          ?<div style={{color:'blue', textDecoration:'underline'}}><p><a href="https://hkgroup.pl" style={{color:'blue'}}>HK Group</a></p>
                           <p><a href="https://poleska.hkgroup.pl" style={{color:'blue'}}>Poleska 5</a></p></div>
                          :null
                      }
                   {notename}
                </Card.Text>
                {/*{notename}*/}
            </Card.Body>
          </Card>
            </Col>
            <Col sm={12} lg={9} style={{margin:'0px', padding:0}}>
              <ImageGallery style={{height: '90v'}}
                lazyLoad={true} 
                items={images} />   
            </Col>
          </Row>
        </Container>


        </Modal.Body>
        <Modal.Footer style={{margin:'0px', padding:'0px'}}>
          <div style={{alignItems:'left', margin:'auto'}}>
          {project.localization}
          </div>  
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default  translate(GaleriaDialog);