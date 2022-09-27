import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Transaction = () => {
    const [senderarray, setsenderarray] = useState([])
    useEffect(() => {
        getsenderdetails()
    
    }, [])
    
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
  return (
    <>
    <div className='transactionbody'>
        <table className='table table-striped table-warning'>
            <thead>
                <tr>
                    <td>s/no</td>
                    <td className='text-center'>transaction amount</td>
                    <td className='text-center'>sender account</td>
                    <td className='text-center'>sender name</td>
                    <td className='text-center'>new balance</td>
                </tr>
            </thead>
            {
                senderarray.map((user, index)=>(
                    <>
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.transferamount}</td>
                            <td>{user.senderaccount}</td>
                            <td>{user.sendername}</td>
                            <td>{user.newreceiverBalance}</td>
                        </tr>
                    </tbody>
                    </>

                ))
            }
         
        </table>

    </div>
    
    </>
  )
}

export default Transaction