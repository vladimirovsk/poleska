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
    const [project, setProject] = useState('2021-1');
    const [selectGaleria, setSelectGaleria] = useState();
    const [title, setTitle] = useState('');
    const [titleCard, setTitleCard] = useState('');
    ;

    const handleClickListItem = (project) => {
        setProject(project)
    }

    const setDefaultActiveList = (project) => {
        let elem = document.getElementById('list-2021-1');
        console.log(elem);
    }

    const useStylesBootstrap = makeStyles((theme) => ({
        arrow: {
            color: theme.palette.common.black,
        },
        tooltip: {
            fontSize: '15px',
            backgroundColor: theme.palette.common.black,
        },
    }));

    React.useEffect((props) => {
        setSelectGaleria(Galeria);
        setTitleCard("");
    }, [project])

    React.useEffect((props) => {
        setProject(GaleriaData[0]);
        let elem = document.getElementById('list-2021-1')
        if (elem) {
            document.getElementById('list-2021-1').classList.remove('active')
        }
    }, [])


    const getImagesGalery = (project) => {
        let images = [];
        try {
            project.map((item, key) =>
                images.push({
                    original: item,
                    thumbnail: item
                })
            )
        } catch (error) {
            images = [];
        }
        return images;
    }

    const Galeria = (props) => {
        return (
            <div>
                <Row>
                    <Col sm={2} lg={2} style={{margin: '0px', padding: '0px'}}>
                        <Row>
                            <Col sm={12} className={'year-row'}>
                                2021
                            </Col>
                        </Row>
                        <ListGroup variant="flush">
                            {GaleriaData.map((project) => (
                                <ListGroup.Item action className={"text-left"} eventKey={'2021-' + project.id}
                                                id={'list-2021-' + project.id}
                                                onClick={(e) => handleClickListItem(project)}>
                                    {project.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={10} lg={10} style={{margin: '0px', padding: '0px'}}>
                        <ImageGallery style={{height: '40vh'}}
                                      lazyLoad={true}
                                      items={getImagesGalery(project.images)}/>
                    </Col>
                </Row>
                <Row style={{height: '10vh'}}></Row>
            </div>
        )
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
                        <Col className={'title-galeria'} sm={10}>{project.title}
                        </Col>
                    </Row>
                    {selectGaleria}
                </Row>
            </Container>
        </div>
    )
}

export default Galeria;