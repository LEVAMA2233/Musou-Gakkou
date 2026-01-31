
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
cursos.addItem("N5","Curso","../assets/img/img-cursos/n5.jpeg",4000,4.5);
cursos.addItem("N4","Curso","../assets/img/img-cursos/n4.jpeg",4500,4.7);
cursos.addItem("N3","Curso","../assets/img/img-cursos/n3.jpeg",5000,4.9);
cursos.addItem("N2","Curso","../assets/img/img-cursos/n2.jpeg",5500,4.5);
cursos.addItem("N1","Curso","../assets/img/img-cursos/n1.jpeg",6000,4);
cursos.addItem("Clase personalizada","Curso","../assets/img/img-cursos/clase-personalizada.jpeg",4500,4);
console.log(cursos.items);


