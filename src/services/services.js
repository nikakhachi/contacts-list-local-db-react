
let baseUrl = `http://localhost:3001/contacts`;

const get = () => fetch(baseUrl);

const update = changedObject => fetch(`${baseUrl}/${changedObject.id}`, {
                                    method: 'PUT', 
                                    headers: { 
                                        'Content-type': 'application/json'
                                    }, 
                                    body: JSON.stringify(changedObject) 
                                });

const remove = id => fetch(`${baseUrl}/${id}`, {
                        method: 'DELETE'
                    })

const add = newContact => fetch(baseUrl, {
                            method: 'POST',
                            body: JSON.stringify(newContact),
                            headers: { 
                                "Content-type": "application/json; charset=UTF-8"
                            } 
                        })

export default { get, update, remove, add };