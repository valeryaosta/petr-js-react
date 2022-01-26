import {useCallback, useEffect, useMemo, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
/* class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: false,
            slide: 0
        }
    }

    changeSlide = (i) => {
        this.setState(({slide}) => ({
            slide: slide + i
        }))
    }

    toggleAutoplay = () => {
        this.setState(({autoplay}) => ({
            autoplay: !autoplay
        }))
    }

    componentDidMount() {
        document.title = `Slide: ${this.state.slide}`
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `Slide: ${this.state.slide}`
    }

     render() {
        return (
            <Container>
                <div className="slider w-50 m-auto">
                    <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                    <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
                    <div className="buttons mt-3">
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(-1)}>-1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => this.changeSlide(1)}>+1</button>
                        <button 
                            className="btn btn-primary me-2"
                            onClick={this.toggleAutoplay}>toggle autoplay</button>
                    </div>
                </div>
            </Container>
        )
    }
}*/

const countTotal = (num) => {
    console.log('counting...')
    return num + 10
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0)
    const [autoplay, setAutoplay] = useState(false)

    useEffect(() => {
        document.title = `Slide: ${slide}`
        // window.addEventListener('click', logging)

        // return () => {
        //     window.removeEventListener('click', logging)
        // }

    }, [slide])
    useEffect(() => {
        // console.log('autoplay')
    }, [autoplay])

    const changeSlide = (i) => {
        // setSlide(slide + i)

        // когда важно пред значение агрумента, slide напрямую изменять не можем
        setSlide(slide => slide + i)
    }
    const toggleAutoplay = () => {
        // setAutoplay(!autoplay)
        setAutoplay(autoplay => !autoplay)
    }

    const getSomeImages = useCallback(() => {
        console.log('fetching')
        return [
            // 'https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2021/11/02/12/4999384/d53776b3b010f6c92bdf3e0d7946b938aabd8c08.webp',
            'https://klike.net/uploads/posts/2020-01/1578662816_1.jpg',
        ]
    }, [slide])

    const total = useMemo(() => {
        return countTotal(slide)
    }, [slide])

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('styles changed!')
    }, [style])

    return (
        <Container>
            <div className="slider w-50 m-auto">

                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide}
                    <br/>
                    {autoplay ? 'auto' : null}
                </div>
                <div className="text-center mt-5" style={style}>Total slides: {total}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}
                    >-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}
                    >+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => toggleAutoplay()}
                    >toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}


const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img className="d-block w-100" key={i} src={url} alt="slide"/>)}
        </>
    )
}


function App() {

    const [slider, setSlider] = useState(true)

    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider/> : null}
        </>
    );
}

export default App;
