import Header from "./Header";
import {CreateForm} from "./Styled"


export default function CreateTripPage() {
    return (
        <>
        <Header />
        <div>
            <CreateForm>
            <select>
                <option> Planet </option>
                
            </select>
            <input 
 /*            value={applicationName}
            onChange = {handleNameChange} */
            placeholder="Nome"
            type = "text"                     
            />
            <input 
/*             value={applicationAge}
            onChange = {handleAgeChange} */
            placeholder="Date"
            type = "number"                             
            />      
            <input 
/*             value = {applicationReason}
            onChange = {handleReasonChange} */
            placeholder= "Description"
            type = "text"
            />
            <input 
/*             value = {applicationProfession}
            onChange = {handleProfessionChange} */
            placeholder="Duration in days"
            type = "text"            
            />
            <select>
                <option>País</option>
            </select>
            <button > Create </button>
            </CreateForm>
        </div>
        </>
    );
}
