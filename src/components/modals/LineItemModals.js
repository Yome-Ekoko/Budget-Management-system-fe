import styles from './LineItemModal.module.css';
import { useState } from 'react';
import BigCard from '../../UI/BigCard';
import Button from '../../UI/Button';
import axios from 'axios';
// import cancel from '../../UI/icons/close-cKT.png'


const LineItemModal = (props) => {
   // const[itemModal, setItemModal]= useState(true)

    const [lineItem, setLineItem] = useState({
        category:"",
        amount:""
    })

    const {category,amount} = lineItem

    const handleChanges = (e) => {
        setLineItem({...lineItem,[e.target.name]:e.target.value})
    }

//    const createLineItem = async (data) => {
//     const token = localStorage.getItem("token");

//     const response = await axios.post(
//       "http://localhost:8082/api/v1/user/line-items",
//       data,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//       return response.data;
//     console.log(response);
//   };

    // const[form, setForm] = useState({
    //     amount:"",
    //     category:""
    // })

    // const handleChange = (event)=>{
    //         const {value, name} = event.target;
    //         setForm(prevForm=>({
    //             ...prevForm,
    //             [name]:value
    //          } )
    //         )   
    // }

    const handleClick =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8082/api/v1/user/line-items",lineItem)
    }

    const imageClick = ()=>{
        props.setItemModal(null)
    }

    return ( 
        <>

        { props.itemModal &&
        <div>
            <div className={styles.backdrop} onClick={imageClick}></div>
            <BigCard className={styles.lineitem}>
            
            <img src="/assets/close-gFb.png" alt="cancel icon " 
            style={{ 
                    width: '30px',
                    height: '30px',
                    position:"relative",
                    left:'452px',
                    top: '40px'
                    }}
                    onClick={imageClick}/>
    
        <div>
        <p className={styles.title}>Create Budget Line Item</p>
        </div>
        <form handleClick={(e)=>handleClick(e)}>
        <label className= {styles.label} htmlFor='category'>Category</label><br />
        <div >
                   
                    <input
                        id='category'
                        value={category}
                        name='category'
                        onChange={(e)=>handleChanges(e)}
                        className={styles.category}
                        type="text"
                        placeholder='Enter budget category'
                        />
    
         </div>    
         <label  className= {styles.label} htmlFor='amount'>Projected Amount</label> <br />
                <div className={styles.amount}>         
                    <input 
                       id='amount'
                        type="text"
                        name= "amount" 
                        onChange={(e)=>handleChanges(e)}
                        // onChange={handleChange}
                        value={amount}
                        placeholder='N0.00'
                     />
                </div>
                <br />
                <Button onClick={handleClick} >Create</Button>
        </form>
    </BigCard>
        </div>
       
       }
        
        </>
      
        
     );
}
 
export default LineItemModal;