function Form(){
    return(
        <div className="second">
        <div className="content">
          <i class="fas fa-user-alt fa-2x "></i>
            <input type="text"  placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <div className="forgot">
                <h5 id="password" >forgot password?</h5>
                <h5 id="email" >forgot email?</h5>
              </div>
            <button>sign in </button>
          </div>
      </div>
    )
}
export default Form