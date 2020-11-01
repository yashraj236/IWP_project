const list = async (id,signal) => {
    try {
      let response = await fetch('/api/chat/'+id, {
        method: 'GET',
        signal: signal
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  export {
      list}