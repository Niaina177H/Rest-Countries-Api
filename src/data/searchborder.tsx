function SearchingBorders({code, data}:{code: any, data:any}){
    let name = ''
    for (let i of data){
        if (i.alpha3Code === code){
            name = i.name
            break
        }
    }
    return <div className="inline-flex justify-center items-center">
        {name}
    </div>;
}
export default SearchingBorders;