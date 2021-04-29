import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function IndexPage() {
	const [message, setMessage] = useState(false); // set kondisi untuk pesan
	const [button, setButton]   = useState(false); // set kondisi untuk tombol 

	// Fungsi saat form di submit
	function sendEmail(e) {
		e.preventDefault();
	
		emailjs.sendForm('service_hxwurmj', 'template_iuho61n', e.target, 'user_4n6XG1uRXmd44MtGcDdzg')
			.then((result) => {
				// Pesan yang muncul saat sukses
				setMessage(  <div id="form-result" className="uk-alert-success uk-alert" uk-alert="true">
				  		<p>Your message has been sent!</p>
			  	</div>)
                setButton("SEND MESSAGE")
			}, (error) => {
				// Pesan yang muncul saat error
				setMessage(  <div id="form-result" className="uk-alert-success uk-alert" uk-alert="true">
                        <p>{error.text}</p>
                </div>)
                setButton("SEND MESSAGE")
			});
	  }

	return (
    <>

               
                    {message}

       <div className="uk-padding-large">
        <div className="uk-padding uk-align-center uk-card uk-card-default uk-card-body uk-width-1-2">
<h2 className="uk-h2 uk-text-center">Contact Us</h2>
        <form onSubmit={sendEmail} className="uk-grid-small uk-grid " uk-grid="true">
            <div className="uk-width-1-2@s uk-inline">
                <label htmlFor="name" className="uk-form-icon uk-form-icon-flip borderni" href="#" uk-icon="icon: user"></label>
                <input className="uk-input borderni" id="from_name" name="from_name" type="text" placeholder="Name" required></input>
            </div>
            <div className="uk-width-1-2@s uk-inline">
                <label htmlFor="email" className="uk-form-icon uk-form-icon-flip borderni " href="#" uk-icon="icon: mail"></label>
                <input className="uk-input borderni" id="from_name" name="from_email" type="text" placeholder="Email" required></input>
            </div>

            <div className="uk-width-1-1 ">
                <label htmlFor="message"></label>
                <textarea className="uk-textarea borderni" id="from_name" name="message" type="text" placeholder="Message" required></textarea>
            </div>

                <button className=" uk-align-center uk-button uk-button-hijau uk-text-center">{!button ? "SEND MESSAGE" : button}</button>

                </form>

           
        </div>
        </div>
    </>
	);
}
