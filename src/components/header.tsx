import Image from "next/image"

function Header({theme, setter}: {theme: any, setter: any}){
    let classe = theme.includes("lighter") ? 'color-darker' : ''
    return <div id="header" className={'items-'+theme}>
        <h1 className="font-800">Where in the world?</h1>
        <div className="flex items-center">
            <i><Image src='/icon-moon.svg' alt="moon" width={20} height={20} className={classe} /></i>
            <button className="text-xs font-300"
                onClick={setter}
            >
                {theme[0].toUpperCase()+theme.substr(1, theme.length-3)} Mode
            </button>
        </div>
    </div>
}
export default Header;