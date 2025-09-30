
import './App.css'

function App() {

   return (
      <>

        
            <div id='container' className='container mt-5' >
   
               <div className='row mt-5 py-5 px-2 border border-secondary rounded-5 gx-5' style={{backgroundColor:'rgb(91, 77, 91)'}}>
   
                  <div className="col-md-6 w-full bg-transparent" >
   
                     
   
                     {/* caurosel */}
   
                     <div id="carouselExample" className="carousel slide rounded-4 bg-transparent" >
                        <div className="carousel-inner">
                           <div className="carousel-item active w-full">
                              <img src="https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg" alt="" className='rounded' style={{ width: '100%', height: '500px' }} />
                           </div>
                           <div className="carousel-item w-full">
                              <img src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" className='rounded' style={{ width: '100%', height: '500px' }} />
                           </div>
                           <div className="carousel-item w-full">
                              <img src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" className='rounded ' style={{ width: '100%', height: '500px' }} />
                           </div>
                        </div>
                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                           <span className="carousel-control-prev-icon bg-transparent" aria-hidden="true"></span>
                           <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                           <span className="carousel-control-next-icon bg-transparent" aria-hidden="true"></span>
                           <span className="visually-hidden">Next</span>
                        </button>
                     </div>
   
   
   
                  </div>
   
   
                {/* form */}
   
                  <div className="col-md-6 " >
   
                     <div className='p-4 rounded ' >
                        <h1 className='text-light text-center'>Create An Account</h1>
   
                        <p className='mb-4' style={{color:'white'}}>Already Have an Account !!<a href="" style={{ paddingLeft: '5px', fontSize: '18px', color: ' rgba(171, 65, 200, 1)' }}>Login</a></p>
   
                        <form action="" >
   
                           <div id='name'>
                              <input type="text" placeholder='FName' className='form-control border-0 p-2' style={{backgroundColor:' rgba(148, 124, 148, 1)'}}/>
                              <input type="text" placeholder='LName' className='form-control border-0 p-2' style={{backgroundColor:' rgba(148, 124, 148, 1)'}}/>
                           </div>
   
                           <input type="text" placeholder='Email' className='form-control border-0 p-2' style={{ marginTop: '15px' , backgroundColor:' rgba(148, 124, 148, 1)' }}  />
                           <input type="password" placeholder='Enter your password' className='form-control border-0 p-2' style={{ marginTop: '15px', marginBottom: '20px' , backgroundColor:' rgba(148, 124, 148, 1)'}} />
   
                           <div className='d-flex justify-content-start align-items-start'>
                              <input type="checkbox" />
                              <p style={{ marginTop: '-8px', paddingLeft: '5px' , color:'white'}}>I agree to the <span style={{ color: ' rgba(171, 65, 200, 1)' , textDecoration:'underline' }}>Term and Condition</span></p>
                           </div>
   
                           <button className='btn  rounded p-2' style={{ width: '100%' , backgroundColor:' rgba(92, 52, 157, 1)' , color:'white' }}>Create an Account</button>
   
                           
   
                           <div className='d-flex justify-content-center align-items-center m-4'>
                              <div style={{width:'200px' , height:'1px' , backgroundColor:'gray'}}></div>
                              <p className='text-center text-secondary'>Or Register with</p>
                              <div style={{width:'200px' , height:'1px' , backgroundColor:'gray'}}></div>
                           </div>

                           {/* google apple login */}
   
                           <div className='d-flex justify-content-between ' >
   
                              <div className='d-flex justify-content-between ' style={{ width: '100%' }}>
   
                                 <button className='btn btn-transparent rounded border border-secondary px-5 '><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" height={'40px'} width={'40px'} />Google</button>
   
                                 <button className='btn btn-transparent rounded border border-secondary px-5'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png" alt="" height={'40px'} width={'40px'} />Apple</button>
   
   
                              </div>
   
                           </div>
                        </form>
   
   
   
                     </div>
   
   
   
                  </div>
               </div>
      
            </div>
        


      </>
   )
}

export default App
