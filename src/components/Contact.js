import React , {useState} from "react";
import contactImage from "../images/contact-image.png";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [popupSend , setPopupSend] = useState(false);
  const [popupWrong , setPopupWrong] = useState(false);
  const sendAlert = () => {
    setPopupSend(true)
    setTimeout(() => {setPopupSend(false)} , 3000);
  }

  const wrongAlert = () => {
    setPopupWrong(true)
    setTimeout(() => {setPopupWrong(false)} , 3000);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_69pob48', 'template_nnpnuaq', e.target, 'user_7rv1w2YCi6HllJO9RY2aA')
      .then((result) => {
        sendAlert();
          console.log(result.text);
         
      }, (error) => {
        wrongAlert();
          console.log(error.text);

      });
      e.target.reset();
  }

  return (
    <section id="contact">
      <Styledcontainer>
        <FormContainer>
          <h2>contact me</h2>
          <p>
            if you interesting in work togther pleace feel free to
            contact me
          </p>
          <form onSubmit={sendEmail}>
            <div className="name">
              <label htmlFor="name">name</label>
              <input required type="text" name="name" id="name" placeholder="jone doh" />
            </div>
            <div className="email">
              <label htmlFor="email">e-mail</label>
              <input required type="email" name="email" id="email" placeholder="example@gmail.com" />
            </div>
            <div className="message" style={{ gridColumn: "1/4" }}>
            <label htmlFor="message">message</label>

              <textarea
                required
                style={{ maxWidth: "none" }}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="type something"
              ></textarea>
            </div>
            <div className="cta">
              {popupSend && <p className="popup">thanks 🙏</p>}
              {popupWrong && <p className="popup popup-bad">something went wrong</p>}
              <StyledButton className="btn">send</StyledButton>
            </div>
          </form>
        </FormContainer> 
                 <img src={contactImage} className="img" alt="" />

      </Styledcontainer>
    </section>
  );
};

const Styledcontainer = styled.div`
  padding: 8rem 5rem 5rem;
  position: relative;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 990px) {
    flex-direction: column;
    flex-flow: column-reverse;
    align-items: center;
  }
  .img {
    position: absolute;
    max-width: 18rem;
    width: 100%;
    top: 0;
    right: 12.5rem;
    transform: translateY(calc((1rem + 2vw) * -2)) rotate(40deg);
    z-index: 9;
    @media (max-width: 680px) {
      width: calc(100vw / 3.5);
      right: 0rem;
      top: -1rem;
  }
  @media (max-width: 500px) {
    
      right: 0rem;
  }

      }

`;


const FormContainer = styled.div`
  position: relative;
  h2 {
    color: #282828;
  }

  p {
    font-size: 1.6rem;
    color: #404040;
    margin: 1.2rem 0;
    max-width: 40rem;
  }

  label {
    display: block;
    font-size: 1.4rem;
    text-transform: capitalize;
    color: #404040;
    margin-bottom: 0.4rem;
  }
  input,
  textarea {
    max-width: 40rem;
    width: 100%;
    border: solid 0.1rem #707070;
    border-radius: 0.5rem;
    padding: 1.4rem;
    background-color: transparent;
  }

  input::placeholder,
  textarea::placeholder {
    color: #808080;
  }

  textarea {
    width: calc(100% - 2rem);
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  form > div {
    padding: 0.6rem 0;
  }

  .cta {
    grid-column: 1/4;
    text-align: center;
    .popup {
      width: fit-content;
      margin: 0 auto 2rem;
      padding: 1rem 2rem;
      border-radius: .3rem;
      background-color: #d9dbdd;

      &-bad {
        background-color: #ffd2cf;

      }
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  background-color: var(--p-color);
  padding: 1.5rem 4rem;
  color: white;
  text-transform: capitalize;
  font-size: 1.6rem;
  border-radius: 50rem;
`;

export default Contact;
