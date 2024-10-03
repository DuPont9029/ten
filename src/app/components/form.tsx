"use client";

import React, { useState } from 'react';
import Results from './results';

export default function Form() {
    const [NomeECognome, setNomeECognome] = useState('');
    const [citta, setCitta] = useState('');
    const [numeroPersone, setNumeroPersone] = useState('');
    const [numeroSettimane, setNumeroSettimane] = useState('');
    const [sconto, setSconto] = useState(0);
    const [email, setEmail] = useState('');
    const [costo, setCosto] = useState(0);
    const [costoTotale, setCostoTotale] = useState<number | null>(null); // Inizializza come null


    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();
        console.log(NomeECognome, citta, numeroPersone, numeroSettimane, email);

        if (!NomeECognome || !citta || !numeroPersone || !numeroSettimane || !email) {
            alert("Per favore, compila tutti i campi.");
            return;
        }
        

        if (Number(numeroPersone) < 2 && Number(numeroSettimane) != undefined) {
            alert("il costo è di 430");
            setCosto(430);
            setCostoTotale(430);
            setSconto(0);
        }
        else if (Number(numeroPersone) >= 2 && Number(numeroSettimane) < 2) {
            console.log(`Numero di persone: ${numeroPersone}, Numero di settimane: ${numeroSettimane}`);
            setCosto(430 * Number(numeroPersone));
            setCostoTotale(430 * Number(numeroPersone) - (430 * Number(numeroPersone) * 0.05));
            setSconto(430 * Number(numeroPersone) * 0.05);
            console.log("Lo sconto in percentuale è del 5%");
            alert("Sconto del 5% applicato");
        }
        else if (Number(numeroPersone) >= 2 ) {
            //alert(`il costo è di ${((430 * Number(numeroPersone)) - ((430 * Number(numeroPersone)) * 0.15))}`);
            console.log(`430 * ${Number(numeroPersone)}: ` + 430 * Number(numeroPersone));
            console.log(`430 * ${Number(numeroPersone)} * 0.15: ` + 430 * Number(numeroPersone) * 0.15);
            setCosto((430 * Number(numeroPersone)));
            setCostoTotale((430 * Number(numeroPersone)) - ((430 * Number(numeroPersone)) * 0.15));
            setSconto(((430 * Number(numeroPersone)) * 0.15));
            console.log(`il nome e cognome è: ${NomeECognome}, la città è: ${citta}, il numero di persone è: ${numeroPersone}, la mail è: ${email}, il numero di settimane è: ${numeroSettimane}, il costo è: ${costo}, lo sconto è: ${sconto} (15%), il costo totale è: ${costoTotale}`);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-6 rounded-md w-full mb-4 sm:w-1/2 md:w-1/3">
                <label className="text-lg font-semibold">
                    Nome e Cognome:
                    <input 
                        type="text" 
                        value={NomeECognome} 
                        onChange={e => {
                            const value = e.target.value;
                            setNomeECognome(value); // Update state with the input value
                        }} 
                        maxLength={50} // Adjust maxLength as needed
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" 
                    />
                </label>

                <label className="text-lg font-semibold">
                    Città:
                    <input 
                        type="text" 
                        value={citta} 
                        onChange={e => { 
                            const value = e.target.value;
                            setCitta(value); // Update state with the input value
                            const hasUppercase = /[A-Z]/.test(value); // Check if the value contains at least one uppercase letter
                            const isValidLength = value.length <= 10; // Check if the value has a maximum length of 10 characters

                            if (hasUppercase && isValidLength) {
                                // Additional logic if needed
                            }
                        }} 
                        maxLength={10} // Ensure the input field enforces the maximum length
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white"
                    />
                </label>

                <label className="text-lg font-semibold">
                    Numero di Persone:
                    <input 
                        type="number" 
                        value={numeroPersone} 
                        onChange={e => {
                            const value = e.target.value;
                            if (value === '' || /^\d+$/.test(value)) {
                                setNumeroPersone(value); // Update state with the input value
                            }
                        }} 
                        min={1} // Ensure the minimum value is 1
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" 
                    />
                </label>

                <label className="text-lg font-semibold">
                    Numero di Settimane:
                    <input 
                        type="number" 
                        value={numeroSettimane} 
                        onChange={e => {
                            const value = e.target.value;
                            if (value === '' || /^\d+$/.test(value)) {
                                setNumeroSettimane(value); // Update state with the input value
                            }
                        }} 
                        min={1} // Ensure the minimum value is 1
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" 
                    />
                </label>

                <label className="text-lg font-semibold">
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => {
                            const value = e.target.value;
                            setEmail(value); // Update state with the input value
                            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Check if the value is a valid email format
                            if (isValidEmail) {
                                // Additional logic if needed
                            }
                        }} 
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white" 
                    />
                </label>

                <div className="flex justify-center">
                    <input type="submit" value="Submit" className="mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                </div>
            </form>

            {costoTotale && <Results nomeecognome={NomeECognome} città={citta} numeropersone={numeroPersone} mail={email} numerosettimane={numeroSettimane} costo={costo} sconto={sconto} costototale={costoTotale} /> }
        </div>
    );
}