const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const { strength } = dragon
  const minDamage = 15;
  const damage = Math.floor(Math.random() * (strength - minDamage + 1)) + minDamage; 
  return damage;
}

const warriorDamage = (warrior) => {
  const { strength } = warrior;
  const { weaponDmg } = warrior;
  const maxDamage = strength * weaponDmg;
  const minDamage = strength;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  return damage;
}

const mageDamage = (mage) => {
  const mageMana = mage.mana  // 125
  const { intelligence } = mage;  //45
  const minDamage = intelligence;
  const maxDamage = intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  const status = {
    dano: 'Não possui mana suficiente',
    mana: 0,
  }
  if (mageMana > 15) {
    status.mana = 15;
    status.dano = damage;
    return status;
  }
  return status;
}
// parte 2
const gameActions = {
  warriorAction: (warriorDamage) => {
    const warriorAttack = warriorDamage(warrior);
    warrior.damage = warriorAttack;
    dragon.healthPoints -= warriorAttack;
  },
  mageAction: (mageDamage) => {
    const mageStatus = mageDamage(mage);
    mage.mana -= mageStatus.mana;
    mage.damage = mageStatus.dano;
    dragon.healthPoints -= mageStatus.dano
  },
  dragonAction: (dragonDamage) => {
    const dragonAttack = dragonDamage(dragon);
    dragon.damage = dragonAttack;
    mage.healthPoints -= dragonAttack;
    warrior.healthPoints -= dragonAttack;
  },
  battleLog: () => battleMembers,

};
gameActions.warriorAction(warriorDamage);
gameActions.mageAction(mageDamage);
gameActions.dragonAction(dragonDamage);

console.log(gameActions.battleLog())
