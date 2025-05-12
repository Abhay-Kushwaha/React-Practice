import { useState, useCallback, useEffect, useRef} from 'react'

const Password = () => {
    const [length, setLength] = useState(8)
    const [number, setNumberAllowed] = useState(false)
    const [symbol, setSymbolAllowed] = useState(false)
    const [smallchar, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const ref=useRef()

    const CopyPassword = () => {
        window.navigator.clipboard.writeText(password);
        alert('Password copied to clipboard');
        ref.current?.select();
    }

    const generatePassword = useCallback(() => {
        let pass = ''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(number) str+="0123456789"
        if (smallchar) str += "abcdefghijklmnopqrstuvwxyz"
        if (symbol) str += "!@#$%^&*()_+"
        for (let i = 1; i < length; i++){
            const char = Math.floor(Math.random() * str.length + 1)
            pass+=str.charAt(char)
        }
        setPassword(pass)
    }, [length, number, symbol, smallchar])
    
    // Configure Password on every Render
    useEffect(() => {
        generatePassword()
    },[length,number,smallchar,symbol])




    return (
        <div className='bg-gray-800 w-auto h-auto flex items-center center flex-col py-10 px-5 rounded-lg'>
            <div className='flex items-center mb-10'>
                <input
                    type='text'
                    className='bg-white rounded-b-sm p-3 font-medium text-2xl'
                    value={password}
                    placeholder='Password'
                    ref={ref}
                    readOnly
                />
                <button
                    onClick={() => { CopyPassword() }} className='bg-blue-800 outline-none text-white px-3 py-3 shrink-0 font-medium text-2xl'>Copy</button>
            </div>
            <div className='flex justify-between gap-3 font-light text-2xl text-white '>
                <div>
                    <label
                        htmlFor='range' className='text-white font-medium text-2xl'>Length</label>
                    <input
                        type='range'
                        className='bg-white rounded-b-sm font-medium text-2xl w-3xs'
                        name=''
                        id=''
                        min={6}
                        max={30}
                        value={length}
                        onChange={(e) => { setLength(e.target.value) }}
                        aria-label='Length'
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className='h-6 w-6 m-1'
                        defaultChecked={number}
                        onClick={() => { setNumberAllowed((val) => !val) }}
                    />
                    <label htmlFor='number'>Numbers</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className='h-6 w-6 m-1'
                        defaultChecked={smallchar}
                        onClick={() => { setCharAllowed((val) => !val) }}
                    />
                    <label htmlFor='number'>Small Alphabets</label>
                </div>
                <div>
                    <input type="checkbox"
                        name=""
                        id=""
                        className='h-6 w-6 m-1'
                        defaultChecked={symbol}
                        onClick={() => { setSymbolAllowed((val) => !val) }}
                    />
                    <label htmlFor='number'>Symbols</label>
                </div>
            </div>
        </div>
    )
}

export default Password
