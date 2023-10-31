import { Button, FormControl, InputLabel, Link, List, MenuItem, Select } from '@mui/material';
import { Search, ShoppingCart } from 'feather-icons-react/build/IconComponents';


import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';












function Header() {

    return (
        <div>
            <Navbar className="bg-primary" style={{ height: '60px' }}>
                <Container>

                    <Navbar.Brand style={{ color: 'white' }} href="#home"><i>Flipcart</i> <br /><i style={{ fontSize: '15px' }}>Explore <span style={{ color: 'Yellow' }}>Plus</span>
                        <img width="10" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" />
                    </i>


                    </Navbar.Brand>
                    <div className='input-wrapper' style={{ backgroundColor: 'white', width: '400px', height: '2.5rem', marginRight: '600px', display: 'flex', alignItems: 'center' }}>
                        <input type="text" placeholder='search for product brand and more' style={{ width: '350px', border: 'none', outline: 'none' }} />
                        <Search id="search-icon" color="blue" />
                        {/* <div style={{width:'100%'}}> <a href="" style={{marginLeft:'270px',color:'blue',backgroundColor:'white',textDecoration:'none',height:'2.5rem'}}>Login</a></div> */}
                        <div style={{ backgroundColor: 'white', marginLeft: '240px', height: '30px' }}>
                            <Button href="#text-buttons" ><b>Login</b></Button>
                        </div>
                        <div style={{ flex: '0 0 auto' }}>
                            <Link href="#" underline="none" style={{ marginLeft: '40px', color: 'white', display: 'flex' }}>
                                <span><b>{'Become a Seller'}</b></span>
                            </Link>
                        </div>
                        <div style={{ marginLeft: '40px', color: 'white' ,marginBottom:'10px' }} >
                            <FormControl variant="standard" sx={{ m: 1, minWidth:60 }}>
                                <InputLabel style={{ color: 'white', border: 'none' }} >More</InputLabel>
                                <Select
                                    
                                    value=''
                                    onChange=''
                                    
                                >
                                    <MenuItem value="">

                                    </MenuItem>

                                </Select>
                            </FormControl>
                        </div>

                        <div style={{marginLeft:'30px'}}>
                            <ShoppingCart  color="white" size="20px"  />
                           
                        </div>
                        <span>
                                <Link href="#" underline="none" style={{ marginLeft: '8px', color: 'white', display: 'flex' }}>
                                    <span><b>{'Cart'}</b></span>
                                </Link>
                           </span>
                    </div>



                    <List />




                </Container>

            </Navbar>

            <br />

            <div  className='shadow' style={{width:'100%',height:'40px',background:'white',marginTop:'-30px',padding:'10px'}}>
                <span style={{marginLeft:'70px'}}>Electronics</span>
                <span  style={{marginLeft:'60px'}}>TV's and Appliences</span>
                <span  style={{marginLeft:'50px'}}>Men</span>
                <span  style={{marginLeft:'40px'}}>Women</span>
                <span  style={{marginLeft:'70px'}}>Baby&Kids</span>
                <span  style={{marginLeft:'70px'}}>Home&Furniture</span>
                <span  style={{marginLeft:'70px'}}>Sports,Book&More</span>
                <span  style={{marginLeft:'70px'}}>Flighs</span>
                <span  style={{marginLeft:'70px'}}>Offerzone</span>
               
            </div>


        </div>
        
    )
}

export default Header