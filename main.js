// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance
// let user= 
// {"results":[{"gender":"male","name":{"title":"Mr","first":"Mehdi","last":"Hansmann"},"location":{"street":{"number":9208,"name":"Kastanienweg"},"city":"Dingolfing-Landau","state":"Niedersachsen","country":"Germany","postcode":88463,"coordinates":{"latitude":"-43.4765","longitude":"-168.3751"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"mehdi.hansmann@example.com","login":{"uuid":"a46e738d-1524-465d-9edb-86078115e92e","username":"ticklishpanda563","password":"teacher","salt":"gwjtAwYJ","md5":"f939d14c048bdb4eec8c81909b25e0f8","sha1":"24f3e78cb0f3d3ede93b66c2a95f3daeec8f3d69","sha256":"f2241c557ec7c528c4dbf61d03f621e5dba72808d2c18ea7c2256a0d01c18e46"},"dob":{"date":"1968-01-27T15:55:16.056Z","age":51},"registered":{"date":"2002-05-12T00:27:10.798Z","age":17},"phone":"0510-3961917","cell":"0177-9298990","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/44.jpg","medium":"https://randomuser.me/api/portraits/med/men/44.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/44.jpg"},"nat":"DE"}],"info":{"seed":"1a002e1f7af21f7b","results":1,"page":1,"version":"1.3"}}
// //Random User Api : https://randomuser.me/api/
// //quote Api : https://api.kanye.rest/
// //lorem Impsum : https://baconipsum.com/api/?type=nana
// console.log(user)
// console.log(user.results[0].name)
const apiCall = new APIManager()
const render = new Renderer()


$("#load").click(function () {
    apiCall.loadData()
})

$("#display").click(function () {
    render.render(apiCall.data)
})
