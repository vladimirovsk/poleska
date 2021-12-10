import React from 'react';
import {Carousel, Container} from "react-bootstrap";

import './Slider.scss'

function Slider(props) {
    const {imageData, Caption} = props;
    const [setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid={false}>
            <Carousel fade={true}
                      controls={false}
                      indicators={true}
                      pause={false}
                      wrap={true}
                      interval={5000}
                      onSelect={handleSelect}
            >
                {imageData.map((image, key) => (
                    <Carousel.Item key={"Item+"+key} className={'carusel-item'}>
                        <img key={"Image"+key} className={'d-block w-100'} src={image} alt={image}/>
                        <Carousel.Caption key={"Caption"+key}>
                            {Caption}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}

export default Slider


/*
<Container fluid={false}>
            <div style={{ display: 'block'}}>
            <Carousel fade={true}
                      controls={true}
                      indicators={true}
                      pause={false}
                      wrap={true}
                      interval={5000}
                      activeIndex={index}
                      onSelect={handleSelect}
                      defaultActiveIndex={1}
            >
                {imageData.map((image, key) => (
                    <Carousel.Item key={"Item+"+key} className={'carusel-item'}>
                        <img key={"Image"+key} className={'d-block w-100'} src={image} alt={image}/>
                        <Carousel.Caption key={"Caption"+key}>
                            {Caption}
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
            </Carousel>
            </div>
        </Container>
* */