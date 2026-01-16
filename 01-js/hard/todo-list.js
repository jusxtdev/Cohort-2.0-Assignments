/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

/*
static TODOS = {
  index : {title : todo, createdAt : getCurrentTime()}
}
*/

class Todo {
  constructor(){
    this.TODOS = []
  }

  // Some utility functions
  getIndex(){
    const returnIndex = this.nextIndex
    this.nextIndex++
    return returnIndex
  }
  
  // methods
  add(todoTitle){
    this.TODOS.push(todoTitle)
  }

  remove(index){
    this.TODOS.splice(index, 1)
  }

  update(index, newTitle){
    if (!(index >= this.TODOS.length)){
      this.TODOS[index] = newTitle
    }
  }

  getAll(){
    return this.TODOS
  }

  get(index){
    if (index >= this.TODOS.length){
      return null
    }
    return this.TODOS[index]
  }

  clear(){
    this.TODOS = []
  }
}

let a = ['one', 'two', 'three']


module.exports = Todo;
