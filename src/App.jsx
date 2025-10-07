
import './App.css'

function App() {

   return (
      <>

         <div id='main' className='d-flex justify-content-center align-items-center'>

            <div className="container-fluid ">

               <div className='row border border-secondary rounded-4 py-4 mx-md-5 mx-1 my-4 my-md-0' >

                  <div className="col-md-1"></div>

                  {/* image */}

                  <div className="col-md-5 col-12 mb-3 mb-md-0">

                     <div className=''>
                        <div id="carouselExampleIndicators" className="carousel slide ">
                           <div className="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                           </div>
                           <div className="carousel-inner rounded-5 shadow-lg">
                              <div className="carousel-item active">
                                 <img src="https://i.pinimg.com/736x/47/2f/4a/472f4a2bcb69324cf43b71252f374501.jpg" className="d-block w-100 img-fluid " alt="..." style={{objectFit:'cover' , maxHeight:'500px'}} />
                              </div>
                              <div className="carousel-item">
                                 <img src="https://i.pinimg.com/736x/14/4d/75/144d756d814f189bb5147c37b1d80e4c.jpg" className="d-block w-100 img-fluid" alt="..." style={{objectFit:'cover' , maxHeight:'500px'}}/>
                              </div>
                              <div className="carousel-item">
                                 <img src="https://i.pinimg.com/1200x/ea/04/c3/ea04c3a9981c363aab20fe8b318c0a81.jpg" className="d-block w-100 img-fluid" alt="..." style={{objectFit:'cover' , maxHeight:'500px'}}/>
                              </div>
                           </div>
                           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                           </button>
                           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                           </button>
                        </div>
                     </div>



                  </div>

                  {/* form div */}
                  <div className="col-md-5 col-12 p-md-4 p-2">

                     <div > 

                        <h1 className='text-white '>Create an Account</h1>
                        <p className='fs-6' style={{color:'black'}}>Already have an account !! <a href="" style={{color:'rgba(70, 34, 136, 1)'}} className='fs-5'>Login</a></p>
                        <form action="" >

                           <div className='d-md-flex justify-content-between gap-3'>
                              <input type="text" placeholder='First Name' className='w-100 p-2 rounded border-0 mb-md-0 mb-3' style={{outline:'none'}}/>
                              <input type="text" placeholder='Last NAme' className='w-100 p-2 rounded border-0' style={{outline:'none'}}/>
                           </div>

                           <input type="text" placeholder='Enter your Email...' className='w-100 my-3 p-2 rounded border-0'/>
                           <input type="password" placeholder='Enter your Password...' className='w-100 mb-3 p-2 rounded border-0'  />

                           <div className='d-flex gap-2'>
                              <input type="checkbox" style={{width:'20px' , height:'20px'}}/>
                              <p style={{color:'black'}}>I accept the <span style={{color:'rgba(70, 34, 136, 1)' , textDecoration:'underline' , cursor:'pointer'}}> Terms and Condition</span></p>
                           </div>

                           <button className='btn w-100 rounded-pill text-light' style={{backgroundColor:'rgba(70, 34, 136, 1)'}}>Create Account</button>


                        </form>


                        <div className='d-flex justify-content-between align-items-center my-md-4'>
                           <div className='flex-grow-1 mx-2' style={{ height:'2px' , backgroundColor:'gray'}}></div>
                           <p className='text-center m-0' style={{fontSize:'18px' , color:'gray'}}>or Register With</p>
                           <div className='flex-grow-1 mx-2' style={{ height:'2px' , backgroundColor:'gray'}}></div>
                        </div>


                        <div className='d-flex justify-content-between gap-5'>
                           <button className='rounded-3 border border-secondary p-2 text-white w-100' style={{backgroundColor:'rgb(86, 59, 104) '}}> <img src="https://img.icons8.com/color/512/google-logo.png" alt="" style={{width:'40px' , height:'40px'}}/> Google</button>

                           <button className='rounded-3 border border-secondary p-2 text-white w-100' style={{backgroundColor:'rgb(86, 59, 104)'}}> <img src="https://www.transparentpng.com/download/apple-logo/d9RxbG-apple-logo-free-png.png" alt="" style={{width:'40px' , height:'40px'}}/>Apple</button>
                        </div>

                        
                     </div>
                  </div>

                  <div className="col-md-1"></div>


               </div>
            </div>
         </div>
      </>
   )
}

export default App
