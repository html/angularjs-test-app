export class NameListService {
  names = [
    'Edsger Dijkstra',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper'
  ];

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
  edit(id: integer, value: string): void {
    this.names[id] = value;
  }
  delete(id: integer): void {
    this.names.splice(id, 1);
  }
}
