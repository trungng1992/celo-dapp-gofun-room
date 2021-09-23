import { useState } from 'react';

const AddRoom = props => {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [desscription, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCatagory] = useState('')
  const [price, setPrice] = useState('')
  const [serving, setServing] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    props.addToRoom(name, image, desscription, )
  }
}

export default AddRoom;