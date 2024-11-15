import React from 'react';
import './Form.css';

function Form() { 
return (

<form className='Form'>
  
        Nom:<br></br>
        <input type="text" name="Nom" placeholder="Nom"/><br></br>
        
        Prénom:<br></br>
        <input type="text" name ="Prénom" placeholder="Prénom"/><br></br>
        
        Email:<br></br>
        <input type="email" name ="Email" placeholder="email@exemple.com"/><br></br>
        
        Adresse:<br></br>
        <input type="text" name="Adresse" maxlength="100" placeholder="Adresse"/><br></br>
        
        Téléphone:<br></br>
        <input type="tel" name="Téléphone" placeholder="06.07.08.09.10" size="10" pattern="[0-9]{10}"/><br></br>
        
        Commentaire: <br></br>
        <textarea name="Commentaire" maxlength="200" placeholder="200 Caractère max"></textarea><br></br>
</form>
);
  
}
 
export default Form;




























