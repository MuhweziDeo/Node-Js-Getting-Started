const url=require('url')
const myurl=new URL('http://mywebiste.com/hello.html?id=100&status=active')

// serialized name
console.log(myurl.href)

// get domain or host
console.log(myurl.hostname)
console.log(myurl.host)

// pathname
console.log(myurl.pathname)

// console.log(myurl.origin)
// search params
console.log(myurl.search)
console.log(myurl.searchParams)
console.log(myurl.searchParams.append('abc','123'))
console.log(myurl.searchParams)