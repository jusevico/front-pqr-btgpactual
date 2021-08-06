export class Auth {

  public static setCliente(cliente): void {
    localStorage.setItem('token_cliente', JSON.stringify(cliente));
  }

  public static getCliente(): any {
    const cliente = localStorage.getItem('token_cliente');
    return JSON.parse(cliente);
  }

}
