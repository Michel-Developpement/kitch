'use client';
import * as React from 'react'
import { getImageSized } from "@/utils/getImageSized";
import { GetRecentlyGames } from '@/utils/api';
import { API, API_GAMES } from "@/types/api";


export async function RecentlyGames(){
    const [dataRGames, setDataRGames] = React.useState<API<API_GAMES[]>>(null)
    React.useEffect(() => {
        async function fetchData() {
            const data = await GetRecentlyGames();
            setDataRGames(data);
        }
        fetchData();
    }, [])
        return(
            
            <div className='mb-[2%] w-full h-[50vh]'>
          <h2 className='text-lg m-2 font-[700]'>
                Jeux récemment sortis
            </h2>                            
                <div className='w-full border-0  -600 flex justify-start items-start mr-[1%]'>
                    {!dataRGames ? <div>chargement...</div> : dataRGames.map((element: any, index: number) => (
                        <div key={index} className='flex items-start justify-start flex-col h-[100%] w-[155px] mr-[1%]'>
                            <div className='w-full relative'>
                                <img src={getImageSized(element?.box_art_url, '155', '206')}></img>        
                                <div className='h-[2.5vh] flex items-center justify-center rounded-full absolute m-[0.5rem_0.6rem] bg-[#ff75e6] top-0 right-0 p-[3%]'>
                                    <p className='m-[3px] text-black font-[600] text-[12px]'>NOUVEAU</p>
                                </div>
                            </div>
                            <div>
                                <h2 className='font-semibold text-[15px] w-full mt-[1%]'>{element?.name}</h2>
                            </div>
                        </div>    
                    ))}                     
                </div>
          </div>
        )
}