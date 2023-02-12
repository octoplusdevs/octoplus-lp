import { Wrapper } from "./style"
import { ArrowRight } from 'phosphor-react'

interface propsType{
    text: string,
    buttonSecundary: boolean,
}


export function ButtonCallToAction( props : propsType){

    const {text, buttonSecundary} = props
        
    return(
        <Wrapper 
            ButtonSecundary={buttonSecundary}
         >
            { text }
            <ArrowRight 
                size={24} 
                className='arrow-right'
             />
        </Wrapper>
    )
}