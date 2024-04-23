import React from "react";
import {IBook} from "./book";
 

interface IPageProps {
    bookData: IBook[];
    deleteBook : (id:string) => void;
}

const ReadBook:React.FC<IPageProps> = (props) =>{


    return (<div style={{display:"flex", alignItems:"center", flexWrap:"wrap", gap:"2rem"}}>

        {
            props?.bookData?.map((item:IBook, index:number)=>{
                return <div key={item?._id}>

                    <p>Name: ${item?.name}</p>
                    <p>Author: ${item?.author}</p>
                    <p>Description: ${item?.description}</p>
                    <button onClick={()=> props?.deleteBook(item?._id as string)}>Delete Book</button>

                </div>
            })
        }


    
    </div>)
}

export default ReadBook;