import { useState } from "react";


export default function Login(props) {

  const [mouseover, setmouseover] = useState(false);
  const [data, setdata] = useState({
    name: "",
    password: ""
  });

  function handelClick(event) {

    if (data.name === 'Dhanush' && data.password === '12345') {
      props.loginconfirm(true);
    }
    else {
      props.loginconfirm(false);
      alert('Wrong user name or password Try again');
    }

    event.preventDefault();

  }

  function handelMouseOver() {
    setmouseover(true);
  }

  function handelMouseOut() {
    setmouseover(false);
  }


  function handelsubmit(e) {
    e.preventDefault();
  }


  return (
    <div className="main" >
      <h1>Contact form</h1>
      <form className="form" onSubmit={handelsubmit} action="">
        <input onChange={(event) => {
          setdata(
            (prevalue) => {
              return {
                name: event.target.value,
                password: prevalue.password
              }
            }
          );
        }} type="text" placeholder="Username" />
        <input
          onChange={(event) => {
            setdata(
              (prevalue) => {
                return {
                  name: prevalue.name,
                  password: event.target.value
                }
              }
            );
          }}
          type="password" placeholder="Password" />
        <button style={{ backgroundColor: mouseover ? 'black' : 'blue' }}
          onClick={handelClick}
          onMouseOver={handelMouseOver}
          onMouseOut={handelMouseOut}
        >Login</button>
      </form>
    </div>
  );
}
