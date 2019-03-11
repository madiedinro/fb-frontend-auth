import { Component, h } from 'preact';
import './phone_form.css'
import { AlenaComponent } from '../alena'
import { TextInput, CTAComponent } from '../form'
import { CenterBoxContainer } from './centerbox'

interface PhoneFormProps {
}

interface PhoneFormState {
}


export class PhoneFormContainer extends Component<PhoneFormProps, PhoneFormState>{

    changeValue(val) {
        console.log('changed', val)
    }

    submit() {
        console.log('submit!')
    }

    render() {
        return (
            <CenterBoxContainer>
                <div className='phone--form'>
                    <AlenaComponent title={"Бот Алена"} mainText={"Доставать и спамить не буду. Буду просто хладнокровно смотреть."}></AlenaComponent>
                    <h3>Итак, приступимс</h3>
                    <p>
                    На указанный номер телефона я пришлю сообщение с дальнейшими инструкциями. В дальнейшем этот номер будет вашим постоянным идентификатором.
                    </p>
                    <div class='phone--form--group'>
                        <TextInput onChange={(val) => this.changeValue(val)} placeholder="Номер телефона с кодом страны" />
                        <CTAComponent onClick={() => this.submit()} buttonText="Отправить" />
                    </div>
                </div>
            </CenterBoxContainer>
        );
    }
}
