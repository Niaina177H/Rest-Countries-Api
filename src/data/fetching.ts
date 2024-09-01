async function FetchData(url: any){
    const data = await fetch(url);
    if (!data.ok){
        throw new Error("Impossible d'acceder au serveur")
    }
    return await data.json()
}
export default FetchData;

const database: any = await FetchData("https://restcountries.com/v3.1/all");
export {database};
