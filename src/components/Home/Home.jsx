import React from "react";

import { Box } from '@mui/material';
//import Search from "../Layouts/Search"
//import Navbar from "./Navbar";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import imageSrc from "../../images/dabb327ce88f9fcc7f707d7d08943724.png"
import Layouts from "../Layouts/Layouts";
import FilterPage from "../../pages/FilterPage"







const Home = () => {
    return (
        <div>
            <Layouts>

               

                        <Box sx={{

                    marginLeft: '5%',
                    marginTop: '60px',
                    width: '1516px',
                    background: 'linear-gradient(90deg, #7286B4 0%, #E794CE 100%)',
                    color: 'white',
                    height: "100px",
                    p: 1,
                    borderRadius: 'inherit'
                }}>
                    <p style={{
                       color: " #2E0052", 
                      




                    }}> Grab upto 50% off on Selected headphones</p> 
                    <img style={{
                        width: "532px",
                        height: "366px",
                        top: "170px",
                        left: "1127px",


                    }} src={imageSrc} alt="Example" style={{ Width: '0px', maxHeight: '130px', marginLeft: '70%' }} />


                </Box>
               

            <FilterPage/>
           

            </Layouts>







        </div>

    );
}
export default Home;