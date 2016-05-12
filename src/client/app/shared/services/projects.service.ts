export class ProjectsService {
<<<<<<< HEAD
<<<<<<< HEAD
  http = null;
  data = [];
<<<<<<< HEAD

  setData(data: array): void {
    this.data = data;
=======
=======
  http = null;
>>>>>>> d91181b... Improved projects component
  data = [];
  names = [];

  setData(data: array): void {
    this.data = data;
    this.names = data.map(function(item){
      return item.name;
    });
>>>>>>> 31e2278... Improved +projects component to work with http backend
=======

  setData(data: array): void {
    this.data = data;
>>>>>>> 1afcb01... Removed messy code from projects service
  }

  getById(id: string): object {
    for(var i=0;i < this.data.length;i++){
      if(this.data[i]._id == id){
          return this.data[i];
      }
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d91181b... Improved projects component

  reloadData(): void {
    this.http.get('http://localhost:8080/list-projects').subscribe((res:Response) => { 
      this.setData(res.json());
    })
  }
<<<<<<< HEAD
=======
>>>>>>> 31e2278... Improved +projects component to work with http backend
=======
>>>>>>> d91181b... Improved projects component
}
