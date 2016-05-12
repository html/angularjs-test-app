export class ProjectsService {
<<<<<<< HEAD
  http = null;
  data = [];

  setData(data: array): void {
    this.data = data;
=======
  data = [];
  names = [];

  setData(data: array): void {
    this.data = data;
    this.names = data.map(function(item){
      return item.name;
    });
>>>>>>> 31e2278... Improved +projects component to work with http backend
  }

  getById(id: string): object {
    for(var i=0;i < this.data.length;i++){
      if(this.data[i]._id == id){
          return this.data[i];
      }
    }
  }
<<<<<<< HEAD

  reloadData(): void {
    this.http.get('http://localhost:8080/list-projects').subscribe((res:Response) => { 
      this.setData(res.json());
    })
  }
=======
>>>>>>> 31e2278... Improved +projects component to work with http backend
}
