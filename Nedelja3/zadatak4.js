function lifeSupply(numPerMonth, age) {
    return (100 - age) * numPerMonth * 12
}

console.log(lifeSupply(30,26));