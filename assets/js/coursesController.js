class coursesController{
    constructor(){
        this.items = [];
        this.currentId = 0;


    }
    addItem(name, description, imgRoute, cost, stars){
        this.currentId++;
        this.items.push({
        id: this.currentId,
        name,
        description,
        imgRoute,
        cost,
        stars})
    }
}

cursos = new coursesController();
console.log(cursos.items)
cursos.addItem("N5","Curso para principiantes","/LinkedIn_icon.svg.png",4000,3.5);

cursos.addItem("N4","Curso Intermedio","/LinkedIn_icon.svg.png",4500,4);
console.log(cursos.items);