import React, { useState } from "react";

export default function CreateForm() {

   const [formContent, setFormContent] = useState([]) 


  function addQuestion() {
    const fields = {
        "number": formContent.length,
        "name": `question_${formContent.length}`,
        "label": "untitled_question",
        "type": "short_answer",
        "list": []
    }
    setFormContent([...formContent, fields])
  }
  
  
  
  
  
  return (
    <div className="p-3 mx-auto flex flex-col">
      <h1 className="text-3xl text-center font-semibold my-7">
        Create a Custom Form
      </h1>

      <div className="bg-white rounded-lg shadow-md flex flex-col justify-center p-5">
        
        <div>
            {
                formContent.map((item, index)=>{
                    return(
                        <div>
                        <div key={item.name}>
                        <p>{item.number+1}</p>
                        <p>{item.label}</p>
                        </div>
                        <div>

                        </div>
                        </div>
                    )
                })
            }
        </div>

        <div>
             
        </div>
        
        <button
          onClick={addQuestion}
          className="bg-black text-white p-3 mx-auto rounded-md"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
