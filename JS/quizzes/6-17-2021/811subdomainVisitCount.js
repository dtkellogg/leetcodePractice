// cpdomains = ["9001 discuss.leetcode.com"]
cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]


// var subdomainVisits = function(cpdomains) {
//     const map = new Map()
//     let output = []
    
//     for(let i=0; i<cpdomains.length; i++) {
//         const [count, cpdomain] = cpdomains[i].split(" ")
        
//         let subdomains = cpdomain.split(".")
        
//         while(subdomains.length > 0) {
//             let subdomain = subdomains.join(".")
//             if(map.has(subdomain)) {
//                 map.set(subdomain, Number(map.get(subdomain)) + Number(count))
//             } else {
//                 map.set(subdomain, count)
//             }
            
//             subdomains.shift()
//         }
//     }

//     console.log(map)
    
//     for(let [domain, num] of map) {
//         output.push(`${num} ${domain}`)
//     }

//     return output
// };

var subdomainVisits = function(cpdomains) {
    const output = new Map()
    
    for(let cpDomain of cpdomains) {
        const [count, domains] = cpDomain.split(" ")
        
        let domain = domains.split(".")
        
        while(domain.length > 0) {
            let subdomain = domain.join(".")
            // console.log(`domain: ${domain}`)
            if(output.has(subdomain)) {
                output.set(subdomain, Number(output.get(subdomain)) + Number(count))
            } else {
                output.set(subdomain, count)
            }
            domain.shift()
        }
    }
    
    for(let [value, key] of output) { // this returns the first pair and exits fn
        return `${value} ${key}` 
    }
};

console.log(subdomainVisits(cpdomains))