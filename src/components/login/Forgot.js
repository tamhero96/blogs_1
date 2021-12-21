
const Forgot = () => {
  return (
    <div>
      <br />
      <b>Reset your password</b>
      <form>
        <table>
          <tbody>
            <tr>
              <td>username:</td>
              <td>
                <input type="text" name="acct" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button">Send reset email</button>
      </form>      
    </div>
  )
}

export default Forgot;
