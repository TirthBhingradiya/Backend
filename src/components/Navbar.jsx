const Navbar =()=>{
    return(
    <>
       <header>
           <div className="container">
               <div className="flex justify-between">
                   
               </div>
               <nav>
     
                   <ul className="flex flex-row justify-between ">
                   <li><a href="/">Home</a></li>
                       <li><a href="/about">About</a></li>
                       <li><a href="/contact">Contact</a></li>
                       <li><a href="/service">Service</a></li>
                       <li><a href="/register">Register</a></li>
                       <li><a href="/login">Login</a></li>
                      
                   </ul>
             
               </nav>
           </div>
       </header>
   </>
    )
   }

   export default Navbar;