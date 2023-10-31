import { Button, Grid, Link, TextField } from '@mui/material'
import React from 'react'

import Card from 'react-bootstrap/Card';





function Landing() {

  return (
<>
  
      <div >
      <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
          <div>
              <Card style={{ backgroundColor: '#2874f0', width: '430px', height: '530px', marginTop: '20px' ,marginLeft:'260px'}}>
                <Card.Body>
                  <Card.Text style={{ color: 'white', fontSize: '28px', fontWeight: '500' }}>Login</Card.Text>
                  <Card.Text style={{ color: 'white',fontSize:'22px' }}>
                    Get access to your Orders, <br />Wishlist and Recommendations
                  </Card.Text>
    
                </Card.Body>
                <Card.Img variant="top" style={{width:'200px',marginLeft:'100px',marginBottom:'50px'}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" />
    
    
              </Card>
              
           </div>
  
  
          </Grid>
          <Grid item xs={8}>
            <div className='card' style={{marginTop:'22px',marginRight:'200px',paddingLeft:'5px',height:'530px'}}>
              <form>
             
              <div className='input'>  <TextField  className='outlined-basic' style={{marginTop:'30px ',marginLeft:'40px'}}  label="Enter Email/Mobile number" variant="standard" /></div>
              
              </form>
              <p style={{marginTop:'30px',marginLeft:'40px'}}>By continuing, you agree to Flipkart's <Link href="#" underline="hover">
                        {'Terms of Use '} 
                      </Link> and  <Link href="#" underline="hover">
                        {'Privacy Policy'}
                      </Link> </p>
                      <Button style={{backgroundColor:'#fb641b',color:'white',border:'none',width:'400px',marginLeft:'40px',height:'50px'}} variant="outlined"><b>Request OTP</b></Button>
              
            </div>
           
  
         
  
  
  
  
          </Grid>
       
        </Grid>
      </div>
</>
  )
}

export default Landing