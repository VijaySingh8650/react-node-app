import React, {useState, useEffect} from "react";
import axios from "axios";
import {API_BASE_URL} from "../config";
import ReadBook from "./readBook";
import styles from "./book.module.css";

export interface IBook {
    name: string;
        author: string;
        description: string;
        _id?:string;
}

const Book  = () =>{
    
    const [fields, setFields] = useState<IBook>({name:"", author:"", description:""})

    const [bookData, setBookData] = useState<IBook[]>([]);


    useEffect(()=>{

        getBooks();

    },[])


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = e.target;
        setFields({
            ...fields,
            [name]:value
        })
    }
   

    const handleSubmit = () =>{
        if(fields?.name && fields?.author && fields?.description){
            axios.post(API_BASE_URL, {...fields}).then((res)=>{
               if(res?.status === 201){
                alert("Book Added");
                getBooks();
                setFields({name:"", author:"", description:""})
               }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
         
    }


    const getBooks = () =>{
        axios.get(API_BASE_URL).then((res)=>{

            if(res?.status === 200 && res?.data && Array.isArray(res.data.data)){
                setBookData(res.data.data);
            }
             
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const deleteBook = (id:string) =>{
          axios.delete(`${API_BASE_URL}/${id}`).then((res)=>{
            
            if(res?.status === 200){
                getBooks();
                alert("Book Deleted!");
            }
          })
          .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <>
         <div className={styles.container}>

            <h1>Add Books</h1>
            <div>
                <label>Name of the book</label>
                <input type="text" value={fields.name} name="name" onChange={handleChange}/>
            </div>
            <div>
                <label>Author of the book</label>
                <input type="text" value={fields.author} name="author" onChange={handleChange}/>
            </div>
            <div>
                <label>Description of the book</label>
                <input type="text" value={fields.description} name="description" onChange={handleChange}/>
            </div>
            <button className={styles.btn} onClick = {handleSubmit}>Submit</button>

         </div>
         <div>

            <h1>Read Books</h1>
            <ReadBook bookData={bookData} deleteBook={deleteBook}/>
         </div>

        </>
    )
}

export default Book;