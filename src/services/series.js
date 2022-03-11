import localStorage from "./localStorage";

class SeriesServices{
  entity = "series";
  getAll (){
    return localStorage.getItem('lasSeries')
  
  }

}
export default new SeriesServices()
