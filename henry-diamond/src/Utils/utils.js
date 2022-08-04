export function capitalizeLetter(string){
  
    if (typeof (string) === 'string'){
        let stringMayus = string[0].toUpperCase()
        for(let i = 1; i < string.length; i++){
            stringMayus = stringMayus + string[i]
        } 
        return stringMayus
   }
}