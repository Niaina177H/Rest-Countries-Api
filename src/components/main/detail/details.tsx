import dataforborder from "@/data/data"
import Image from "next/image"

function Details({objet, reset, theme, data}: {objet: any, reset: any, theme: any, data: any}){
    let classe = theme.includes("darker") ? 'color-darker' : ''
    return <div id="country-detail" className={"container-"+theme}>
        <button
            onClick={
                ()=>{
                    reset('')
                }
            }
            id="detail-backup"
            className={'items-'+theme+' flex items-center justify-center'}
        >
            <i className="px-3"><img src="/icon-back.png" alt="back" className={classe} /></i>
            <span>Back</span>
        </button>
        <div id="description-container">
            <Image src={objet.flag} alt={objet.name} width={500} height={400} className="w-2/5" />
            <div id="main-description">
                <h1>{objet.name}</h1>
                <div id="description-country">
                    <div id="first-information">
                        <p><strong>Native Name: </strong>{objet.nativeName}</p>
                        <p><strong>Population: </strong>{objet.population}</p>
                        <p><strong>Region: </strong>{objet.region}</p>
                        <p><strong>Sub region: </strong>{
                                objet.subRegion ? objet.subRegion : <i>Aucun</i>
                            }
                        </p>
                        <p><strong>Capital: </strong>{objet.capital[0]}</p>
                    </div>
                    <div id="second-information">
                        <p><strong>Top Level Domain: </strong>{objet.topLevelDomain}</p>
                        <p><strong>Currencies: </strong>{
                                ObjectToString(objet.currencies)
                            }
                        </p>
                        <p><strong>Languages: </strong>{
                                ObjectToString(objet.languages)
                            }
                        </p>
                    </div>
                </div>
                <div id='border-country-parent'>
                    <strong>Border Countries: </strong>
                    {objet.borders ? <BtnCountrie liste={objet.borders} setter={reset} bordername={data} theme={theme}/> : <p><i>Aucun</i></p>}
                </div>
            </div>
        </div>
    </div>
}
export default Details  

function BtnCountrie({liste, setter, bordername, theme}: {liste: any, setter: any, bordername: any, theme: any}){
    let data = bordername.filter((item: any)=>{
        return liste.includes(item.alpha3Code)
    })
    return <>
        {
            data.map((i: any, index: number)=>{
                return <button 
                    key={index} 
                    className={"border-country-btn items-"+theme}
                    onClick={()=>{
                        setter(i)
                    }}
                >
                    {i.name}
                </button>
            })
        }
    </>
}
function ObjectToString(objet: any): string{
    let valeur = []
    let value: any = ''; 
    let key: any = '';
    for ([key, value] of Object.entries(objet)){
        if (value.name){
            valeur.push(value.name)
        }
        else{
            valeur.push(value)
        }
    }
    return valeur.join(", ")
}