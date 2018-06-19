let houses = {
  g: {
    name: 'Gryfindor',
    members: [{name: 'Harry potter', cool: true, patronus: 'Stag', id: 0}],
    id: 1
    },
  h: {
    name: 'Hufflepuff',
    members: [{name: 'cedrick digory', cool: true, patronus: 'dead man', id: 0}],
    id: 1
  },
  s: {
      name: 'Slytherin',
      members: [{name: 'draco malfoy', cool: false, patronus: 'wurm', id: 0}],
      id: 1
    },
  r: {
    name: 'Ravenclaw',
    members: [{name: 'Luna Lovegood', cool: true, patronus: 'flupalumkiss', id: 0}],
    id: 1
  }
}

module.exports = {
  getAll(req, res) {
    res.send(houses)
  },

  addUser(req, res) {
    console.log('hit');
    const {house, name, cool, patronus} = req.body;
    const newPerson = {name, cool, patronus, id: houses[house].id}
    houses[house].id += 1;
    houses[house].members.push(newPerson)
    res.send(houses)
  },
  updateUser(req, res) {
    // id, house
    // property, value
    const {house: devMountain, property, value} = req.body;
    const {id} = req.params
    houses[devMountain].members.map(member => {
      if(member.id === +id) {
        member[property] = value;
      }
      return member
    })
    res.send(houses)
  }
}