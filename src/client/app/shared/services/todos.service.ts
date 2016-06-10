export class TodosService {
  http = null;
  data = [];

  setData(data: array): void {
    this.data = data;
  }

  getById(id: string): object {
    for(var i=0;i < this.data.length;i++){
      if(this.data[i]._id == id){
          return this.data[i];
      }
    }
  }

  reloadData(): void {
    this.http.get('http://localhost:8080/list-todo-items').subscribe((res:Response) => { 
      this.setData(res.json());
    })
  }
}
