import Image from "next/image"

function Card({theme, infos, setter}: {theme: any, infos: any, setter: any}){
    return <div className={"shadow-lg rounded-md cursor-pointer card-items "+theme}
            onClick={(): void=>{
                setter(infos);
            }}
        >
        <Image alt={infos.name + " flag"} src={infos.flag} width={180} height={115} className="text-inherit"/>
        <div className="card-description">
            <h2 className="text-lg mb-2 -ml-4">{infos.name}</h2>
            <p><strong>Population</strong>: {infos.population}</p>
            <p><strong>Region</strong>: {infos.region}</p>
            <p><strong>Capital</strong>: {infos.capital ? infos.capital : <i>Aucun</i>}</p>
        </div>
    </div>
}
export default Card;

export function FormatPopulation(nbpopulation: any): string{
    let nbformat = nbpopulation.toString().split('').reverse()
    nbformat = nbformat.map((item: any, index: any, l: any)=>{
        if ((index+1)%3 === 0 && index !== l.length-1){
            return ","+item
        }
        return item
    })
    return nbformat.reverse().join('')
}

export function CardSkeleton(theme: any){
    return <div
        className="w-full h-md-auto justify-center items-center"
    >  
        <div className={`rounded-full animate-spin border-4 border-b-0 border-t-0 h-[80px] w-[86px] border-${theme.theme}`}></div>
    </div>
}
