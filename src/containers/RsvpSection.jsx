import { React, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    guests: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const successMsg = `
    <div class="form-msg">
      

          <div>Yay! Looking forward to your esteemed presence!</div>

      
      </div>
    
    </div>`;
  // const errorMsg = `<div class="form-msg mt-4">

  //   <div>Something went wrong! Contact us at <br> Shruti Agarwal: +91 9315785908</div>

  //   </div>`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(formData);

  //     submitData();
  //   };

  //   const submitData = async () => {
  //     const { name, mobile, guests, message } = formData;
  //     try {
  //       const response = await fetch(
  //         'https://v1.nocodeapi.com/agarwalshruti/google_sheets/SRwoszNKWAQKnEbd?tabId=Sheet1',
  //         {
  //           method: 'post',
  //           body: JSON.stringify([[name, mobile, guests, message]]),
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );
  //       const json = await response.json();
  //       console.log('Success:', JSON.stringify(json));
  //       setMessage(successMsg);
  //       setFormData({
  //         name: '',
  //         mobile: '',
  //         guests: '',
  //         message: '',
  //       });
  //     } catch (error) {
  //       console.error('Error:', error);
  //       setMessage(errorMsg);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobile, guests, message } = formData;
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/agarwalshruti/google_sheets/vEDadlRSEEQcVFSi?tabId=Sheet1',
        {
          method: 'post',
          body: JSON.stringify([[name, mobile, guests, message]]),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await response.json();
      console.log('Success:', JSON.stringify(json));
      setMessage(successMsg);
      setFormData({
        name: '',
        guests: '',
        mobile: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error');
    }
  };

  return (
    <div>
      <section className='rsvp-section'>
        <div className='section-heading rsvp-heading'>Save The Date</div>
        <div className='form-container'>
          <Form onSubmit={handleSubmit}>
            <div className='form-heading'>RSVP</div>
            <Form.Group className='mb-3' controlId='NameInput'>
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='MobileInput'>
              <Form.Control
                type='text'
                placeholder='Contact no.'
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
              />

              {/* <Form.Label>Example textarea</Form.Label>
              <Form.Control as='textarea' rows={3} /> */}
            </Form.Group>
            <Form.Group className='mb-3' controlId='GuestsInput'>
              <Form.Control
                as='select'
                name='guests'
                value={formData.guests}
                onChange={handleChange}
              >
                <option value='0'>Guests</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='MessageInput'>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className='rsvp-form-btn'
              type='submit'
              //   onClick={handleClick}
            >
              I am attending!
            </Button>
          </Form>
          <div dangerouslySetInnerHTML={{ __html: message }}></div>
        </div>
      </section>
    </div>
  );
};

export default RsvpSection;
