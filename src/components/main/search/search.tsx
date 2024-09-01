import { useEffect, useRef, useState } from "react"
import Image from "next/image"


function SearchInteractive({nameforsearch, setterData, theme, filtrage, changesearch}: {nameforsearch: any, setterData: any, theme: any, filtrage: any, changesearch: any}){
    const [value, setValue] = useState('')
    const ref: any = useRef(null)
    let classe = theme.includes("darker") ? 'color-darker' : ''
    useEffect(()=>{
        let newdata: any = nameforsearch.filter((item:any)=>{
            if (filtrage === 'Aucun' || filtrage === ''){
                return item.region.includes('')
            }
            return item.region===filtrage;
        });
        newdata = newdata.filter((item: any)=>{
            return item.name.toLowerCase().includes(value.toLowerCase())
        });
        setterData(newdata);
        changesearch(value);
    }, [value])
    return <div className={"flex rounded-md h-[55px] items-center justify-start shadow-md pl-[22px] "+theme} id='search-interactive'>
        <i><Image src='/icon-search.svg' alt='search' width={15} height={15} className={classe} /></i>
        <input 
            type="text" 
            placeholder="Seach for a country..." 
            className="focus:outline-none placeholder:text-xs pl-[17px] w-full"
            onChange={(e)=>{setValue(e.target.value)}}
            value={value}
            ref={ref}
        />
    </div>
}
export default SearchInteractive;