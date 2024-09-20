export default function Results({nomeecognome, città, mail, numeropersone, numerosettimane, costo, sconto, costototale}: {nomeecognome: string, città:string, mail: string, numeropersone: string, numerosettimane: string, costo: number, sconto: number, costototale: number}) {
    return (
        <form className="bg-yellow-800 text-white p-6 rounded-md w-full sm:w-1/3">
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"nome e cognome: " + nomeecognome}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"città: " + città}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"numero persone: " + numeropersone}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"mail: " + mail}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"numero settimane: " + numerosettimane}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"costo: " + costo}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"sconto: " + sconto}</h1>
            </div>
            <div className="mt-1 block w-full rounded-md bg-yellow-700 border-transparent focus:border-yellow-500 focus:bg-yellow-600 focus:ring-0 text-white">
                <h1>{"costototale: " + costototale}</h1>
            </div>
        </form>
    );

}