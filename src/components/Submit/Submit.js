const Submit = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>title:</td>
            <td>
              <input type="text" size="50" name="title" />
            </td>
          </tr>
        
          <tr>
            <td>url:</td>
            <td>
              <input type="text" size="50" name="url" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>or</td>
          </tr>
          <tr>
            <td>content:</td>
            <td>
              <textarea type="text" rows="4" name="content" cols="43"/>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button">Submit</button>
        
    </div>      
  )
}

export default Submit;

