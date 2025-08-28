const url='http://localhost:5000/api/property/all';
export const getProperty =async()=>{
    try{
        const response= await fetch(url)
        if(!response.ok){
            throw new Error('there is some error in the api')
        }
        const data=response.json()
        return data;
    }
    catch(error){
        console.log('there is some error in the api')
    }

}