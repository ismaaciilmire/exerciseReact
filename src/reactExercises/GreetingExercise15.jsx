import React,{useContext} from 'react'
import languageContext from './LanguageContext'

export const GreetingExercise15 = () => {
  const language= useContext(languageContext)

  const messages={
    en:'hello !',
    es:'! hola !',
  };
  return (
    <>
    <h1>{messages[language] }</h1>

    
    
    
  
   
    </>
  )
}
