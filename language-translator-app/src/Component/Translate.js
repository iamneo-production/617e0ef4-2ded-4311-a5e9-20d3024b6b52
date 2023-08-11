import React from 'react';
import "../App.css";
import {
    Form,
    TextArea,
    Button,
    Icon
} from 'semantic-ui-react';

export default function Translate() {
    
    return (
        <div>
            <div className="app-header">
                <h2 className="header"> Translator</h2>
                <Icon className='translate-icon' name='translate' />
            </div>

            <div className='app-body'>
                    <Form>
                        <Form.Field
                            control={TextArea}
                            placeholder='Type Text to Translate..'
                        />

                        <select className="language-select">
                            <option>Please Select Language..</option>
                            <option>Telugu</option>
                            <option>English</option>
                        </select>
                        

                        <Form.Field
                            control={TextArea}
                            placeholder='Your Result Translation..'
                        />

                        <Button
                            color="orange"
                            size="large"
                        >
                            <Icon name='translate' />
                            Translate</Button>
                    </Form>
            </div>
            <div className='footer'>
                <p color="black">Please visit again....</p>
            </div>
        </div>
    )
}