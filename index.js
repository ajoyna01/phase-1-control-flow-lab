function scuberGreetingForFeet(someValue) {
  
let result;

  //const range = (0, 2000, 2501 = )

  if (someValue <= 400) {
    result = 'This one is on me!';
  } 
  
  else if (someValue > 2000 && someValue < 2500) {
    result = 'I will gladly take your thirty bucks.'; 
  }
   
  else if (someValue > 2500) {
    result = 'No can do.';
   }
  
   return result; 
}

function ternaryCheckCity(city){

  
  let result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';

  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
    //let result;

  switch (tip) {
      case 'generous':
        return  'Thank you so much.';
        
      case 'not as generous':
        return  'Thank you.';
        
      default:
        return  "Bye."
        
      //return result;
  }
}