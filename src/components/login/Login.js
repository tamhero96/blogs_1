import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <b>Login</b>
      <form>
        <table>
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input type="text" name="acct" />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button">login</button>
      </form>
      <br />
      <Link to="/forgot">Forgot your password?</Link>
      <br />
      <br />
      <b>Create Account</b>
      <form className="form">
        <table>
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input type="text" name="acct" />
              </td>
            </tr>
            <tr>
              <td>password:</td>
              <td>
                <input type="password" name="pw" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button">create account</button>
      </form>
    </div>
  )
}

export default Login;

