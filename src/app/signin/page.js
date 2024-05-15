'use client'

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { SHA3 } from 'sha3';
import React, { useState, useEffect } from 'react';

export default function SignIn() {
    const [data, setData] = useState([]);
    const [nameParam, setNameParam] = useState('');
    const [mailParam, setMailParam] = useState('');
    const [pwdParam, setPwdParam] = useState('');
    const [imageUrlParam, setImageUrlParam] = useState('');
    const [codeParam, setCodeParam] = useState('');
    const [errors, setErrors] = useState(false);

    const hashLength = 384; // You can choose other lengths like 224, 256, 512, etc.
    const sha3 = new SHA3(hashLength);

    const checkInfos = async () => {
        try {
            const encodedCodeParam = encodeURIComponent(codeParam);
            const encodedMailParam = encodeURIComponent(mailParam);
            const response = await fetch(`/api/checkInfos?codeParam=${encodedCodeParam}&mailParam=${encodedMailParam}`);
            if (!response.ok) {
                setErrors(true);
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();

            // AJUSTAR LÓGICA PARA SE TIVER 2 TRUE NÃO PASSAR, SE TIVER 2 FALSE NÃO PASSAR, SÓ PODE PASSAR SE VIER [TRUE, FALSE]
            if (result.length > 0) {
                await sendSignIn()
            } else {
                setErrors(true);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const sendSignIn = async () => {
        try {
            const encodedNameParam = encodeURIComponent(nameParam);
            const encodedMailParam = encodeURIComponent(mailParam);
            const pwdEncrypt = pwdParam;
            sha3.update(pwdEncrypt);
            const pwdHashedResult = sha3.digest('hex');
            const encodedPwdParam = encodeURIComponent(pwdHashedResult);
            const encodedImageUrlParam = encodeURIComponent(imageUrlParam);
            const encodedCodeParam = encodeURIComponent(codeParam);


            const response = await fetch(`/api/signIn?nameParam=${encodedNameParam}&mailParam=${encodedMailParam}&pwdParam=${encodedPwdParam}&imageUrlParam=${encodedImageUrlParam}&codeParam=${encodedCodeParam}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
            console.log(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="flex min-h-screen w-[100vw] flex-col items-center justify-start overflow-x-hidden bg-amber-100/100">
            <Navbar />
            <div id="signup form" className="w-[60vw] h-[100vh] flex flex-row justify-between items-center">

                <div id="form fields" className="w-[25vw] flex flex-col justify-center items-center">
                    <label id="name label" className="w-[100%] text-amber-900 text-[1.6vw] font-semibold">Nome</label>
                    <input
                        type="text"
                        value={nameParam}
                        onChange={(e) => setNameParam(e.target.value)}
                        placeholder="Insira seu nome"
                        className="text-[1.3vw] rounded-md p-[0.5vw] w-[100%] text-amber-900"
                    />
                    <br />
                    <label id="mail label" className="w-[100%] text-amber-900 text-[1.6vw] font-semibold">E-mail</label>
                    <input
                        type="text"
                        value={mailParam}
                        onChange={(e) => setMailParam(e.target.value)}
                        placeholder="Insira seu e-mail"
                        className="text-[1.3vw] rounded-md p-[0.5vw] w-[100%] text-amber-900"
                    />
                    <br />
                    <label id="pwd label" className="w-[100%] text-amber-900 text-[1.6vw] font-semibold">Senha</label>
                    <input
                        type="password"
                        value={pwdParam}
                        onChange={(e) => setPwdParam(e.target.value)}
                        placeholder="Insira sua senha"
                        className="text-[1.3vw] rounded-md p-[0.5vw] w-[100%] text-amber-900"
                    />
                    <br />
                    <label id="code label" className="w-[100%] text-amber-900 text-[1.6vw] font-semibold">Código</label>
                    <input
                        type="password"
                        value={codeParam}
                        onChange={(e) => setCodeParam(e.target.value)}
                        placeholder="Insira sueu código de acesso"
                        className="text-[1.3vw] rounded-md p-[0.5vw] w-[100%] text-amber-900"
                    />
                    <button type="submit" onClick={checkInfos} className="py-[10px] px-[20px] bg-orange-500/90 text-white font-bold rounded-md mt-[2vw]">Enviar</button>
                </div>
                <Image
                    src="/assets/navbar/avatar.svg"
                    width={0}
                    height={0}
                    alt="Default avatar image"
                    className="w-[25vw] border-4 rounded-full border-white bg-slate-500/10"
                />
            </div>
            {/* <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul> */}
            {errors === true ? (<div className="text-red text-[5vw]">ERROR</div>) : (<></>)}
        </div>
    );
}
