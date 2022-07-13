export function capitalizeLetter(string){
  
    if (typeof (string) === 'string'){
        let stringMayus = string[0].toUpperCase()
        for(var i = 1; i < string.length; i++){
            stringMayus = stringMayus + string[i]
        } 
        return stringMayus
   } else {
    let stringMayus = string?.name[0].toUpperCase() 
       for(var i = 1; i < string.name.length; i++){
           stringMayus = stringMayus + string.name[i]
       }  
       return stringMayus

   }
}