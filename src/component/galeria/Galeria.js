import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {GaleriaData} from './GaleriaData'
import {Row, Col, Container, ListGroup} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';

import './Galeria.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'black',
        color: 'white'
    },
    gridList: {
        width: '80%'
    }
}));

function Galeria(props) {
    const classes = useStyles();
    const [selectGaleria, setSelectGaleria] = useState(GaleriaData[0]);
    ;

    const handleClickListItem = (project) => {
        setSelectGaleria(project)
    }


    React.useEffect((props) => {
       setSelectGaleria(selectGaleria)
    }, [selectGaleria])


    const getImagesGalery = (project) => {
        let images = [];
        try {
            project.map((item, key) =>
                images.push({
                    original: item.image,
                    thumbnail: item.image,
                    description: item.caption
                })
            )
        } catch (error) {
            images = [];
        }
        return images;
    }

    return (
        <div className={classes.root} style={{backgroundColor: 'white'}}>
            <Container fluid={true} className='Contact' style={{backgroundColor: 'white'}}>
                <Row style={{
                    height: '5vh',
                }}>
                </Row>
                <Row className="justify-content-center mx-auto">
                    <Row className='cardFirma'>
                        <Col com={2}></Col>
                        <Col className={'title-galeria'} sm={10}>
                            {selectGaleria.title}
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col sm={2} lg={2} style={{margin: '0px', padding: '0px'}}>
                                <Row>
                                    <Col sm={12} className={'year-row'}>
                                        2021
                                    </Col>
                                </Row>
                                <ListGroup variant="flush" defaultActiveKey="list-2021-1" >
                                    {GaleriaData.map((data) => (
                                        <ListGroup.Item action className={"text-left"}
                                                        eventKey={'list-2021-' + data.id}
                                                        onClick={(e) => handleClickListItem(data)}>
                                            {data.name}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Col>
                            <Col sm={10} lg={10} style={{margin: '0px', padding: '0px'}}>
                                <ImageGallery
                                    lazyLoad={true}
                                    items={getImagesGalery(selectGaleria.images)}
                                />
                            </Col>
                        </Row>
                        <Row style={{height: '10vh'}}></Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Galeria;