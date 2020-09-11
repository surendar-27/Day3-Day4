let arr=[{name:"suren",
age:34,
country:"India",
hobbies:["playing cricket", "chess", "news reading"]
},{name:"rama",
age:23,
country:"Malaysia",
hobbies:["playing golf", "reading comics", "news reading"]
},{name:"san triso",
age:39,
country:"America",
hobbies:["playing football", "painting", "chess", "reading books"]
},{name:"Raju",
age:54,
country:"India",
hobbies:["playing cricket", "reading books", "carrom", "drawing"]
}]
console.log("Object has Age lesser than 30");
function age(){
  for(let i=0;i<arr.length;i++){
    if(arr[i].age<30){
      console.log(arr[i]);
    }
  }
}
age();
console.log("-----------------------------");
console.log("Object contains country India")
function country(){
  for(let i=0;i<arr.length;i++){
    if(arr[i].country=="India"){
      console.log(arr[i]);
    }
  }
}
country();