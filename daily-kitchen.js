(function(){
  "use strict";
  const recipes=[
    {name:"Classic Idli Podi",desc:"Roasted lentils, sesame and dry red chillies make a flavourful accompaniment for idli and dosa.",url:"/recipes/classic-idli-podi.html"},
    {name:"Peanut Karam Podi",desc:"A nutty, spicy Andhra-style powder to enjoy with hot rice, ghee or breakfast dishes.",url:"/recipes/peanut-karam-podi.html"},
    {name:"Curry Leaves Podi",desc:"A fragrant curry-leaf blend that pairs well with rice, idli and dosa.",url:"/recipes/curry-leaves-podi.html"},
    {name:"Garlic Karam Podi",desc:"A bold garlic and chilli powder idea for everyday meals.",url:"/recipes/garlic-karam-podi.html"},
    {name:"Coconut Chutney",desc:"Fresh coconut chutney with a simple tempering for breakfast favourites.",url:"/recipes/coconut-chutney.html"},
    {name:"Tomato Chutney",desc:"Tangy tomato chutney with chillies and a fragrant tempering.",url:"/recipes/tomato-chutney.html"},
    {name:"Peanut Chutney",desc:"Creamy roasted peanut chutney for idli, dosa and pesarattu.",url:"/recipes/peanut-chutney.html"},
    {name:"Ginger Chutney",desc:"A sweet, sour and spicy pachadi that adds a lively touch to breakfast.",url:"/recipes/ginger-chutney.html"},
    {name:"Homemade Sambar Powder",desc:"A balanced spice blend to bring aroma to a home-style sambar.",url:"/recipes/sambar-powder.html"},
    {name:"Homemade Rasam Powder",desc:"A peppery, aromatic blend for a comforting bowl of rasam.",url:"/recipes/rasam-powder.html"},
    {name:"Andhra Avakaya Pickle",desc:"A classic mango pickle idea inspired by Andhra home kitchens.",url:"/recipes/andhra-avakaya-pickle.html"},
    {name:"Lemon Pickle",desc:"A bright, tangy pickle idea with warming spices.",url:"/recipes/lemon-pickle.html"}
  ];
  const tips=[
    ["Cool spices fully before grinding","Spread roasted spices on a clean plate and let them cool completely before grinding. This helps avoid trapped steam and moisture."],
    ["Keep chutney spoons dry","Use a clean, dry spoon when serving stored chutney. Refrigerate fresh chutneys promptly and follow a tested recipe for storage time."],
    ["Taste before adding all the salt","Add salt gradually, especially when a dish will reduce as it cooks. Taste and adjust near the end."],
    ["Roast spices gently","Use low to medium heat and stir often. Remove each spice when fragrant; smaller spices can burn quickly."],
    ["Prepare ingredients before switching on the stove","Wash, measure and chop ingredients first. This makes cooking calmer and helps prevent missed steps."],
    ["Store leafy herbs thoughtfully","Remove damaged leaves, keep herbs dry and refrigerate them in a suitable container. Wash just before use when practical."],
    ["Use a separate board for raw foods","Keep raw meat, seafood and ready-to-eat foods separate. Wash hands, boards and utensils between tasks."]
  ];
  const meals=[
    ["Idli with coconut chutney","Rice, dal and seasonal vegetable curry","Vegetable upma with curd"],
    ["Dosa with peanut chutney","Sambar rice with poriyal","Chapati with mixed vegetable curry"],
    ["Pesarattu with ginger chutney","Tomato pappu, rice and greens","Lemon rice with curd"],
    ["Vegetable poha","Curd rice with vegetable stir-fry","Moong dal khichdi"],
    ["Upma with sambar","Vegetable pulao with raita","Rasam, rice and beans poriyal"],
    ["Ragi dosa with chutney","Chana curry with rice","Idli with sambar"],
    ["Pesarattu or dosa with chutney","Seasonal vegetable sambar with rice","Chapati with dal"]
  ];
  const challenges=[
    ["Try one seasonal vegetable","Include one locally available seasonal vegetable in a meal today."],
    ["Make a fresh chutney","Prepare a small batch of chutney and note the ingredient adjustment you liked."],
    ["Reduce kitchen waste","Plan one meal using vegetables or herbs that need to be used soon."],
    ["Measure before cooking","Measure the main ingredients before starting one recipe today."],
    ["Learn one spice aroma","Smell two whole spices and notice how their aromas differ before cooking."],
    ["Plan tomorrow's breakfast","Choose tomorrow's breakfast and add the needed ingredients to your shopping list."],
    ["Share a home-cooked meal","Cook a simple favourite and share it with someone at home."]
  ];
  const localNow=new Date(),start=new Date(localNow.getFullYear(),0,0);
  const dayNumber=Math.floor((new Date(localNow.getFullYear(),localNow.getMonth(),localNow.getDate())-start)/86400000);
  const key=localNow.getFullYear()+"-"+String(localNow.getMonth()+1).padStart(2,"0")+"-"+String(localNow.getDate()).padStart(2,"0");
  const recipe=recipes[(dayNumber-1)%recipes.length],tip=tips[(dayNumber-1)%tips.length],meal=meals[(dayNumber-1)%meals.length],challenge=challenges[(dayNumber-1)%challenges.length];
  const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
  set("dailyDate",localNow.toLocaleDateString(undefined,{weekday:"long",day:"numeric",month:"short",year:"numeric"}));
  set("dailyRecipeName",recipe.name);set("dailyRecipeDesc",recipe.desc);
  const link=document.getElementById("dailyRecipeLink");if(link){link.href=recipe.url;link.textContent="View recipe →";}
  set("dailyTipTitle",tip[0]);set("dailyTipText",tip[1]);
  set("dailyBreakfast",meal[0]);set("dailyLunch",meal[1]);set("dailyDinner",meal[2]);
  set("dailyChallengeTitle",challenge[0]);set("dailyChallengeText",challenge[1]);
  const checkbox=document.getElementById("dailyChallengeDone"),status=document.getElementById("dailyChallengeStatus"),saved=document.getElementById("dailyChallengeSaved"),storageKey="ruchimitra-daily-challenge-"+key;
  if(checkbox){
    try{checkbox.checked=localStorage.getItem(storageKey)==="done";}catch(e){}
    const update=()=>{try{if(checkbox.checked)localStorage.setItem(storageKey,"done");else localStorage.removeItem(storageKey);}catch(e){}if(status)status.textContent=checkbox.checked?"Completed — well done!":"Mark today's challenge complete";if(saved)saved.textContent=checkbox.checked?"Your progress is saved on this device.":"";};
    checkbox.addEventListener("change",update);update();
  }
})();