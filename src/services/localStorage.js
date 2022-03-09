export default{

  getItem: (item) => {
    console.log('llega el item ', item)
    const localItem = localStorage.getItem(item);
    if (!localItem) return;
    const data = JSON.parse(localItem);
    if(!data) return;
    return data;
  }
}