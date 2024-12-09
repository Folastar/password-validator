// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState, useEffect, useRef} from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { LiaEyeSlashSolid } from "react-icons/lia";
// import { FontAwesomeIcon,fas } from '@fortawesome/react-fontawesome'
const USER_REGEX=/^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {
    const userRef= useRef()
    const errRef= useRef()
    const [user, setUser]= useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus , setUserFocus] = useState(false)

    const [pwd, setPwd]= useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd]= useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg]= useState('')
    const [success, setSuccess] = useState(false)



    const [pwdShow, setPwdShow] = useState(false)
    const [confirmPwdShow, setConfirmPwdShow] = useState(false)


        // const handleClick =()=>{
        //     setPwdShow(!pwdShow)
        // }

    useEffect(()=>{
        userRef.current.focus()  //when componenets loads focus is on a particular input
    },[])

    useEffect(()=>{
        const result =USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    },[user])

    useEffect(()=>{
        console.log(pwd)
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
        // console.log(result)
    },[pwd, matchPwd])
    
    useEffect(()=>{
        setErrMsg('')
    },[user,pwd, matchPwd])


    const handleSubmit =async(e)=>{
        e.preventDefault()

    }
  return (
    <div>
      <section>
        <p ref={errRef} className={errMsg?"errMsg": "offscreen"} aria-live='assertive'>{errMsg}</p>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username:
                <span className={validName? "valid": "hide"}>
                    {/* <FontAwesomeIcon icon={fas.faHouse}/> */}
                    
                </span>

                <span className={validName || !user ? "hide":"invalid"}>
                {/* <FontAwesomeIcon icon={faTimes}/> */}

                </span>
                </label>
            <input type='text'
                id="text"
                ref={userRef}
                autoComplete='off'
                onChange={(e)=>{setUser(e.target.value)}}
                required
                aria-invalid={validName? "false": "true"}
                aria-describedby='uidnote'
                onFocus={()=>setUserFocus(true)}
                onBlur={()=>setUserFocus(false)}

                />
                
                <p id='uidnote' className={userFocus && user && !validName ? "instructions" :"offscreen"}>
                    {/* <FontAwesomeIcon icon={faInfoCircle}/> */}
                    4-28 characters<br/>
                    must begin with a letter <br />
                    letter, number, underscores, hyphens allowed.
                </p>



                <label htmlFor="password">
                Password:
                <span className={validPwd? "valid": "hide"}>
                    {/* <FontAwesomeIcon icon={fas.faHouse}/> */}
                    ✔
                </span>

                <span className={validPwd || !pwd ? "hide":"invalid"}>
                {/* <FontAwesomeIcon icon={faTimes}/> */}
                    ❌
                </span>
                </label>
            <input 
                id="password"
                type={pwdShow? "text": "password"}
                onChange={(e)=>{setPwd(e.target.value)}}
                required
                aria-invalid={validPwd? "false": "true"}
                aria-describedby='pwdnote'
                onFocus={()=>setPwdFocus(true)}
                onBlur={()=>setPwdFocus(false)}

                />

                <span className='seek' onClick={()=> setPwdShow((prev) => !prev)}>{pwdShow? <LiaEyeSolid />: <LiaEyeSlashSolid />}</span>
                <p id='pwdnote' className={pwdFocus  && !validPwd ? "instructions" :"offscreen"}>
                    {/* <FontAwesomeIcon icon={faInfoCircle}/> */}
                    8-28 characters<br/>
                    must include uppercase and lowercase letters, a number and a special character <br />
                    allowed special characters <span aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span>
                    <span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span><span aria-label='percent'>%</span>
                </p>




                <label htmlFor="confirm_pwd">
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid": "hide"}>
                    {/* <FontAwesomeIcon icon={fas.faHouse}/> */}
                    ✔
                </span>

                <span className={validMatch || !matchPwd ? "hide":"invalid"}>
                {/* <FontAwesomeIcon icon={faTimes}/> */}
                    ❌
                </span>
                </label>
                <input 
                type={confirmPwdShow? "text": "password"}
                id="confirm_pwd"
        
                onChange={(e)=>{setMatchPwd(e.target.value)}}
                required
                aria-invalid={matchPwd? "false": "true"}
                aria-describedby='confirmnote'
                onFocus={()=>setMatchFocus(true)}
                onBlur={()=>setMatchFocus(false)}

                />
                <span className='seek' onClick={()=> setConfirmPwdShow(!confirmPwdShow)}>{confirmPwdShow? <LiaEyeSolid />: <LiaEyeSlashSolid />}</span>

                <p id='confirmnote' className={matchFocus  && !validMatch ? "instructions" :"offscreen"}>
                    {/* <FontAwesomeIcon icon={faInfoCircle}/> */}
                   Must match the firrst password input field
                </p>



                <button disabled={!validName ||!validPwd|| !validMatch ?true:false}>Sign up</button>
        </form>


        <p>
            Already Registered

            <span>
                {/* put routerr link here */}
                <a href="#">Sign in</a>
            </span>
        </p>
      </section>
    </div>
  )
}

export default Register
