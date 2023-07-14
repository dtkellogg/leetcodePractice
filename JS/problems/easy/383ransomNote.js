ransomNote = "a", magazine = "b"
ransomNote = "aa", magazine = "aab"

var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  const oldMagazineLength = magazine.length;
  ransomNote.split('').forEach(item => {
    magazine = magazine.replace(item, '');
  });

  console.log(`ransomNote.length: ${ransomNote.length}, oldMagazineLength: ${oldMagazineLength}, magazine.length: ${magazine.length}`)
  return oldMagazineLength === magazine.length + ransomNote.length;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE



console.log(canConstruct(ransomNote, magazine))