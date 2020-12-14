// extract the language name from a given URL and shows a welcome message in that language.
// For instance, a given URL is : http://DCI.org/@german     --> herzlich willkommen bei DCI   , when there is no input default language English

'use strict';

//let variableGlobalCityname = "Berlin"; // global scope variable 


function WelcomeMessage(strURL){

 
    //console.log(variableGlobalCityname);

    // lang's scope is local 
  
    let lang=strURL.split('/').pop().slice(1); // pop() - > @german    slice(1)-->german
    let outputMsg;
    
    switch(lang){

        case "german":
            outputMsg="herzlich willkommen bei DCI";
            break;
        case "japanese":
            outputMsg="DCIへようこそ";
            break;

        case "persian":
            outputMsg="خوش آمدید";
            break;

        default:
            outputMsg="Warm welcome to DCI";

    }

     return outputMsg;

}


//------------------------- main code-------


console.log(WelcomeMessage("http://DCI.org/@german"));
