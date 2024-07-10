import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import logo from '../../common/static/image/logo.png'

const LoomForgot_otp = () => {
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/forgot-password/otp')
    };
    const navigate = useNavigate('')
  return (
    <div className='loomregister-container'>
            <div className='loom-login'>
                <div className='logo-registration'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='registration-login-form' >
                
             
                <div className='otp-container'>
                    {/* <div className='form-group'>
                        <label>Enter OTP</label>
                        <input
                            type='text'
                            placeholder='Enter OTP'
                            id='otp'
                            name='otp'
                            // value={otp}
                            // onChange={(e) => setOtp(e.target.value)}
                        />
                    </div> */}
                    <div>
                            <div >
                                <div style={{marginBottom:'30px',textAlign:'center'}}>
                                <label style={{fontWeight:'bold',fontSize:'20px'}} >Enter OTP</label>
                                </div>
                                <OtpInput 
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={7}
                                    separator={<span style={{ width: '1rem' }}></span>} 
                                    inputStyle={{
                                        width: '3rem',
                                        height: '3rem',
                                        margin: '0 0.5rem',
                                        fontSize: '1.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid  var(--primary-color)',
                                    }}
                                    renderInput={(props) => <input {...props} />}
    /> 
                                {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
                            </div>
                            <div style={{ display: 'flex', justifyContent: "center",marginTop:'30px'  }}>
                                <button onClick={handleSubmit} style={{ width: "35%"}} className='btn2' >Submit</button>
                            </div>
                        </div>
                    {/* <div style={{ marginTop: '10px' }}>
                        <button className='btn2' onClick={handleSubmit}>Submit</button>
                    </div> */}
                </div>
            </div>
        </div> 
          </div>
  )
}

export default LoomForgot_otp
