// Write your code here
class Breakfast {
 constructor(food,drink) {
    this.drink=drink 
    this.food=food
 }
}

class Lunch{
    constructor(salad,soup,drink) {
       this.drink=drink 
       this.salad=salad
       this.soup=soup
    }
   }

class Dinner {
    #dessert
    constructor(salad,soup,entree,dessert){
        this.salad=salad
        this.soup=soup
        this.entree=entree
        this.#dessert=dessert
    }

}

const bfast=new Breakfast("eggs","juice")
const newlunch=new Lunch("side salad","brocooli cheddar soup","iced tea")

const newdinner=new Dinner("balsamic salad","consomme","filet mignon","cheesecake")
