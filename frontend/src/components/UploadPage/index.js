import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import * as sessionActions from "../../store/session";
// import './SignupForm.css';

function UploadPage() {
  // const dispatch = useDispatch();
  // const sessionUser = useSelector((state) => state.session.user);
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/discover" />;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //     setErrors([]);
  //     return dispatch(sessionActions.signup({ email, username, password }))
  //       .catch(async (res) => {
  //         const data = await res.json();
  //         if (data && data.errors) setErrors(data.errors);
  //       });
  //   }
  //   return setErrors(['Confirm Password field must be the same as the Password field']);
  // };

  return (
    <div>Hello from uplaod</div>
    // <form onSubmit={handleSubmit}>
    //   <div className="signup">
    //     <ul>
    //       {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    //     </ul>
    //     <label>
    //       u
    //       <input
    //         type="text"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       u
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       u
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       u
    //       <input
    //         type="password"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <button type="submit">Uploade</button>
    //   </div>
    // </form>
  );
}

export default UploadPage;
