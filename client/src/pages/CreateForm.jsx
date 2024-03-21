import React, { useState } from "react";

export default function CreateForm() {
  const [formContent, setFormContent] = useState([]);
  const [isEdit, setisEdit] = useState(false)

  function addQuestion() {
    const fields = {
      number: formContent.length,
      name: `question_${formContent.length}`,
      label: "untitled_question",
      type: "multichoice",
      list: [1,2,3],
    };
    setFormContent([...formContent, fields]);
  }


  function enableQuestionEdit(){

  }

  return (
    <div className="p-3 mx-auto flex flex-col">
      <h1 className="text-3xl text-center font-semibold my-7">
        Create a Custom Form
      </h1>

      <div className="bg-white rounded-lg shadow-md flex flex-col justify-center p-5">
        <div>
          {formContent.map((item, index) => {
            return (
              <div>
                <div className="flex justify-between space-y-6 items-center">
                  <div onClick={enableQuestionEdit} className="flex gap-1" key={item.name}>
                    <p>{item.number + 1}</p>
                    {
                        isEdit ? 
                        <input className="border p-2" type="text" placeholder={item.label}/>
                        :
                        <label onClick={()=>setisEdit(true)}>{item.label}</label>
            
                        
                    }
                    
                  </div>
                  <div>
                    <select>
                      <option value="short_answer">Short Answer</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="multichoice">Multichoice</option>
                    </select>
                  </div>
                </div>
                <div className="p-3 w-full">
                  {item.type == "short_answer" && (
                    <input
                      className="focus:outline-none border p-3 rounded-lg w-full h-10 shadow-sm"
                      type="text"
                      placeholder={item.label}
                    />
                  )}
                  {item.type == "paragraph" && (
                    <textarea
                      className="focus:outline-none border p-3 rounded-lg w-full h-40 shadow-sm"
                      placeholder={item.label}
                    />
                  )}
                  {item.type == "multichoice" && 


                  
                    <select className="focus:outline-none border p-3 rounded-lg w-1/2 shadow-sm">
                        {item.list.map((fielditems)=>{
                            <option value={fielditems}>{fielditems}</option>
                        })}
                    </select>}
                </div>
              </div>
            );
          })}
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
