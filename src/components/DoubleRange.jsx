import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './custom-doubleSlider.css';

const sliderStyle = {
    trackStyle: { backgroundColor: '#5363EE', height: 4 },
    railStyle: { backgroundColor: 'white', height: 4 },
    handleStyle: {
        backgroundColor: "#5363EE",
        borderColor: '#5363EE',
        height: 45,
        width: 45,
        opacity: "100%",
        marginTop: "0px",
        border: "none",
    },
};

const DoubleRange = ({ handleSliderChange, defaultVals }) => {
    return (
        <Slider range
            className='flex justify-center items-center'
            min={399}
            max={1600}
            defaultValue={[defaultVals[0], defaultVals[1]]}
            allowCross={false}
            step={1}
            {...sliderStyle}
            onChange={handleSliderChange}
        />
    );
}

export default DoubleRange;
