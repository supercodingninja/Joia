import React from 'react'

export const Input = (props: any) => {
  return (
    <div className="form-group">
      <input className="form-control border border-warning" {...props} />
    </div>
  )
}

export const TextArea = (props: any) => {
  return (
    <div className="form-group">
      <textarea className="form-control border border-warning" {...props} />
    </div>
  )
}

interface IFormBtnProps {
  children: string
  onClick: () => void
}

export const FormBtn = (props: IFormBtnProps) => {
  const { children, onClick } = props

  return (
    <button
      onClick={onClick}
      style={{ float: 'right', marginBottom: 10, marginRight: 10 }}
      className="btn btn-warning"
    >
      {' '}
      {children}{' '}
    </button>
  )
}

interface IFormBtnOutlineProps {
  children: string
  onClick: () => void
}
export function FormBtnOutline(props: IFormBtnOutlineProps) {
  const { children, onClick } = props

  return (
    <button
      onClick={onClick}
      style={{
        float: 'right',
        marginBottom: 10,
        marginRight: 10,
        color: '#000000',
        backgroundColor: '#fff',
      }}
      className="btn btn-warning"
    >
      {' '}
      {children}{' '}
    </button>
  )
}

// export const put = (props: INameInputProps) => {
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

// interface INameInputProps {
//     name: string;
//     placeHolder?: any;
//     onChange: () => void;
//   }

// export const Input = (props: INameInputProps) => {
//     const { name, placeHolder, onChange } = props;

//     return (
//         <div className="form-group">
//             <input className="form-control" name={name} placeholder={placeHolder} onChange={onChange} />
//         </div>
//     )
// }
