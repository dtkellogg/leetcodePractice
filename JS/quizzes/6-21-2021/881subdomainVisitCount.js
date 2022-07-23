cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]

var subdomainVisits = function(cpdomains) {
    let countMap = new Map()
    let res = []
    
    for(const cpdomain of cpdomains) {
        const [count, domain] = cpdomain.split(" ")
        
        let domains = domain.split(".")
        
        while(domains.length > 0) {
            const subdomain = domains.join(".")
            
            countMap.set(subdomain, countMap.has(subdomain)
                ? Number(countMap.get(subdomain)) + Number(count)
                : count
            )
            
            domains.shift()
        }
    }
    for(const [k,v] of countMap) {
        res.push(`${v} ${k}`)
    }
    return res
};

console.log(subdomainVisits(cpdomains))