import React, {useState} from 'react'
import Phone from '../Assets/mobile_phone.png'
import Email from '../Assets/email.png'
import Address from '../Assets/maps-and-flags.png'
import Website from '../Assets/global.png'
import './contact.css';
import axios from 'axios';

function Contact() {

  // const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, subject, message);

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill in all the fields')
      return
    }
    axios.post("https://fir-react-fd4d2-default-rtdb.asia-southeast1.firebasedatabase.app/e-comm__contact.json", {
      name: name,
      email: email,
      subject: subject,
      message: message
    })
    .then((response) => {
      alert('Message sent successfully')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    })
    .catch((error) => {
      alert('Error sending message')
    })
  }
  return (
      <div className='contact_sec1'>
        <div className='contact_sec1_list1'>
          <h2>Send us a message</h2>
        <form action="submit-form.php" method="post" onSubmit={handleSubmit}>
        <input type="input" class="form__field" placeholder="Name" name="name" id='name' required  value={name} 
            onChange={(e) => {setName(e.target.value)}}/>
        {/* <label for="name" class="form__label">Name</label> */}
        <input type="input" class="form__field" placeholder="Email" name="name" id='name' required  value={email} onChange={e=>{setEmail(e.target.value)}}/>
        {/* <label for="name" class="form__label">Name</label> */}
        <input type="input" class="form__field" placeholder="Subject" name="name" id='name' required value={subject} onChange={e=>{setSubject(e.target.value)}}/>
        {/* <label for="name" class="form__label">Name</label> */}
        <textarea  type="text" class="form__field" id="message" name="message" placeholder='Message' required value={message} onChange={e=>{setMessage(e.target.value)}}></textarea><br/>

        <button class="button_contact" type="submit">Send Message</button>
      </form>
        </div>
        <div className='contact_sec2'>
      <h2 class="contact">Contact Us</h2>
      <p>We're Open for any suggestion or Just have to chat</p>
      <div className='conatct_sec2_list2'>
        <img src={Address} alt="Phone"/>
      <span><b>Address: </b>196 VOC 1st Street, Chennai,TamilNadu,600096 </span></div>
      <div className='conatct_sec2_list2'>
        <img src={Phone} alt="Phone" />
      <span><b>Phone:</b> 9087654321 /04173-227891</span></div>
      <div className='conatct_sec2_list2' >
        <img src={Email} alt="Phone"/>
      <span><b>Email: </b>   swapmart@gmail.com</span></div>
      <div className='conatct_sec2_list2' >
        <img src={Website} alt="Phone"/>
      <span><b>Website:</b>   www.swapmart.com</span></div>
      </div>
      </div>
  )
}
export default Contact;