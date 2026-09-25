import React,{useState} from 'react'

const Image_Resizer = () => {

    const [row,setRow]=useState(250);
    const [col,setCol]=useState(190);

    function row_plus(){
        setRow(row+10)
    }
    function row_minus(){
        setRow(row-10)
    }
    function col_plus(){
        setCol(col+10)
    }
    function col_minus(){
        setCol(col-10)
    }

    return(
        <div>
            <h3>Image Resizer</h3>
            <br></br>

            <div className='image-container' style={{dislpay:'flex',justifyContent:'center'}}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10' height={row} width={col}/>
            </div>

            <div className='buttons' style={{ marginTop: '100px' }}>
                <button onClick={row_plus}>Row + </button>
                <button onClick={row_minus}>Row - </button>
                <button onClick={col_plus}>Column + </button>
                <button onClick={col_minus}>Column - </button>  
            </div>
            
            
        </div>
    )
}

export default Image_Resizer
