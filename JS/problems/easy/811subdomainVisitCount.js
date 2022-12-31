cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]

var subdomainVisits = function(cpdomains) {
    let visitCounts = {};
    for (let i = 0; i < cpdomains.length; i++) {
        // Split visits and domains by the space
        const [visits, domains] = cpdomains[i].split(" ");
        
        // Create array of subdomains in domain
        let subdomains = domains.split(".");
        
        while(subdomains.length) {
            // Join all items in subdomains array
            let subdomain = subdomains.join('.');
            
            // If subdomain already exists in object, add to existing count
            visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
                Number(visitCounts[subdomain]) + Number(visits) :
                visits;
            
            // Remove first subdomain from array
            subdomains.shift();
        }
    }

    console.log(visitCounts)

    // return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`); // this also works
    return Object.entries(visitCounts).map(([key, value]) => `${value} ${key}`);
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(subdomainVisits(cpdomains))