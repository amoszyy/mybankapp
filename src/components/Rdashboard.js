import React from 'react'
import axios from 'axios'
import woman from "../images/womanAtm.jpg"
import pos from "../images/pos.jpg"
import card from "../images/card.jpg"
import money from "../images/money.jpg"
import transfer from "../images/transferp.jpg"
import bitcoin from "../images/bitcoin.jpg"
import ethereum from "../images/ethereum.jpg"
import Tether from "../images/Tether.jpg"
import { useState } from 'react'
import { useEffect } from 'react' 
import gtBank from "../images/gtBank.jpg"
import {Link} from "react-router-dom"
// import Navbar from "../pages/Navbar"

const Rdashboard = ({user}) => {
  const [amount, setamount] = useState(0)
  const [walletamount, setwalletamount] = useState(0)
  const [walletdescription, setwalletdescription] = useState("")
  const [walletdueDate, setwalletdueDate] = useState("")
  const [transferamount, settransferamount] = useState(0)
  // const [walletbalance, setwalletbalance] = useState(0)
  const [displayWamount, setdisplayWamount] = useState("")
  const [withdrawalamount, setwithdrawalamount] = useState(0)
  const [accountno, setaccountno] = useState("")
  const [transferstatus, settransferstatus] = useState("")
  const [senderarray, setsenderarray] = useState([])
  const [receiverarray, setreceiverarray] = useState([])
  // const [test, settest] = useState("")
  const [walletarray, setwalletarray] = useState([])
  const [rtransferamount, setrtransferamount] = useState("")

  const [foundArray, setfoundArray] = useState([])
  const accountFunder=()=>{
   let token= localStorage.token
    
   let currentUserbal = user.balance;
   
   let  newuserbal = Number(amount) + Number(currentUserbal);
   let transactionDetails = {amount, token, newuserbal}
    // const transactionPoint = "http://localhost:5005/user/transaction"
    const transactionPoint = "https://amosbank.herokuapp.com/user/transaction"
    axios.post(transactionPoint, transactionDetails).then((result)=>{
     
      console.log(newuserbal)
     
      console.log(result.data.message)

    })

  }
  const withdraw = ()=>{
    let token = localStorage.token
    let currentUserbals = user.balance;
    let newuserbals = Number(currentUserbals) - Number(withdrawalamount);
    let transactionDetailss = {withdrawalamount, token, newuserbals}
    // const withdrawalpoint = "http://localhost:5005/user/withdrawal"
    const withdrawalpoint = "https://amosbank.herokuapp.com/user/withdrawal"
    axios.post(withdrawalpoint, transactionDetailss).then((result)=>{
      console.log(newuserbals)
      console.log(result.data.message)
    })

  }
  useEffect(() => {
    getWallet()
    getsenderdetails()
    // getreceiverdeets()
 
    
    
    
    
  
   
  },[])
  const createWallet =()=>{

    let token = localStorage.token;
    let walletbalance =0;
    let walletUserdetails = {walletamount, walletdescription, walletdueDate, token, walletbalance}
    // const walletPoint = "http://localhost:5005/user/createWallet"
    const walletPoint = "https://amosbank.herokuapp.com/user/createWallet"
    
    axios.post(walletPoint, walletUserdetails).then((result)=>{
      // console.log(walletamount)
      console.log(result.data.message)
      // console.log(result.data.data.walletamount)
      console.log(result)
      let newuserwalletamount=(result.data.data.walletamount)
      let newuserdescription = (result.data.data.walletdescription)
      let newuserduedate = (result.data.data.walletdueDate)
      
      
      
      let newwalletdetails = {newuserwalletamount, newuserdescription, newuserduedate}
      setwalletarray([...walletarray, newwalletdetails])
     
      
    })
  }
  const getWallet = (index)=>{
    let token = localStorage.token;
    let sendBack = {token}
    // const getWalletpoint = "http://localhost:5005/user/getWallet"
    const getWalletpoint = "https://amosbank.herokuapp.com/user/getWallet"
    axios.post(getWalletpoint, sendBack).then((result)=>{
      console.log(result.data.message)
      
      console.log(result)
      console.log(result.data.data)
      setwalletarray(result.data.data)
 
   
    
  
    })
  }
  const transfers = ()=>{
    let token = localStorage.token;
    // let currentUserbal = user.balance
    // let newbalance = Number(currentUserbal) - Number(amount)
    let transferDetails = {transferamount, accountno, token}
    // const transferpoint = "http://localhost:5005/user/ctransfer"
    const transferpoint = "https://amosbank.herokuapp.com/user/ctransfer"
    axios.post(transferpoint, transferDetails).then((result)=>{
      // console.log(result.data.message) 
      console.log(result)
      settransferstatus(result.data.message)
    })

  }
  const getsenderdetails = ()=>{
    let token = localStorage.token;
    let transactioninfo ={token}
    // let senderpoint = "http://localhost:5005/user/getsender"
    const senderpoint = "https://amosbank.herokuapp.com/user/getsender"
    axios.post(senderpoint, transactioninfo).then((result)=>{
      console.log(result)
      setsenderarray(result.data.data)
    })

  }
  const getreceiverdeets = ()=>{
    let token = localStorage.token;
    let receiverinfo ={token}
    // let receiverpoint ="http://localhost:5005/user/getreceiver"
    const receiverpoint = "https://amosbank.herokuapp.com/user/getreceiver"
    axios.post(receiverpoint, receiverinfo).then((result)=>{
      console.log(result)
     
      let sendernamee = (result.data.data.sendername)
     
      let senderaccountt = (result.data.data.senderaccount)
      let receiverdeets = {sendernamee, senderaccountt}
    
      setreceiverarray([...receiverarray, receiverdeets])
      console.log(receiverarray)
      console.log(receiverdeets)
    })
  }
 
  
      
 


  return (
    <>   
    <section className='body'>
    <div>
      {/* <Navbar/> */}
         <div className='container-fluid d-md-block d-none'>
            <div className='row'>
                <div className='col-md-2  pt-5 sidenav d-none d-md-block '>
                  
                
                 
                    <li className="nav-item nav-link " data-bs-toggle="modal" data-bs-target="#modelId"><i class="fa fa-address-book" aria-hidden="true"></i><a href="#" style={{textDecoration:"none"}} className="text-white"><b>dashboard</b></a></li>
                      <li className="nav-item nav-link text-white pt-2 " data-bs-toggle="modal" data-bs-target="#modelId"><i class="fa fa-credit-card-alt" aria-hidden="true"></i><a href="#" style={{textDecoration:"none"}} className="text-white"><b>withdraw</b></a></li>
                    <li className="nav-item nav-link text-dark" data-bs-toggle="modal" data-bs-target="#modelIdcreate"><i class="fa fa-credit-card-alt" aria-hidden="true"></i><a href="#" style={{textDecoration:"none"}} className="text-white"><b>create new wallet</b></a></li>
                    <li className="nav-item nav-link text-white" data-bs-toggle="modal" data-bs-target="#modelId"><i class="fa fa-credit-card-alt" aria-hidden="true"></i><a href="#" style={{textDecoration:"none"}} className="text-white"><b>Transfer</b></a></li>
           
                    
                    

                </div>
                <div className='col-md-6 bg-light '>
                  <h1 className='text-dark'>Welcome {user.firstname}</h1>
                  {/* <button onClick={getWallet}>test get</button> */}
                  <div className='container-fluid '>
                    <div className='row border border-2 border-dark pt-3 pb-3'>
                      <div className='col-md-1 col-1'></div>
                        <div className='col-md-3 col-4 rounded-4 bg-light h-100 shadow pt-3 pb-3'>
                          <p>account no:</p>
                          <b>{user.accountNumber}</b>
                        </div>
                        <div className='col-md-1 col-1'></div>
                        <div className='col-md-3 col-4 bg-light rounded-4 h-100 shadow pt-3 pb-3'>
                          <p >balance:</p>
                          <b>${user.balance}</b>
                          {/* <h1>{displayWamount}</h1> */}
                        </div>
                    </div>
                   {/* <a href="" style={{textDecoration:"none"}}> */}
                  <div className='card my-2  bg-light pb-2'>
                  <div className='row '>
                  <div className='col-md-1 col-1'></div>
                      <div className='col-md-3   shadow col-4  bg-light '  data-bs-toggle="modal" data-bs-target="#modelId">
                       
                           <b className='text-dark'>fund account</b>
                           <img src={pos} className="w-100 h-75" alt="" />
               
                       
                      

                      </div>
                      <div className='col-md-1 col-1'></div>
                      <div className='col-md-3 col-5 mt-1 bg-light shadow' data-bs-toggle="modal" data-bs-target="#modelIdcreate">
                        <b className='text-dark'>create new wallet</b>
                        <img src={card} className="w-100 h-75" alt="" />
                       

                      </div>

                    </div>
                  </div>
                  <div className='card my-2 bg-light pb-2'> 
                  <div className='row  '>
                    <div className='col-md-1 col-1'></div>
                    <div className='col-md-3 col-4 shadow  bg-light' data-bs-toggle="modal" data-bs-target="#modelIdw">
                      <b>withdraw</b>
                      <img src={money} alt="" className='w-100 h-75'/>
                    </div>
                    <div className='col-md-1 col-1'></div>
                    <div className='col-md-3 col-4 shadow  bg-light' data-bs-toggle="modal" data-bs-target="#modelIdt">
                      <b>transfer</b>
                      <img src={transfer} alt="" className='w-100 h-75'/>
                    </div>
                  </div>
                  
                  </div>
                 
              
                   
              
              
                    <div className='container-fluid'>
                    <div className='row'>
                     
                    {
                      walletarray.map((user, index)=>(
                       <>
                      
                     
                    
                        <div className='col-md-4  mx-1 card my-2 bg-light'>
                          <p className='text-dark'>description:{user.newuserdescription}{user.walletdescription}</p><br />
                          
                          {/* <hr /> */}
                          <b className='text-dark'>amount: {user.newuserwalletamount} {user.walletamount}</b><br />
                          
                          {/* <hr /> */}
                          <b className='text-dark'>due date : {user.newuserduedate}{user.walletdueDate}</b><br />
                      


                        </div>
                      
                       
                 
                     
                  
                       </> 

                      
                      ) )
                  
                  }
                   </div>
                    </div>
         
                    
                   {/* </a> */}
    
                   
                   


                  </div>
                </div>
                <div className='col-md-4 d-none d-md-block'>
                <div className='container-fluid'>
                    <div className='row'>
                  {
                    receiverarray.map((user, index)=>{
                      <>
                      <div className='col-md-4  mx-1 card my-2 bg-light'>
                           
                          {/* <hr /> */}
                          <b className='text-dark'>senderaccount:{user.newreceiverBalance}</b><br />
                          
                          {/* <hr /> */}
                          <b className='text-dark'>name:{user.sendernamee}  </b><br />
                          <p>amount:{user.creditamount}</p>

                      </div>

                      </>
                    })

                  }
                </div>
                </div>
                  <h6>crypto currencies</h6>
                  <img src={bitcoin} className='rounded-5 w-50'  alt="" />
                  <img src={ethereum} className='rounded-5 shadow' alt="" />
                  <img src={Tether} className='rounded-5 shadow w-75 my-2' alt="" />
                </div>
            </div>

         </div>
    </div>
    <>
       
    <div className='container-fluid topGt d-md-none d-block'>
    <nav className="navbar navbar-expand-lg navbar-light">
            <Link to={"/"} style={{color:"black", textDecoration:"none"}}><b>Amos Bank</b></Link>
     
        <div>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#my_nav">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-around" id="my_nav">
            <ul className="navbar-nav">
                <li className="nav-item">  <Link to={"/"}  className="nav-link text-dark"><b>Home</b></Link></li>
              
                <li className="nav-item">  <Link to={"/fetch"}  className="nav-link text-dark"><b>About Us</b></Link></li>
                <li className="nav-item">  <Link to={"/portal"}  className="nav-link text-dark"><b>Portal</b></Link></li>
                <li className="nav-item">  <Link to={"/counter"}  className="nav-link text-dark" ><b>Counter</b></Link></li>
              
                 
            </ul>
           
        </div>
    </nav>
        <div className='row'>
            <div className='col-4'>
                <button className='btn'>acc 1 of 1</button>
                <b className='text-dark'>Welcome {user.firstname}</b>
            </div>
            <div className='col-5'></div>
            <div className='col-3'>
                <img src={gtBank} alt="" className='w-100 h-100'/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <p className='text-white'>Savings account</p>
                <b>acc no:{user.accountNumber}</b><br />
                <b>${user.balance}</b>
                
                <b></b>
                <b></b>
            </div>
        </div>


    </div>
    <div className='container-fluid d-md-none d-block'>
        <div className='row'>
            <div className='col-12'>
                <input type="text" className='form-control my-2' placeholder='i want to pay'/>
            </div>
        </div>
        <div className='col-md-10 mx-auto '>
        <div className='row pt-5 pb-2'>
            <div className='col-4' data-bs-toggle="modal" data-bs-target="#modelIdt">
                {/* <div className='col-12 mx-auto' > */}
                <i class="fa fa-exchange" aria-hidden="true"></i><br /> 
                
                {/* </div> */}
                <b>Transfers</b>
            
            </div>
            <div className='col-4' >
                {/* <div className='col-12 mx-auto'> */}
                <i class="fa-sharp fa-solid fa-person-running"></i><br />
                {/* </div> */}
           
            <b>on the go</b>
            </div>
            <div className='col-4 ' data-bs-toggle="modal" data-bs-target="#modelIdw">
                <div className='col-6 mx-auto'>
                <i class="fa-solid fa-coins"></i><br />
                </div>
           
            <b className='text-center'>withdraw</b>
            </div>
        </div>
        </div>
        <div className='col-md-10 mx-auto my-1'>
        <div className='row pt-3'>
            <div className='col-4 ' data-bs-toggle="modal" data-bs-target="#modelIdcreate">
                {/* <div className='col-12 mx-auto'> */}
                <i class="fa-solid fa-wallet"></i><br />
                
                {/* </div> */}
                <b>create wallet</b>
            
            </div>
            <div className='col-4'  data-bs-toggle="modal" data-bs-target="#modelId">
                {/* <div className='col-12 mx-auto'> */}
                <i class="fa-solid fa-money-bill"></i><br />
                {/* </div> */}
           
            <b>fund acct</b>
            </div>
            <div className='col-4'>
                <div className='col-6 mx-auto'>
                <i class="fa-solid fa-coins"></i>
                </div>
           
            <b className='col-3 mx-auto' >crypto </b>
            </div>
        </div>
        </div>
        <div className='col-md-10 mx-auto '>
        <div className='row pt-5 pb-2'>
            <div className='col-4' >
                <div className='col-12 mx-auto'>
                <i class="fa-solid fa-phone"></i>
                
                </div>
                <b>contact us</b>
            
            </div>
            <div className='col-5 '>
                <div className='col-12 mx-auto'>
                <i class="fa-solid fa-money-bill"></i><br />
                </div>
           
            <b>branch</b>
            </div>
            <div className='col-3'>
                {/* <div className='col-6 mx-auto'> */}
                <i class="fa-solid fa-coins"></i><br />
                {/* </div> */}
           
            <b className=''>help?</b>
            </div>
        </div>
        </div>
  
    </div>
    <hr />

    </>
    <div className='container-fluid d-block d-md-none'>
                    <div className='row'>
                     
                    {
                      walletarray.map((user, index)=>(
                       <>
                      
                     
                    
                        <div className='col-md-4  mx-1 card my-2 bg-light'>
                          <p className='text-dark'>description:{user.newuserdescription}{user.walletdescription}</p><br />
                          
                          {/* <hr /> */}
                          <b className='text-dark'>amount: {user.newuserwalletamount} {user.walletamount}</b><br />
                          
                          {/* <hr /> */}
                          <b className='text-dark'>due date : {user.newuserduedate}{user.walletdueDate}</b><br />
                      


                        </div>
                      
                       
                 
                     
                  
                       </> 

                      
                      ) )
                  
                  }
                   </div>
                    </div>

 
    </section>
    <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">proceed</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div className="modal-body">
          <div className="container-fluid">
            <input type="text" className='form-control' placeholder='amount' onChange={(e)=>setamount(e.target.value)}/>
            
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={accountFunder}>pay</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modelIdw" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">proceed</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div className="modal-body">
          <div className="container-fluid">
            <input type="text" className='form-control' placeholder='amount' onChange={(e)=>setwithdrawalamount(e.target.value)}/>
            
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={withdraw}>withdraw</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modelIdt" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">make transfer</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div className="modal-body">
          <div className="container-fluid">
            <b className='text-dark'>{transferstatus}</b>
            <input type="text" className='form-control' placeholder='amount' onChange={(e)=>settransferamount(e.target.value)}/>

            <input type="text" className='form-control' placeholder='accountno' onChange={(e)=>setaccountno(e.target.value)}/>
  
     
           
            
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={transfers}>withdraw</button>
        </div>
      </div>
    </div>
  </div>


  <div className="modal fade" id="modelIdcreate" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">proceed</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div className="modal-body">
          <div className="container-fluid">
          <input type="text" className='form-control my-2' placeholder='description' onChange={(e)=>setwalletdescription(e.target.value)}/>
            <input type="text" className='form-control my-2' placeholder='amount'onChange={(e)=>setwalletamount(e.target.value)}/>
            <input type="date" className='form-control my-2' placeholder='date' onChange={(e)=>setwalletdueDate(e.target.value)}/>
            
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={createWallet}>create</button>
        </div>
      </div>
    </div>
  </div>
  
 
 
    

    </>
  )
}

export default Rdashboard;