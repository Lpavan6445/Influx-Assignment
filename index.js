// Influx - Node.js assignment
// Short summary of what you need to do
// Create a module that will help a group of people to split shared expenses during a trip or
// vacation.
class Pavan{
    constructor(name){
       this.groupName = "Pavan"
       this.noOfPersons=0
       this.groupMembers = {}
       this.totalExpenses=0
    }
//2️⃣To add Single Member to Group
    addSingleMember(person,groupName){
      //Validation Based on Group Name 
        if(this.groupName == groupName){
            this.groupMembers[person]={
                myExpenses:0,
            }
            this.noOfPersons +=1
           return `${person} added to ${groupName} trip group`
        }else{
           return `There is no Group contained with this name : ${groupName}`
        }
    }

//3️⃣To add Expenses to Persons
    addExpenses(person,groupName,expenses=0){
    // Validation Based on Person & groupName
       if(this.groupMembers[person] && this.groupName == groupName){
           this.groupMembers[person].myExpenses += expenses
           this.totalExpenses +=expenses 
           return `${expenses} Expenses added to ${person}`
       }else{
           return `${person} is not a member of ${this.groupName}`
       }
    }

//4️⃣Create a function to show the expenses split across the members
    splitExpenses(){
        let start = new Date().getTime();
         
        let averExpenses =  Math.ceil(this.totalExpenses / this.noOfPersons)  
        for(let key in this.groupMembers){
            this.groupMembers[key].averExpenses = averExpenses
        }

        let end = new Date().getTime();
      //(Best Of Best)1️⃣.d ⌚Time Taken to Execute this Function
        let time = end - start;
        console.log(`${time} seconds taken to Execute SplitExpenses function`)

        return this
    }

//(Best Of Best)1️⃣🅱️To Add Multiple Members To Group
    addMultipleMembers(persons,groupName){
        persons.forEach(person => {
          this.addSingleMember(person,groupName)
        });    
      return `${persons.length} people added to ${groupName} Group`      
    } 
    
}

//5️⃣Create a main function to do the following
function Main(){  
    var x = new Pavan("pavan")
    
    // Calls the function to add 3 members
    console.log( x.addSingleMember("Manohar","Pavan") )
    console.log( x.addSingleMember("Kavya","Pavan") )
    console.log( x.addSingleMember("Suraj","Pavan") )

    // Calls the function to add Rs.30/- as expense for each of the members
    console.log( x.addExpenses("Manohar","Pavan",30) )
    console.log( x.addExpenses("Kavya","Pavan",30) )
    console.log( x.addExpenses("Suraj","Pavan",30) )

    //Calls the function to add Multiple No of Members
    let personsData = ["sarang", "loukya","ajay","vasu","surya","anurag","shravan","kumar","selva","imran"]
    console.log(x.addMultipleMembers(personsData,"Pavan"))

    //Calls the split function to show the final output
    console.log( x.splitExpenses() )

}
Main()


