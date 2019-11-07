//tried to use reduce to incrememnt
var pizzas = {
    pizza1: "pepper",
    pizza3: "kale",
    pizza4: "mushroom",
    pizza2: {
        pizza1: "cheese"
    },
    pizza5:"whatever"
    
}


const groupByNum = pizzas.reduce((total, pizza) => {
   total[pizza] = total[pizza] + 1 || 1;
    return total;
}, {});

console.log(groupByNum)