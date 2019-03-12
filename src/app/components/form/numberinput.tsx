import { Component, h } from 'preact';
import './numberinput.css'


interface NumberInputProps {
    onChange: any,
    placeholder?: string;
    value?: string;
}

interface NumberInputState {
    value?: string;
}



const num_re = /[^\d]+/g;
const clean_string = (str: string) => str.replace(num_re, '');


export class NumberInput extends Component<NumberInputProps, NumberInputState>{
    state = {
        value: this.props.value
    };

    changeValue(e) {
        const val = clean_string(e.target.value)
        if (val !== this.state.value) {
            // const clean_val = val
            this.props.onChange(val)
            this.setState({ value: val })
        }
    }
    //  ['7', '375', '380']  7[]
    render() {
        const { onChange, value: hideme, ...rest } = this.props;
        const { value } = this.state;
        return (
            <div className='form--item textinput--holder'>
                <input
                    className='commonTextInput'
                    onChange={(e) => this.changeValue(e)}
                    onKeyDown={(e) => setTimeout(() => this.changeValue(e), 10)}
                    onKeyPress={(e) => this.changeValue(e)}
                    value={value}
                    type="tel" {...rest}
                ></input>
            </div>
        );
    }
}
