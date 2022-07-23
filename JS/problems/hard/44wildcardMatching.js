s = "aa", p = "a"  // Output: false

var isMatchRecursion = function(s, p) {
    let dp = {};

    var recur = function(s, p) {
        if (!dp[s]) dp[s] = {};
        if (dp[s][p]!=null) return dp[s][p];

        if ( s == p || (p.includes('*') && !p.replace(/\*/g, ''))) {
            dp[s][p] = true;
        } else if (s.length == 0 || p.length == 0) {
            dp[s][p] = false;
        } else if (p[0] == '?' || p[0] == s[0]) {
            dp[s][p] = recur(s.slice(1), p.slice(1));
        } else if (p[0] == '*') {
            dp[s][p] = recur(s.slice(1), p) || recur(s, p.slice(1));
        } else {
            dp[s][p] = false;
        }

        return dp[s][p];
    }

    return recur(s, p);
};

console.log(isMatchRecursion(s,p))