import logo from './slack.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='App-Background'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-Form">
          <b>Welcome!</b>

          <div className='container-usertype'>
            <button className='btn-usertype'>Freelancer</button> &nbsp;
            <button className='btn-usertype'>Corperate</button>
          </div>

          <div className='container-btn-bankId'> <button className='btn-bankId'> Sign in with bankID</button></div>
          <p className='orDivider'> **** OR **** </p>

          <form className='Register_form'>

            <input className='inputValue' type="email" required placeholder="Email" /><br />


            <input type="password" id="pwd" name="pwd" required minLength="6" placeholder="Password"></input><br></br>

            <label for="taxation">Your taxation country</label><br />
            <select name="taxation" id="cars">
              <option value="Sweden">Sweden</option>
              <option value="England">England</option>
              <option value="Finland">Finland</option>
              <option value="Norway">Norway</option>
            </select>
            <br></br>

            <label for="language">Language</label><br />
            <select name="language" id="cars">
              <option value="Swedish">Swedish</option>
              <option value="English">English</option>
            </select>
            <div className='checkbox'>
              <input type="checkbox" className="checkbox" value="check" id="agree" required />
            We need your consist to be able to provide<br></br>you with information based on your profile.<br />Read more in our <a href="url">Privacy Policy</a><br />
            </div>
            <button type="submit" className='SubmitBtn'><b>LOGGA IN</b></button>
          </form>
        </div>
        <div className='OutsideBox'>As a user of the INEXT Freelancer service I hereby declares that I am<br />over 18 years old and approve the <b>Temporary Worker Agreement<br />and General Terms and Conditions.<b /></b></div>
     
      <div className='OutsideLogin' >Har du ett konto? <a href="url">Logga in</a></div>
      </div>
      
    </div>
  );
}

export default App;
