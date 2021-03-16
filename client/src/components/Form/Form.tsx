import React from 'react'

interface INameInputProps {
    name: string;
    placeHolder?: any;
    onChange: () => void;    
  }
  
export const Input = (props: INameInputProps) => {
    const { name, placeHolder, onChange } = props;
    
    return (
        <div className="form-group">
            <input className="form-control" name={name} placeholder={placeHolder} onChange={onChange} />
        </div>
    )
}

  
export const TextArea = (props: any) => {
   
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}
 
export const FormBtn = (props: any) => {
    
    return (
        <button  style={{ float:"right", marginBottom: 10 }} className="btn"> {props.chid} </button>
    );
}

// export const Input = (props: INameInputProps) => {
//     const { name, placeHolder, onChange } = props;
    
//     return (
//         <div className="form-group">
//             <input className="form-control" name={name} placeholder={placeHolder} onChange={onChange} />
//         </div>
//     )
// }

// interface IFormButtoProps {
//     text: string;
//     onClick: () => void;
//   }
  
// export const FormBtn = (props: IFormButtoProps ) => {
//     const { text, onClick } = props;
//     return (
//         <button onClick ={onClick} style={{ float:"right", marginBottom: 10 }} className="btn"> {text} </button>
//     );
// }
