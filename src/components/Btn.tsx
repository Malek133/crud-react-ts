import { ButtonHTMLAttributes,ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode;
className:string;

}

const Button = ({children,className,...rest}:IProps) => {
 
  return (
    <>
    <button className=
   {`${className} m-2 rounded-lg p-1`} 
   {...rest}>
        {children}</button>
    </>
  )
}

export default Button