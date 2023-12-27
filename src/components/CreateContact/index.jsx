import { useState } from "react";
import { FormContainer } from "components/CreateContact/CreateContact.styled";

const INITIAL_STATE = {
    name: '',
    number: ''
}

const CreateContact = ({ createContact }) => {

    const [name, setName] = useState(INITIAL_STATE.name);
    const [number, setNumber] = useState(INITIAL_STATE.number);


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name) return alert('Enter name');
        if (!number) return alert('Enter number');
        createContact({ name, number });
        setName(INITIAL_STATE.name);
        setNumber(INITIAL_STATE.number);
    }

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleChange} required />
                <label>Number</label>
                <input type="tel" name="number" value={number} onChange={handleChange} required />
                <button type="submit">Add contact</button>
            </div>
        </FormContainer>
    )
}

export default CreateContact;


// class CreateContact extends Component {
//     state = INITIAL_STATE;

//     handleSubmit = (event) => {
//         event.preventDefault()
//         const { name, number } = this.state;
//         if (!name) return alert('Enter name');
//         if (!number) return alert('Enter number');
//         this.props.createContact(this.state);
//         console.log(this.state);
//         this.setState(INITIAL_STATE);
//     }

//     handleChange = ({target: {name, value}}) => {
//         this.setState({ [name]: value });
//     }
//     render() {
//         const { name, number } = this.state;
//         return (
//             <FormContainer onSubmit={this.handleSubmit}>
//                 <div>
//                 <label>Name</label>
//                 <input type="text" name="name" value={name} onChange={this.handleChange} required />
//                 <label>Number</label>
//                 <input type="tel" name="number" value={number} onChange={this.handleChange} required />
//                 <button type="submit">Add contact</button>
//                 </div>
//             </FormContainer>
//         )
//     }
// }

// export default CreateContact;

