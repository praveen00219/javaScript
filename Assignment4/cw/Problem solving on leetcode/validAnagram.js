var isAnagram = function (s, t) {
  let sorted_s = s.split("").sort().join();
  let sorted_t = t.split("").sort().join();

  return sorted_s === sorted_t;
};
let res = isAnagram("anagram", "nagaram");
console.log(res);
