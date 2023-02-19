let host = 'http://localhost:5000/api'


const login = async ({ username, password }) => {
    console.log('username ',username,password)
    let url = `${host}/test`
    try {
        let params = {
            username,password
        }
        let reply = await fetch(url.toString(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(params)
        })


        const res = await reply.json();
        return res
    } catch (e) {
        console.log('error in ',e)
        return -1;
        

    }


}


export let api = {
   login 
}