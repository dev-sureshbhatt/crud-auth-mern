import React, { useState } from "react";

export default function CreateForm() {
  const [formContent, setFormContent] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [multichoiceOption, setMultichoiceOption] = useState("add an option")

  function addQuestion() {
    const fields = {
      number: formContent.length,
      name: `question_${formContent.length}`,
      label: "untitled_question (Click to edit)",
      type: "short_answer",
      list: [],
    };
    setFormContent([...formContent, fields]);
  }

  function questionEdit(questionNumber, questionValue) {
    // console.log(questionNumber, questionValue)
    const formFields = [...formContent];
    // console.log("form field is", formFields)
    const fieldIndex = formFields.findIndex((f) => f.name == questionNumber);
    // console.log(formFields[fieldIndex])
    formFields[fieldIndex].label = questionValue;
    setFormContent(formFields);
    // console.log(formFields)
  }

  function questionTypeEdit(questionNumber, questionType) {
    const formFields = [...formContent];
    // console.log("new formfield", formFields, questionNumber, questionType)
    const findIndex = formFields.findIndex((f) => f.name === questionNumber);
    formFields[findIndex].type = questionType;
    setFormContent(formFields);
    console.log(formFields);
  }


  function addMultichoiceFieldOptions(questionNumber, optionValue){

    const formFields = [...formContent];
    // console.log("new formfield", formFields, questionNumber, questionType)
    const findIndex = formFields.findIndex((f) => f.name === questionNumber);
    formFields[findIndex].list.push(optionValue)
    setFormContent(formFields);
    console.log(formFields);



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
                  <div className="flex gap-2 items-center" key={item.name}>
                    <p>{`Q${item.number + 1}.`}</p>
                    {isEdit ? (
                      <input
                        onChange={(e) =>
                          questionEdit(item.name, e.target.value)
                        }
                        onBlur={() => setisEdit(false)}
                        className="border p-2"
                        type="text"
                        placeholder={item.label}
                      />
                    ) : (
                      <label onClick={() => setisEdit(true)}>
                        {item.label}
                      </label>
                    )}
                  </div>
                  <div>
                    <select
                      onChange={(e) =>
                        questionTypeEdit(item.name, e.target.value)
                      }
                    >
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
                      placeholder={"Short answer"}
                    />
                  )}
                  {item.type == "paragraph" && (
                    <textarea
                      className="focus:outline-none border p-3 rounded-lg w-full h-40 shadow-sm"
                      placeholder={item.label}
                    />
                  )}
                  {item.type == "multichoice" && (<div>
                    <select className="focus:outline-none border p-3 rounded-lg w-1/2 shadow-sm">
                      {item.list.map((fielditems) => {
                        <option value={fielditems}>{fielditems}</option>;
                      })}
                    </select>
                    <div className="flex gap-4 mt-2">
                        <input onChange={(e)=>setMultichoiceOption(e.target.value)} className="border shadow-md p-2" type="text" placeholder={multichoiceOption} />
                        <button onClick={()=>addMultichoiceFieldOptions(item.name, multichoiceOption)} className="bg-black text-white p-2 ">Add</button>
                    </div>
                    </div>
                  )}
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
