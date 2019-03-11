import { Component, h } from 'preact';
import './textinput.css'


interface TextInputProps {
    onChange: any,
    placeholder?: string;
    value?: string;
}

interface TextInputState {
    value?: string;
}


export class TextInput extends Component<TextInputProps, TextInputState>{
    state = {
        value: this.props.value
    };

    changeValue(e) {
        const val = e.target.value
        this.props.onChange(val)
        this.setState({ value: val })
    }

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
                    type="text" {...rest}
                ></input>
            </div>

        );
    }
}
